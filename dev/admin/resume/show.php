<?php

	$content = stripslashes($_POST['content']);
	$http = $_SERVER[HTTP_HOST];

	if( $http == 'dukeofcheese.com' ) {
		$myFile = '../../resume-raw.php';
	} elseif( $http == 'peterthibeault.com' ) {
		$myFile = '../../resume-raw.php';
	}

	$fh = fopen($myFile, 'w');
	$stringData = $content;
	fwrite($fh, $stringData);
	fclose($fh);

	if( $http == 'dukeofcheese.com' ) {
		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://dukeofcheese.com/dev/pt/admin/cv.php">';
	} else {
		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://peterthibeault.com/admin/cv.php">';
	}

	exit;

?>
