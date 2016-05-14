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

            // grab the new studio
            var saveWork = document.getElementById('saveWork');
            saveWork.onclick = addWork;

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
