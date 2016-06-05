// get the data entered in the form
function gatherData() {
    var page = $('body').attr('id');
    var section = sessionStorage.getItem( 'section' );
    switch(page) {
        case 'works':
            var workImg = document.getElementById('workImage');
            if( workImg.files[0] ) {
                var today = new Date();
                var timeId = today.getTime();
                var file = workImg.files[0];
                var fd = new FormData();
                fd.append('workImage', file);
                fd.append('id', timeId);
                fd.append('num', 0);
                uploadWorkImg(section, today, timeId, fd, file);
            }
            break;
        case 'studio':
            var studioImg = document.getElementById('studioImage');
            if( studioImg.files[0] ) {
                var today = getDate();
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
            var today = getDate();
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



// START SAVING STUFF
function saveStuff(section, data) {
    var msgDiv = document.createElement('div');
    msgDiv.setAttribute('class', 'msg');
    msgDiv.setAttribute('id', 'msg');
    $('.module-save').append(msgDiv);
    var msg = document.getElementById('msg');
    $.ajax({
        type: 'GET',
        url: 'functions/saveit.php?section=' + section + '&data=' + encodeURIComponent(data),
        dataType: 'JSON',
        success: function(ret){
            msg.classList.add('success');
            msg.innerHTML = 'Your ' + section + ' has been added!';
        },
        error: function(ret){
            msg.classList.add('error');
            msg.innerHTML = 'Your ' + section + ' has not been added!';
        },
        complete: function() {
            setTimeout(function(){
                reloadData(section);
                msg.remove();
            },2000);
        }
    });
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
    // grab the studio image
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
        // build out the studio
        var newStudio = new Studio(id, '../img/studio/' + id + '_l.' + imgSuff, today);
        // stringify the studio data
        var stringStudio = JSON.stringify(newStudio);
        // do something with the studio
        return stringStudio;
    }
}

// --------------------
// NEW FUNCTIONS BELOW
// --------------------
// lets get the current date and format it
function getDate() {
    // PARAMS: 0
    // - RETURN: string, current date
    // --------------------
    var today = new Date();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var y = today.getFullYear();
    var date = m + '-' + d + '-' + y;
    // return the date
    return date;
}
// get the elements id
function getId( elem ) {
    // PARAMS: 1
    // - ELEM: this, the element clicked on
    // - RETURN: number,  id of item clicked
    // --------------------
    var id = $( elem ).parents('.module-section').attr('id');
    // return the id
    return id;
}
// get the data from the form
function getFormData( elem ) {
    // PARAMS: 1
    // - ELEM: this, the element clicked on
    // - RETURN: array, [ new Work object, file data ]
    // --------------------
    var id = parseInt( $( elem ).parents('.module-section').attr('id') );
    var form = $( elem ).parent().siblings('form');
    // get the stuff from the form
    var title = $('#form-' + id).find('.js-title').val();
    var year = $('#form-' + id).find('.js-year').val();
    var media = $('#form-' + id).find('.js-media').val();
    var description = $('#form-' + id).find('.js-description').val();
    var depth = $('#form-' + id).find('.js-depth').val();
    var width = $('#form-' + id).find('.js-width').val();
    var height = $('#form-' + id).find('.js-height').val();
    // check if available or not
    if( $('#form-' + id).find('.js-yes:checked').val() ) {
        var available = true;
    } else if( $('#form-' + id).find('.js-no:checked').val() )  {
        var available = false;
    }
    // do image stuff
    var newImgInput = $('#form-' + id).find('.add').children('.input'); // get the new image input
    var images = $('#form-' + id).find('.js-img').length; // minus 1 for the add button
    if( (images === 0) && (newImgInput[0].files[0]) ) {
        var images = 0;
    } else if( (images === 0) && (newImgInput[0].files[0]) ) {
        var images = 1;
    }

    if( newImgInput[0].files[0] ) {
        var newImg = 1; // if we are uploading a new image
    } else {
        var newImg = 0; // if we aren't uploading a new image
    }
    var images = images + newImg; // add the old and new together
    // get the date
    var date = getDate();
    // add it all to the array
    var newData = new Work(id, title, year, media, description, depth, width, height, available, images, date);
    // return all of it
    return [newData, newImgInput[0].files[0]];
}
// get the section of the element
function getSection( elem ) {
    // PARAMS: 1
    // - ELEM: this, the element clicked on
    // - RETURN: string, section of element clicked
    // --------------------
    var clses = $( elem ).parents('.module-section').attr('class');
    var clsesArr = clses.split(' ');
    for(var i = 0; i < clsesArr.length; i++) {
        var cls = clsesArr[i].split('-');
        if( cls[0] === 'js' ) {
            // return the section
            return section = cls[1];
        }
    }
}
// upload the image
function uploadImage( id, img, file ) {
    // PARAMS: 3
    // - ID: number, the id of the item editing
    // - IMG: number, the number of images alrwady saved for item
    // - FILE: file data from getFormData()
    // - RETURN: boolean, true
    // --------------------
    var fd = new FormData();
    fd.append('workImage', file);
    fd.append('id', id);
    fd.append('num', img - 1 );

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'functions/upload.php', true);
    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            var uploadProcess = document.getElementById('process-' + id);
            uploadProcess.setAttribute('style', 'width: ' + percentComplete + '%;');
            if(percentComplete === 100) {
                console.log( 'image upload is in progress…' );
            }
        }
    };

    xhr.onload = function() {
        if (this.status == 200) {
            var ret = JSON.parse(this.response);
            console.log( ret.msg );
        } else {
            console.log( ret.msg );
        };
    };
    xhr.send(fd);
    return true;
}
// function getIndex( section, localData, id );
function getIndex( section, data, id ) {
    // PARAMS: 3
    // - SECTION: the current section
    // - DATA: localStorage data of section
    // - ID: number, the id of the item editing
    // - RETURN: number,  index of item clicked
    // --------------------
    for(var i = 0; i < data[section].length; i++) {
        var dataId = data[section][i].id;
        if( dataId === id ) {
            var index = i;
            return index;
        }
    }
    if( dataId !== id ) {
        var index = data[section].length;
        return index;
    }
}

function createMsg( id ) {
    // PARAMS: 1
    // - ID: id of piece being saved
    // - RETURN: the msg element
    // --------------------
    var msgDiv = document.createElement('div');
    msgDiv.setAttribute('class', 'msg');
    msgDiv.setAttribute('id', 'msg-' + id);
    $('#' + id + ' .module-save').append(msgDiv);
    var msg = document.getElementById('msg-' + id);
    return msg;
}

function saveData( id, data, section, index ) {
    // PARAMS: 4
    // - ID: id of piece being saved
    // - DATA: data to save
    // - SECTION: section to save stuff to
    // - INDEX: where to save it to
    // - RETURN: ???
    // --------------------
    var msg = createMsg( id ); // generate the messaging element

    var data = encodeURIComponent( JSON.stringify( data ) ); // encode the data
    $.ajax({
        type: 'GET',
        url: 'functions/saveIndex.php?data=' + data + '&section=' + section + '&index=' + index,
        dataType: 'JSON',
        success: function(ret){
            msg.classList.add('success');
            msg.innerHTML = 'Your ' + ret.section + ' has been ' + ret.action + '!';
        },
        error: function(ret){
            msg.classList.add('error');
            msg.innerHTML = 'Your ' + ret.section + ' has not been ' + ret.action + '!';
        },
        complete: function(ret) {
            setTimeout(function(){
                reloadData(section);
                msg.remove();
            },2000);
        }
    });
}

function setId( elem ) {
    // PARAMS: 1
    // - ELEM: this, the element clicked on
    // - RETURN: number, id
    // --------------------
    var today = new Date();
    // create an id form the date
    var id = today.getTime();
    var par = $(elem).parents('.module-section');
    var form = $(elem).parents('.module-section').children('form');
    var images = $(elem).parents('.module-section').find('.status-bar');
    images[0].setAttribute('id', 'process-' + id);
    par[0].setAttribute('id', id);
    form[0].setAttribute('id', 'form-' + id);

    return id;
}

function getChosenSection( elem ) {
    // PARAMS: 0
    // - RETURN: string, the section chosen
    // --------------------
    // var section = document.getElementById('addWorkCategory');
    var setSection = $('#addWorkCategory');
    var childs = $(setSection[0]).children()
    for(var i = 0; i < childs.length; i++) {
        if( $(childs[i]).children('[id$=Add]:checked').val() === 'on' ) {
            var label = $(childs[i]).children('label');
            for(var j = 0; j < label.length; j++) {
                if( label[j].innerHTML !== undefined ) {
                    return label[j].innerHTML;
                }
            }
        }
    }
}
