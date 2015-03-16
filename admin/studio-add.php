<?php

	require('!require-admin.php');

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Peter Thibeault - Admin</title>
	<meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,user-scalable=no">
	
	<link href="../site/css/reset.css" rel="stylesheet" />
	<link href="css/styles.css" rel="stylesheet" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script>
	
</head>
<body>

<div class="wrap">
	<?php require('login.php'); ?>
	<article class="admin" data-page="studio-add">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>Add A Studio Shot</h1>
			</header>
			<div class="content">
				<form action="upload_main.php" method="post" id="uploadworks" enctype="multipart/form-data">
					
					<input type="hidden" name="MAX_FILE_SIZE" value="5000000" />
					<div class="module-main bg-3">
						<input size="25" name="studio_image" type="file" />
						<div class="input-restrictions">
							jpg and png files only
						</div>
					</div>
					<input type="submit" value="Upload this studio shot" class="button primary-action"	 />
					<input type="hidden" name="ref" value="studio" />
					<input type="hidden" name="number" value="00" />
					<input type="hidden" name="submitted" value="true" />
				</form>
			</div>
		</section>
		
	</article>
</div>

</body>
</html>