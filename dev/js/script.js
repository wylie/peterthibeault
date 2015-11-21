// ARRAYS WE WILL NEED
var dataArr = ['furnishings', 'sculpture', 'drawing', 'painting', 'design', 'students', 'studio', 'news'];
var navArr = [];
var extraNav = ['CV', 'Contact'];
var totalNav = [];

// GET THE WORK DATA
workData();

// AFTER THE WINDOW LOADS...
window.onload = init;

// INITITAL FUNCTION
function init() {
	buildNav()
	relatedWorks();
	getClickedAddtl();
	// displayAddtnlWork();
}

// CAPITALIZE FIRST LETTER OF A STRING
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// CONVERT A STRING TO LOWERCASE
function allLowerCase(string) {
  return string.toLowerCase();
}

// LOOP THROUGH DATAARR AND GET ALL DATA AVAILABLE... SAVE TO LOCALSTORAGE
function workData() {
	// loop through the data JSON files
	for(var i = 0; i < dataArr.length; i++) {
		$.getJSON( 'data/' + dataArr[i] + '.json', function( data ) {
			$.each( data, function( key, val ) {
				// save each bit of data to localStorage
				localStorage.setItem( key, JSON.stringify( val ) );
			});
		});
	}
}

// BUILD THE NAVIGATION
function buildNav() {
	var nav = document.getElementById('nav');
	for(var i = 0; i < dataArr.length; i++) {
		var data = JSON.parse(localStorage.getItem( dataArr[i].toLowerCase() ) );
		if( (data != null) && (data.length > 0) ) {
			totalNav.push(dataArr[i]);
			// create an list-item
			var li = document.createElement('li');
			// create a link
			var a = document.createElement('a');
			// capitalize each dataArr
			var title = capitalizeFirstLetter( dataArr[i] );
			// add the text to the link
			a.innerHTML = title;
			// add a class to the link
			a.setAttribute('class', 'link');
			// add the link to the anchor on the page
			a.setAttribute('href', '#' +  dataArr[i].toLowerCase() );
			// give the link a title
			a.setAttribute('title', 'View My ' + dataArr[i]);
			// append the link to the li
			li.appendChild(a);
			// git the list-item a class
			li.setAttribute('class', 'item');
			// append the list-item to the nav list
			nav.appendChild(li);
		}
	}
	// ugh...
	for(var i = 0; i < extraNav.length; i++) {
		totalNav.push(extraNav[i]);
		// create an list-item
		var li = document.createElement('li');
		// create a link
		var a = document.createElement('a');
		// capitalize each navArr
		var title = capitalizeFirstLetter( extraNav[i] );
		// add the text to the link
		a.innerHTML = title;
		// add a class to the link
		a.setAttribute('class', 'link');
		// add the link to the anchor on the page
		a.setAttribute('href', '#' +  extraNav[i].toLowerCase() );
		// give the link a title
		a.setAttribute('title', extraNav[i]);
		// append the link to the li
		li.appendChild(a);
		// git the list-item a class
		li.setAttribute('class', 'item');
		// append the list-item to the nav list
		nav.appendChild(li);
	}
	prepModules();
}

function prepModules() {
	for(var i = 0; i < dataArr.length; i++) {
		var data = JSON.parse(localStorage.getItem( dataArr[i].toLowerCase() ) );
		if( (data != null) && (data.length > 0) ) {
			buildModule(dataArr[i], data);
		}
	}
}

function buildModule(nav, data) {
	var worksDiv = document.getElementById('works');
	var module = document.createElement('div');
	module.setAttribute('class', 'module group');

	module.setAttribute('id', nav.toLowerCase() );
	var anchor = document.createElement('a');
	anchor.setAttribute('name', nav.toLowerCase() );
	module.appendChild(anchor);

	// heading
	var h2 = document.createElement('h2');
	h2.setAttribute('class',  'header');
	h2.innerHTML = nav.toUpperCase();
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
	heroDiv.setAttribute('id', nav.toLowerCase() + '-hero');

	// create the container for the hero images
	var infoDiv = document.createElement('div');
	infoDiv.setAttribute('class', 'module-info grid');
	infoDiv.setAttribute('id', nav.toLowerCase() + '-tray');

	// create a list for the first column
	var infoUl1 = document.createElement('ul');
	infoUl1.setAttribute('class', 'sidebar-items-list bg-3 group col4');
	infoDiv.appendChild(infoUl1);

	var infoUl1Li = document.createElement('li');
	infoUl1Li.setAttribute('class', 'sidebar-list-heading');
	infoUl1Li.innerHTML = '<h2 class="sidebar-list-heading" title="Learn more about this piece">INFO</h2>';
	infoUl1.appendChild(infoUl1Li);

	// create a list for the first column
	var infoUl2 = document.createElement('ul');
	infoUl2.setAttribute('class', 'sidebar-items-list bg-3 group col4');
	infoDiv.appendChild(infoUl2);

	var infoUl2Li = document.createElement('li');
	infoUl2Li.setAttribute('class', 'sidebar-list-heading');
	infoUl2Li.innerHTML = '<a href="#" target="_blank" class="sidebar-list-heading" title="Send me an email">AVAILABLE</a>';
	infoUl2.appendChild(infoUl2Li);

	// create a list for the first column
	var infoUl3 = document.createElement('ul');
	infoUl3.setAttribute('class', 'sidebar-items-list bg-3 group col4');
	infoDiv.appendChild(infoUl3);

	var infoUl3Li = document.createElement('li');
	infoUl3Li.setAttribute('class', 'sidebar-list-heading');
	infoUl3Li.innerHTML = '<h2 class="sidebar-list-heading" title="View some more images of this piece">RELATED IMAGES</h2>';
	infoUl3.appendChild(infoUl3Li);

	// add the columns to the grid

	// add things to the leftDiv
	leftDiv.appendChild(heroDiv);
	console.log(nav);

	if( (nav != 'studio') && (nav != 'news') ) {
		leftDiv.appendChild(infoDiv);
	}

	// add the left div to the wrapDiv
	wrapDiv.appendChild(leftDiv);

	// create the right div
	var rightDiv = document.createElement('div');
	rightDiv.setAttribute('class', 'right');
	rightDiv.setAttribute('id', 'right');

	// add the nav div
	var navDiv = document.createElement('div');
	navDiv.setAttribute('class', 'module-nav bg-3');
	navDiv.setAttribute('id', nav.toLowerCase() + '-additional');

	// add the nav div sub-header
	var navSubHeaderDiv = document.createElement('h3');
	navSubHeaderDiv.setAttribute('class', 'sub-header');
	navSubHeaderDiv.innerHTML = 'Additional ' + nav;
	navDiv.appendChild(navSubHeaderDiv);

	// add the nav div list
	var navList = document.createElement('ul');
	navList.setAttribute('class', 'module-list');

	// append navDiv to the navList
	navDiv.appendChild(navList);

	// add things to the rightDiv
	rightDiv.appendChild(navDiv);

	// add the right div to the wrapDiv
	wrapDiv.appendChild(rightDiv);

	// add it all to the module
	module.appendChild(wrapDiv);
	worksDiv.appendChild(module);
}

function relatedWorks() {
	for(var i = 0; i < dataArr.length; i++ ) {
		var data = JSON.parse(localStorage.getItem( dataArr[i].toLowerCase() ) );
		if(data.length > 0) {
			displayAddtnlWork(dataArr[i], data);
		}
	}
}

function displayAddtnlWork(module, data) {
	console.log( data );
	var module = module.toLowerCase();
	var id = '#' + module + '-additional';
	var mod = $( id );
	var blammo = $(module + '.module-list');

	for(var i = 0; i < data.length; i++ ) {
		var listItem = document.createElement('li');
		if( module === 'studio' ) {
			var imgPath = 'img/studio/';''
			var imgSuff = '_m.jpg';
		} else {
			var imgPath = 'img/works/';''
			var imgSuff = '_m-0.jpg';
		}
		var imgId = data[i].id;
		var imgNum = data[i].images;

		listItem.setAttribute('class', 'list-item');
		listItem.setAttribute('id', imgId);
		if( module === 'studio' ) {
			listItem.setAttribute('style', 'background-image: url("' + imgPath + imgId + imgSuff + '")');
		} else if( module === 'news' ) {
			listItem.setAttribute('style', 'background-image: none');
		} else {
			listItem.setAttribute('style', 'background-image: url("' + imgPath + imgId + imgSuff + '")');
		}
		listItem.setAttribute('data-id', i);

		mod[0].children[1].appendChild( listItem );
	}
}



function getClickedAddtl() {
	$('.module-list .list-item').click(function() {
		var section = $(this).parents('.module.group').attr('id');
		var section = section.toLowerCase();
		var id = $(this).attr('id');
		heroImg( section, id );
		heroInfo( section, id );
	});
}

function heroImg( section, id ) {
	// get the hero element
	var idName = '#' + section + '-hero';
	var mod = $( idName );
	// build out the main image
	var imgPath = 'img/works/';''
	var imgId = id;
	var imgNum = 1;
	var imgSuff = '_l-0.jpg';
	// make sure we're doing this for sections with images
	if(imgNum != undefined) {
		// create the hero image
		var heroImg = document.createElement('img');
		heroImg.setAttribute('class', 'main-image');
		heroImg.setAttribute('src', imgPath + imgId + imgSuff);
		// clear the hero image
		mod[0].innerHTML = '';
		// append the hero image
		mod[0].appendChild( heroImg );
	}
}

function heroInfo( section, id ) {
	var idName = '#' + section + '-tray';
	var mod = $( idName );

	var data = JSON.parse(localStorage.getItem( section ) );

	var ulOne = $( mod[0].children[0] );
	var ulTwo = $( mod[0].children[1] );
	var ulThree = $( mod[0].children[2] );

	var liHead = document.createElement('li');
	liHead.setAttribute('class', 'sidebar-list-heading');
	liHead.innerHTML = 'TITLE';

	ulOne[0].appendChild( liHead );
}





function displayNews() {
	var news = document.getElementById('news');
}
