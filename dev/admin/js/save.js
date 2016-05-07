// get the data entered in the form
function gatherData() {
    console.log( 'gatherData' );
    // console.log( 'gatherData' );
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
            // console.log( section );

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
                // console.log( stringNews );
                saveStuff('news', stringNews);
            }
            break;
    }
}


function uploadWorkImg(today, timeId, fd, file) {
    console.log( 'uploadWorkImg: ' + today + ', ' + timeId + ', ' + fd + ', ' + file );
    var stringWork = addWork(today, timeId, file);
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
            }
        }
    };

    xhr.onload = function() {
        if (this.status == 200) {
            saveStuff('studio', stringWork);
        };
    };
    xhr.send(fd);
}


function addWork(today, id, file) {
    console.log( 'addWork: ' + today + ', ' + id + ', ' + file );
    // console.log(today);
    // console.log(id);
    // console.log(fd);
    // console.log(file);
    var fileName = file.name;
    var fileArr = fileName.split('.');
    var imgIndex = fileArr.length - 1;
    var imgSuff = fileArr[imgIndex];

    var title = document.getElementById('newTitle').value;
    var year = document.getElementById('newYear').value;
    var media = document.getElementById('newMedia').value;
    var description = document.getElementById('newDescription').value;
    var dimension_d = document.getElementById('newDimension_d').value;
    var dimension_w = document.getElementById('newDimension_w').value;
    var dimension_h = document.getElementById('newDimension_h').value;
    var images = 1;
    // var available = document.getElementById('available').value;
    var date = id;

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
        var newWork = new Work(id, title, year, media, description, dimension_w, dimension_h, available, images, date);
        // stringify the news
        	var stringWork = JSON.stringify(newWork);
        // do something with the news
        return stringWork;
    }
}


// START SAVING STUFF
function saveStuff(section, data) {
    console.log( 'saveStuff: ' + section + ', ' + data );
    var msg = document.getElementById('messaging');
    // var urls = 'functions/saveit.php?section=' + section + '&data=' + encodeURIComponent(data);
    // console.log( urls );
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
    console.log( 'uploadStudioImg: ' + today + ', ' + timeId + ', ' + fd + ', ' + file );
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
    console.log( 'addStudio: ' + today + ', ' + id + ', ' + fd + ', ' + file );
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
