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


// CLEAR THE DATA ON THE PAGE
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
            msg.innerHTML = ret;
        }
    });
    setTimeout(function(){
        reloadData(section);
    },300);
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
    // $(x).parent('.module-section').siblings().children('.studio-img-thmb').removeClass('active');
    $(x).parent('.module-section').addClass('active');
    // var xPar = $(x).parents('.module-section');
    // console.log( xPar );
}
