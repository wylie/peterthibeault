<!--

	REDO THIS PAGE
	-Have one control
	-Pull in the referring pages type (studio or works) and use that to populate the important things like the DB and variables

-->

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
	<article class="admin" data-page="upload-main">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
<?php

// where to redirect to after uploading the first image
$baseURL = 'http://peterthibeault.com/admin/upload_related.php';

$ref = $_POST['ref'];
$page = array('studio','work');
$num = $_POST['number'];

if( isset($_POST['submitted']) ) {
		
	if( $ref == $page[0] ) {

		echo '
				<h1>Add A Studio Shot</h1>
			</header>
			<div class="content">
				<form action="upload_main.php" method="post" id="uploadworks" enctype="multipart/form-data">
					
					<input type="hidden" name="MAX_FILE_SIZE" value="5000000" />
					<div class="module-main bg-3">
						<div class="upload-success">		
		';

		echo 'Awesome, you just added another <strong>studio</strong> shot to the website!';

		require('!dbconnect.php');
		if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
		} else {

			if(empty($_FILES['studio_image'])) {
				print '<div class="error">Please enter a studio shot.</div>';
				$problem = TRUE;
			}
		
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
				$image =$_FILES['studio_image']['name'];
				$image_tmp =$_FILES['studio_image']['tmp_name'];
				$content = $_POST['content'];
				$uploadedfile = $image_tmp;
				
				// look for a main image
				if ($image) {
					$filename = stripslashes($image);
					$ext = getExtension($filename);
					$name = getName($filename);
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
							$extension = "jpg";
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
						$upload_path = '../img/studio/';
						
						// convert name to lowercase
						$workname = strtolower($name);
						
						// set the  number
						$num =  rand(0, 1000);

						// rename the file
						$filename_l = $upload_path . /*$workname*/ 'studio_' . $num . '_l.' . $extension;
						$filename_m = $upload_path . /*$workname*/ 'studio_' . $num . '_m.' . $extension;
						$filename_s = $upload_path . /*$workname*/ 'studio_' . $num . '_s.' . $extension;

						imagejpeg($tmp_l,$filename_l,100);
						imagejpeg($tmp_m,$filename_m,100);
						imagejpeg($tmp_s,$filename_s,100);
						
						imagedestroy($src);
						imagedestroy($tmp_l);
						imagedestroy($tmp_m);
						imagedestroy($tmp_s);

						$url = $baseURL . '?name=' . $workname;
						
					} // end of $extension
				} // end of $image
			}

			$query_submit = mysql_query("INSERT INTO studio (studio_entry_id,studio_image,studio_text,studio_date_entered) VALUES ('0','$filename_l','$content',NOW())");
			mysql_query($query_submit);

			//If no errors registred, print the success message
			if(isset($_POST['Submit']) && !$errors) {
				// mysql_query("update {$prefix}users set img='$big',img_small='$small' where user_id='$user'");
				$change=' <div class="msgdiv">Image Uploaded Successfully!</div>';
			}
			mysql_close($dbc);		
		} // end if(!$dbc)

	
	}
	if( $ref == $page[1] ) {

		echo '
				<h1>Add Works</h1>
			</header>
			<div class="content">
				<form action="upload_main.php" method="post" id="uploadworks" enctype="multipart/form-data">
					
					<input type="hidden" name="MAX_FILE_SIZE" value="5000000" />
					<div class="module-main bg-3">
						<div class="upload-success">		
		';

		echo 'Awesome, you just added another <strong>work</strong> to the website!';

		require('!dbconnect.php');
		if(!$dbc) {
			echo '<p class="error">You could not connect to the DB right now...</p>';
		} else {

			if(empty($_FILES['main_image'])) {
				print '<div class="error">Please enter a work shot.</div>';
				$problem = TRUE;
			}
		
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
				$image =$_FILES['main_image']['name'];
				$image_tmp =$_FILES['main_image']['tmp_name'];
				$content = $_POST['content'];
				$uploadedfile = $image_tmp;
				
				// look for a main image
				if ($image) {
					$filename = stripslashes($image);
					$ext = getExtension($filename);
					$name = getName($filename);
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
							$extension = "jpg";
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
						
						$workname = $_POST['workname'];
						// remove spaces and extra characters from filename
						$workname = str_replace(" ","-",$workname);
						$workname = strtolower($workname);
						
						//echo $workname;
								
						// get file name with extension
						$file = $image;

						// set upload path
						$upload_path = '../img/works/';
						
						// set the  number
						$rnum =  rand(0, 1000);

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

						$url = $baseURL . '?name=' . $workname . '?num=' . $num;
		
						echo '<br/><br/>';
						echo 'Do you want to add some related images?<br/><a href="' . $baseURL  . '?name=' . $workname . '&num=' . $num . '&rnum='. $rnum . '" class="mybutton">Yes</a>';
						
					} // end of $extension
				} // end of $image
			}

			//get the section
			if($_POST['furnishings']) {
				$sec_furnishings = 'yes';
			}
			if($_POST['sculpture']) {
				$sec_sculpture = 'yes';
			}
			if($_POST['drawing']) {
				$sec_drawing = 'yes';
			}
			if($_POST['painting']) {
				$sec_painting = 'yes';
			}
			if($_POST['design']) {
				$sec_design = 'yes';
			}
			if($_POST['students']) {
				$sec_students = 'yes';
			}

			$workname = $_POST['workname'];
			$year = $_POST['year'];
			$media = $_POST['media'];
			$description = $_POST['description'];
			$dimension_d = $_POST['dimension_d'];
			$dimension_w = $_POST['dimension_w'];
			$dimension_h = $_POST['dimension_h'];
			$available = $_POST['available'];
			$price = $_POST['price'];
			$main_image = $_POST['main_image'];
			$related_images = 00;

			$query_submit = mysql_query("
				INSERT INTO works (
					works_entry_id,
					furnishings,
					sculpture,
					drawing,
					painting,
					design,
					students,
					workname,
					year,
					media,
					description,
					dimension_d,
					dimension_w,
					dimension_h,
					available,
					main_image,
					related_images,
					works_date_entered
				) VALUES (
					0,
					'$sec_furnishings',
					'$sec_sculpture',
					'$sec_drawing',
					'$sec_painting',
					'$sec_design',
					'$sec_students',
					'$workname',
					'$year',
					'$media',
					'$description',
					'$dimension_d',
					'$dimension_w',
					'$dimension_h',
					'$available',
					'$filename_l',
					'$related_images',
					NOW()
				)
			");
			mysql_query($query_submit);

			//If no errors registred, print the success message
			if(isset($_POST['Submit']) && !$errors) {
				// mysql_query("update {$prefix}users set img='$big',img_small='$small' where user_id='$user'");
				$change=' <div class="msgdiv">Image Uploaded Successfully!</div>';
			}
			mysql_close($dbc);		
		} // end if(!$dbc)

	}	
} else {
		echo 'You need to start from a page that will allow the uploading of images.<br/><a href="../admin/">Why not head back here</a>?';	
};


?>
						</div>
					</div>
				</form>
			</div>
		</section>
		
	</article>
</div>

</body>
</html>
