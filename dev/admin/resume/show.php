<?php

	$http = $_SERVER[HTTP_HOST];
	$test = $_POST['content'];
	$content = stripslashes($test);
	$myFile = '../../resume-raw.php';

	// if( $http == 'dukeofcheese.com' ) {
	// 	$myFile = 'http://dukeofcheese.com/dev/pt/resume-raw.php';
	// } else {
	// 	$myFile = 'http://peterthibeault.com/resume-raw.php';
	// }

	$fileHandle = fopen($myFile, 'w');

	fwrite($fileHandle, $ultimateJson);
    fclose($fileHandle);

	// $fh = fopen($myFile, 'w');
	// $fh = fopen($myFile, 'w') or die("can't open file");
	// fwrite($fh, $content);
	// fclose($fh);

	// if( $http == 'dukeofcheese.com' ) {
	// 	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://dukeofcheese.com/dev/pt/admin/cv.php">';
	// } else {
	// 	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://peterthibeault.com/admin/cv.php">';
	// }

	echo 'Your CV has been updated!';

	exit;

?>
