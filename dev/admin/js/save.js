// get the data entered in the form
function gatherData() {
    var section = $('body').attr('id');
    switch(section) {
        case 'works':
            var workImg = document.getElementById('workImage');
            if( workImg.files[0] ) {
                var today = new Date();
                var timeId = today.getTime();
                var file = workImg.files[0];
                var fd = new FormData();
                fd.append('workImage', file);
                fd.append('id', timeId);
                uploadWorkImg(today, timeId, fd, file);
            }
            break;
        case 'studio':
            var studioImg = document.getElementById('studioImage');
            if( studioImg.files[0] ) {
                var today = new Date();
                var timeId = today.getTime();
                var file = studioImg.files[0];
                var fd = new FormData();
                fd.append('studioImage', file);
                fd.append('id', timeId);
                uploadStudioImg(today, timeId, fd, file);
            }
            break;
        case 'news':
            // get today's date
            var today = new Date();
            // create an id
            var id = today.getTime();
            // grab the news content
            var newsContent = document.getElementById('newsContent').value;
            // get the error div
            var newsErr = $('.msg.error');
            // check to see if the
            if(newsContent === '') {
                // display the error
                $(newsErr).text('please add some news...');
            } else {
                // clear the error when new is entrered
                $(newsErr).text('');
                // build out the news
                var newNews = new News(id, newsContent, today);
                // stringify the news
                var stringNews = JSON.stringify(newNews);
                // do something with the news
                saveStuff('news', stringNews);
            }
            break;
    }
}


function uploadWorkImg(today, timeId, fd, file) {
    var stringWork = addWork(today, timeId, file);
    var section = getCheckedSection();
    console.log( section );
    var fileName = file.name;
    var fileArr = fileName.split('.');
    var imgIndex = fileArr.length - 1;
    var imgSuff = fileArr[imgIndex];
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'functions/uploadwork.php', true);

    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            var uploadProcess = document.getElementById('uploadProcess');
            uploadProcess.setAttribute('style', 'width: ' + percentComplete + '%;');
            if(percentComplete === 100) {
                // do something… or do nothing!
                console.log( 'SUCCESS!!' );
            }
        }
    };

    xhr.onload = function() {
        if (this.status == 200) {
            saveStuff(section, stringWork);
        };
    };
    xhr.send(fd);
}

function getCheckedSection() {
    for(var i =0; i < workArr.length; i++) {
        var section = document.getElementById(workArr[i] + 'Add');
        if( $(section).prop('checked') ) {
            var section = workArr[i];
            return section;
        }
    }
}

function addWork(today, id, file) {
    var fileName = file.name;
    var fileArr = fileName.split('.');
    var imgIndex = fileArr.length - 1;
    var imgSuff = fileArr[imgIndex];

    var images = 1;
    var title = document.getElementById('newTitle').value;
    var year = document.getElementById('newYear').value;
    var media = document.getElementById('newMedia').value;
    var description = document.getElementById('newDescription').value;
    var dimension_d = document.getElementById('newDimension_d').value;
    var dimension_w = document.getElementById('newDimension_w').value;
    var dimension_h = document.getElementById('newDimension_h').value;
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');

    if( $(yes).prop('checked', true) ) {
        var available = true;
    } else if( $(no).prop('checked', true) ) {
        var available = false;
    }

    var today = new Date();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var y = today.getFullYear();
    var date = m + '-' + d + '-' + y;

    // grab the news content
    var workImage = document.getElementById('workImage').value;
    // get the error div
    var workErr = $('.msg.error');
    // check to see if the
    if(workImage === '') {
        // display the error
        $(workErr).text('please add a work image...');
    } else {
        // clear the error when new is entrered
        $(workErr).text('');
        // build out the news
        var newWork = new Work(id, title, year, media, description, dimension_d, dimension_w, dimension_h, available, images, date);
        // stringify the news
    	var stringWork = JSON.stringify(newWork);
        // do something with the news
        return stringWork;
    }
}


// START SAVING STUFF
function saveStuff(section, data) {
    var msg = document.getElementById('messaging');
    $.ajax({
        type: 'GET',
        url: 'functions/saveit.php?section=' + section + '&data=' + encodeURIComponent(data),
        dataType: 'JSON',
        success: function(ret){
            msg.classList.add('success');
            msg.innerHTML = 'Your ' + section + ' has been added!';
            msg.innerHTML = ret;
        }
    });
    reloadData(section);
}


function uploadStudioImg(today, timeId, fd, file) {
    var stringStudio = addStudio(today, timeId, fd, file);
    var fileName = file.name;
    var fileArr = fileName.split('.');
    var imgIndex = fileArr.length - 1;
    var imgSuff = fileArr[imgIndex];
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'functions/upload.php', true);

    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            var uploadProcess = document.getElementById('uploadProcess');
            uploadProcess.setAttribute('style', 'width: ' + percentComplete + '%;');
            if(percentComplete === 100) {
                // do something… or do nothing!
                console.log( 'SUCCESS!!' );
            }
        }
    };

    xhr.onload = function() {
        if (this.status == 200) {
            saveStuff('studio', stringStudio);
        };
    };
    xhr.send(fd);
}

function addStudio(today, id, fd, file) {
    var fileName = file.name;
    var fileArr = fileName.split('.');
    var imgIndex = fileArr.length - 1;
    var imgSuff = fileArr[imgIndex];
    // grab the news content
    var studioImage = document.getElementById('studioImage').value;
    // get the error div
    var studioErr = $('.msg.error');
    // check to see if the
    if(studioImage === '') {
        // display the error
        $(studioErr).text('please add a studio shot...');
    } else {
        // clear the error when new is entrered
        $(studioErr).text('');
        // build out the news
        var newStudio = new Studio(id, '../img/studio/' + id + '_l.' + imgSuff, today);
        // stringify the news
        var stringStudio = JSON.stringify(newStudio);
        // do something with the news
        return stringStudio;
    }
}

// get the new information entered in old work
function gatherNewOldWork( id ) {
    var title = document.getElementById('title-' + id).value;
    var year = document.getElementById('year-' + id).value;
    var media = document.getElementById('media-' + id).value;
    var description = document.getElementById('description-' + id).value;
    var dimension_d = document.getElementById('dimension_d-' + id).value;
    var dimension_w = document.getElementById('dimension_w-' + id).value;
    var dimension_h = document.getElementById('dimension_h-' + id).value;
    if( document.querySelector('#yes-' + id + ':checked') ) {
        var available = true;
    } else if( document.querySelector('#no-' + id + ':checked') )  {
        var available = false;
    }
    // image stuff
    var par = document.forms['form-' + id];
    var images = $(par).children('.related').children('.list-item').length;
    // date
    var today = new Date();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var y = today.getFullYear();
    var date = m + '-' + d + '-' + y;
    // build out the object
    var newData = new Work(id, title, year, media, description, dimension_d, dimension_w, dimension_h, available, images, date);
    // return the new old data
    return newData;
}

function updateOldWork(x) {
    var saveOld = $(x).attr('id');
    var saveOldId = '#' + $(x).attr('id');
    var idArr = saveOldId.split('-');
    var id = parseInt(idArr[1]);

    var saveOldArr = saveOld.split('-');
    var tst = document.getElementById(saveOldArr[1]);

    var newOldWork = gatherNewOldWork(id);

    for(var i =0; i < tst.classList.length; i++) {
        var aClass = tst.classList[i];
        var section = aClass.split('-');
        if( section[0] === 'js' ) {
            var section = section[1];
            var data = JSON.parse( localStorage.getItem( section ) );
            for(var j = 0; j < data[section].length; j++) {
                if( data[section][j].id === id ) {
                    // do future stuff like send off to be saved…
                    saveSingleIndex(section, j , newOldWork);
                }
            }
        }
    }
}

function saveSingleIndex(section, index, data) {
    var data = JSON.stringify(data);
    $.ajax({
        type: 'GET',
        url: 'functions/saveIndex.php?section=' + section + '&index=' + index + '&data=' + encodeURIComponent(data),
        dataType: 'JSON',
        success: function(ret){
            msg.classList.add('success');
            msg.innerHTML = 'Your ' + section + ' has been deleted!';
            msg.innerHTML = ret;
        }
    });
    setTimeout(function(){
        console.log( 'it is done' );
        // reloadData(section);
        // resetFilter();
    },300);
}
