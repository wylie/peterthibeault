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
	<?php require('login.php'); ?>
	<article class="admin" data-page="upload-related">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>Add A Studio Shot</h1>
			</header>
			<div class="content">
					<div class="module-main bg-3">
						<div class="upload-success related">
<?php

$name = $_GET['name'];
$num = $_GET['num'];
$rnum = $_GET['rnum'];

if( $name || $num ) {

	if($num <= 14) {
		
		echo 'Okay, lets get started.<br/><br/>You can add a total of <strong>14</strong> related images.<br/>';
		echo 'So far you have added <strong>' . $num . '</strong>.<br/><br/>';

		if( $num == 00 ) {
			echo 'Enter your first related image here:<br/>';
		} else {
			echo 'Enter your next related image here:<br/>';
		}

		$num = $num + 1;

		echo '
		<form action="upload_related.php?name=' . $name . '&num=' . $num . '&rnum='. $rnum . '" method="post" enctype="multipart/form-data">		
			<input size="25" name="related_image" type="file" /><br/>
			<input type="submit" value="Upload this related work" class="button primary-action"><br/>
			<input type="hidden" name="risubmitted" value="true">
		</form>';
	
		if( isset($_POST['risubmitted']) ) {

			if(!$problem) {
			
				$change="";
				$filesize = '400';
				define ("MAX_SIZE",$filesize);
				function getName($str) {
					$parts = explode(".",$str);
					$imgName = str_replace(' ', '_',$parts[0]);
					return $imgName;
				}
				function getExtension($str) {
					$parts = explode(".",$str);
					$ext = $parts[1];
					return $ext;
				}
				
				$errors=0;
				$image =$_FILES['related_image']['name'];
				$image_tmp =$_FILES['related_image']['tmp_name'];
				$uploadedfile = $image_tmp;
				
				// look for a main image
				if ($image) {
	
					require('!dbconnect.php');
					if(!$dbc) {
						echo '<p class="error">You could not connect to the DB right now...</p>';
					} else {
						$query_get = "SELECT * FROM works ORDER BY works_entry_id DESC LIMIT 1";
						if($r = mysql_query($query_get)) {
							while($row = mysql_fetch_array($r)) {
								include('!dbvariables.php');
							}
						}
						$num = $num-1;
						mysql_query("UPDATE works SET related_images='" . $num . "' WHERE works_entry_id='" . $works_entry_id . "'");
						// close the DB connection
						mysql_close($dbc);		
					}
				
					if(empty($_FILES['related_image'])) {
						print '<div class="error">Please enter a work shot.</div>';
						$problem = TRUE;
					}
				
					$filename = stripslashes($image);
					$ext = getExtension($filename);
					//$name = getName($filename);
					$extension = strtolower($ext);
					
					list ($one, $two) = $str;
					
					if (($extension != "jpg") && ($extension != "jpeg") && ($extension != "png") && ($extension != "gif")) {
						$change='<div class="msgdiv">Unknown Image extension </div> ';
						$errors=1;
					} else {
						$size=filesize($image_tmp);
			
						if ($size > MAX_SIZE*1024) {
							$change='<div class="msgdiv">You have exceeded the size limit!</div> ';
							$errors=1;
						}
						
						if($extension=="jpg" || $extension=="jpeg" ) {
							$uploadedfile = $image_tmp;
							$src = imagecreatefromjpeg($uploadedfile);
						} else if($extension=="png") {
							$uploadedfile = $image_tmp;
							$src = imagecreatefrompng($uploadedfile);
						} else {
							$src = imagecreatefromgif($uploadedfile);
						}
				
						list($width,$height)=getimagesize($uploadedfile);

						// width of the main image
						$newwidth_l=748;
						$newheight_l=($height/$width)*$newwidth_l;
						$tmp_l=imagecreatetruecolor($newwidth_l,$newheight_l);
				
						// height of the additional work thumbnail 
						$newheight_m=65;
						$newwidth_m=($width/$height)*$newheight_m;
						$tmp_m=imagecreatetruecolor($newwidth_m,$newheight_m);
						
						// height of the small, related image, thumbnail							
						$newheight_s=30;
						$newwidth_s=($width/$height)*$newheight_s;
						$tmp_s=imagecreatetruecolor($newwidth_s,$newheight_s);
						
						imagecopyresampled($tmp_l,$src,0,0,0,0,$newwidth_l,$newheight_l,$width,$height);
						imagecopyresampled($tmp_m,$src,0,0,0,0,$newwidth_m,$newheight_m,$width,$height);
						imagecopyresampled($tmp_s,$src,0,0,0,0,$newwidth_s,$newheight_s,$width,$height);
						
						// get file name with extension
						$file = $image;

						// set upload path
						$upload_path = '../img/works/';
						
						// convert name to lowercase
						$workname = strtolower($name);
						
						// rename the file
						$filename_l = $upload_path . $workname . '-' . $rnum . '_' . $num . '_l.' . $extension;
						$filename_m = $upload_path . $workname . '-' . $rnum . '_' . $num . '_m.' . $extension;
						$filename_s = $upload_path . $workname . '-' . $rnum . '_' . $num . '_s.' . $extension;

						imagejpeg($tmp_l,$filename_l,100);
						imagejpeg($tmp_m,$filename_m,100);
						imagejpeg($tmp_s,$filename_s,100);
						
						imagedestroy($src);
						imagedestroy($tmp_l);
						imagedestroy($tmp_m);
						imagedestroy($tmp_s);

						//$url = $baseURL . '?name=' . $workname . '?num=' . $num;
						
					} // end of $extension
				} // end of $image
			}
		}
		
	} else {
		
		echo "14 related images is the limit at the moment.";
		
	}
}

?>
						</div>
					</div>
				</form>
				<a href="http://peterthibeault.com/admin/works-add.php" class="myButton finished" style="position: relative;top: -40px;left: 40%;">I'm Finished</button>
			</div>
		</section>
		
	</article>
</div>

</body>
</html>