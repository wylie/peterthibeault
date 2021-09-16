<?php

	if( $_REQUEST['id']['section'] ) {
	   $id = $_REQUEST['id'];
	   $section = $_REQUEST['section'];

	   test();
	   
	   //echo $section;

		require('admin/!dbconnect.php');
		
		if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
		} else {
			
			$query_get = "SELECT * FROM works WHERE " . $section . "='yes' ORDER BY works_entry_id";

			echo  $id . ' ' . $section;
	
			if($r = mysql_query($query_get)) {
				//while($row = mysql_fetch_array($r)) {
					include('admin/!dbvariables.php');
	
		$main_image = '../img/works/one-00_l.png';
		
		
		
		$arr = array(
			array(
				"main_image" => $main_image,
				"last_name" => $id,
				"age" => "28",
				"email" => "darianbr@example.com"
			)
		);
		
		echo json_encode($arr);
				//}
			}
			// close the DB connection
			mysql_close($dbc);
		} // end if(!$dbc)
	}
		/* set out document type to text/javascript instead of text/html
		header("Content-type: text/javascript"); */
	
	





/*

	if( $_REQUEST['id']['section'] ) {
	   $id = $_REQUEST['id'];
	   $section = $_REQUEST['section'];

	   test();
	   
	   //echo $section;

		require('admin/!dbconnect.php');
		
		if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
		} else {
			
			$query_get = "SELECT * FROM works WHERE " . $section . "='yes' ORDER BY works_entry_id";

			echo  $id . ' ' . $section;
	
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
					include('admin/!dbvariables.php');
	
						//echo '<li class="list-item" data-id="' . $id . '">' . $id . '</li>';
				}
			}
			// close the DB connection
			mysql_close($dbc);
		} // end if(!$dbc)
	}
*/

?>