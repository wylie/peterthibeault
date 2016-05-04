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
	buildNav();
	relatedWorks();
	getClickedAddtl();
	openTray();
	getFirst();
	email();
	getClickedRelated();
	getAvailable();

	$('.module').addClass('hidden');
	$('.module:first-child').removeClass('hidden');

	$('.nav').on('click', '.item .link', function() {
		// console.log( 'BOOM' );
		var it = $(this).attr('href');
		var it = it.split('#');
		var section = it[1];
		console.log( section );
		$('#' + section).removeClass('hidden').siblings('.module').addClass('hidden');
	});

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
	$('#cv .cv').load('resume-raw.html');
});

function showDate(data) {
  var date = new Date(data.date);
  var day = date.getDate().toString();
  var monthNum = date.getMonth();
  var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  var month = monthNames[monthNum];
  var year = (date.getFullYear()).toString();
  var year = year.slice(-2);
  var studioDate = day + month + year;
  return studioDate;
}

// DISPLAY FIRST FURNISHINGS
function getFirst() {
	for(var i = 0; i < dataArr.length; i++) {
		var data = JSON.parse(localStorage.getItem( dataArr[i].toLowerCase() ) );
		if( data.length > 0 ) {
			var addtnl = document.getElementById(dataArr[i] + '-additional').children[1];
			var firstChild = $(addtnl).children('.list-item:first-child');
			$(firstChild).addClass('active');
			var id = firstChild[0].attributes[1].nodeValue;
			if( dataArr[i] === 'news' || dataArr[i] === 'studio') {
				var index = data.length - 1;
				heroImg( dataArr[i], id, index );
			} else {
				heroImg( dataArr[i], id, 0 );
			}
			heroInfo( dataArr[i], id, 0 );
		}
		heroRelated( dataArr[i], id, 0 );
	}
};
// DISPLAY FIRST AVAILABLE FURNISHINGS
function getFirstAvail(module, data) {
	var data = JSON.parse(localStorage.getItem( module ) );
	// TODO bring the next line about no data back into the available works function
	// if( data.length > 0 ) {
	var addtnl = document.getElementById(module + '-additional').children[1];
	var firstChild = $(addtnl).children('.list-item:first-child');
	$(firstChild).addClass('active');
	var id = firstChild[0].attributes[1].nodeValue;
	heroImg( module, id, 0 );
	heroInfo( module, id, 0 );
	heroRelated( module, id, 0 );
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

function getAvailable() {
	var availableWorks = [];
	var nav = document.getElementById('nav');
	var li = document.createElement('li');
	var a = document.createElement('a');
	a.innerHTML = 'Available Work';
	a.setAttribute('class', 'link');
	a.setAttribute('href', '#availableworks');
	a.setAttribute('title', 'View My Available Works!');
	li.appendChild(a);
	li.setAttribute('class', 'item');
	nav.insertBefore( li, nav.firstChild );
	for(var i = 0; i < dataArr.length; i++) {
		switch(dataArr[i]) {
			case 'furnishings':
			case 'sculpture':
			case 'drawing':
			case 'painting':
			case 'design':
				var test = dataArr[i];
				var availableData = JSON.parse(localStorage.getItem( dataArr[i] ));
				for(var j = 0; j < availableData.length; j++) {
					if( availableData[j].available === true ) {
						availableWorks.push(availableData[j]);
					}
				}
				break;
		}
	}
	buildModule('available works', availableWorks);
	localStorage.setItem( 'availableworks', JSON.stringify(availableWorks) );
	displayAddtnlWork( 'availableworks', availableWorks );
	getFirstAvail( 'availableworks', availableWorks );
	var id = '';
	heroRelated( dataArr[i], id, 0 );
}

function buildModule(nav, data) {
	var worksDiv = document.getElementById('works');
	var module = document.createElement('div');
	module.setAttribute('class', 'module group');

	var test = nav.toLowerCase();
	switch(test) {
		case 'furnishings':
		case 'sculpture':
		case 'drawing':
		case 'painting':
		case 'design':
		case 'studio':
		case 'news':
			var test = nav.toLowerCase();
			break;
		case 'available works':
			var test = 'availableworks';
			break;
	}

	module.setAttribute('id', test );
	var anchor = document.createElement('a');
	anchor.setAttribute('name', test );
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
	heroDiv.setAttribute('class', 'module-main bg-3 hero-img');
	heroDiv.setAttribute('id', test + '-hero');
	// create the container for the hero images
	var infoDiv = document.createElement('div');
	infoDiv.setAttribute('class', 'module-info grid bg-3 group closed');
	infoDiv.setAttribute('id', test + '-tray');
	// create a list for the first column
	var infoUl1 = document.createElement('ul');
	infoUl1.setAttribute('class', 'sidebar-items-list group col4');
	infoUl1.innerHTML = '<li class="sidebar-header"><h2 class="sidebar-list-heading" title="Learn more about this piece">INFO</h2></li><li class="sidebar-list-heading">TITLE</li><li class="sidebar-list-item" data-info="name"></li><li class="sidebar-list-heading">MEDIA</li><li class="sidebar-list-item" data-info="media"></li><li class="sidebar-list-heading">DESCRIPTION</li><li class="sidebar-list-item" data-info="description"></li><li class="sidebar-list-heading">DIMENSIONS</li><li class="sidebar-list-item" data-info="dimension"><span data-info="height">&#34</span> H x <span data-info="width">&#34</span> W x <span data-info="depth">&#34</span> D</li>';
	infoDiv.appendChild(infoUl1);
	// create a list for the first column
	var infoUl2 = document.createElement('ul');
	infoUl2.setAttribute('class', 'sidebar-items-list group col4');
	infoDiv.appendChild(infoUl2);

	var infoUl2Li = document.createElement('li');
	infoUl2Li.setAttribute('class', 'sidebar-header');
	if( data[0].available === true ) {
		infoUl2Li.innerHTML = '<a href="mailto:tbowdsign@verizon.net?subject=Work inquiry: ' + data[0].title + ' (' + nav + ')&amp;body=I am inquiring about a ' + nav + ' listed on your website. The name of it is: ' + data[0].title + '" class="sidebar-list-heading" data-sidebar="available" title="Send me an email">CONTACT ME</a>';
	} else {
		infoUl2Li.innerHTML = '';
	}
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
	navDiv.setAttribute('id', test + '-additional');
	// add the nav div sub-header
	var navSubHeaderDiv = document.createElement('h3');
	navSubHeaderDiv.setAttribute('class', 'sub-header');
	if( nav === 'available works') {
		navSubHeaderDiv.innerHTML = nav;
	} else {
		navSubHeaderDiv.innerHTML = 'Additional ' + nav;
	}
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
	if( module.id === 'availableworks') {
		worksDiv.insertBefore( module, worksDiv.firstChild );
		// worksDiv.appendChild(module);
	} else {
		worksDiv.appendChild(module);
	}
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
	// do nothing
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
			var imgPath = data[i].image;
			var fileArr = imgPath.split('.');
			var imgIndex = fileArr.length - 1;
			var imgSuff = fileArr[imgIndex];
			var imgPath = 'img/studio/';''
			var imgSuff = '_l.' + imgSuff;
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
			var studioDate = showDate(data[i]);
			listItem.setAttribute('style', 'background-image: url("' + imgPath + imgId + imgSuff + '")');
			listItem.setAttribute('data-id', i);
			listItem.innerHTML = studioDate;
			mod[0].children[1].insertBefore( listItem, mod[0].children[1].firstChild );
		} else if( module === 'news' ) {
			var data = JSON.parse(localStorage.getItem( module.toLowerCase() ) );
			var newsDate = showDate(data[i]);
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
	$('#works').on('click', '.module-list .list-item', function() {
	// $('.module-list .list-item').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var section = $(this).parents('.module.group').attr('id');
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
		var studioDate = showDate(data[index]);
		var heroSpan = document.createElement('span');
		heroSpan.setAttribute('class', 'display-date');
		heroSpan.innerHTML = studioDate;
		var imgPath = data[index].image;
		var fileArr = imgPath.split('.');
		var imgIndex = fileArr.length - 1;
		var imgSuffix = fileArr[imgIndex];
		var imgPath = 'img/studio/';''
		var imgSuff = '_l.' + imgSuffix;
		var imgId = id;
		var imgNum = 1;
		var allImg = imgPath + imgId + imgSuff;
		// create the hero image
		var heroImg = document.createElement('img');
		heroImg.setAttribute('class', 'main-image');
		// do different stuff for different modules
		if( section === 'studio' ) {
			heroImg.setAttribute('src', allImg);
		} else if ( section === 'news' ) {
			// do nothing
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
		var newsDate = showDate(data[index]);
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
			// do different stuff for different modules
			if( section === 'studio' ) {
				mod[0].setAttribute('src', allImg);
			} else if ( section === 'news' ) {
			} else {
				mod[0].setAttribute('style', 'background-image:url("' + allImg + '");');
			}
			// clear the hero image
			mod[0].innerHTML = '';
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
	switch(section) {
		case 'furnishings':
		case 'sculpture':
		case 'drawing':
		case 'painting':
		case 'design':
		case 'availableworks':
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
				li.setAttribute('data-id', id);
				relatedImages[0].appendChild(li);
			}
			break;
	}
}

function getClickedRelated() {
	$('#works').on('click', '.sidebar-list-item', function() {
		var test = $(this);
		var sec = test[0].parentNode.parentNode.id;
		var secSplit = sec.split('-');
		var section = secSplit[0];
		var id = $(this).data(id);
		// TODO: can't these next two lines be combined?
		$(this).siblings().removeClass('active').addClass('active');
		$(this).addClass('active');
		var tst = $(this);
		var tst = tst[0].style.backgroundImage;
		var tst = tst.split('works');
		var tst = tst[1].split('.');
		var tst = tst[0].split('-');
		heroImgRelated( section, id.id, tst[1] );
	});
}

// this is the function with the issues!
function heroImgRelated(section, id, tst) {
	var hero = document.getElementById( section + '-hero' );
	hero.innerHTML = '';
	var img = document.createElement('img');
	img.setAttribute('class', 'main-image');
	var allImg = 'img/works/' + id + '_l-' + tst + '.jpg';
	img.setAttribute('src', 'img/works/' + id + '_l-' + tst + '.jpg');
	hero.setAttribute('style', 'background-image:url("' + allImg + '");');
}

function replaceRelated( section, id, index ) {
	var tray = document.getElementById( section + '-tray' );
	var relatedImages = $(tray).children('.related');
	$(relatedImages[0]).children().not(':first').remove();
	heroRelated( section, id, index );
}

function openTray() {
	$('#works').on('click', '.sidebar-list-heading', function () {
		$(this).parents('.module-info').toggleClass('closed');
	});
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
