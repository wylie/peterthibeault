<?php

	$value = $_POST[data];

	//echo $value;

	$myFile = "../../resume-raw.php";
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = stripslashes($value);
	fwrite($fh, $stringData);
	//$stringData = "Tracy Tanner\n";
	//fwrite($fh, $stringData);
	fclose($fh);

?>
