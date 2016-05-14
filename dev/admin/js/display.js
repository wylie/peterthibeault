// DISPLAY THE WORKS
var workArr = ['design', 'drawing', 'furnishings', 'painting', 'sculpture', 'students'];
function displayWorks() {
    // console.log( 'displayWorks' );
    for(var i = 0; i < workArr.length; i++) {
        var key = workArr[i];
        var data = JSON.parse( localStorage.getItem( key ) );
        // get the length of each section
        dbNum( data[key].length );
        for( var j = 0; j < data[key].length; j++ ) {
            var oldWorks = document.getElementById('oldWorks');

            // create the main div
            var div = document.createElement('div');
            div.setAttribute('class', 'module-section work works js-' + key);
            div.setAttribute('id', data[key][j].id);
            // create the image
            var img = document.createElement('img');
            img.setAttribute('class', 'studio-img');
            // build the image
            var imgPath = '../img/works/';
            var imgNum = data[key][j].id;
            var imgSize = '_l-';
            var imgSuff = '.jpg';
            img.setAttribute('src', imgPath + imgNum + imgSize + 0 + imgSuff);
            // create the date span
            var span = document.createElement('span');
            span.setAttribute('class', 'date');
            span.innerHTML = data[key][j].date;

            var form = document.createElement('form');
            form.setAttribute('id', 'form-' + data[key][j].id)

            // create the title heading
            var heading1 = document.createElement('h3');
            heading1.setAttribute('class', 'heading');
            heading1.innerHTML = 'Title';
            // create the title heading
            var input1 = document.createElement('input');
            input1.setAttribute('class', 'form-input');
            input1.setAttribute('type', 'text');
            input1.setAttribute('value', data[key][j].title);
            // create the year heading
            var heading2 = document.createElement('h3');
            heading2.setAttribute('class', 'heading');
            heading2.innerHTML = 'Year';
            // create the year heading
            var input2 = document.createElement('input');
            input2.setAttribute('class', 'form-input');
            input2.setAttribute('type', 'text');
            input2.setAttribute('value', data[key][j].year);
            // create the media heading
            var heading3 = document.createElement('h3');
            heading3.setAttribute('class', 'heading');
            heading3.innerHTML = 'Media';
            // create the media heading
            var input3 = document.createElement('input');
            input3.setAttribute('class', 'form-input');
            input3.setAttribute('type', 'text');
            input3.setAttribute('value', data[key][j].media);
            // create the description heading
            var heading4 = document.createElement('h3');
            heading4.setAttribute('class', 'heading');
            heading4.innerHTML = 'Description';
            // create the description heading
            var input4 = document.createElement('textarea');
            input4.setAttribute('class', 'form-input');
            input4.setAttribute('type', 'text');
            input4.innerHTML = data[key][j].description;
            // create the dimensions heading
            var heading4 = document.createElement('h3');
            heading4.setAttribute('class', 'heading');
            heading4.innerHTML = 'Dimensions';
            // create the dimensions heading
            var input4 = document.createElement('input');
            input4.setAttribute('class', 'form-input dimension');
            input4.setAttribute('type', 'text');
            input4.setAttribute('value', data[key][j].dimension_d);
            // create the dimensions heading
            var input5 = document.createElement('input');
            input5.setAttribute('class', 'form-input dimension');
            input5.setAttribute('type', 'text');
            input5.setAttribute('value', data[key][j].dimension_w);
            // create the dimensions heading
            var input6 = document.createElement('input');
            input6.setAttribute('class', 'form-input dimension');
            input6.setAttribute('type', 'text');
            input6.setAttribute('value', data[key][j].dimension_h);
            // create the available heading
            var heading5 = document.createElement('h3');
            heading5.setAttribute('class', 'heading');
            heading5.innerHTML = 'Available';
            // create the available heading
            var ulAvailable = document.createElement('ul');
            // NO
            var inputAvailable1 = document.createElement('input');
            inputAvailable1.setAttribute('class', 'available input');
            inputAvailable1.setAttribute('type', 'radio');
            inputAvailable1.setAttribute('name', 'available-' + data[key][j].id);
            inputAvailable1.setAttribute('id', 'no-' + data[key][j].id);
            var labelAvailable1 = document.createElement('label');
            labelAvailable1.setAttribute('class', 'available label');
            labelAvailable1.setAttribute('for', 'no-' + data[key][j].id);
            labelAvailable1.innerHTML = 'No';
            // YES
            var inputAvailable2 = document.createElement('input');
            inputAvailable2.setAttribute('class', 'available input');
            inputAvailable2.setAttribute('type', 'radio');
            inputAvailable2.setAttribute('name', 'available-' + data[key][j].id);
            inputAvailable2.setAttribute('id', 'yes-' + data[key][j].id);
            var labelAvailable2 = document.createElement('label');
            labelAvailable2.setAttribute('class', 'available label');
            labelAvailable2.setAttribute('for', 'yes-' + data[key][j].id);
            labelAvailable2.innerHTML = 'Yes';

            if( data[key][j].available === false ) {
                inputAvailable1.setAttribute('checked', 'checked');
            }
            if( data[key][j].available === true ) {
                inputAvailable2.setAttribute('checked', 'checked');
            }

            // create the related images heading
            var heading6 = document.createElement('h3');
            heading6.setAttribute('class', 'heading');
            heading6.innerHTML = 'All Images';
            // create the related images heading
            var ulRelated = document.createElement('ul');
            ulRelated.setAttribute('class', 'list inline related');
            // loop through it all
            for( var m = 0; m <= data[key][j].images - 1; m++ ) {
                var liRelated = document.createElement('li');
                liRelated.setAttribute('class', 'list-item');
                // img element stuff
                var allImgs = document.createElement('img');
                allImgs.setAttribute('class', 'studio-img-thmb');
                if( m === 0 ) {
                    allImgs.setAttribute('class', 'studio-img-thmb active');
                }
                // build the image bits
                var imgPath = '../img/works/';
                var imgNum = data[key][j].id;
                var imgSize = '_m-';
                var imgSuff = '.jpg';
                var imgIndex = m;
                // build the image
                allImgs.setAttribute('src', imgPath + imgNum + imgSize + imgIndex + imgSuff);
                allImgs.setAttribute('data-imgid', imgIndex);
                // append it all
                liRelated.appendChild(allImgs);
                ulRelated.appendChild(liRelated);
            }
            // save module
            var saveDiv = document.createElement('div');
            saveDiv.setAttribute('class', 'module-save');
            // create the save button
            var cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel button');
            cancelBtn.classList.add('hide');
            cancelBtn.setAttribute('type', 'submit');
            cancelBtn.setAttribute('name', 'edit');
            cancelBtn.setAttribute('value', 'save');
            cancelBtn.innerHTML = 'Cancel';
            // create the save button
            var saveBtn = document.createElement('button');
            saveBtn.setAttribute('class', 'save button');
            saveBtn.setAttribute('disabled', 'disabled');
            saveBtn.setAttribute('type', 'submit');
            saveBtn.setAttribute('name', 'edit');
            saveBtn.setAttribute('value', 'save');
            saveBtn.innerHTML = 'Save';
            // create the delete button
            var deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'delete button');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.setAttribute('name', 'edit');
            deleteBtn.setAttribute('value', 'delete');
            deleteBtn.innerHTML = 'Delete';
            // append everything

            form.appendChild(img);
            form.appendChild(heading1);
            form.appendChild(input1);
            form.appendChild(heading2);
            form.appendChild(input2);
            form.appendChild(heading3);
            form.appendChild(input3);
            form.appendChild(heading4);
            form.appendChild(input4);
            form.appendChild(heading4);
            form.appendChild(input4);
            form.appendChild(input5);
            form.appendChild(input6);
            form.appendChild(heading5);
            form.appendChild(ulAvailable);
            form.appendChild(inputAvailable1);
            form.appendChild(labelAvailable1);
            form.appendChild(inputAvailable2);
            form.appendChild(labelAvailable2);
            form.appendChild(heading6);
            form.appendChild(ulRelated);

            div.appendChild(form);

            // insert bigtime
            div.insertBefore(span, div.firstChild);
            saveDiv.appendChild(cancelBtn);
            saveDiv.appendChild(saveBtn);
            saveDiv.appendChild(deleteBtn);
            div.appendChild(saveDiv);
            oldWorks.appendChild(div);
        }
    }
    // TODO: lets move this to init()?
    // lets swap the main image with related ones
    $('#oldWorks').on('click', '.studio-img-thmb', function() {
        swapWorks();
    });
}


function swapWorks() {
    console.log( 'swapWorks' );
    $('.studio-img-thmb').click(function() {
        $(this).parent('.list-item').siblings().children('.studio-img-thmb').removeClass('active');
        $(this).addClass('active');
        // get this and it's parent
        var imgId = $(this).attr('data-imgid');
        var parent = $(this).closest('.module-section');
        var id = $(parent).attr('id');
        var mainImg = $(parent).children('.studio-img');
        // parts of the image
        var imgPath = '../img/works/';
        var imgNum = id;
        var imgSize = '_l-';
        var imgSuff = '.jpg';
        var imgIndex = imgId;
        // build the image
        $(mainImg).attr('src', imgPath + imgNum + imgSize + imgIndex + imgSuff );
    });
}


// DISPLAY THE STUDIO
function displayStudio() {
    console.log( 'displayStudio' );
    var data = JSON.parse( localStorage.getItem('studio') );
    for (var key in data) {
        var data = data[key].reverse();
        // get the length of each section
        dbNum( data.length );
        for(var i = 0; i < data.length; i++) {
            // old studio stuff
            var oldStudio = document.getElementById('oldStudio');
            var div = document.createElement('div');
            div.setAttribute('class', 'module-section work studio');
            // console.log( data );
            div.setAttribute('id', data[i].id);
            div.setAttribute('data-id', (data.length - 1) - i);
            // img stuff
            var img = document.createElement('img');
            img.setAttribute('class', 'studio-img');
            img.setAttribute('src', data[i].image);
            // date stuff
            var studioDate = showDate(data[i]);
            var span = document.createElement('span');
            span.setAttribute('class', 'date');
            span.innerHTML = studioDate;
            // button stuff
            var button = document.createElement('button');
            button.setAttribute('class', 'delete button');
            button.setAttribute('type', 'submit');
            button.setAttribute('name', 'edit');
            button.setAttribute('value', 'delete');
            button.innerHTML = 'Delete';
            // append it all
            div.appendChild(img);
            div.insertBefore(span, div.firstChild);
            div.appendChild(button);
            oldStudio.appendChild(div);
        }
    }
}


// DISPLAY THE NEWS
function displayNews() {
    console.log( 'displayNews' );
    var newsData = JSON.parse( localStorage.getItem('news') );
    for (var key in newsData) {
        var news = newsData[key].reverse();
        // get the length of each section
        // console.log( news.length );
        dbNum( news.length );
        for(var i = 0; i < news.length; i++) {
            // old news stuff
            var oldNews = document.getElementById('oldNews');
            var div = document.createElement('div');
            div.setAttribute('class', 'modules-section news-item');
            div.setAttribute('id', news[i].id);
            div.setAttribute('data-id', (news.length - 1) - i);
            div.innerHTML = news[i].description;
            // date stuff
            var newsDate = showDate(news[i]);
            var span = document.createElement('span');
            span.setAttribute('class', 'news-item-date');
            span.innerHTML = newsDate;
            // button stuff
            var button = document.createElement('button');
            button.setAttribute('class', 'delete button');
            button.setAttribute('type', 'submit');
            button.setAttribute('name', 'edit');
            button.setAttribute('value', 'delete');
            button.innerHTML = 'Delete';
            // append it all
            div.appendChild(button);
            div.insertBefore(span, div.firstChild);
            oldNews.appendChild(div);
        }
    }
}


function showDate(data) {
    // console.log( 'showDate: ' + data );
    var date = new Date(data.date);
    var day = date.getDate().toString();
    var monthNum = date.getMonth();
    var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var month = monthNames[monthNum];
    var year = (date.getFullYear()).toString();
    var year = year.slice(-2);
    var studioDate = day + month + year;
    return studioDate;
}


function getWorkSection() {
    console.log( 'getWorkSection' );
    // get the category filters
    var addWorkCategory = $('#addWorkCategory');
    // get the children of the list
    var addWorkItems = addWorkCategory[0].children;
    // loop through all the items in the filter list
    for(var i = 0; i < addWorkItems.length; i++) {
        // make sure that the radio button is checked
        if( addWorkItems[i].children[0].checked === true ) {
            // return the section
            return newSection = addWorkItems[i].children[0].id;
        }
    }
}


function filterWorks( x ) {
    // get the attribute of each label
    var section = $(x).attr('for');
    console.log( section );
    // remove any hiding going on
    $('#oldWorks').children('.works').show();
    // add hiding to the siblings of the type clicked on
    $('#oldWorks').children('.js-' + section).siblings('.works:not(' + '.js-' + section + ')').hide();
}


function resetFilter() {
    var filterWorks = $('#filterWorks');
    for(var i = 0; i < filterWorks[0].children.length; i++) {
        var li = filterWorks[0].children[i].className;
        $( '#filterWorks .' + li ).children('input').prop('checked', false);
        $( '#filterWorks:last-child .' + li ).children('input').prop('checked', true);
    }
}


var countArr = ['design', 'drawing', 'furnishings', 'painting', 'sculpture', 'students'];
function displayFilterCount() {
    var filterWorks = document.getElementById('filterWorks');
    for(var i = 0; i < countArr.length; i++) {
        var key = countArr[i];
        var data = JSON.parse( localStorage.getItem( key ) );
        var itm = $('[for="' + key + '"]');
        itm[0].innerHTML = key + ' <span class="num">(' + data[key].length + ')</span>';
    }
}


// GET NUMBER OF ITEMS IN DB
newNum = 0;
function dbNum(num) {
    var dbNum = document.getElementById('dbNum');
    newNum += num;
    dbNum.innerHTML = newNum;
}
