// our basic init, but handled by RequireJS now
define(['data','delete','display','save'], function (require) {

    // dataTypes();
    var elements = document.getElementsByTagName('body');
    var page = elements[0].id;

    switch(page) {
        case 'works':
            // get data
            getData(['furnishings', 'sculpture', 'drawing', 'painting', 'design', 'students']);
            // display stuff
            displayWorks();
            displayFilterCount();
            // displayLastSaved();

            // FILTER OLD WORKS
            $('#works').on('click', '#filterWorks .label', function() {
                filterWorks( this );
            });

            // --------------------
            // NEW WORK STUFF
            // --------------------
            // grab the new work
            var saveWork = document.getElementById('saveWork');
            // console.log( saveWork );
            // var workImage = document.getElementById('workImage');
            // workImage.addEventListener('change', function() {
                saveWork.removeAttribute('disabled');
                // saveWork.onclick = gatherData;
            // }, false);

            // SAVE
            $('#works').on('click', '#saveWork', function() {
                var id = parseInt( setId( this ) );// will return ID, make sure its a number
                var section = getChosenSection( id ); // get section
                var formData = getFormData( this ); // get form data
                    var work = formData[0]; // new Work object
                    var file = formData[1]; // file data
                if( file ) { // check to see if we have a new file
                    var image = uploadImage( work.id, work.images, file ); // upload the image. returns true if complete
                }
                var localData = JSON.parse(localStorage.getItem( section )); // get the localStorage for this items section
                var index = getIndex( localData, id );
                saveData(id, work, section, index); // send data off to be saved
            });
            // CANCEL
            var cancelWork = document.getElementById('cancelWork');
            cancelWork.onclick = clear;

            // --------------------
            // LAST WORK STUFF
            // --------------------
            // ACTIVATE BUTTONS
            $('#works').on('change', '#lastWork [id^=addRelated-]', function() {
                $(this).parents('form').siblings('.module-save').children('.js-save').prop('disabled', false);
                $(this).parents('form').siblings('.module-save').children('.js-cancel').prop('disabled', false);
            });
            $('#works').on('change', '#lastWork [id^=form-] :input', function() {
                $(this).parent().siblings('.module-save').children('.js-save').prop('disabled', false);
                $(this).parent().siblings('.module-save').children('.js-cancel').prop('disabled', false);
            });
            // SAVE
            $('#works').on('click', '#lastWork .js-save', function() {
                updateOldWork(this);
            });
            // CANCEL
            $('#works').on('click', '#lastWork .js-cancel', function() {
                var data = JSON.parse( sessionStorage.getItem( 'lastData' ) );
                applyOldData( data );
                // re-disable the buttons
                $(this).siblings('.js-save').prop('disabled', true);
                $(this).prop('disabled', true);
            });
            // DELETE
            $('#works').on('click', '#lastWork .js-delete', function() {
                deleteSingleWork( this );
            });

            // --------------------
            // OLD WORK STUFF
            // --------------------
            // ACTIVATE BUTTONS
            $('#works').on('change', '#oldWorks [id^=addRelated-]', function() {
                $(this).parents('form').siblings('.module-save').children('.js-save').prop('disabled', false);
                $(this).parents('form').siblings('.module-save').children('.js-cancel').prop('disabled', false);
            });
            $('#works').on('change', '#oldWorks [id^=form-] :input', function() {
                $(this).parent().siblings('.module-save').children('.js-save').prop('disabled', false);
                $(this).parent().siblings('.module-save').children('.js-cancel').prop('disabled', false);
            });
            // SAVE
            $('#oldWorks').on('click', '.js-save', function() {
                var id = parseInt(getId( this )); // will return ID, make sure its a number
                var section = getSection( this ); // get section
                var formData = getFormData( this ); // get form data
                    var work = formData[0]; // new Work object
                    var file = formData[1]; // file data
                if( file ) { // check to see if we have a new file
                    var image = uploadImage( work.id, work.images, file ); // upload the image. returns true if complete
                }
                var localData = JSON.parse(localStorage.getItem( section )); // get the localStorage for this items section
                var index = getIndex( localData, id );
                saveData(id, work, section, index); // send data off to be saved
            });
            // CANCEL
            $('#works').on('click', '#oldWorks .js-cancel', function() {
                var mod = $(this).parents('.module-section');
                var id = parseInt($(mod).attr('id'));
                var classes = mod[0].classList;
                for(var i = 0; i < classes.length; i++) {
                    var section = classes[i].split('-');
                    if( section[0] === 'js' ) {
                        var section = section[1];
                        var data = JSON.parse( localStorage.getItem( section ) );
                        for(var j = 0; j < data[section].length; j++) {
                            if( data[section][j].id === id ) {
                                applyOldData(data[section][j]);
                            }
                        }
                    }
                }
                // re-disable the buttons
                $(this).siblings('.js-save').prop('disabled', true);
                $(this).prop('disabled', true);
            });
            // DELETE
            $('#works').on('click', '#oldWorks .js-delete', function() {
                deleteSingleWork( this );
            });

            break;
        case 'studio':
            getData(['studio']);
            displayStudio();
            $('#oldStudio').on('click', '.js-delete', function() {
                getThis('studio', this);
            });
            // cancel the studio in the textarea
            var cancelStudio = document.getElementById('cancelStudio');
            cancelStudio.onclick = clear;
            // grab the new studio
            var saveStudio = document.getElementById('saveStudio');
            var studioImage = document.getElementById('studioImage');
            studioImage.addEventListener('change', function() {
                saveStudio.removeAttribute('disabled');
                saveStudio.onclick = gatherData;
            }, false);
            break;
        case 'news':
            getData(['news']);
            displayNews();
            $('#oldNews').on('click', '.js-delete', function() {
                getThis('news', this);
            });
            // cancel the news in the textarea
            var cancelNews = document.getElementById('cancelNews');
            cancelNews.onclick = clear;
            // grab the new news
            var saveNews = document.getElementById('saveNews');
            var newsContent = document.getElementById('newsContent');
            newsContent.addEventListener('input', function() {
                saveNews.removeAttribute('disabled');
                saveNews.onclick = gatherData;
            }, false);
            break;
        case 'cv':
            $.get('../resume-raw.html', function(data) {
                $('.resume .resume-content').html(data);
            });
            break;
        case 'contact':
            break;
        }

});

function doIt(  ) {
    console.log( 'x' );
}
