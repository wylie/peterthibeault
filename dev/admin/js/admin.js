$(function() {





	/* ************************************************** */
	/* COOKIE ******************************************* */
	/* ************************************************** */

		$('.login').on('click', function() {
			
			$.cookie('admin', 'bananas', { expires: 7, path: '/' });
			
			var cookieVal = $.cookie('admin'); // => "the_value"
			
			//var cookieVal = $.cookie('not_existing'); // => null
			
			console.log(cookieVal);
			
		});
		

	/* ************************************************** */
	/* *************************************** END COOKIE */
	/* ************************************************** */










	/* ************************************************** */
	/* FILTER WORKS ************************************* */
	/* ************************************************** */

		// filter by section
		$('.filter').children('input').change(function() {
			var filterID = $(this).attr('id');
			$('.content').addClass('hidden').siblings('.' + filterID).removeClass('hidden');

			if(filterID === 'all') {
				$('.content').removeClass('hidden');//.addClass('visible');
			}
		});
		
		// filter by name, media, year
		$('.filter-more input').keyup(function() {
		
			var fId = $(this).attr('id');
			var fVal = $(this).val();
			var $con = $('.content');
			
			$.each($con, function() {
				var conWorkname = $(this).find('[name="workname"]').attr('value');
				var conYear = $(this).find('[name="year"]').attr('value');
				var conMedia = $(this).find('[name="media"]').attr('value');
				
				if( fVal === conWorkname ) {
					vconsole.log( 'name' );
					$(this).removeClass('hidden').siblings('.content').addClass('hidden');
				}
				if( fVal === conYear ) {
					console.log( 'year' );
					$(this).removeClass('hidden').siblings('.content').addClass('hidden');
				}
				if( fVal === conMedia ) {
					console.log( 'media' );
					$(this).removeClass('hidden').siblings('.content').addClass('hidden');
				}
				
			});
			
		});

	/* ************************************************** */
	/* ********************************* END FILTER WORKS */
	/* ************************************************** */










	/* ************************************************** */
	/* LOAD RESUME ************************************** */
	/* ************************************************** */

		$(function() {
			$.get('../../resume-raw.php', function(data) {
				console.log('data = ' + data);
				$('[data-page="resume"] [name="content"]').html(data);
			});
		});

	/* ************************************************** */
	/* ********************************** END LOAD RESUME */
	/* ************************************************** */










	/* ************************************************** */
	/* ADD WORKS, WAITING ******************************* */
	/* ************************************************** */

		var addBtn = $('.admin').data('page', 'works-add').find('.upload');
		//console.log(addBtn);
		$(addBtn).on('click', function() {
			//console.log('boom');
			$(this).after('<div style="display: inline-block;vertical-align: bottom;">Please wait, your image is uploading...</div>');
		});

	/* ************************************************** */
	/* *************************** END ADD WORKS, WAITING */
	/* ************************************************** */










	/* ************************************************** */
	/* CHECK FOR SECTIONS ******************************* */
	/* ************************************************** */
	
		$('.admin[data-page="works-add"] input').change(function() {
			
			if( $('.admin[data-page="works-add"] input').is(':checked') ) {
				$(this).parents('.works-edit').siblings('.button.primary-action').removeAttr('disabled');
			} else {
				$(this).parents('.works-edit').siblings('.button.primary-action').attr('disabled','disabled');
			}
		});

	/* ************************************************** */
	/* *************************** END CHECK FOR SECTIONS */
	/* ************************************************** */










	/* ************************************************** */
	/* EDIT SECTIONS ************************************ */
	/* ************************************************** */

		/*
		$('input[name="section[]"]').change(function() {
			//var oldSections = $(this).parents('.content').attr('data-sections');
			var oldSections = $(this).parents('.content').data('sections');
				newSection = $(this).val();
				finalSections = oldSections + ',' + newSection;
				newSection = $(this).val();
			
			console.log(oldSections);
		
			if( $(this).attr('checked') ) {
				$(this).parents('.content').data('sections', finalSections);
				console.log('booyah ' + newSection);
			} else {
				$(this).parents('.content').removeData(newSection);
				console.log('nopee ' + newSection);
			}
		});
		*/

	/* ************************************************** */
	/* ******************************** END EDIT SECTIONS */
	/* ************************************************** */










	/* ************************************************** */
	/* DELETE/SAVE WORKS ******************************** */
	/* ************************************************** */

		/*
		$('.works-edit').find('.button').on('click', function() {
			var theseClasses = $(this).attr('class');
				thisClass = theseClasses.split(' ');
				thisClass = thisClass[0];
				
				$path = $(this).parent('.works-edit').prev('.module-sidebar');
	
				confirmTxt = 'Are you positive you want to ' + thisClass + ' this entry?\n\nThere is no going back, once you ' + thisClass + ' it the old information will be gone.';
				
				works_entry_id_class = $(this).parent('.works-edit').attr('id');
				works_entry_id = works_entry_id_class.split('-');
				works_entry_id = works_entry_id[1];
				section = $(this).parents('.content').attr('data-sections');
				title = $path.find('[name="workname"]').val();
				media = $path.find('[name="media"]').val();
				description = $path.find('[name="description"]').val();
				dimension_d = $path.find('[name="dimension_d"]').val();
				dimension_w = $path.find('[name="dimension_w"]').val();
				dimension_h = $path.find('[name="dimension_h"]').val();
				available = $path.find('#available').val();
				price = $path.find('[name="price"]').val();
									
				console.log(section);					
				//console.log(section[1]);					
	
			if(confirm(confirmTxt)) {
	
				if(thisClass === 'save'){
	
					// send the selected work to the php file
					$.post('works-save.php', {
							'id': works_entry_id,
							'section': section,
							'workname': title,
							'media': media,
							'description': description,
							'dimension_d': dimension_d,
							'dimension_w': dimension_w,
							'dimension_h': dimension_h,
							'available': available,
							'price': price
						}, function() {
							location.reload();
					});
	
				} else {
	
					// send the selected work to the php file
					$.post('works-delete.php', {'id': works_entry_id}, function() {
						location.reload();
					});
				} // end of thisClass
			} // end of confirm
		});
		*/

	/* ************************************************** */
	/* **************************** END DELETE/SAVE WORKS */
	/* ************************************************** */










	/* ************************************************** */
	/* FADE IN SAVE BUTTON ****************************** */
	/* ************************************************** */

		/*
		$('.work').on('mousedown', function() {
			$(this).find('.works-edit:last-child .button').fadeIn(500);
		});
		
		// remove the price section if not available
		$('#available').change(function() {
			var available = $('#available option:selected').val();
			if(available == 'yes') {
				$('.price').slideDown(500);
			}
			if(available == 'no') {
				$('.price').slideUp(250);
			}
		});
		*/

	/* ************************************************** */
	/* ************************** END FADE IN SAVE BUTTON */
	/* ************************************************** */





});