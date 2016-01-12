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
	openTray();
	getFirst();
	email();
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
			a.setAttribute('class', 'nav__item-link');
			// add the link to the anchor on the page
			a.setAttribute('href', '#' +  dataArr[i].toLowerCase() );
			// give the link a title
			a.setAttribute('title', 'View My ' + dataArr[i]);
			// append the link to the li
			li.appendChild(a);
			// git the list-item a class
			li.setAttribute('class', 'nav__item');
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
		a.setAttribute('class', 'nav__item-link');
		// add the link to the anchor on the page
		a.setAttribute('href', '#' +  extraNav[i].toLowerCase() );
		// give the link a title
		a.setAttribute('title', extraNav[i]);
		// append the link to the li
		li.appendChild(a);
		// git the list-item a class
		li.setAttribute('class', 'nav__item');
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
	// module.setAttribute('class', 'section module group');
	module.setAttribute('class', 'section module');

	module.setAttribute('id', nav.toLowerCase() );
	var anchor = document.createElement('a');
	anchor.setAttribute('name', nav.toLowerCase() );
	module.appendChild(anchor);

	// heading
	var h2 = document.createElement('h2');
	h2.setAttribute('class',  'section__header header');
	h2.innerHTML = nav.toUpperCase();
	module.appendChild(h2);

	// wrap module div
	var wrapDiv = document.createElement('div');
	wrapDiv.setAttribute('class', 'section__wrap module-wrap');

	// create the left div
	var leftDiv = document.createElement('div');
	leftDiv.setAttribute('class', 'main left');
	leftDiv.setAttribute('id', 'left');

	// create the container for the hero images
	var heroDiv = document.createElement('div');
	heroDiv.setAttribute('class', 'main__img module-main');
	heroDiv.setAttribute('id', nav.toLowerCase() + '-hero');

	// create the container for the hero images
	var infoDiv = document.createElement('div');
	infoDiv.setAttribute('class', 'main__info-tray tray module-info grid closed');
	infoDiv.setAttribute('id', nav.toLowerCase() + '-tray');

	// create a list for the first column
	var infoUl1 = document.createElement('ul');
	infoUl1.setAttribute('class', 'tray__list sidebar-items-list col4');

	infoUl1.innerHTML = '<li class="tray__list-heading sidebar-header"><h2 class="tray__list-heading-header tray__list__list-item_heading sidebar-list-heading" title="Learn more about this piece">INFO</h2></li><li class="tray__list__list-item_heading sidebar-list-heading">TITLE</li><li class="tray__list__list-item sidebar-list-item" data-info="name"></li><li class="tray__list__list-item_heading sidebar-list-heading">MEDIA</li><li class="tray__list__list-item sidebar-list-item" data-info="media"></li><li class="tray__list__list-item_heading sidebar-list-heading">DESCRIPTION</li><li class="tray__list__list-item sidebar-list-item" data-info="description"></li><li class="tray__list__list-item_heading sidebar-list-heading">DIMENSIONS</li><li class="tray__list__list-item sidebar-list-item" data-info="dimension"><span data-info="height">&#34</span> H x <span data-info="width">&#34</span> W x <span data-info="depth">&#34</span> D</li>';

	infoDiv.appendChild(infoUl1);

	// create a list for the first column
	var infoUl2 = document.createElement('ul');
	infoUl2.setAttribute('class', 'tray__list sidebar-items-list col4');
	infoDiv.appendChild(infoUl2);

	var infoUl2Li = document.createElement('li');
	infoUl2Li.setAttribute('class', 'tray__list-heading sidebar-header');
	if( data[0].available === true ) {
		infoUl2Li.innerHTML = '<a href="mailto:tbowdsign@verizon.net?subject=Work inquiry: ' + data[0].title + ' (' + nav + ')&amp;body=I am inquiring about a ' + nav + ' listed on your website. The name of it is: ' + data[0].title + '" class="sidebar-list-heading" data-sidebar="available" title="Send me an email">AVAILABLE</a>';
	} else {
		infoUl2Li.innerHTML = '';
	}
	infoUl2.appendChild(infoUl2Li);

	// create a list for the first column
	var infoUl3 = document.createElement('ul');
	infoUl3.setAttribute('class', 'tray__list related sidebar-items-list col4');
	infoDiv.appendChild(infoUl3);

	var infoUl3Li = document.createElement('li');
	infoUl3Li.setAttribute('class', 'tray__list-heading sidebar-header');
	infoUl3Li.innerHTML = '<h2 class="tray__list-heading-header sidebar-list-heading" title="View some more images of this piece">RELATED IMAGES</h2>';
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
	rightDiv.setAttribute('class', 'additional right');
	rightDiv.setAttribute('id', 'right');

	// add the nav div
	var navDiv = document.createElement('div');
	navDiv.setAttribute('class', 'additional__wrap module-nav');
	navDiv.setAttribute('id', nav.toLowerCase() + '-additional');

	// add the nav div sub-header
	var navSubHeaderDiv = document.createElement('h3');
	navSubHeaderDiv.setAttribute('class', 'additional__header sub-header');
	navSubHeaderDiv.innerHTML = 'Additional ' + nav;
	navDiv.appendChild(navSubHeaderDiv);

	// add the nav div list
	var navList = document.createElement('ul');
	navList.setAttribute('class', 'additional__list module-list');

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

		listItem.setAttribute('class', 'additional__list-item list-item');
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
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var section = $(this).parents('.section').attr('id');
		var section = section.toLowerCase();
		var id = $(this).attr('id');
		var index = $(this).attr('data-id');
		var data = JSON.parse(localStorage.getItem( section.toLowerCase() ) );
		if(data[index].available) {
			var sectionTray = document.getElementById( section + '-tray' );
			var availList = $(sectionTray).children(' .sidebar-items-list');
			var availHead = $(availList[1]).children('.sidebar-header');
			availHead[0].innerHTML = '<a href="mailto:tbowdsign@verizon.net?subject=Work inquiry: ' + data[index].title + ' (' + section + ')&amp;body=I am inquiring about a ' + section + ' listed on your website. The name of it is: ' + data[index].title + '" class="sidebar-list-heading" data-sidebar="available" title="Send me an email">AVAILABLE</a>';
		}

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
		var allImg = imgPath + imgId + imgSuff;
		console.log( allImg );
		// create the hero image
		var heroImg = document.createElement('img');
		heroImg.setAttribute('class', 'main__img_img main-image');
		// do different stuff for different modules
		if( section === 'studio' ) {
			heroImg.setAttribute('src', allImg);
		} else if ( section === 'news' ) {
			// console.log('news');
		} else {
			heroImg.setAttribute('src', allImg);
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
		var imgId = id;
		var imgSuff = '_l-0.jpg';
		var imgNum = 1;
		var allImg = imgPath + imgId + imgSuff;

		// make sure we're doing this for sections with images
		if(imgNum != undefined) {
			// create the hero image
			var heroImg = document.createElement('img');
			heroImg.setAttribute('class', 'main__img_img main-image');
			// do different stuff for different modules
			if( section === 'studio' ) {
				heroImg.setAttribute('src', allImg);
			} else if ( section === 'news' ) {
				// console.log('news');
			} else {
				heroImg.setAttribute('src', allImg);
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

	if( section === 'news' ) {
		// do nothing
	} else if( section === 'studio' ) {
		// do nothing
	} else {
		title[0].innerHTML = data[index].title;
		media[0].innerHTML = data[index].media;
		if( data[index].desription === undefined) {
			desription[0].innerHTML = '';
		} else {
			desription[0].innerHTML = data[index].desription;
		}
		height[0].innerHTML = data[index].dimension_h;
		width[0].innerHTML = data[index].dimension_w;
		depth[0].innerHTML = data[index].dimension_d;
	}
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
		li.setAttribute('style', 'background-image: url(img/works/' + id + '_s-' + i + '.jpg);');
		relatedImages[0].appendChild(li);
	}
	getClickedRelated(section, id);
}

function getClickedRelated(section, id) {
	$('.related .sidebar-list-item').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var tst = $(this);
		var tst = tst[0].style.backgroundImage;
		var tst = tst.split('works');
		var tst = tst[1].split('.');
		var tst = tst[0].split('-');
		heroImgRelated( section, id, tst[1] );
	});
}

function heroImgRelated(section, id, tst) {
	var hero = document.getElementById( section + '-hero' );
	hero.innerHTML = '';
	var img = document.createElement('img');
	img.setAttribute('class', 'main__img_img main-image');
	img.setAttribute('src', 'img/works/' + id + '_l-' + tst + '.jpg')
	hero.appendChild(img);
}

function replaceRelated( section, id, index ) {
	var tray = document.getElementById( section + '-tray' );
	var relatedImages = $(tray).children('.related');
	$(relatedImages[0]).children().not(':first').remove();
	heroRelated( section, id, index );
}


function openTray() {
	$('.sidebar-list-heading').click(function() {
		$(this).parents('.module-info').toggleClass('closed');
	});
}

function displayNews() {
	var news = document.getElementById('news');
}

function email() {
	$('#contact .submit').click(function() {
		var emailBox = $(this).parent('.module-main');
		var nameInput = $(emailBox[0]).children('.name').val();
		var emailInput = $(emailBox[0]).children('.email').val();
		var messageInput = $(emailBox[0]).children('.message').val();
		$.post( 'admin/functions/email.php', { name: nameInput, email: emailInput, message: messageInput } );
	});
}
