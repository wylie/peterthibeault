<?php
/* post.php : this page shows what insert.php has sent */

	$content = stripslashes($_POST['content']);

	echo 'Your new resume is being saved, please wait...';

	//echo $content;
	
	$myFile = "../../resume-raw.php";
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = $content;
	fwrite($fh, $stringData);
	fclose($fh);

	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://peterthibeault.com/admin/resume.php">';    
	exit;

	/*
	ob_start();
	header("location: http://peterthibeault.com/admin/resume.php");
	echo "send data";
	ob_end_flush(); //now the headers are sent
	*/

?>