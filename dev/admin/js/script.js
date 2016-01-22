window.onload = init;

function init() {
  dataTypes();
  var elements = document.getElementsByTagName('body');
  var page = elements[0].id;

  switch(page) {
    case 'works':
      // display the old works
      displayWorks();
      // cancel the studio in the textarea
      var cancelWork = document.getElementById('cancelWork');
      cancelWork.onclick = clearWork;
      // filter the old works
      filterWorks();
      // delete old works after clicking on the button
      deleteWorks();
      // grab the new studio
      var saveWork = document.getElementById('saveWork');
      saveWork.onclick = addWork;
      break;
    case 'studio':
      // display all the old studio photos
      displayStudio();
      // cancel the studio in the textarea
      var cancelStudio = document.getElementById('cancelStudio');
      cancelStudio.onclick = clearStudio;
      // delete old studio after clicking on the button
      deleteOld();
      // grab the new studio

      var today = new Date();
      var timeId = today.getTime();

      var test = document.getElementById('studioImage');
      test.addEventListener('change', function() {
        var file = this.files[0];

        var fd = new FormData();
        fd.append('studioImage', file);
        fd.append('id', timeId);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'functions/upload.php', true);

        xhr.upload.onprogress = function(e) {
          if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            var uploadProcess = document.getElementById('uploadProcess');
            uploadProcess.setAttribute('style', 'width: ' + percentComplete + '%;');
          }
        };

        xhr.onload = function() {
          if (this.status == 200) {
            var resp = JSON.parse(this.response);

            name = resp.name;
            ext = resp.extension;
            image = resp.newFileName;

            addStudio(today, timeId);
          };
        };

        xhr.send(fd);
      }, false);
      break;
    case 'news':
      // display the old news
      displayNews();
      // cancel the news in the textarea
      var cancelNews = document.getElementById('cancelNews');
      cancelNews.onclick = clearNews;
      // delete old news after clicking on the button
      deleteOld();
      // grab the new news
      var saveNews = document.getElementById('saveNews');
      saveNews.onclick = addNews;
      break;
    case 'cv':
      break;
    case 'contact':
      break;
  }
}






$(function() {
  $.get('../resume-raw.php', function(data) {
    // console.log('data = ' + data);
    $('.resume .resume-content').html(data);
  });
});




// create new work
function Work(section, id, title, year, media, description, dimension_d, dimension_w, dimension_h, available, image) {//, images) {
  this.section = section,
  this.id = id,
  this.title = title,
  this.year = year,
  this.media = media,
  this.description = description,
  this.dimension_d = dimension_d,
  this.dimension_w = dimension_w,
  this.dimension_h = dimension_h,
  this.available = available,
  this.image = image//,
  // this.images = images
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










// delete the old studio & news
function deleteOld() {
  $('.delete').click(function() {
    // give this a var
    var deleteBtn = $(this);
    var page = $('body').attr('id');
    console.log(page);
    // for now, just console log the id passed in
    console.log( deleteBtn[0].parentElement.id );
  });
}
// some arrays we will need as we go along
var kindsArr = ['design', 'drawing', 'furnishings', 'painting', 'sculpture', 'students', 'studio', 'news'];
// loop through the kinds and get all the data available
function dataTypes() {
	for(var i = 0; i < kindsArr.length; i++) {
		// lets get the data and store it locally
		getData(kindsArr[i]);
	}
}
// GET ALL THE DATA
function getData(kind) {
	var request = new XMLHttpRequest();
	request.open('GET', '../data/' + kind + '.json');

	request.onreadystatechange = function() {
		var div = document.getElementById('results');
		if(this.readyState == this.DONE && this.status == 200) {
			var type = request.getResponseHeader('Content-Type');
			if(this.responseText != null) {
				var json = JSON.parse(this.responseText);
				var keys = Object.keys(json);
				localStorage.setItem(kind, JSON.stringify(json));
			}
		}
	}
	request.send();
}










function getWorkSection() {
  // get the category filters
  var addWorkCategory = $('#addWorkCategory');
  // get the children of the list
  var addWorkItems = addWorkCategory[0].children;
  // loop through all the items in the filter list
  for(var i = 0; i < addWorkItems.length; i++) {
    // make sure that the radio button is checked
    if( addWorkItems[i].children[0].checked === true ) {
      // return the section
      return newSection = addWorkItems[i].children[0].id;
    }
  }
}
// GET THE NEW TEXT AREA
function addWork() {
  var id = (new Date()).getTime();
  getWorkSection();
  // grab all the values from the new work inputs
  var newTitle = document.getElementById('newTitle').value;
  var newYear = document.getElementById('newYear').value;
  var newMedia = document.getElementById('newMedia').value;
  var newWorkImage = document.getElementById('newWorkImage').value;
  var newDescription = document.getElementById('newDescription').value;
  var newDimension_d = document.getElementById('newDimension_d').value;
  var newDimension_w = document.getElementById('newDimension_w').value;
  var newDimension_h = document.getElementById('newDimension_h').value;
  // get the availableToBuy wrapper
  var availableToBuy = $('#availableToBuy');
  // get the children of the list
  var availableToBuyItems = availableToBuy[0].children;
  // loop through all the items in the filter list
  for(var i = 0; i < availableToBuyItems.length; i++) {
    // make sure that the radio button is checked
    if( availableToBuyItems[i].children[0].checked === true ) {
      // save the selected section as a global
      newAvailable = availableToBuyItems[i].children[0].id;
    }
  }
  // save the new work
  var newWork = new Work(newSection, id, newTitle, newYear, newMedia, newDescription, newDimension_d, newDimension_w, newDimension_h, newAvailable);
	var stringWork = JSON.stringify(newWork);
  // console.log(stringWork);
  // TODO: error logging...
}
// CLEAR THE NEW TEXT AREA
function clearWork() {
  // console.log('KER-POW');
}
function filterWorks() {
  // get all of the work filters
  $('#filterWorks .list-item label').click(function() {
    // get the attribute of each label
    var kind = $(this).attr('for');
    // remove any hiding going on
    $('#oldWorks').children('.works').show();
    // add hiding to the siblings of the type clicked on
    $('#oldWorks').children('.' + kind).siblings('.works:not(' + '.' + kind + ')').hide();
  });
}
var workNums = [];
var workSum = [];
var workAll = [];
// DISPLAY THE WORKS
function displayWorks() {
  // loop through the kindsArr
  for(var i = 0; i < kindsArr.length - 2; i++) {
    // add to the workAll arr
    workAll.push(kindsArr[i]);
  }
  for(var i = 0; i < workAll.length; i++) {
    var allWorks = workAll[i];
    var allWorks = JSON.parse( localStorage.getItem( allWorks ) );
    for( var key in allWorks ) {
      // get the length of each section
      dbNum( allWorks[key].length );
      for( var j = 0; j < allWorks[key].length; j++ ) {
        var oldWorks = document.getElementById('oldWorks');
        // create the main div
        var div = document.createElement('div');
        div.setAttribute('class', 'module-section work works ' + key);
        div.setAttribute('id', allWorks[key][j].id);
        // create the image
        var img = document.createElement('img');
        img.setAttribute('class', 'studio-img');
        // build the image
        var imgPath = '../img/works/';
        var imgNum = allWorks[key][j].id;
        var imgSize = '_l-';
        var imgSuff = '.jpg';
        img.setAttribute('src', imgPath + imgNum + imgSize + 0 + imgSuff);
        // create the date span
        var span = document.createElement('span');
        span.setAttribute('class', 'date');
        span.innerHTML = allWorks[key][j].date;
        // create the title heading
        var heading1 = document.createElement('h3');
        heading1.setAttribute('class', 'heading');
        heading1.innerHTML = 'Title';
        // create the title heading
        var input1 = document.createElement('input');
        input1.setAttribute('class', 'form-input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('value', allWorks[key][j].title);
        // create the year heading
        var heading2 = document.createElement('h3');
        heading2.setAttribute('class', 'heading');
        heading2.innerHTML = 'Year';
        // create the year heading
        var input2 = document.createElement('input');
        input2.setAttribute('class', 'form-input');
        input2.setAttribute('type', 'text');
        input2.setAttribute('value', allWorks[key][j].year);
        // create the media heading
        var heading3 = document.createElement('h3');
        heading3.setAttribute('class', 'heading');
        heading3.innerHTML = 'Media';
        // create the media heading
        var input3 = document.createElement('input');
        input3.setAttribute('class', 'form-input');
        input3.setAttribute('type', 'text');
        input3.setAttribute('value', allWorks[key][j].media);
        // create the description heading
        var heading4 = document.createElement('h3');
        heading4.setAttribute('class', 'heading');
        heading4.innerHTML = 'Description';
        // create the description heading
        var input4 = document.createElement('textarea');
        input4.setAttribute('class', 'form-input');
        input4.setAttribute('type', 'text');
        input4.innerHTML = allWorks[key][j].description;
        // create the dimensions heading
        var heading4 = document.createElement('h3');
        heading4.setAttribute('class', 'heading');
        heading4.innerHTML = 'Dimensions';
        // create the dimensions heading
        var input4 = document.createElement('input');
        input4.setAttribute('class', 'form-input dimension');
        input4.setAttribute('type', 'text');
        input4.setAttribute('value', allWorks[key][j].dimension_d);
        // create the dimensions heading
        var input5 = document.createElement('input');
        input5.setAttribute('class', 'form-input dimension');
        input5.setAttribute('type', 'text');
        input5.setAttribute('value', allWorks[key][j].dimension_w);
        // create the dimensions heading
        var input6 = document.createElement('input');
        input6.setAttribute('class', 'form-input dimension');
        input6.setAttribute('type', 'text');
        input6.setAttribute('value', allWorks[key][j].dimension_h);
        // create the available heading
        var heading5 = document.createElement('h3');
        heading5.setAttribute('class', 'heading');
        heading5.innerHTML = 'Available';
        // create the available heading
        var input7 = document.createElement('input');
        input7.setAttribute('class', 'form-input');
        input7.setAttribute('type', 'text');
        input7.setAttribute('value', allWorks[key][j].available);
        // create the related images heading
        var heading6 = document.createElement('h3');
        heading6.setAttribute('class', 'heading');
        heading6.innerHTML = 'All Images';
        // create the related images heading
        var ulRelated = document.createElement('ul');
        ulRelated.setAttribute('class', 'list inline related');
        // loop through it all
        for( var m = 0; m <= allWorks[key][j].images - 1; m++ ) {
          var liRelated = document.createElement('li');
          liRelated.setAttribute('class', 'list-item');
          // img element stuff
          var allImgs = document.createElement('img');
          allImgs.setAttribute('class', 'studio-img-thmb');
          // build the image bits
          var imgPath = '../img/works/';
          var imgNum = allWorks[key][j].id;
          var imgSize = '_m-';
          var imgSuff = '.jpg';
          var imgIndex = m;
          // build the image
          allImgs.setAttribute('src', imgPath + imgNum + imgSize + imgIndex + imgSuff);
          allImgs.setAttribute('data-imgid', imgIndex);
          // append it all
          liRelated.appendChild(allImgs);
          ulRelated.appendChild(liRelated);
        }
        // save module
        var saveDiv = document.createElement('div');
        saveDiv.setAttribute('class', 'module-save');
        // create the save button
        var button1 = document.createElement('button');
        button1.setAttribute('class', 'save button');
        button1.setAttribute('disabled', 'disabled');
        button1.setAttribute('type', 'submit');
        button1.setAttribute('name', 'edit');
        button1.setAttribute('value', 'save');
        button1.innerHTML = 'Save';
        // create the delete button
        var button2 = document.createElement('button');
        button2.setAttribute('class', 'delete button');
        button2.setAttribute('disabled', 'disabled');
        button2.setAttribute('type', 'submit');
        button2.setAttribute('name', 'edit');
        button2.setAttribute('value', 'delete');
        button2.innerHTML = 'Delete';
        // append everything
        div.appendChild(img);
        div.appendChild(heading1);
        div.appendChild(input1);
        div.appendChild(heading2);
        div.appendChild(input2);
        div.appendChild(heading3);
        div.appendChild(input3);
        div.appendChild(heading4);
        div.appendChild(input4);
        div.appendChild(heading4);
        div.appendChild(input4);
        div.appendChild(input5);
        div.appendChild(input6);
        div.appendChild(heading5);
        div.appendChild(input7);
        div.appendChild(heading6);
        div.appendChild(ulRelated);
        // insert bigtime
        div.insertBefore(span, div.firstChild);
        saveDiv.appendChild(button1);
        saveDiv.appendChild(button2);
        div.appendChild(saveDiv);
        oldWorks.appendChild(div);
      }
    }
  }
  // lets swap the main image with related ones
  swapWorks();
}
// lets swap the main image with related ones
function swapWorks() {
  $('.studio-img-thmb').click(function() {
    // AND THIS ISN'T WORKING BECAUSE...? $(this).addCLass('active');
    // get this and it's parent
    var imgId = $(this).attr('data-imgid');
    var parent = $(this).closest('.module-section');
    var id = $(parent).attr('id');
    var mainImg = $(parent).children('.studio-img');
    // parts of the image
    var imgPath = '../img/works/';
    var imgNum = id;
    var imgSize = '_l-';
    var imgSuff = '.jpg';
    var imgIndex = imgId;
    // build the image
    $(mainImg).attr('src', imgPath + imgNum + imgSize + imgIndex + imgSuff );
  });
}
function deleteWorks() {
  $('.delete').click(function() {
    // give this a var
    var deleteBtn = $(this).parents('.works');
    // for now, just console log the id passed in
    console.log( deleteBtn[0].id );
  });
}










// GET THE NEW TEXT AREA
function addStudio(today, id) {
  // get today's date
  // var today = new Date();
  // create an id
  // var id = today.getTime();
  // grab the news content
  var studioImage = document.getElementById('studioImage').value;
  // get the day
  var dd = today.getDate();
  // get the month
  var mm = today.getMonth() + 1; //January is 0!
  // get the year
  var yyyy = today.getFullYear();
  // build out the date
  var date = yyyy + '-' + mm + '-' + dd;
  // get the error div
  var newsErr = $('.msg.error');

  // check to see if the
  if(studioImage === '') {
    // display the error
    $(newsErr).text('please add a studio shot...');
  } else {
    // clear the error when new is entrered
    $(newsErr).text('');
    // build out the news
    var newStudio = new Studio(id, '../img/studio/' + id + '_l.jpg', date);
    // stringify the news
  	var stringStudio = JSON.stringify(newStudio);
    // do something with the news
    saveStudio(stringStudio);
  }
}
function saveStudio(data) {
  var msg = document.getElementById('messaging');
  $.ajax({
      type: 'GET',
      url: 'functions/save-studio.php?data=' + encodeURIComponent(data),
      dataType: 'JSON',
      success: function(ret){
        console.log(ret);

        msg.classList.add('success');
        msg.innerHTML = 'Your studio shot has been added!';
        msg.innerHTML = ret;
      }
  });
}
// CLEAR THE NEW TEXT AREA
function clearStudio() {
  var newsErr = $('.msg.error');
  $(newsErr).text('');
  document.getElementById('newsContent').value = '';
}
// DISPLAY THE STUDIO
function displayStudio() {
  var studio = JSON.parse( localStorage.getItem('studio') );
  // console.log( studio );
  for (var key in studio) {
    var studio = studio[key].reverse();
    // get the length of each section
    dbNum( studio.length );
    for(var i = 0; i < studio.length; i++) {
      // old studio stuff
      var oldStudio = document.getElementById('oldStudio');
      var div = document.createElement('div');
      div.setAttribute('class', 'module-section work studio');
      div.setAttribute('id', studio[i].id);
      // img stuff
      var img = document.createElement('img');
      img.setAttribute('class', 'studio-img');
      img.setAttribute('src', studio[i].image);
      // span stuff
      var span = document.createElement('span');
      span.setAttribute('class', 'date');
      span.innerHTML = studio[i].date;
      // button stuff
      var button = document.createElement('button');
      button.setAttribute('class', 'delete button');
      button.setAttribute('disabled', 'disabled');
      button.setAttribute('type', 'submit');
      button.setAttribute('name', 'edit');
      button.setAttribute('value', 'delete');
      button.innerHTML = 'Delete';
      // append it all
      div.appendChild(img);
      div.insertBefore(span, div.firstChild);
      div.appendChild(button);
      oldStudio.appendChild(div);
    }
  }
}










// DISPLAY THE OLD NEWS
function displayNews() {
  var news = JSON.parse( localStorage.getItem('news') );
  for (var key in news) {
    var news = news[key].reverse();
    // get the length of each section
    dbNum( news.length );
    for(var i = 0; i < news.length; i++) {
      // old news stuff
      var oldNews = document.getElementById('oldNews');
      var div = document.createElement('div');
      div.setAttribute('class', 'news-item');
      div.setAttribute('id', news[i].id);
      div.innerHTML = news[i].description;
      // span stuff
      var span = document.createElement('span');
      span.setAttribute('class', 'news-item-date');
      span.innerHTML = news[i].date;
      // button stuff
      var button = document.createElement('button');
      button.setAttribute('class', 'delete button');
      button.setAttribute('disabled', 'disabled');
      button.setAttribute('type', 'submit');
      button.setAttribute('name', 'edit');
      button.setAttribute('value', 'delete');
      button.innerHTML = 'Delete';
      // append it all
      div.appendChild(button);
      div.insertBefore(span, div.firstChild);
      oldNews.appendChild(div);
    }
  }
}
// GET THE NEW TEXT AREA
function addNews() {
  // get today's date
  var today = new Date();
  // create an id
  var id = today.getTime();
  // grab the news content
  var newsContent = document.getElementById('newsContent').value;
  // get the day
  var dd = today.getDate();
  // get the month
  var mm = today.getMonth() + 1; //January is 0!
  // get the year
  var yyyy = today.getFullYear();
  // build out the date
  var date = yyyy + '-' + mm + '-' + dd;
  // get the error div
  var newsErr = $('.msg.error');
  // check to see if the
  if(newsContent === '') {
    // display the error
    $(newsErr).text('please add some news...');
  } else {
    // clear the error when new is entrered
    $(newsErr).text('');
    // build out the news
    var newNews = new News(id, newsContent, date);
    // stringify the news
  	var stringNews = JSON.stringify(newNews);
    // do something with the news
    saveNews(stringNews);
  }
}
function saveNews(data) {
  var msg = document.getElementById('messaging');
  $.ajax({
      type: 'GET',
      url: 'functions/save-news.php?data=' + encodeURIComponent(data),
      dataType: 'JSON',
      // beforeSend: function() {
      //   msg.innerHTML = 'Your news story is being added...'
      // },
      success: function(ret){
        console.log(ret);

        // var data_array = $.parseJSON(json_data);
        // console.log(data_array);

        //access your data like this:
        // var plum_or_whatever = data_array['output'];
        // console.log(plum_or_whatever);
        //continue from here...

        // console.log(plum_or_whatever);
        msg.classList.add('success');
        msg.innerHTML = 'Your news story has been added!';
        msg.innerHTML = ret;
      // },
      // error: function() {
      //   msg.classList.add('error');
      //   msg.innerHTML = 'Something went wrong... your news story couldn\'t be added at this time.'
      }
  });
}




// CLEAR THE NEW TEXT AREA
function clearNews() {
  var newsErr = $('.msg.error');
  $(newsErr).text('');
  document.getElementById('newsContent').value = '';
}










// GET NUMBER OF ITEMS IN DB
function dbNum(num) {
  // get the element where the numbers will live
  var dbNum = document.getElementById('dbNum');
  // push the num to the workSum array
  workSum.push( num );
  // create a var at 0 so we can add to it
  var totalWorks = 0;
  // loop through and add the numbers in the array
  $.each(workSum,function() {
      totalWorks += this;
  });
  // display the number of news items saved
  dbNum.innerHTML = totalWorks;
}
