// our basic init, but handled by RequireJS now
define(['data','delete','display','save'], function (require) {

    // dataTypes();
    var elements = document.getElementsByTagName('body');
    var page = elements[0].id;

    switch(page) {
        case 'works':
            getData(['furnishings', 'sculpture', 'drawing', 'painting', 'design', 'students']);
            displayWorks();
            // $('#oldWorks').on('click', '.delete', function() {
                //getThis('works', this);
            // });
            // cancel the studio in the textarea
            var cancelWork = document.getElementById('cancelWork');
            cancelWork.onclick = clear;
            // filter the old works
            $('#filterWorks').on('click', '.label', function() {
                filterWorks( this );
            });

            // delete a work
            $('#oldWorks').on('click', '.delete.button', function() {
                deleteSingleWork( this );
            });

            displayFilterCount();

            // change state of save button after adding content to any field in a single work
            $('[id^=form-]').on('change', ':input', function() {
                $(this).parent().siblings('.module-save').children('.save').prop('disabled', false);
                $(this).parent().siblings('.module-save').children('.cancel').prop('disabled', false);
            });

            $('#oldWorks').on('click', '.cancel.button', function() {
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
                $(this).siblings('.save').prop('disabled', true);
                $(this).prop('disabled', true);
            });

            // grab the new work
            var saveWork = document.getElementById('saveWork');
            saveWork.onclick = addWork;

            // grab the old work
            $('#oldWorks').on('click', '.save.button', function() {
                updateOldWork(this);
            });

            var saveWork = document.getElementById('saveWork');
            var workImage = document.getElementById('workImage');
            workImage.addEventListener('change', function() {
                saveWork.removeAttribute('disabled');
                saveWork.onclick = gatherData;
            }, false);

            break;
        case 'studio':
            getData(['studio']);
            displayStudio();
            $('#oldStudio').on('click', '.delete', function() {
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
            $('#oldNews').on('click', '.delete', function() {
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
