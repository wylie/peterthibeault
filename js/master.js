$(function() {





	/* ************************************************** */
	/* MAKE SIDEBAR SCROLLABALE > 750PX ***************** */
	/* ************************************************** */

		/*
		var winHeight $('.l-left').height()
			
		if( winHeight < '750' ) {
			// do something
		}
		*/
	
	/* ************************************************** */
	/* ************* END MAKE SIDEBAR SCROLLABALE > 750PX */
	/* ************************************************** */










	/* ************************************************** */
	/* CONTACT ERROR/SUCCES MESSAGES ******************** */
	/* ************************************************** */

		var contact = $('#contact .module-main');
		// for problems
		$(contact).children('.submit').on('click', function() {
			$(contact).find('.error').delay(3000).fadeOut(500);
		});
		// for no problems
		$(document).ready(function(){
			$(contact).find('.success').delay(3000).fadeOut(500);
		});
	
	/* ************************************************** */
	/* **************** END CONTACT ERROR/SUCCES MESSAGES */
	/* ************************************************** */










	/* ************************************************** */
	/* NAV HIGHLIGHTS *********************************** */
	/* ************************************************** */
	
		// look for a click on an item in the nav list
		$('.nav-list').find('.item').on('click', function() {
			// add the .active class to the clicked item, remove it from the rest
			$(this).siblings().removeClass('active').end().addClass('active');
		});
		
	/* ************************************************** */
	/* ******************************* END NAV HIGHLIGHTS */
	/* ************************************************** */










	/* ************************************************** */
	/* RELATED NAV HIGHLIGHTS *************************** */
	/* ************************************************** */
	
		// add the active class to the first item in the related images section
		$('.related').find('.sidebar-list-item:nth-child(1)').addClass('active');

		// look for a click on a thumbnail in the related images section
		$(module).ready(function() {
			$('.related').find('.sidebar-list-item').on('click', function() {
				// add the .active class to the clicked related images section, remove it from the rest
				$(this).siblings().removeClass('active').end().addClass('active');
				console.log('active');
			});
		});
	
	/* ************************************************** */
	/* *********************** END RELATED NAV HIGHLIGHTS */
	/* ************************************************** */










	/* ************************************************** */
	/* RELATED IMAGE ************************************ */
	/* ************************************************** */

		var module =  $('.module[data-kind="work"]');
		$(module).ready(function() {

			$.each(module, function() {
				
				var rItem = $(this).find('.module-list .list-item:nth-child(1)');	
				var imgFull =  $(rItem).data('mainimage');
				var numRelated =  $(rItem).data('related'); 
				var $leftSide = $(rItem).parents('.right').siblings('.left');
				var section = $leftSide.parents('.module').data('section');
				var lItem = $leftSide.find('.related');	
				$leftSide.find('.related').attr('data-number',numRelated);
				
				if(imgFull) {
					
					var fullSplit = imgFull.split('.');
					var fullName = fullSplit[2].split('_');
					var path = '..' + fullName[0];
					var size = '_s';
					var ext = '.' + fullSplit[fullSplit.length-1];
					for(var i = 1; i <= numRelated; i++) {
						var list = '<li class="sidebar-list-item extra"><a href="#' + section + '" style="background-image: url(' + path + '_' + i + size + ext + ');"></a></li>';
						$(lItem).append(list);
					}
				}
			});
		});
			
		$('.module[data-kind="work"] .list-item').on('click',function(event){
		
			var imgFull =  $(this).attr('data-mainimage'),
				numRelated =  $(this).attr('data-related'); 
				$leftSide = $(this).parents('.right').siblings('.left');
				var section = $leftSide.parents('.module').data('section');
			
			$leftSide.find('.related').attr('data-number',numRelated);

			var fullSplit = imgFull.split('.');
				fullName = fullSplit[2].split('_');
				
				path = '..' + fullName[0];
				size = '_s';
				ext = '.' + fullSplit[fullSplit.length-1];

			// clear the extra related images
			var $extraRel = $leftSide.find('.extra');
			$extraRel.remove();
			
			if(numRelated == 0) {
				for(var i = 0; i <= numRelated; i++) {
					var list = '<li class=" sidebar-list-item extra active"><a href="#' + section + '" style="background-image: url(' + path + '_' + i + size + ext + ');"></a></li>';
					$(this).parents('.right').siblings('.left').find('.related').html(list);
				}				
			}
			if(numRelated > 0) {
				for(var i = 0; i <= numRelated; i++) {
					var list = '<li class=" sidebar-list-item extra"><a href="#' + section + '" style="background-image: url(' + path + '_' + i + size + ext + ');"></a></li>';
					$(this).parents('.right').siblings('.left').find('.related').append(list);
				}				
			}
		});
	
	/* ************************************************** */
	/* ************************************ RELATED IMAGE */
	/* ************************************************** */










	/* ************************************************** */
	/* MAIN AND RELATED IMAGE SWAP ********************** */
	/* ************************************************** */
	
		$(module).ready(function() {
	
			// notice click of a related item thumbnail
			$(document).on('click', '.sidebar-list-item', function() {
				var relatedImg = $(this).children('a').css('background-image');
					relatedImgSpltB = relatedImg.split('/');
					relatedImgSpltC = relatedImgSpltB[5].split('_s');
					relatedImgSpltD = relatedImgSpltC[1].split(')');
					mainImgBg = '../' + relatedImgSpltB[3] + '/' + relatedImgSpltB[4] + '/' + relatedImgSpltC[0] + '_l' + relatedImgSpltD[0];
					mainImgLoc = $(this).parents('.left').find('.main-image');
				$(mainImgLoc).attr('src',mainImgBg);
				
				$(this).addClass('active').siblings().removeClass('active');
	
			});
		});
		
		
	
	/* ************************************************** */
	/* ****************** END MAIN AND RELATED IMAGE SWAP */
	/* ************************************************** */










	/* ************************************************** */
	/* ADDITIONAL WORKS ACTIVE ************************** */
	/* ************************************************** */
	
		// add the active class to the first item in the additional works nav
		$('.module-list').find('.list-item:first-child').addClass('active');

		// look for a click on a thumbnail in the additional works nav
		$('.module-list').find('.list-item').on('click', function() {
			$(this).siblings().removeClass('active').end().addClass('active');
			$(this).parent('.right').siblings('.left').find('.sidebar-list-item:first-child').addClass('active');
		});
	
	/* ************************************************** */
	/* ********************** END ADDITIONAL WORKS ACTIVE */
	/* ************************************************** */










	/* ************************************************** */
	/* LOAD THE RESUME ********************************** */
	/* ************************************************** */
	
		// load the resume from the external file
		$.get('resume-raw.php', function(data) {
			$('.module-main .cv').html(data);
			$('.cv').find('font').removeAttr('size');
		});

	/* ************************************************** */
	/* ****************************** END LOAD THE RESUME */
	/* ************************************************** */










	/* ************************************************** */
	/* AVAILABLE EMAIL STUFF **************************** */
	/* ************************************************** */
	
		// load the resume from the external file
		$('.sidebar-header .sidebar-list-heading').on('click', function() {
			// get the info bit clicked, and the section it refers to
			var workInfo = $(this).data('sidebar');
				workInfoExp = $(this).parent('.sidebar-header').siblings('.sidebar-item').children('.' + workInfo);
			// slide down the section
			$(workInfoExp).slideToggle(250);
		});
	
	/* ************************************************** */
	/* ************************ END AVAILABLE EMAIL STUFF */
	/* ************************************************** */










	/* ************************************************** */
	/* DROP DOWN SIDEBAR STUFF ************************** */
	/* ************************************************** */
	
		// load the resume from the external file
		$('.sidebar-header .sidebar-list-heading').on('mouseDown', function() {
			// get the info bit clicked, and the section it refers to
			var workInfo = $(this).data('sidebar');
				workInfoExp = $(this).parent('.sidebar-header').siblings('.sidebar-item').children('.' + workInfo);
			// slide down the section
			$(workInfoExp).slideDown(250);
		});
	
	/* ************************************************** */
	/* ********************** END DROP DOWN SIDEBAR STUFF */
	/* ************************************************** */










	/* ************************************************** */
	/* ID AND IMAGE STUFF ******************************* */
	/* ************************************************** */

		$(".module-list .list-item").on('click',function(event){
			// get the data-id
			var thisID =  $(this).attr('data-id'), 
				thisSection =  $(this).parents('.module').attr('data-section'),
				thisWorkname =  $(this).attr('data-workname'),
				thisYear =  $(this).attr('data-year'),
				thisContent =  $(this).attr('data-content'),
				thisImage =  $(this).attr('data-mainimage'), 
				thisMedia =  $(this).attr('data-media'), 
				thisDesc =  $(this).attr('data-desc'), 
				thisDD =  $(this).attr('data-dd'), 
				thisDW =  $(this).attr('data-dw'), 
				thisDH =  $(this).attr('data-dh'), 
				thisAvailable =  $(this).attr('data-available'), 
				thisRelated =  $(this).attr('data-related'), 
				thisDate =  $(this).attr('data-date'),
				$leftSide = $(this).parents('.right').siblings('.left');
				$leftSideInfo = $(this).parents('.right').siblings('.left').find('.sidebar-list');
				
				//console.log(thisImage);

			$leftSide.attr('data-id', thisID);
			$leftSide.children('.module-main').find('.main-image').attr('src', thisImage);

			//console.log( $leftSide.children('.module-main').find('.main-image').attr('src', thisImage) );

			$leftSide.children('.module-main').find('.text').text(thisContent);
			$leftSide.children('.module-main').find('.display-date').text(thisDate);

			$leftSideInfo.children('[data-info="name"]').text(thisWorkname);
			$leftSideInfo.children('[data-info="year"]').text(thisYear);
			$leftSideInfo.children('[data-info="media"]').text(thisMedia);
			$leftSideInfo.children('[data-info="description"]').text(thisDesc);
			$leftSideInfo.find('.sidebar-list-item span[data-info="depth"]').text(thisDD);
			$leftSideInfo.find('[data-info="width"]').text(thisDW);
			$leftSideInfo.children('[data-info="height"]').text(thisDH);

			$leftSide.find('.related').attr('data-number',thisRelated);//.text(thisRelated);
			
			$leftSide.find('.sidebar-header a').attr('href','mailto:tbowdsign@verizon.net?subject=Work inquiry: ' + thisWorkname + ' (' + thisSection + ')&body=I am inquiring about a ' + thisSection + ' listed on your website. The name of it is: ' + thisWorkname);
			//console.log( thisContent );//.data('available').attr('href') );
			
			//$leftSide.children();

		});
	
	/* ************************************************** */
	/* *************************** END ID AND IMAGE STUFF */
	/* ************************************************** */





});
