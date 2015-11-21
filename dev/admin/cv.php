<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Peter Thibeault - Admin</title>

	<link href="css/styles.css" rel="stylesheet" />

	<script src="../js/jquery.js"></script>
	<script src="js/script.js"></script>

	<!-- TinyMCE START -->
	<script type="text/javascript" src="js/tinymce/jscripts/tiny_mce/tiny_mce.js"></script>
	<script type="text/javascript">
		tinyMCE.init({
			theme : "advanced",
			mode : "textareas",
			plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,wordcount,advlist,autosave",
			theme_advanced_buttons1 : "save,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
			//theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
			theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
			theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
			theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",

			theme_advanced_toolbar_location : "top",
			theme_advanced_toolbar_align : "left",
			theme_advanced_statusbar_location : "bottom",
			theme_advanced_resizing : true,

			skin : "o2k7",
			skin_variant : "silver",

			// Drop lists for link/image/media/template dialogs
			/*
			template_external_list_url : "js/template_list.js",
			external_link_list_url : "js/link_list.js",
			external_image_list_url : "js/image_list.js",
			media_external_list_url : "js/media_list.js",*/
		});

		/*
		function ajaxLoad() {
		    var ed = tinyMCE.get('content');

		    // Do you ajax call here, window.setTimeout fakes ajax call
		    ed.setProgressState(1); // Show progress
		    window.setTimeout(function() {
		        ed.setProgressState(0); // Hide progress
		        ed.setContent('HTML content that got passed from server.');
		    }, 3000);
		}

		function ajaxSave() {
		    var ed = tinyMCE.get('content');

		    // Do you ajax call here, window.setTimeout fakes ajax call
		    ed.setProgressState(1); // Show progress
		    window.setTimeout(function() {
		        ed.setProgressState(0); // Hide progress
		        alert(ed.getContent());
		    }, 3000);
		}
		*/

		$();

	</script>
	<!-- TinyMCE END -->

</head>
<body class="resume">

	<ul class="list nav inline center">
		<!-- <li class="list-item"><a class="txt-link" href="nav.html">Nav</a></li> -->
		<li class="list-item"><a class="txt-link" href="works.html">Works</a></li>
		<li class="list-item"><a class="txt-link" href="studio.html">Studio</a></li>
		<li class="list-item"><a class="txt-link" href="news.html">News</a></li>
		<li class="list-item"><a class="txt-link active" href="cv.php">CV</a></li>
		<!-- <li class="list-item"><a class="txt-link" href="contact.html">Contact</a></li> -->
	</ul>

	<section class="module">
		<h1 class="header">CV</h1>
		<div class="module-main content" style="color: #000 !important;">
			<form method="post" action="resume/show.php">
        <textarea class="resume-content" name="content" cols="50" rows="50" style="width: 100%;resize: none !important;">This is some content that will be editable with TinyMCE.</textarea>
			</form>
		</div>
	</section>

</body>
</html>