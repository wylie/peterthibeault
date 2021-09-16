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
	<article class="admin" data-page="works-edit">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>Manage Works</h1>
			</header>
			<div class="content">
					<div class="module-main bg-3">
						<div class="delete-success news">
<?php

	$action = $_POST['edit'];
	
	if( $action == 'save'){
		
		$works_entry_id = isset($_POST['id']) ? $_POST['id'] : null;
		//$section = isset($_POST['section']) ? $_POST['section'] : null;
		$workname = isset($_POST['workname']) ? $_POST['workname'] : null;
		$year = isset($_POST['year']) ? $_POST['year'] : null;
		$media = isset($_POST['media']) ? $_POST['media'] : null;
		$description = isset($_POST['description']) ? $_POST['description'] : null;
		$dimension_d = isset($_POST['dimension_d']) ? $_POST['dimension_d'] : null;
		$dimension_w = isset($_POST['dimension_w']) ? $_POST['dimension_w'] : null;
		$dimension_h = isset($_POST['dimension_h']) ? $_POST['dimension_h'] : null;
	
		require('!dbconnect.php');
		if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
		} else {

		    $sql_save = "
		    	UPDATE
		    		works
		    	SET
		    		workname = '" . $workname . "',
		    		year = '" . $year . "',
		    		media = '" . $media . "',
		    		description = '" . $description . "',
		    		dimension_d = '" . $dimension_d . "',
		    		dimension_w = '" . $dimension_w . "',
		    		dimension_h = '" . $dimension_h . "'
		    	WHERE
		    		works_entry_id = " . $works_entry_id . ";";

		    mysql_query($sql_save);
		    
			echo 'Success, that work has been updated in the database!<br/><br/>Please wait...';
	
			mysql_close($dbc);		
		}

		
	} elseif( $action == 'delete' ){
		
		$works_entry_id = $_POST['id'];

		require('!dbconnect.php');
		if($dbc) {
			
		    $sql_delete = "DELETE FROM works WHERE works_entry_id=" . $works_entry_id;
		    mysql_query($sql_delete);
			
			echo 'Success, that work has been deleted from the database!<br/><br/>Please wait...';
	
			mysql_close($dbc);		
		}
		
	}

?>
						</div>
					</div>
				</form>
			</div>
		</section>
		
	</article>
</div>

<script>
$(document).ready(function() {
   var referrer =  document.referrer;
   var delay = 1500;
   setTimeout(function(){ window.location = referrer; }, delay);
});
</script>

</body>
</html>