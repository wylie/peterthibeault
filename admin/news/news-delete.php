<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Peter Thibeault - Admin</title>
	<meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,user-scalable=no">
	
	<link href="../site/css/reset.css" rel="stylesheet" />
	<link href="../css/styles.css" rel="stylesheet" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/jquery.cookie.js"></script>
	
</head>
<body>

<div class="wrap">
	<article class="admin">
		<nav class="pages">
			<?php require('../nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>Add A Studio Shot</h1>
			</header>
			<div class="content">
					<div class="module-main bg-3">
						<div class="delete-success news">
<?php

	$value = $_POST['id'];
	//echo 'boom ' . $value;

	require('../!dbconnect.php');
	if($dbc) {
		
	    $sql_delete = "DELETE FROM news WHERE news_entry_id=" . $value;
	    mysql_query($sql_delete);
		
		echo 'Success, that news story has been deleted from the database!';

		mysql_close($dbc);		
	}
	/*
	*/
  	
?>
						</div>
					</div>
				</form>
			</div>
		</section>
		
	</article>
</div>

</body>
</html>