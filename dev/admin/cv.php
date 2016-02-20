<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Peter Thibeault - Admin</title>

	<link href="css/styles.css" rel="stylesheet" />

	<script src="../js/jquery.js"></script>
	<script src="js/script.js"></script>

	<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
	<script type="text/javascript">
		tinyMCE.init({
			selector:'.resume-content',
			inline: true,
			plugins: [
		      'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
		      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
		      'save table contextmenu directionality emoticons template paste textcolor'
		    ],
			menubar: false,
			toolbar: [
				'save | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent blockquote',
				'styleselect formatselect fontselect fontsizeselect',
				'cut copy paste | bullist numlist | undo redo removeformat | subscript superscript'
			]
		});
	</script>
</head>
<body class="resume" id="cv">

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
				<div class="resume-content" id="cvContent">Garbage!</div>
			</form>
		</div>
	</section>

</body>
</html>
