<?php

	$content = stripslashes($_POST['content']);

	echo 'Your new resume is being saved, please wait...';

	$myFile = "../../resume-raw.php";
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = $content;
	fwrite($fh, $stringData);
	fclose($fh);

	$http = $_SERVER[HTTP_HOST];

	if( $http == 'dukeofcheese.com' ) {
		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://dukeofcheese.com/dev/pt/admin/cv.php">';
	} else {
		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://peterthibeault.com/admin/cv.php">';
	}

	exit;

?>
