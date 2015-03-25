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
	<script src="js/admin.js"></script>
	
</head>
<body>

<div class="wrap">
	<?php require('login.php'); ?>
	<article class="admin">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>Welcome</h1>
			</header>
			<div class="content">
				<p>This is the admin section for peterthibeault.com</p>

<!--
				<?php login(); ?>
				<hr/>
				<form action="index.php" method="POST">
					<p>Username: <input type="text" name="username" tabindex="1" /></p>
					<p>Password: <input type="password" name="password" tabindex="2" /></p>
					<p><input type="submit" name="submit" value="Login" /></p>
					<input type="hidden" name="submitted" value="true" />
				</form>
-->

			</div>
		</section>
		
	</article>
</div>

</body>
</html>