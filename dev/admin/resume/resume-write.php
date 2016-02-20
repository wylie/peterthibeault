<?php

	$value = $_POST[data];

	$myFile = "../../resume-raw.php";
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = stripslashes($value);
	fwrite($fh, $stringData);
	fclose($fh);

?>
