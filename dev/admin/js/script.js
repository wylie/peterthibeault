window.onload = init;

function init() {
    dataTypes();
    displayNews();

    var cancelNews = document.getElementById('cancelNews');
    cancelNews.onclick = clearNews;
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

// DISPLAY THE OLD NEWS
function displayNews() {
    var news = JSON.parse( localStorage.getItem('news') );
    for (var key in news) {
        var news = news[key].reverse();
        var newsNum = document.getElementById('newsNum');
        // display the number of news items saved
        newsNum.innerHTML = news.length;

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
            button.setAttribute('type', 'submit');
            button.setAttribute('name', 'edit');
            button.setAttribute('value', 'delete');
            button.setAttribute('class', 'delete button');
            button.innerHTML = 'Delete';

            div.appendChild(button);
            div.insertBefore(span, div.firstChild);
            oldNews.appendChild(div);
        }
    }
}

function clearNews() {
    document.getElementById('newsContent').value = '';
}
