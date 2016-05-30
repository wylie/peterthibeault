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

            // FILTER OLD WORKS
            $('#works').on('click', '#filterWorks .label', function() {
                filterWorks( this );
            });

            // --------------------
            // NEW WORK STUFF
            // --------------------
            // ACTIVATE BUTTONS
            // this is definitely not pretty, but it works. will want to refactor
            $('#works').on('change', 'form #workImage', function() {
                $('#works').on('change', 'form #newTitle', function() {
                    $('#saveWork').prop('disabled', false);
                    $('#cancelWork').prop('disabled', false);
                });
            });
            // SAVE
            var saveWork = document.getElementById('saveWork');
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
                var index = getIndex( section, localData, id );
                console.log( index );
                saveData(id, work, section, index); // send data off to be saved
            });
            // CANCEL
            var cancelWork = document.getElementById('cancelWork');
            cancelWork.onclick = clear;

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
                var index = getIndex( section, localData, id );
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

            // get the data
            var data = JSON.parse( localStorage.getItem( 'studio' ) );

            // HANDLEBARS!
            var studioTemp = function(response){
                // compile the tamplate
                var template = Handlebars.compile( response );
                // put the data into the template and onto the page
                $("#oldStudio").html(template(data));
            };
            // get the template
            $.ajax({
                type: 'GET',
                url: "templates/old-studio.hbs",
                dataType: 'HTML',
            }).done( studioTemp );

            // displayStudio();
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

            // get the data
            var data = JSON.parse( localStorage.getItem( 'news' ) );

            // HANDLEBARS!
            var newsTemp = function(response){
                // compile the tamplate
                var template = Handlebars.compile( response );
                // put the data into the template and onto the page
                $("#oldNews").html(template(data));
            };
            // get the template
            $.ajax({
                type: 'GET',
                url: "templates/old-news.hbs",
                dataType: 'HTML',
            }).done( newsTemp );

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
