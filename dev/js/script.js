window.onload = init;

function init() {
	repeat();
	displayNav();
}

function Work(id, title, year, media, description, dimension_d, dimension_w, dimension_h, available, image, related_images, added) {
	this.id = id,
	this.title = title,
	this.year = year,
	this.media = media,
	this.description = description,
	this.dimension_d = dimension_d,
	this.dimension_w = dimension_w,
	this.dimension_h = dimension_h,
	this.available = available,
	this.image = image,
	this.related_images = related_images,
	this.added = added
}

function Studio(id, image, description, added) {
	this.id = id,
	this.image = image,
	this.description = description,
	this.added = added
}

function News(id, description, added) {
	this.id = id,
	this.description = description,
	this.added = added
}

// list the kinds of data available
var kind = ['works', 'news', 'studio'];
// loop through the kinds and get all the data available 
for(var i = 0; i < kind.length; i++) {
	getData(kind[i]);
}

function getData(kind) {
	var request = new XMLHttpRequest();
	request.open('GET', 'data/' + kind + '.json');

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

function repeat() {
	var news = JSON.parse(localStorage.getItem('news'));
	var studio = JSON.parse(localStorage.getItem('studio'));
	var works = JSON.parse(localStorage.getItem('works'));

	if( works.furnishings ) {
		listWorks(works);
	}
	if( studio.shots ) {
		listWorks(studio);
	}
	if( news.story ) {
		listWorks(news);
	}
}
function listWorks(kind) {
	var worksDiv = document.getElementById('works');
	var keys = Object.keys(kind);

	for(var i = 0; i < keys.length; i++) {
		// console.log(keys[i]);
		var module = document.createElement('div');
		module.setAttribute('class', 'module group');
		module.setAttribute('id', keys[i]);
		var anchor = document.createElement('a');
		anchor.setAttribute('class', 'test');
		anchor.setAttribute('name', keys[i]);
		module.appendChild(anchor);

		// heading
		var h2 = document.createElement('h2');
		h2.setAttribute('class',  'header');
		h2.innerHTML = keys[i].toUpperCase();
		theTypeIs = keys[i];
		module.appendChild(h2);
		// left module div
		var leftDiv = document.createElement('div');
		leftDiv.setAttribute('class', 'left');

		// module main div
		var moduleMainDiv = document.createElement('div');
		moduleMainDiv.setAttribute('class', 'module-main bg-3');
		// main image div
		var mainImgDiv = document.createElement('img');
		mainImgDiv.setAttribute('class', 'main-image');
		mainImgDiv.setAttribute('id', 'resultImg');
		mainImgDiv.setAttribute('src', '../img/works/chest-645_0_l.jpg')
		moduleMainDiv.appendChild(mainImgDiv);

		// sidebar div
		var moduleSidebarDiv = document.createElement('div');
		moduleSidebarDiv.setAttribute('class', 'module-sidebar');
		// sidebar items div
		var sidebarItemsDiv = document.createElement('div');
		sidebarItemsDiv.setAttribute('class', 'sidebar-items-list bg-3 group');
		moduleSidebarDiv.appendChild(sidebarItemsDiv);

		leftDiv.appendChild(moduleMainDiv);
		leftDiv.appendChild(moduleSidebarDiv);

		// right div
		var rightDiv = document.createElement('div');
		rightDiv.setAttribute('class', 'right');
		// module nav div
		var moduleNavDiv = document.createElement('div');
		moduleNavDiv.setAttribute('class', 'module-nav bg-3');
		// sub-header div
		var subHeader = document.createElement('h3');
		subHeader.setAttribute('class', 'sub-header');
		subHeader.innerHTML = 'Additional ' + capitalizeFirstLetter(keys[i]);
		// list div
		var listDiv = document.createElement('div');
		listDiv.setAttribute('class', 'list-wrap');
		// module list div
		var moduleList = document.createElement('ul');
		moduleList.setAttribute('class', 'module-list');
		listDiv.appendChild(moduleList);
		// li 
		var listLi = document.createElement('li');
		listLi.setAttribute('class', 'list-item active');
		listLi.setAttribute('style', 'background-image: url(../img/works/chest-645_0_m.jpg)');
		moduleList.appendChild(listLi);

		moduleNavDiv.appendChild(subHeader);
		moduleNavDiv.appendChild(listDiv);
		rightDiv.appendChild(moduleNavDiv);

		module.appendChild(leftDiv);
		module.appendChild(rightDiv);

		worksDiv.appendChild(module);
	}
}

var dataKinds = ['works', 'studio', 'news'];
// display the navigation
function displayNav() {
	for(var i = 0; i < dataKinds.length; i++) {
		console.log(dataKinds[i]);
		var kind = dataKinds[i];
	
		var kind = JSON.parse(localStorage.getItem('"' + kind + '"'));
		eval(kind + 'Keys') = Object.keys(kind);

		var sheep = "dynamicVariableName";
		eval("var " + sheep + "= new Array();");
	}
	
	var studio = JSON.parse(localStorage.getItem('studio'));
	var studioKeys = Object.keys(studio);

	var news = JSON.parse(localStorage.getItem('news'));
	var newsKeys = Object.keys(news);

	var nav = document.getElementById('nav');

	for(var i = 0; i < workKeys.length; i++) {
		if( works[workKeys[i]].length > 0) {
			var li = document.createElement('li');
			var a = document.createElement('a');
			var title = capitalizeFirstLetter(workKeys[i]);
			a.innerHTML = title;
			a.setAttribute('class', 'link');
			a.setAttribute('href', '#' + workKeys[i]);
			a.setAttribute('title', 'View my ' + workKeys[i]);
			li.appendChild(a);
			li.setAttribute('class', 'item');
			nav.appendChild(li);
		}
	}

	for(var i = 0; i < studioKeys.length; i++) {
		if( studio[studioKeys[i]].length > 0) {
			var li = document.createElement('li');
			var a = document.createElement('a');
			var title = capitalizeFirstLetter(studioKeys[i]);
			a.innerHTML = title;
			a.setAttribute('class', 'link');
			a.setAttribute('href', '#' + studioKeys[i]);
			a.setAttribute('title', 'View my ' + studioKeys[i]);
			li.appendChild(a);
			li.setAttribute('class', 'item');
			nav.appendChild(li);
		}
	}

	for(var i = 0; i < newsKeys.length; i++) {
		if( news[newsKeys[i]].length > 0) {
			var li = document.createElement('li');
			var a = document.createElement('a');
			var title = capitalizeFirstLetter(newsKeys[i]);
			a.innerHTML = title;
			a.setAttribute('class', 'link');
			a.setAttribute('href', '#' + newsKeys[i]);
			a.setAttribute('title', 'View my ' + newsKeys[i]);
			li.appendChild(a);
			li.setAttribute('class', 'item');
			nav.appendChild(li);
		}
	}
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
















