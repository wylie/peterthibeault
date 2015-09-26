window.onload = init;

// run after loading everything
function init() {
	dataTypes();
	buildNav();
	// listWorks();
}

// some arrays we will need as we go along
var kindsArr = ['works', 'studio', 'news'];
var navArr = [];

// loop through the kinds and get all the data available
function dataTypes() {
	for(var i = 0; i < kindsArr.length; i++) {
		// lets get the data and store it locally
		getData(kindsArr[i]);
	}
}

// get the data from the JSON files
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

function buildNav() {
	// loop through that kinds array
	for(var i = 0; i < kindsArr.length; i++ ) {
		// get the locally stored data
		var dataKeys = JSON.parse(localStorage.getItem(kindsArr[i]));
		// console.log(dataKeys);
		for (var key in dataKeys) {
			// check to see if we have at least 1 item in the category
			if(dataKeys[key].length > 0) {
				// add the categories with more than 1 item to the navArr
				navArr.push(key);
			}
		}
	}
	// add extra sections to the navigation
	navArr.push('CV', 'Contact');
	// now, display the navigation
	displayNav();
}



// capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// display the navigation
function displayNav() {
	for(var i = 0; i < navArr.length; i++ ) {
		var nav = document.getElementById('nav');
		var li = document.createElement('li');
		var a = document.createElement('a');
		var title = capitalizeFirstLetter(navArr[i]);
		a.innerHTML = title;
		a.setAttribute('class', 'link');
		a.setAttribute('href', '#' + navArr[i]);
		a.setAttribute('title', 'View my ' + navArr[i]);
		li.appendChild(a);
		li.setAttribute('class', 'item');
		nav.appendChild(li);
	}
	createModules();
}

function createModules() {
	for(var i = 0; i < navArr.length; i++ ) {
		var worksDiv = document.getElementById('works');
		var module = document.createElement('div');
		module.setAttribute('class', 'module group');

		module.setAttribute('id', navArr[i]);
		var anchor = document.createElement('a');
		anchor.setAttribute('name', navArr[i]);
		module.appendChild(anchor);

		// heading
		var h2 = document.createElement('h2');
		h2.setAttribute('class',  'header');
		h2.innerHTML = navArr[i].toUpperCase();
		theTypeIs = navArr[i];
		module.appendChild(h2);

		// wrap module div
		var wrapDiv = document.createElement('div');
		wrapDiv.setAttribute('class', 'module-wrap group');

		module.appendChild(wrapDiv);
		worksDiv.appendChild(module);
	}
}



// function Work(id, title, year, media, description, dimension_d, dimension_w, dimension_h, available, image, related_images, added) {
// 	this.id = id,
// 	this.title = title,
// 	this.year = year,
// 	this.media = media,
// 	this.description = description,
// 	this.dimension_d = dimension_d,
// 	this.dimension_w = dimension_w,
// 	this.dimension_h = dimension_h,
// 	this.available = available,
// 	this.image = image,
// 	this.related_images = related_images,
// 	this.added = added
// }

// function Studio(id, image, description, added) {
// 	this.id = id,
// 	this.image = image,
// 	this.description = description,
// 	this.added = added
// }

// function News(id, description, added) {
// 	this.id = id,
// 	this.description = description,
// 	this.added = added
// }

// list the kinds of data available
// var kind = ['works', 'news', 'studio'];
// loop through the kinds and get all the data available
// for(var i = 0; i < kind.length; i++) {
// 	getData(kind[i]);
// }

// var localData = ['news', 'studio', 'works'];
// function displayNav() {
// 	for(var i = 0; i < localData.length; i++ ) {
// 		var localData[i] = JSON.parse(localStorage.getItem(localData[i]));
// 	}
//
// 	var workKeys = Object.keys(works);
// 	for(var i = 0; i < workKeys.length; i++) {
// 		var nav = document.getElementById('nav');
// 		var li = document.createElement('li');
// 		var a = document.createElement('a');
// 		var title = workKeys[i];
// 		a.innerHTML = capitalizeFirstLetter(title);
// 		a.setAttribute('class', 'link');
// 		a.setAttribute('href', '#' + workKeys[i]);
// 		a.setAttribute('title', 'View my ' + workKeys[i]);
// 		li.appendChild(a);
// 		li.setAttribute('class', 'item');
// 		nav.appendChild(li);
// 	}
//
// 	var studioKeys = Object.keys(studio);
// 	for(var i = 0; i < studioKeys.length; i++) {
// 		var nav = document.getElementById('nav');
// 		var li = document.createElement('li');
// 		var a = document.createElement('a');
// 		var title = studioKeys[i];
// 		a.innerHTML = capitalizeFirstLetter(title);
// 		a.setAttribute('class', 'link');
// 		a.setAttribute('href', '#' + studioKeys[i]);
// 		a.setAttribute('title', 'View my ' + studioKeys[i]);
// 		li.appendChild(a);
// 		li.setAttribute('class', 'item');
// 		nav.appendChild(li);
// 	}
//
// 	var newsKeys = Object.keys(news);
// 	for(var i = 0; i < newsKeys.length; i++) {
// 		var nav = document.getElementById('nav');
// 		var li = document.createElement('li');
// 		var a = document.createElement('a');
// 		var title = newsKeys[i];
// 		a.innerHTML = capitalizeFirstLetter(title);
// 		a.setAttribute('class', 'link');
// 		a.setAttribute('href', '#' + newsKeys[i]);
// 		a.setAttribute('title', 'View my ' + newsKeys[i]);
// 		li.appendChild(a);
// 		li.setAttribute('class', 'item');
// 		nav.appendChild(li);
// 	}
// }

function listWorks() {
	for(var i = 0; i < kindsArr.length; i++ ) {
		// get the locally stored data
		var dataKeys = JSON.parse(localStorage.getItem(kindsArr[i]));
		for (var key in dataKeys) {
			var item = dataKeys[key];
		    for (var key2 in item) {
				if(kindsArr[i] === 'works') {
					var keys = item[key2];

					var worksDiv = document.getElementById('works');

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
					mainImgDiv.setAttribute('src', keys.image)
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
					subHeader.innerHTML = 'Additional ' + keys.title;
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
					listLi.setAttribute('style', 'background-image: url(' + keys.image + ')');
					moduleList.appendChild(listLi);

					moduleNavDiv.appendChild(subHeader);
					moduleNavDiv.appendChild(listDiv);
					rightDiv.appendChild(moduleNavDiv);

					wrapDiv.appendChild(leftDiv);
					wrapDiv.appendChild(rightDiv);

					module.appendChild(wrapDiv);

					worksDiv.appendChild(module);
				}
			}
		}
	}
}
