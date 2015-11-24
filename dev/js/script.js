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
	getFirst();
}

// CAPITALIZE FIRST LETTER OF A STRING
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// CONVERT A STRING TO LOWERCASE
function allLowerCase(string) {
  return string.toLowerCase();
}

// LOAD IN THE CV
$(function() {
	$('#cv .cv').load('resume-raw.php');
});

// DISPLAY FIRST FURNISHINGS
function getFirst() {
	for(var i = 0; i < dataArr.length; i++) {
		var data = JSON.parse(localStorage.getItem( dataArr[i].toLowerCase() ) );
		if( data.length > 0 ) {
			var addtnl = document.getElementById(dataArr[i] + '-additional').children[1];
			var firstChild = $(addtnl).children('.list-item:first-child');
			$(firstChild).addClass('active');
			var id = firstChild[0].attributes[1].nodeValue;

			heroImg( dataArr[i], id, 0 );
			heroInfo( dataArr[i], id, 0 );
			heroRelated( dataArr[i], id, 0 );
		}
	}
};

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
	heroDiv.setAttribute('class', 'module-main bg-3');
	heroDiv.setAttribute('id', nav.toLowerCase() + '-hero');

	// create the container for the hero images
	var infoDiv = document.createElement('div');
	infoDiv.setAttribute('class', 'module-info grid bg-3 group');
	infoDiv.setAttribute('id', nav.toLowerCase() + '-tray');

	// create a list for the first column
	var infoUl1 = document.createElement('ul');
	infoUl1.setAttribute('class', 'sidebar-items-list group col4');

	infoUl1.innerHTML = '<li class="sidebar-header"><h2 class="sidebar-list-heading" title="Learn more about this piece">INFO</h2></li><li class="sidebar-list-heading">TITLE</li><li data-info="name" class="sidebar-list-item"></li><li class="sidebar-list-heading">MEDIA</li><li data-info="media" class="sidebar-list-item"></li><li class="sidebar-list-heading">DESCRIPTION</li><li data-info="description" class="sidebar-list-item"></li><li class="sidebar-list-heading">DIMENSIONS</li><li data-info="dimension" class="sidebar-list-item"><span data-info="height">&#34</span> H x <span data-info="width">&#34</span> W x <span data-info="depth">&#34</span> D</li>';

	infoDiv.appendChild(infoUl1);

	// create a list for the first column
	var infoUl2 = document.createElement('ul');
	infoUl2.setAttribute('class', 'sidebar-items-list group col4');
	infoDiv.appendChild(infoUl2);

	var infoUl2Li = document.createElement('li');
	infoUl2Li.setAttribute('class', 'sidebar-header');
	infoUl2Li.innerHTML = '<a href="#" target="_blank" class="sidebar-list-heading" title="Send me an email">AVAILABLE</a>';
	infoUl2.appendChild(infoUl2Li);

	// create a list for the first column
	var infoUl3 = document.createElement('ul');
	infoUl3.setAttribute('class', 'related sidebar-items-list group col4');
	infoDiv.appendChild(infoUl3);

	var infoUl3Li = document.createElement('li');
	infoUl3Li.setAttribute('class', 'sidebar-header');
	infoUl3Li.innerHTML = '<h2 class="sidebar-list-heading" title="View some more images of this piece">RELATED IMAGES</h2>';
	infoUl3.appendChild(infoUl3Li);

	// add things to the leftDiv
	leftDiv.appendChild(heroDiv);

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

function displayCV() {

}

function displayAddtnlWork(module, data) {
	var module = module.toLowerCase();
	var id = '#' + module + '-additional';
	var mod = $( id );
	var blammo = $(module + '.module-list');

	for(var i = 0; i < data.length; i++ ) {
		var listItem = document.createElement('li');
		// do different stuff for different modules
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
		// do different stuff for different modules
		if( module === 'studio' ) {
			var data = JSON.parse(localStorage.getItem( module.toLowerCase() ) );

			var date = new Date(data[i].date);
			var day = (date.getDate() + 1).toString();
			var monthNum = date.getMonth();
			var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
			for(var j = 0; j < monthNames.length; j++ ) {
				var month = monthNames[monthNum];
			}
			var year = (date.getFullYear()).toString();
			var year = year.slice(-2);
			var studioDate = day + month + year;


			listItem.setAttribute('style', 'background-image: url("' + imgPath + imgId + imgSuff + '")');
			listItem.setAttribute('data-id', i);
			listItem.innerHTML = studioDate;

			mod[0].children[1].appendChild( listItem );
		} else if( module === 'news' ) {
			var data = JSON.parse(localStorage.getItem( module.toLowerCase() ) );

			var date = new Date(data[i].date);
			var day = (date.getDate() + 1).toString();
			var monthNum = date.getMonth();
			var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
			for(var j = 0; j < monthNames.length; j++ ) {
				var month = monthNames[monthNum];
			}
			var year = (date.getFullYear()).toString();
			var year = year.slice(-2);
			var newsDate = day + month + year;

			listItem.innerHTML = newsDate;
			listItem.setAttribute('style', 'background-image: none');
			listItem.setAttribute('data-id', i);

			mod[0].children[1].insertBefore( listItem, mod[0].children[1].firstChild );

		} else {
			listItem.setAttribute('style', 'background-image: url("' + imgPath + imgId + imgSuff + '")');
			listItem.setAttribute('data-id', i);

			mod[0].children[1].appendChild( listItem );
		}
	}
}



function getClickedAddtl() {
	$('.module-list .list-item').click(function() {
		$(this).addClass('active');
		var section = $(this).parents('.module.group').attr('id');
		var section = section.toLowerCase();
		var id = $(this).attr('id');
		var index = $(this).attr('data-id');
		heroImg( section, id, index );
		heroInfo( section, id, index );
		replaceRelated( section, id, index );
	});
}

function heroImg( section, id, index ) {
	// get the hero element
	var idName = '#' + section + '-hero';
	var mod = $( idName );
	// build out the main image
	// do different stuff for different modules
	if( section === 'studio' ) {
		var data = JSON.parse(localStorage.getItem( section.toLowerCase() ) );

		var date = new Date(data[index].date);
		var day = (date.getDate() + 1).toString();
		var monthNum = date.getMonth();
		var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
		for(var j = 0; j < monthNames.length; j++ ) {
			var month = monthNames[monthNum];
		}
		var year = (date.getFullYear()).toString();
		var year = year.slice(-2);
		var studioDate = day + month + year;

		var heroSpan = document.createElement('span');
		heroSpan.setAttribute('class', 'display-date');
		heroSpan.innerHTML = studioDate;

		var imgPath = 'img/studio/';''
		var imgSuff = '_l.jpg';
		var imgId = id;
		var imgNum = 1;
		// create the hero image
		var heroImg = document.createElement('img');
		heroImg.setAttribute('class', 'main-image');
		// do different stuff for different modules
		if( section === 'studio' ) {
			heroImg.setAttribute('src', imgPath + imgId + imgSuff);
		} else if ( section === 'news' ) {
			// console.log('news');
		} else {
			heroImg.setAttribute('src', imgPath + imgId + imgSuff);
		}
		// clear the hero image
		mod[0].innerHTML = '';
		// append the hero image
		mod[0].appendChild( heroSpan );
		mod[0].appendChild( heroImg );
	} else if ( section === 'news' ) {
		var data = JSON.parse(localStorage.getItem( section.toLowerCase() ) );

		var date = new Date(data[index].date);
		var day = (date.getDate() + 1).toString();
		var monthNum = date.getMonth();
		var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
		for(var j = 0; j < monthNames.length; j++ ) {
			var month = monthNames[monthNum];
		}
		var year = (date.getFullYear()).toString();
		var year = year.slice(-2);
		var newsDate = day + month + year;

		mod[0].innerHTML = '<div class="text">' + data[index].description  + '</div><div class="display-date">' + newsDate + '</div>';
		return;
	} else {
		var imgPath = 'img/works/';''
		var imgSuff = '_l-0.jpg';

		var imgId = id;
		var imgNum = 1;
		// make sure we're doing this for sections with images
		if(imgNum != undefined) {
			// create the hero image
			var heroImg = document.createElement('img');
			heroImg.setAttribute('class', 'main-image');
			// do different stuff for different modules
			if( section === 'studio' ) {
				heroImg.setAttribute('src', imgPath + imgId + imgSuff);
			} else if ( section === 'news' ) {
				// console.log('news');
			} else {
				heroImg.setAttribute('src', imgPath + imgId + imgSuff);
			}
			// clear the hero image
			mod[0].innerHTML = '';
			// append the hero image
			mod[0].appendChild( heroImg );
		}

	}
}

function heroInfo( section, id, index ) {
	var data = JSON.parse(localStorage.getItem( section.toLowerCase() ) );

	var title = $( '#' + section + '-tray [data-info="name"]' );
	var media = $( '#' + section + '-tray [data-info="media"]' );
	var desription = $( '#' + section + '-tray [data-info="description"]' );
	var height =  $( '#' + section + '-tray [data-info="height"]' );
	var width =  $( '#' + section + '-tray [data-info="width"]' );
	var depth =  $( '#' + section + '-tray [data-info="depth"]' );

	title[0].innerHTML = data[index].title;
	media[0].innerHTML = data[index].media;
	desription[0].innerHTML = data[index].desription;
	height[0].innerHTML = data[index].dimension_h;
	width[0].innerHTML = data[index].dimension_w;
	depth[0].innerHTML = data[index].dimension_d;
}

function heroRelated( section, id, index ) {
	var data = JSON.parse(localStorage.getItem( section.toLowerCase() ) );
	var tray = $( '#' + section + '-tray');
	var relatedImages = tray.children('.sidebar-items-list:last-child');

	for(var i = 0; i < data[index].images; i++ ) {
		var li = document.createElement('li');
		if( i === 0 ) {
			li.setAttribute('class', 'sidebar-list-item active');
		} else {
			li.setAttribute('class', 'sidebar-list-item');
		}
		var href = document.createElement('a');
		href.setAttribute('href', '#' + section);
		href.setAttribute('style', 'background-image: url(../img/works/' + id + '_s-' + i + '.jpg);');
		li.appendChild(href);
		relatedImages[0].appendChild(li);
	}
	getClickedRelated(section, id);
}

function getClickedRelated(section, id) {
	$('.related a').click(function() {
		var tst = $(this);
		var tst = tst[0].style.backgroundImage;
		var tst = tst.split('/');
		var tst = tst[5].split('.');
		var tst = tst[0].split('-');
		heroImgRelated( section, id, tst[1] );
		return;
	});
}

function heroImgRelated(section, id, tst) {
	var hero = document.getElementById( section + '-hero' );
	hero.innerHTML = '';
	var img = document.createElement('img');
	img.setAttribute('class', 'main-image');
	img.setAttribute('src', 'img/works/' + id + '_l-' + tst + '.jpg')
	hero.appendChild(img);
}

function replaceRelated( section, id, index ) {
	var tray = document.getElementById( section + '-tray' );
	var relatedImages = $(tray).children('.related');
	$(relatedImages[0]).children().not(':first').remove();
	heroRelated( section, id, index );
}




function displayNews() {
	var news = document.getElementById('news');
}
