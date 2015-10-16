window.onload = init;

function init() {
    dataTypes();
    var elements = document.getElementsByTagName('body');
    var page = elements[0].id;

    switch(page) {
      case 'works':
        displayWorks();
        // filter the old works
        filterWorks();
        break;
      case 'studio':
        // display all the old studio photos
        displayStudio();
        // delete old studio after clicking on the button
        deleteStudio();
        break;
      case 'news':
        displayNews();
        var cancelNews = document.getElementById('cancelNews');
        cancelNews.onclick = clearNews;
        break;
      case 'cv':
        break;
      case 'contact':
        break;
  }
}

function filterWorks() {
  // get all of the work filters
  $('#filterWorks .list-item label').click(function() {
    // get the attribute of each label
    var kind = $(this).attr('for');
    // remove any hiding going on
    $('#oldWorks').children('.works').show();
    // add hiding to the siblings of the type clicked on
    $('#oldWorks').children('.' + kind).siblings('.works:not(' + '.' + kind + ')').hide();
  });
}

function deleteStudio() {
  $('.delete').click(function() {
    // give this a var
    var deleteBtn = $(this);
    // for now, just console log the id passed in
    console.log( deleteBtn[0].parentElement.id );
  });
}

// some arrays we will need as we go along
var kindsArr = ['works', 'studio', 'news'];

// loop through the kinds and get all the data available
function dataTypes() {
	for(var i = 0; i < kindsArr.length; i++) {
		// lets get the data and store it locally
		getData(kindsArr[i]);
	}
}

// GET ALL THE DATA
function getData(kind) {
	var request = new XMLHttpRequest();
	request.open('GET', '../data/' + kind + '.json');

	request.onreadystatechange = function() {
		var div = document.getElementById('results');
		if(this.readyState == this.DONE && this.status == 200) {
			var type = request.getResponseHeader('Content-Type');
			if(this.responseText != null) {
				var json = JSON.parse(this.responseText);
				var keys = Object.keys(json);
				localStorage.setItem(kind, JSON.stringify(json));
			}
		}
	}
	request.send();
}

var workNums = [];
var workSum = 0;
// DISPLAY THE WORKS
function displayWorks() {
    var works = JSON.parse( localStorage.getItem('works') );
    for (var key in works) {
        // push the numbers of each work section to the empty array... we need this so we can display the total number of works in the DB
        workNums.push(works[key].length);
        for(var i = 0; i < works[key].length; i++) {
            var oldWorks = document.getElementById('oldWorks');

            // create the main div
            var div = document.createElement('div');
            div.setAttribute('class', 'module-section work works ' + key);
            div.setAttribute('id', works[key][i].id);

            // create the image
            var img = document.createElement('img');
            img.setAttribute('class', 'studio-img');
            img.setAttribute('src', works[key][i].image);

            // create the date span
            var span = document.createElement('span');
            span.setAttribute('class', 'date');
            span.innerHTML = works[key][i].date;

            // create the title heading
            var heading1 = document.createElement('h3');
            heading1.setAttribute('class', 'heading');
            heading1.innerHTML = 'Title';

            // create the title heading
            var input1 = document.createElement('input');
            input1.setAttribute('class', 'form-input');
            input1.setAttribute('type', 'text');
            input1.setAttribute('value', works[key][i].title);

            // create the year heading
            var heading2 = document.createElement('h3');
            heading2.setAttribute('class', 'heading');
            heading2.innerHTML = 'Year';

            // create the year heading
            var input2 = document.createElement('input');
            input2.setAttribute('class', 'form-input');
            input2.setAttribute('type', 'text');
            input2.setAttribute('value', works[key][i].year);

            // create the media heading
            var heading3 = document.createElement('h3');
            heading3.setAttribute('class', 'heading');
            heading3.innerHTML = 'Media';

            // create the media heading
            var input3 = document.createElement('input');
            input3.setAttribute('class', 'form-input');
            input3.setAttribute('type', 'text');
            input3.setAttribute('value', works[key][i].media);

            // create the description heading
            var heading4 = document.createElement('h3');
            heading4.setAttribute('class', 'heading');
            heading4.innerHTML = 'Description';

            // create the description heading
            var input4 = document.createElement('textarea');
            input4.setAttribute('class', 'form-input');
            input4.setAttribute('type', 'text');
            input4.innerHTML = works[key][i].description;

            // create the dimensions heading
            var heading4 = document.createElement('h3');
            heading4.setAttribute('class', 'heading');
            heading4.innerHTML = 'Dimensions';

            // create the dimensions heading
            var input4 = document.createElement('input');
            input4.setAttribute('class', 'form-input dimension');
            input4.setAttribute('type', 'text');
            input4.setAttribute('value', works[key][i].dimension_d);

            // create the dimensions heading
            var input5 = document.createElement('input');
            input5.setAttribute('class', 'form-input dimension');
            input5.setAttribute('type', 'text');
            input5.setAttribute('value', works[key][i].dimension_w);

            // create the dimensions heading
            var input6 = document.createElement('input');
            input6.setAttribute('class', 'form-input dimension');
            input6.setAttribute('type', 'text');
            input6.setAttribute('value', works[key][i].dimension_h);

            // create the available heading
            var heading5 = document.createElement('h3');
            heading5.setAttribute('class', 'heading');
            heading5.innerHTML = 'Available';

            // create the available heading
            var input7 = document.createElement('input');
            input7.setAttribute('class', 'form-input');
            input7.setAttribute('type', 'text');
            input7.setAttribute('value', works[key][i].available);

            // create the related images heading
            var heading6 = document.createElement('h3');
            heading6.setAttribute('class', 'heading');
            heading6.innerHTML = 'Additional Images';

            // create the related images heading
            var p8 = document.createElement('p');
            p8.setAttribute('class', 'txt');
            p8.innerHTML = works[key][i].related_images;

            var saveDiv = document.createElement('div');
            saveDiv.setAttribute('class', 'module-save');

            // create the save button
            var button1 = document.createElement('button');
            button1.setAttribute('class', 'save button');
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
            div.appendChild(p8);

            div.insertBefore(span, div.firstChild);
            saveDiv.appendChild(button1);
            saveDiv.appendChild(button2);
            div.appendChild(saveDiv);
            oldWorks.appendChild(div);
        }
    }
    dbNum('works', workSum);
}



// DISPLAY THE STUDIO
function displayStudio() {
    var studio = JSON.parse( localStorage.getItem('studio') );
    for (var key in studio) {
        var studio = studio[key].reverse();
        dbNum('studio', studio.length);

        for(var i = 0; i < studio.length; i++) {

            var oldStudio = document.getElementById('oldStudio');
            var div = document.createElement('div');
            div.setAttribute('class', 'module-section work studio');
            div.setAttribute('id', studio[i].id);

            var img = document.createElement('img');
            img.setAttribute('class', 'studio-img');
            img.setAttribute('src', studio[i].image);

            var span = document.createElement('span');
            span.setAttribute('class', 'date');
            span.innerHTML = studio[i].date;

            var button = document.createElement('button');
            button.setAttribute('class', 'delete button');
            button.setAttribute('type', 'submit');
            button.setAttribute('name', 'edit');
            button.setAttribute('value', 'delete');
            button.innerHTML = 'Delete';

            div.appendChild(img);
            div.insertBefore(span, div.firstChild);
            div.appendChild(button);
            oldStudio.appendChild(div);
        }
    }
}

// DISPLAY THE OLD NEWS
function displayNews() {
    var news = JSON.parse( localStorage.getItem('news') );
    for (var key in news) {
        var news = news[key].reverse();
        dbNum('news', news.length);

        for(var i = 0; i < news.length; i++) {

            var oldNews = document.getElementById('oldNews');
            var div = document.createElement('div');
            div.setAttribute('class', 'news-item');
            div.setAttribute('id', news[i].id);
            div.innerHTML = news[i].description;

            var span = document.createElement('span');
            span.setAttribute('class', 'news-item-date');
            span.innerHTML = news[i].date;

            var button = document.createElement('button');
            button.setAttribute('class', 'delete button');
            button.setAttribute('type', 'submit');
            button.setAttribute('name', 'edit');
            button.setAttribute('value', 'delete');
            button.innerHTML = 'Delete';

            div.appendChild(button);
            div.insertBefore(span, div.firstChild);
            oldNews.appendChild(div);
        }
    }
}
// CLEAR THE NEW TEXT AREA
function clearNews() {
    document.getElementById('newsContent').value = '';
}

// GET NUMBER OF ITEMS IN DB
function dbNum(kind, num) {
    var dbNum = document.getElementById('dbNum');

    if(kind === 'works') {
        for(var i=0; i < workNums.length; i++){
            workSum = workSum + parseInt(workNums[i]);
            // display the number of news items saved
            dbNum.innerHTML = workSum;
        }
    } else {
        // display the number of news items saved
        dbNum.innerHTML = num;
    }
}
