window.onload = init;

function init() {
    dataTypes();

    var elements = document.getElementsByTagName('body');
	var page = elements[0].id;

	switch(page) {
		case 'works':
            displayWorks();
			break;
		case 'studio':
            displayStudio();
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
            div.setAttribute('class', 'module-section work works');
            div.setAttribute('id', works[key][i].id);

            // create the image
            var img = document.createElement('img');
            img.setAttribute('class', 'studio-img');
            img.setAttribute('src', works[key][i].image);

            // create the date span
            var span = document.createElement('span');
            span.setAttribute('class', 'date');
            span.innerHTML = works[key][i].date;

            // create the list
            var ul = document.createElement('ul');
            ul.setAttribute('class', 'sidebar-list list');

            // create the title list item
            var li1 = document.createElement('li');
            li1.setAttribute('class', 'sidebar-list-item');

            // create the title heading
            var heading1 = document.createElement('h3');
            heading1.setAttribute('class', 'heading');
            heading1.innerHTML = 'Title';

            li1.appendChild(heading1);

            // create the title list item
            var li2 = document.createElement('li');
            li2.setAttribute('class', 'sidebar-list-item');

            // create the title heading
            var input1 = document.createElement('input');
            input1.setAttribute('class', 'form-input');
            input1.setAttribute('type', 'text');
            input1.setAttribute('value', works[key][i].title);

            li2.appendChild(input1);

            // create the year list item
            var li3 = document.createElement('li');
            li3.setAttribute('class', 'sidebar-list-item');

            // create the year heading
            var heading2 = document.createElement('h3');
            heading2.setAttribute('class', 'heading');
            heading2.innerHTML = 'Year';

            li3.appendChild(heading2);

            // create the year list item
            var li4 = document.createElement('li');
            li4.setAttribute('class', 'sidebar-list-item');

            // create the year heading
            var input2 = document.createElement('input');
            input2.setAttribute('class', 'form-input');
            input2.setAttribute('type', 'text');
            input2.setAttribute('value', works[key][i].year);

            li4.appendChild(input2);

            // create the media list item
            var li5 = document.createElement('li');
            li5.setAttribute('class', 'sidebar-list-item');

            // create the media heading
            var heading3 = document.createElement('h3');
            heading3.setAttribute('class', 'heading');
            heading3.innerHTML = 'Media';

            li5.appendChild(heading3);

            // create the media list item
            var li6 = document.createElement('li');
            li6.setAttribute('class', 'sidebar-list-item');

            // create the media heading
            var input3 = document.createElement('input');
            input3.setAttribute('class', 'form-input');
            input3.setAttribute('type', 'text');
            input3.setAttribute('value', works[key][i].media);

            li6.appendChild(input3);

            // create the description list item
            var li7 = document.createElement('li');
            li7.setAttribute('class', 'sidebar-list-item');

            // create the description heading
            var heading4 = document.createElement('h3');
            heading4.setAttribute('class', 'heading');
            heading4.innerHTML = 'Description';

            li7.appendChild(heading4);

            // create the description list item
            var li8 = document.createElement('li');
            li8.setAttribute('class', 'sidebar-list-item');

            // create the description heading
            var input4 = document.createElement('textarea');
            input4.setAttribute('class', 'form-input');
            input4.setAttribute('type', 'text');
            input4.innerHTML = works[key][i].description;

            li8.appendChild(input4);

            // create the dimensions list item
            var li9 = document.createElement('li');
            li9.setAttribute('class', 'sidebar-list-item');

            // create the dimensions heading
            var heading4 = document.createElement('h3');
            heading4.setAttribute('class', 'heading');
            heading4.innerHTML = 'Dimensions';

            li9.appendChild(heading4);

            // create the dimensions list item
            var li10 = document.createElement('li');
            li10.setAttribute('class', 'sidebar-list-item');

            // create the dimensions heading
            var input4 = document.createElement('input');
            input4.setAttribute('class', 'form-input');
            input4.setAttribute('type', 'text');
            input4.setAttribute('value', works[key][i].dimension_d);

            // create the dimensions heading
            var input5 = document.createElement('input');
            input5.setAttribute('class', 'form-input');
            input5.setAttribute('type', 'text');
            input5.setAttribute('value', works[key][i].dimension_w);

            // create the dimensions heading
            var input6 = document.createElement('input');
            input6.setAttribute('class', 'form-input');
            input6.setAttribute('type', 'text');
            input6.setAttribute('value', works[key][i].dimension_h);

            li10.appendChild(input4);
            li10.appendChild(input5);
            li10.appendChild(input6);

            // create the description list item
            var li11 = document.createElement('li');
            li11.setAttribute('class', 'sidebar-list-item');

            // create the description heading
            var heading5 = document.createElement('h3');
            heading5.setAttribute('class', 'heading');
            heading5.innerHTML = 'Available';

            li11.appendChild(heading5);

            // create the description list item
            var li12 = document.createElement('li');
            li12.setAttribute('class', 'sidebar-list-item');

            // create the description heading
            var input7 = document.createElement('input');
            input7.setAttribute('class', 'form-input');
            input7.setAttribute('type', 'text');
            input7.setAttribute('value', works[key][i].available);

            li12.appendChild(input7);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            ul.appendChild(li8);
            ul.appendChild(li9);
            ul.appendChild(li10);
            ul.appendChild(li11);
            ul.appendChild(li12);

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
            div.insertBefore(span, div.firstChild);
            div.appendChild(ul);
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
