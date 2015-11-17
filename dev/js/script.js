// ARRAYS WE WILL NEED
var dataArr = ['design', 'drawing',	'furnishings', 'news', 'painting', 'sculpture', 'students', 'studio'];
var navArr = [];
var items = [];

// GET THE WORK DATA
workData();

// AFTER THE WINDOW LOADS...
window.onload = init;

// INITITAL FUNCTION
function init() {
	// do the nav stuff
	navData();
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

// GET THE NAV DATA
function navData() {
	$.getJSON( '../admin/data/nav.json', function( data ) {
		$.each( data, function( key, val ) {
			// send off each value of the array to the buildNav function
			buildNav( val );
		});
	});
}

// BUILD THE NAVIGATION
function buildNav(navArr) {
	// loop through the navArr array
	for(var i = 0; i < navArr.length; i++) {
		// get the nav element on the page. it's a list
		var nav = document.getElementById('nav');
		// create an list-item
		var li = document.createElement('li');
		// create a link
		var a = document.createElement('a');
		// capitalize each navArr
		var title = capitalizeFirstLetter( navArr[i] );
		// add the text to the link
		a.innerHTML = title;
		// add a class to the link
		a.setAttribute('class', 'link');
		// add the link to the anchor on the page
		a.setAttribute('href', '#' +  navArr[i].toLowerCase() );
		// give the link a title
		a.setAttribute('title', 'View My ' + capitalizeFirstLetter( navArr[i] ));
		// append the link to the li
		li.appendChild(a);
		// git the list-item a class
		li.setAttribute('class', 'item');
		// append the list-item to the nav list
		nav.appendChild(li);
	}
	prepModules(navArr);
}

function prepModules(navArr) {
	for(var i = 0; i < navArr.length; i++) {
		buildModule( navArr[i] );
		// relatedWorks( navArr[i] );
	}
}

function buildModule(x) {
	// start building things
	var worksDiv = document.getElementById('works');
	var module = document.createElement('div');
	module.setAttribute('class', 'module group');

	module.setAttribute('id', x.toLowerCase() );
	var anchor = document.createElement('a');
	anchor.setAttribute('name', x.toLowerCase() );
	module.appendChild(anchor);

	// heading
	var h2 = document.createElement('h2');
	h2.setAttribute('class',  'header');
	h2.innerHTML = x.toUpperCase();
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
	heroDiv.setAttribute('id', x.toLowerCase() + '-hero');

	// create the container for the hero images
	var infoDiv = document.createElement('div');
	infoDiv.setAttribute('class', 'module-info grid');
	infoDiv.setAttribute('id', x.toLowerCase() + '-tray');

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

	// add the left div to the wrapDiv
	wrapDiv.appendChild(leftDiv);

	if( (x == 'Furnishings' ) || (x == 'Sculpture') || (x == 'Drawing') || (x == 'Painting') || (x == 'Design') || (x == 'Students') || (x == 'Studio') || (x == 'News') ) {
		// create the right div
		var rightDiv = document.createElement('div');
		rightDiv.setAttribute('class', 'right');
		rightDiv.setAttribute('id', 'right');

		// add the nav div
		var navDiv = document.createElement('div');
		navDiv.setAttribute('class', 'module-nav bg-3');
		navDiv.setAttribute('id', x.toLowerCase() + '-additional');

		// add the nav div sub-header
		var navSubHeaderDiv = document.createElement('h3');
		navSubHeaderDiv.setAttribute('class', 'sub-header');
		navSubHeaderDiv.innerHTML = 'Additional ' + x;
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
	}

	// add it all to the module
	module.appendChild(wrapDiv);
	worksDiv.appendChild(module);

	relatedWorks( x );
}

function relatedWorks(x) {
	// get the localStorage data
	var tst = JSON.parse(localStorage.getItem( x.toLowerCase() ) );

	switch ( x ) {
		case 'Furnishings':
		case 'Sculpture':
		case 'Drawing':
		case 'Painting':
		case 'Design':
		case 'Students':
			displayAddtnlWork( x, tst );
			break;
		case 'Studio':
			// buildModule(navArr[i]);
			break;
		case 'News':
			// buildModule(navArr[i]);
			break;
		case 'CV':
			// buildModule(navArr[i]);
			break;
		case 'Contact':
			// buildModule(navArr[i]);
			break;
	}
}

function displayAddtnlWork(x, tst) {
	var x = x.toLowerCase();
	var id = '#' + x + '-additional';
	var mod = $( id );
	var blammo = $(x + '.module-list');

	for(var i = 0; i < tst.length; i++ ) {
		var listItem = document.createElement('li');
		var imgPath = 'img/works/';''
		var imgId = tst[i].id;
		var imgNum = tst[i].images;
		var imgSuff = '_m-0.jpg';

		listItem.setAttribute('class', 'list-item');
		listItem.setAttribute('id', imgId);

		listItem.setAttribute('style', 'background-image: url("' + imgPath + imgId + imgSuff + '")');

		mod[0].children[1].appendChild( listItem );
	}
	getClickedAddtl(x);
}

function getClickedAddtl(x) {
	$('.module-list .list-item').click(function() {
		var section = $(this).parents('.module.group').attr('id');
		// console.log( section );
		var bam = $(this).attr('id');
		heroImg( section, bam );
	});
}

function heroImg( section, bam ) {
	var section = section.toLowerCase();
	var id = '#' + section + '-hero';
	var mod = $( id );
	// get the hero element
	var heroElem = $(section + '-hero');
	// build out the main image
	var imgPath = 'img/works/';''
	var imgId = bam;
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





function displayNews() {
	var news = document.getElementById('news');
	console.log( news );
}
