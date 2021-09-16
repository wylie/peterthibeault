<?php

	$value = isset($_POST['id']) ? $_POST['id'] : null;
	$section = isset($_POST['section']) ? $_POST['section'] : null;
	$workname = isset($_POST['workname']) ? $_POST['workname'] : null;
	$year = isset($_POST['year']) ? $_POST['year'] : null;
	$media = isset($_POST['media']) ? $_POST['media'] : null;
	$description = isset($_POST['description']) ? $_POST['description'] : null;
	$dimension_d = isset($_POST['dimension_d']) ? $_POST['dimension_d'] : null;
	$dimension_w = isset($_POST['dimension_w']) ? $_POST['dimension_w'] : null;
	$dimension_h = isset($_POST['dimension_h']) ? $_POST['dimension_h'] : null;
	$available = isset($_POST['available']) ? $_POST['available'] : null;

	require('!dbconnect.php');
	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {
		
	    $sql_save = "
	    	UPDATE
	    		works
	    	SET
	    		section='" . $section . "',
	    		workname='" . $workname . "',
	    		year='" . $year . "',
	    		media='" . $media . "',
	    		description='" . $description . "',
	    		dimension_d='" . $dimension_d . "',
	    		dimension_w='" . $dimension_w . "',
	    		dimension_h='" . $dimension_h . "',
	    		available='" . $available . "'
	    	WHERE
	    		works_entry_id='" . $value . "'";
	    echo $sql_save;
	    mysql_query($sql_save);

		mysql_close($dbc);		
	}

    	
?>