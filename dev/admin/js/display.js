// DISPLAY THE WORKS
var workArr = ['design', 'drawing', 'furnishings', 'painting', 'sculpture', 'students'];
var workNums = [];
var workSum = [];
var workAll = [];
function displayWorks() {
    // console.log( 'displayWorks' );
    // loop through the sectionArr
    for(var i = 0; i < workArr.length; i++) {
        // add to the workAll arr
        workAll.push(workArr[i]);
    }
    for(var i = 0; i < workAll.length; i++) {
        var allWorks = workAll[i];
        var allWorks = JSON.parse( localStorage.getItem( allWorks ) );
        for( var key in allWorks ) {
            // get the length of each section
            dbNum( allWorks[key].length );
            for( var j = 0; j < allWorks[key].length; j++ ) {
                var oldWorks = document.getElementById('oldWorks');
                // create the main div
                var div = document.createElement('div');
                div.setAttribute('class', 'module-section work works js-' + key);
                div.setAttribute('id', allWorks[key][j].id);
                // create the image
                var img = document.createElement('img');
                img.setAttribute('class', 'studio-img');
                // build the image
                var imgPath = '../img/works/';
                var imgNum = allWorks[key][j].id;
                var imgSize = '_l-';
                var imgSuff = '.jpg';
                img.setAttribute('src', imgPath + imgNum + imgSize + 0 + imgSuff);
                // create the date span
                var span = document.createElement('span');
                span.setAttribute('class', 'date');
                span.innerHTML = allWorks[key][j].date;
                // create the title heading
                var heading1 = document.createElement('h3');
                heading1.setAttribute('class', 'heading');
                heading1.innerHTML = 'Title';
                // create the title heading
                var input1 = document.createElement('input');
                input1.setAttribute('class', 'form-input');
                input1.setAttribute('type', 'text');
                input1.setAttribute('value', allWorks[key][j].title);
                // create the year heading
                var heading2 = document.createElement('h3');
                heading2.setAttribute('class', 'heading');
                heading2.innerHTML = 'Year';
                // create the year heading
                var input2 = document.createElement('input');
                input2.setAttribute('class', 'form-input');
                input2.setAttribute('type', 'text');
                input2.setAttribute('value', allWorks[key][j].year);
                // create the media heading
                var heading3 = document.createElement('h3');
                heading3.setAttribute('class', 'heading');
                heading3.innerHTML = 'Media';
                // create the media heading
                var input3 = document.createElement('input');
                input3.setAttribute('class', 'form-input');
                input3.setAttribute('type', 'text');
                input3.setAttribute('value', allWorks[key][j].media);
                // create the description heading
                var heading4 = document.createElement('h3');
                heading4.setAttribute('class', 'heading');
                heading4.innerHTML = 'Description';
                // create the description heading
                var input4 = document.createElement('textarea');
                input4.setAttribute('class', 'form-input');
                input4.setAttribute('type', 'text');
                input4.innerHTML = allWorks[key][j].description;
                // create the dimensions heading
                var heading4 = document.createElement('h3');
                heading4.setAttribute('class', 'heading');
                heading4.innerHTML = 'Dimensions';
                // create the dimensions heading
                var input4 = document.createElement('input');
                input4.setAttribute('class', 'form-input dimension');
                input4.setAttribute('type', 'text');
                input4.setAttribute('value', allWorks[key][j].dimension_d);
                // create the dimensions heading
                var input5 = document.createElement('input');
                input5.setAttribute('class', 'form-input dimension');
                input5.setAttribute('type', 'text');
                input5.setAttribute('value', allWorks[key][j].dimension_w);
                // create the dimensions heading
                var input6 = document.createElement('input');
                input6.setAttribute('class', 'form-input dimension');
                input6.setAttribute('type', 'text');
                input6.setAttribute('value', allWorks[key][j].dimension_h);
                // create the available heading
                var heading5 = document.createElement('h3');
                heading5.setAttribute('class', 'heading');
                heading5.innerHTML = 'Available';
                // create the available heading
                var input7 = document.createElement('input');
                input7.setAttribute('class', 'form-input');
                input7.setAttribute('type', 'text');
                input7.setAttribute('value', allWorks[key][j].available);
                // create the related images heading
                var heading6 = document.createElement('h3');
                heading6.setAttribute('class', 'heading');
                heading6.innerHTML = 'All Images';
                // create the related images heading
                var ulRelated = document.createElement('ul');
                ulRelated.setAttribute('class', 'list inline related');
                // loop through it all
                for( var m = 0; m <= allWorks[key][j].images - 1; m++ ) {
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
                var imgNum = allWorks[key][j].id;
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
            var button1 = document.createElement('button');
            button1.setAttribute('class', 'save button');
            button1.setAttribute('disabled', 'disabled');
            button1.setAttribute('type', 'submit');
            button1.setAttribute('name', 'edit');
            button1.setAttribute('value', 'save');
            button1.innerHTML = 'Save';
            // create the delete button
            var button2 = document.createElement('button');
            button2.setAttribute('class', 'delete button');
            button2.setAttribute('type', 'submit');
            button2.setAttribute('name', 'edit');
            button2.setAttribute('value', 'delete');
            button2.innerHTML = 'Delete';
            // append everything
            div.appendChild(img);
            div.appendChild(heading1);
            div.appendChild(input1);
            div.appendChild(heading2);
            div.appendChild(input2);
            div.appendChild(heading3);
            div.appendChild(input3);
            div.appendChild(heading4);
            div.appendChild(input4);
            div.appendChild(heading4);
            div.appendChild(input4);
            div.appendChild(input5);
            div.appendChild(input6);
            div.appendChild(heading5);
            div.appendChild(input7);
            div.appendChild(heading6);
            div.appendChild(ulRelated);
            // insert bigtime
            div.insertBefore(span, div.firstChild);
            saveDiv.appendChild(button1);
            saveDiv.appendChild(button2);
            div.appendChild(saveDiv);
            oldWorks.appendChild(div);
            }
        }
    }
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


// GET NUMBER OF ITEMS IN DB
newNum = 0;
function dbNum(num) {
    // console.log( 'dbNum: ' + num );
    var dbNum = document.getElementById('dbNum');
    newNum += num;
    dbNum.innerHTML = newNum;
}
