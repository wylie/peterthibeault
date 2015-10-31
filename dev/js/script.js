window.onload = init;

// run after loading everything
function init() {
	dataTypes();
	buildNav();
	// createModules();
}

// some arrays we will need as we go along
var dataArr = [];
var navArr = [];
// build out the dataArr array
for (var key in localStorage){
   dataArr.push(key);
}

// loop through the kinds and get all the data available
function dataTypes() {
	for(var i = 0; i < dataArr.length; i++) {
		// lets get the data and store it locally
		getData(dataArr[i]);
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










// build out the navigation
function buildNav() {
	// loop through that kinds array
	for(var i = 0; i < dataArr.length; i++ ) {
		// get the locally stored data
		var dataKeys = JSON.parse(localStorage.getItem(dataArr[i]));
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
	getDataForDisplay();
	// createModules();
}










function getDataForDisplay() {
	for(var i = 0; i < dataArr.length; i++ ) {
		var dataKeys = JSON.parse(localStorage.getItem(dataArr[i]));
		// pass along the data and create modules
		createModules(dataKeys);
	}
}










function createModules(mod) {
	// get the keys
	for (var key in mod) {
		// build out the module skeleton
		var worksDiv = document.getElementById('works');
		var module = document.createElement('div');
		module.setAttribute('class', 'module group');

		module.setAttribute('id', key);
		var anchor = document.createElement('a');
		anchor.setAttribute('name', key);
		module.appendChild(anchor);

		// heading
		var h2 = document.createElement('h2');
		h2.setAttribute('class',  'header');
		h2.innerHTML = key.toUpperCase();
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
		heroDiv.setAttribute('class', 'module-main');
		heroDiv.setAttribute('id', key + '-hero');

		// create the container for the hero images
		var infoDiv = document.createElement('div');
		infoDiv.setAttribute('class', 'module-info grid');
		infoDiv.setAttribute('id', key + '-tray');

		// create a list for the first column
		var infoUl1 = document.createElement('ul');
		infoUl1.setAttribute('class', 'sidebar-items-list bg-3 group col4');
		infoDiv.appendChild(infoUl1);

		// create a list for the first column
		var infoUl2 = document.createElement('ul');
		infoUl2.setAttribute('class', 'sidebar-items-list bg-3 group col4');
		infoDiv.appendChild(infoUl2);

		// create a list for the first column
		var infoUl3 = document.createElement('ul');
		infoUl3.setAttribute('class', 'sidebar-items-list bg-3 group col4');
		infoDiv.appendChild(infoUl3);

		// add the columns to the grid
		leftDiv.appendChild(infoDiv);

		// add things to the leftDiv
		leftDiv.appendChild(heroDiv);
		leftDiv.appendChild(infoDiv);

		// create the right div
		var rightDiv = document.createElement('div');
		rightDiv.setAttribute('class', 'right');
		rightDiv.setAttribute('id', 'right');

		// add the nav div
		var navDiv = document.createElement('div');
		navDiv.setAttribute('class', 'module-nav bg-3');
		navDiv.setAttribute('id', key + '-additional');

		// add the nav div sub-header
		var navSubHeaderDiv = document.createElement('h3');
		navSubHeaderDiv.setAttribute('class', 'sub-header');
		navSubHeaderDiv.innerHTML = 'Additional ' + key;
		navDiv.appendChild(navSubHeaderDiv);

		// add the nav div list
		var navList = document.createElement('ul');
		navList.setAttribute('class', 'module-list');

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
	heroImg(mod);
}


function heroImg(mod) {
	for (var key in mod) {
		// create an ID from the key
		var kindMod = $('#' + key);
		// build the hero ID
		var heroSel = kindMod.selector + '-hero';
		// get the hero element
		var heroElem = $(heroSel);
		// do that old key thing
		for (var key in mod) {
			// build out the main image
			var imgPath = 'img/works/';''
			var imgId = mod[key][0].id;
			var imgNum = mod[key][0].images;
			var imgSuff = '_l-0.jpg';
			// make sure we're doing this for sections with images
			if(imgNum != undefined) {
				// create the hero image
				var heroImg = document.createElement('img');
				heroImg.setAttribute('class', 'main-image');
				heroImg.setAttribute('src', imgPath + imgId + imgSuff);
				// append the hero image
				heroElem[0].appendChild( heroImg );
			}
		}
	}
}
