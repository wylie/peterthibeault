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
	
	<script type="text/javascript">
		$(function() {
			$('.success').delay(3000).slideUp(500);			
		});
	</script>	
	
</head>
<body>

<div class="wrap">
	<?php require('login.php'); ?>
	<article class="admin" data-page="nav">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>New News</h1>
			</header>
			<div class="content">
				<form action="news.php" method="post">
					<textarea class="editor" name="content" style="width: 100%;"></textarea>
					<input type="submit" value="Save This News" class="button primary-action" />
					<input type="hidden" name="submitted" value="true" />
					<p><?php addNews(); ?></p>
				</form>
				<hr />
				<header class="section-header">
					<h1>Old News</h1>
				</header>
				<div class="content">
					<?php getNews(); ?>
				</div>
			</div>
		</section>
		
	</article>
</div>

</body>
</html>