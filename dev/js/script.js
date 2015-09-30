window.onload = init;

// run after loading everything
function init() {
	dataTypes();
	buildNav();
	// createModules();
}

// some arrays we will need as we go along
var kindsArr = ['works', 'studio', 'news'];
var navArr = [];

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
	navArr.push('CV', 'contact');
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
		a.setAttribute('title', 'View My ' + capitalizeFirstLetter(navArr[i]));
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

		// create the left div
		var leftDiv = document.createElement('div');
		leftDiv.setAttribute('class', 'left');
		leftDiv.setAttribute('id', 'left');

		// create the container for the hero images
		var heroDiv = document.createElement('div');
		heroDiv.setAttribute('class', 'module-main bg-3');

		// create an empty img for the hero images
		var heroImg = document.createElement('img');
		heroImg.setAttribute('class', 'main-image');
		heroImg.setAttribute('src', 'http://peterthibeault.com/img/works/chest-645_0_l.jpg');

		// create the container for the hero images
		var infoDiv = document.createElement('div');
		infoDiv.setAttribute('class', 'module-info grid');

		// create the grid in the info
		var col1 = document.createElement('div');
		col1.setAttribute('class', 'col4');
		var col2 = document.createElement('div');
		col2.setAttribute('class', 'col4');
		var col3 = document.createElement('div');
		col3.setAttribute('class', 'col4');

		// create a list for the first column
		var infoUl = document.createElement('ul');
		infoUl.setAttribute('class', 'sidebar-items-list bg-3 group');
		var infoLi = document.createElement('li');
		infoLi.setAttribute('class', 'list-item');
		infoLi.innerHTML = 'BOOM';
		// add that list to the first column
		infoUl.appendChild(infoLi);
		col1.appendChild(infoUl);

		// create a list for the first column
		var infoUl = document.createElement('ul');
		infoUl.setAttribute('class', 'sidebar-items-list bg-3 group');
		var infoLi = document.createElement('li');
		infoLi.setAttribute('class', 'list-item');
		infoLi.innerHTML = 'BOOM';
		// add that list to the first column
		infoUl.appendChild(infoLi);
		col2.appendChild(infoUl);

		// create a list for the first column
		var infoUl = document.createElement('ul');
		infoUl.setAttribute('class', 'sidebar-items-list bg-3 group');
		var infoLi = document.createElement('li');
		infoLi.setAttribute('class', 'list-item');
		infoLi.innerHTML = 'BOOM';
		// add that list to the first column
		infoUl.appendChild(infoLi);
		col3.appendChild(infoUl);

		// add the columns to the grid
		infoDiv.appendChild(col1);
		infoDiv.appendChild(col2);
		infoDiv.appendChild(col3);

		// add things to the leftDiv
		heroDiv.appendChild(heroImg);
		leftDiv.appendChild(heroDiv);
		leftDiv.appendChild(infoDiv);

		// create the right div
		var rightDiv = document.createElement('div');
		rightDiv.setAttribute('class', 'right');
		rightDiv.setAttribute('id', 'right');

		// add the nav div
		var navDiv = document.createElement('div');
		navDiv.setAttribute('class', 'module-nav bg-3');

		// add the nav div sub-header
		var navSubHeaderDiv = document.createElement('h3');
		navSubHeaderDiv.setAttribute('class', 'sub-header');
		navSubHeaderDiv.innerHTML = 'Additional Furnishings';
		navDiv.appendChild(navSubHeaderDiv);

		// add the nav div list
		var navList = document.createElement('ul');
		navList.setAttribute('class', 'module-list');

		var navListItem = document.createElement('li');
		navListItem.setAttribute('class', 'list-item active');
		navList.appendChild(navListItem);
		navDiv.appendChild(navList);


		// add things to the rightDiv
		rightDiv.appendChild(navDiv);

		// add the left and right divs to the wrapDiv
		wrapDiv.appendChild(leftDiv);
		wrapDiv.appendChild(rightDiv);

		// add it all to the module
		module.appendChild(wrapDiv);
		worksDiv.appendChild(module);
	}
	heroImg();
	// listWorks();
}

function heroImg() {

}

function listWorks() {
	for(var i = 0; i < navArr.length - 2; i++ ) {
		var mod = document.getElementById(navArr[i]).getElementsByClassName('module-wrap');
		console.log(mod);
		for(var j = 0; j < mod.length; j++ ) {
			// left module div
			var leftDiv = document.createElement('div');
			leftDiv.setAttribute('class', 'left');

			// right div
			var rightDiv = document.createElement('div');
			rightDiv.setAttribute('class', 'right');

			// module main div
			var moduleMainDiv = document.createElement('div');
			moduleMainDiv.setAttribute('class', 'module-main bg-3');

			// main image div
			var mainImgDiv = document.createElement('img');
			mainImgDiv.setAttribute('class', 'main-image');
			mainImgDiv.setAttribute('id', 'resultImg');
			mainImgDiv.setAttribute('src', 'http://peterthibeault.com/img/works/chest-645_0_l.jpg');//keys.image)

			// info div
			var moduleInfoDiv = document.createElement('div');
			moduleInfoDiv.setAttribute('class', 'module-info grid');
			var gridCol1 = document.createElement('div');
			gridCol1.setAttribute('class', 'col4');
			var gridCol2 = document.createElement('div');
			gridCol2.setAttribute('class', 'col4');
			var gridCol3 = document.createElement('div');
			gridCol3.setAttribute('class', 'col4');

			// info items div
			var infoItemsUl = document.createElement('ul');
			infoItemsUl.setAttribute('class', 'info-items-list bg-3 group');
			var infoItemsLi = document.createElement('li');
			infoItemsLi.setAttribute('class', 'info-header');

			// module nav div
			var moduleNavDiv = document.createElement('div');
			moduleNavDiv.setAttribute('class', 'module-nav bg-3');

			// sub-header div
			var subHeader = document.createElement('h3');
			subHeader.setAttribute('class', 'sub-header');
			subHeader.innerHTML = 'Additional Works';// + keys.title;

			// module list div
			var moduleList = document.createElement('ul');
			moduleList.setAttribute('class', 'module-list');

			// li
			var listLi = document.createElement('li');
			listLi.setAttribute('class', 'list-item active');
			listLi.setAttribute('style', 'background-image: url(../img/works/chest-645_0_l.jpg)');//' + keys.image + ')');

			// add the things
			infoItemsUl.appendChild(infoItemsLi);

			gridCol1.appendChild(infoItemsUl);

			moduleInfoDiv.appendChild(gridCol1);
			moduleInfoDiv.appendChild(gridCol2);
			moduleInfoDiv.appendChild(gridCol3);

			moduleMainDiv.appendChild(mainImgDiv);
			leftDiv.appendChild(moduleMainDiv);
			leftDiv.appendChild(moduleInfoDiv);
			moduleList.appendChild(listLi);
			moduleNavDiv.appendChild(subHeader);
			moduleNavDiv.appendChild(moduleList);
			rightDiv.appendChild(moduleNavDiv);

			// add the things to their mod
			mod[j].appendChild(leftDiv);
			mod[j].appendChild(rightDiv);
		}
	}
}
