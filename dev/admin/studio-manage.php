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
	<article class="admin" data-page="studio-manage">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		<section class="module">
			<header class="section-header">
				<h1>Manage Works</h1>
			</header>
			<div class="works-edit">
				<h2>A Stat:</h2><br/>
				<p>You have a total of <?php
				
					require('!dbconnect.php');
					
					$query = "SELECT COUNT(*) FROM studio";
					$result = mysql_query($query);
					$count = mysql_result($result, 0);
					
					echo $count;
					
				?> studio shots in the database!</p>
			</div>
			<?php
			//function getwork() {
				require('!dbconnect.php');
				if(!$dbc) {
						echo '<p class="error">You could not connect to the DB right now...</p>';
				} else {
					// get the old news items
					$query_get = "SELECT * FROM studio ORDER BY studio_entry_id ASC";
					if($r = mysql_query($query_get)) {
						while($row = mysql_fetch_array($r)) {
							include('!dbvariables.php');
							
							?>
			<div class="content" id="<?php echo $studio_entry_id ?>">
				<form action="studio-delete.php" method="POST" id="uploadworks" enctype="multipart/form-data">
					<hr class="module-divider"/>
					
					<div class="work">
						<div class="works-edit">
							<h3>Date Added:</h3>
							<?php formatDate($studio_date_entered); ?>
							
						</div><!-- end class="works-edit" -->
					</div><!-- end of class="work" -->
					
					<div class="module-main bg-3">
						<img src="<?php echo $studio_image; ?>" alt="" class="main-image" />
					</div><!-- end of class="module-main bg-3" -->
	
					<div class="works-edit group" id="studio_entry_id-<?php echo $studio_entry_id; ?>">
						<button type="submit" name="edit" value="delete" class="delete button">Delete this studio shot</button>
						<input type="hidden" name="id" value="<?php echo $studio_entry_id; ?>" />
						<input type="hidden" name="submitted" value="true" />
					</div>
				</form>
			</div>
							<?php
						}
					}// end if($r...
					
					// close the DB connection
					mysql_close($dbc);		
				} // end if(!$dbc)
			?>
		</section><!-- end of class="module" -->
	</article><!-- end of class="admin" -->
</div><!-- end of class="wrap" -->

</body>
</html>