// we need this for one thing…
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// delete the old studio & news
function deleteOld() {
    console.log( 'deleteOld' );
    $('.delete').click(function() {
        // give this a var
        var deleteBtn = $(this);
        var dataId = $(this.parentElement).data('id');
        console.log(dataId);
        var section = $('body').attr('id');
        deleteData(section, dataId);
    });
}


// CLEAR THE DATA FOR THE PAGE
function clear() {
    console.log( 'clear' );
    var section = $('body').attr('id');
    switch(section) {
        case 'studio':
            var saveStudio = document.getElementById('saveStudio');
            saveStudio.setAttribute('disabled', 'disabled');

            var uploadProcess = document.getElementById('uploadProcess');
            uploadProcess.setAttribute('style', 'width: 0%;');

            var studioErr = $('.msg.error');
            $(studioErr).text('');
            document.getElementById('studioImage').value = '';
            break;
        case 'news':
            var saveNews = document.getElementById('saveNews');
            saveNews.setAttribute('disabled', 'disabled');

            var newsErr = $('.msg.error');
            $(newsErr).text('');
            document.getElementById('newsContent').value = '';
            break;
        case 'works':
            var saveWork = document.getElementById('saveWork');
            saveWork.setAttribute('disabled', 'disabled');

            var uploadProcess = document.getElementById('uploadProcess');
            uploadProcess.setAttribute('style', 'width: 0%;');

            var workErr = $('.msg.error');
            $(workErr).text('');
            document.getElementById('workImage').value = '';
            document.getElementById('newTitle').value = '';
            document.getElementById('newYear').value = '';
            document.getElementById('newMedia').value = '';
            document.getElementById('newDescription').value = '';
            document.getElementById('newDimension_d').value = '';
            document.getElementById('newDimension_w').value = '';
            document.getElementById('newDimension_h').value = '';
            break;
    }
}


// DELETE STUFF
function deleteStuff(section, index) {
    console.log( 'deleteStuff: ' + section + ', ' + index );
    var msg = document.getElementById('messaging');
    $.ajax({
        type: 'GET',
        url: 'functions/delete.php?section=' + section + '&index=' + encodeURIComponent(index),
        dataType: 'JSON',
        success: function(ret){
            msg.classList.add('success');
            msg.innerHTML = 'Your ' + section + ' has been deleted!';
            // msg.innerHTML = ret;
        },
        complete: function() {
            setTimeout(function(){
                reloadData(section);
                msg.remove();
            },2000);
        }
    });
}


function getThis(section, btn) {
    console.log( 'getThis: ' + section + ', ' + btn );
    var deleteBtn = $(btn);
    var deleteParent = deleteBtn[0].parentNode;
    var dataIndex = $(deleteParent).attr('data-id');
    deleteStuff(section, dataIndex);
    deleteParent.remove();
}

function deleteSingleWork( x ) {
    // get the parent module
    var par = $(x).parents('.module-section');
    // get the classes
    var parClasses = $(par).attr('class');
    // get the id
    var parId = $(par).attr('id');
    if( isNaN(parId) ) {
        var parId = parId.split('-');
    }
    if( parId[0] === 'single' ) {
        // create an array with the classes
        var parClasses = parClasses.split(' ');
        // loop through the class array
        for(var i = 0; i < parClasses.length; i++) {
            // now split each class to find the one that contains js-
            var parClass = parClasses[i].split('-');
            // if the first part of the class equals js…
            if( parClass[0] === 'js' ) {
                // that's the section
                var section = parClass[1];
                // get the section from localStorage
                var sectionData = JSON.parse( localStorage.getItem( section) );
                // loop through the data
                for(var j = 0; j < sectionData[section].length; j++) {
                    // make the id a number…
                    sectionId = parseInt(sectionData[section][j].id);
                    // find out if the id matches the one in the data
                    if( parseInt( parId[1] ) === sectionId ) {
                        // if( sessionStorage.getItem( 'lastData' ) ) {
                        var lastWork = document.getElementById('lastWork');
                        lastWork.innerHTML = '';
                        sessionStorage.removeItem( 'lastData' );
                        sessionStorage.removeItem( 'lastSection' );
                        deleteSingleIndex( parseInt( parId[1] ), section, j );
                        // }
                    }
                }
            }
        }
    } else {
        // create an array with the classes
        var parClasses = parClasses.split(' ');
        // loop through the class array
        for(var i = 0; i < parClasses.length; i++) {
            // now split each class to find the one that contains js-
            var parClass = parClasses[i].split('-');
            // if the first part of the class equals js…
            if( parClass[0] === 'js' ) {
                // that's the section
                var section = parClass[1];
                // get the section from localStorage
                var sectionData = JSON.parse( localStorage.getItem( section) );
                // loop through the data
                for(var j = 0; j < sectionData[section].length; j++) {
                    // make the id a number…
                    sectionId = parseInt(sectionData[section][j].id);
                    // find out if the id matches the one in the data
                    if( parseInt(parId) === sectionId ) {
                        if( sessionStorage.getItem( 'lastData' ) ) {
                        var oldWorks = document.getElementById('oldWorks');
                        oldWorks.innerHTML = '';
                        deleteSingleIndex(sectionId, section, j);
                        }
                    }
                }
            }
        }

    }
}

// DELETE SINGLE INDEX
function deleteSingleIndex(id, section, index) {
    var msgDiv = document.createElement('div');
    msgDiv.setAttribute('class', 'msg');
    msgDiv.setAttribute('id', 'msg-' + id);
    $('#' + id + ' .module-save').append(msgDiv);
    var msg = document.getElementById('msg-' + id);

    $.ajax({
        type: 'GET',
        url: 'functions/deleteIndex.php?section=' + section + '&index=' + index,
        dataType: 'JSON',
        success: function(ret){
            console.log( ret );
            msg.classList.add('success');
            msg.innerHTML = 'Your ' + section + ' has been deleted!';
        },
        error: function(ret){
            console.log( ret );
            msg.classList.add('error');
            msg.innerHTML = 'Your ' + section + ' has not been deleted!';
        },
        complete: function(ret) {
            setTimeout(function(){
                reloadData(section);
                resetFilter();
                msg.remove();
            },2000);
        }
    });
}
