// create new work
function Work(id, title, year, media, description, dimension_d, dimension_w, dimension_h, available, images, date) {
    this.id = id,
    this.title = title,
    this.year = year,
    this.media = media,
    this.description = description,
    this.dimension_d = dimension_d,
    this.dimension_w = dimension_w,
    this.dimension_h = dimension_h,
    this.available = available,
    this.images = images,
    this.date = date
}


// create new studio
function Studio(id, image, date) {
	this.id = id,
	this.image = image,
	this.date = date
}


// create new news
function News(id, description, date) {
	this.id = id,
	this.description = description,
	this.date = date
}


// GET ALL THE DATA
function getData(section) {
    try {
        if( !Array.isArray(section) ) {
            throw new Error( 'getData() requires an array' );
        }
    }
    finally {
        for(var i = 0; i < section.length; i++) {
            var request = new XMLHttpRequest();
            request.open('GET', '../data/' + section[i] + '.json');

            request.onreadystatechange = function() {
                var div = document.getElementById('results');
                if(this.readyState == this.DONE && this.status == 200) {
                    var type = request.getResponseHeader('Content-Type');
                    if(this.responseText != null) {
                        var json = JSON.parse(this.responseText);
                        var keys = Object.keys(json);
                        localStorage.setItem(keys, JSON.stringify(json));
                    }
                }
            }
            request.send();
        }
    }
}


function reloadData(section) {
    console.log( 'reloadData: ' + section);
    localStorage.removeItem(section);
    getData([section]);
    setTimeout(function(){
        switch(section) {
            case 'studio':
                clear(section);
                setTimeout(function(){
                var oldStudio = document.getElementById('oldStudio');
                    oldStudio.innerHTML = '';
                    displayStudio();
                },300);
                break;
            case 'news':
                clear(section);
                setTimeout(function(){
                var oldNews = document.getElementById('oldNews');
                    oldNews.innerHTML = '';
                    displayNews();
                },300);
                break;
            case 'furnishings':
            case 'sculpture':
            case 'drawing':
            case 'painting':
            case 'design':
            case 'students':
                clear(section);
                    var oldWorks = document.getElementById('oldWorks');
                    oldWorks.innerHTML = '';
                    displayWorks();
                    displayFilterCount();
                    $('#lastWork').remove();
                    var data = JSON.parse( sessionStorage.getItem( 'lastData' ) );
                    displayLastSaved( data );
            break;
        }
    },300);
}


function applyOldData(data) {
    var id = data.id;
    var title = document.getElementById('title-' + id);
    var year = document.getElementById('year-' + id);
    var media = document.getElementById('media-' + id);
    var description = document.getElementById('description-' + id);
    var dimension_d = document.getElementById('dimension_d-' + id);
    var dimension_w = document.getElementById('dimension_w-' + id);
    var dimension_h = document.getElementById('dimension_h-' + id);
    var yes = document.getElementById('yes-' + id);
    var no = document.getElementById('no-' + id);

    title.value = data.title;// FIXME: figure out the error being thrown here when deleting last saved
    year.value = data.year;
    media.value = data.media;
    description.value = data.description;
    dimension_d.value = data.dimension_d;
    dimension_w.value = data.dimension_w;
    dimension_h.value = data.dimension_h;
    if( data.available === true ) {
        $(yes).prop('checked', true);
    } else {
        $(no).prop('checked', true);
    }
}
