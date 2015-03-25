<?php





// ******************
// navigation
// ******************
function navDisplay() {

	echo '				
				<ul class="nav-list">
	';

	/*
	require('admin/!dbconnect.php');

	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {

		$query_get = "SELECT * FROM works ORDER BY works_entry_id";

		if($r = mysql_query($query_get)) {
			while($row = mysql_fetch_array($r)) {
				include('admin/!dbvariables.php');
				// echo each section if an entry for that section is in the DB
				if($sec_furnishings) {
					echo '<li class="item active"><a href="#furnishings" class="link" title="View my furnishings">Furnishings</a></li>';
				}
				if($sec_sculpture) {
					echo '<li class="item"><a href="#sculpture" class="link" title="View my sculptures">Sculpture</a></li>';
				}
				if($sec_drawing) {
					echo '<li class="item"><a href="#drawing" class="link" title="View my drawings">Drawing</a></li>';
				}
				if($sec_painting) {
					echo '<li class="item"><a href="#painting" class="link" title="View my paintings">Painting</a></li>';
				}
				if($sec_design) {
					echo '<li class="item"><a href="#design" class="link" title="View my design work">Design</a></li>';
				}
				if($sec_students) {
					echo '<li class="item"><a href="#students" class="link" title="View some work created by my students">Students</a></li>';
				}
			}
		}

	} // end if(!$dbc)
	*/	
	echo '				
					<li class="item active"><a href="#furnishings" class="link" title="View my furnishings">Furnishings</a></li>
					<li class="item"><a href="#sculpture" class="link" title="View my sculptures">Sculpture</a></li>
					<li class="item"><a href="#drawing" class="link" title="View my drawings">Drawing</a></li>
					<li class="item"><a href="#painting" class="link" title="View my paintings">Painting</a></li>
					<li class="item"><a href="#design" class="link" title="View my design work">Design</a></li>
					<li class="item"><a href="#students" class="link" title="View some work created by my students">Students</a></li>
					<li class="item"><a href="#studio" class="link" title="Get a glimpse inside my studio">Studio</a></li>
					<li class="item"><a href="#news" class="link" title="Read about what I am up to">News</a></li>
					<li class="item"><a href="#cv" class="link" title="Read my CV">CV</a></li>
					<li class="item" style="border-bottom:none;"><a href="#contact" class="link">Contact</a></li>
				</ul>
	';

}





// ******************
// contact form stuff
// ******************
function emailed() {
	if(isset($_POST['mailed'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		if(!$name) {
			echo '<div class="error msg">Please enter your name</div>';
			$problem = TRUE;
		}
		if(!$email) {
			echo '<div class="error msg">Please enter your email</div>';
			$problem = TRUE;
		}
		if(!$message) {
			echo '<div class="error msg">Please enter your message</div>';
			$problem = TRUE;
		}
		
		if(!$problem) {
			mail( "tbowdsign@verizon.net", "Website Contact Form", $message, "From: $email" );
			echo '<div class="success msg">Your message has been sent</div>';
		}
	}
}





// *************************************************
// break apart the image, and path, stored in the DB
// *************************************************
function getPath($str) {
	$ext = substr($str, 0, 13);
	return $ext;
}
function getName($str) {
	$ext = substr($str, 13, -8);
	return $ext;
}
function getNumber($str) {
	$i = strrpos($str,".");
	if (!$i) { return ""; }
	$l = strlen($str) - $i;
	$ext = substr($str,$i-4,$l-2);
	return $ext;
}
function getSize($str) {
	$i = strrpos($str,".");
	if (!$i) { return ""; }
	$l = strlen($str) - $i;
	$ext = substr($str,$i-2,$l-2);
	return $ext;
}
function getExt($str) {
	$i = strrpos($str,".");
	if (!$i) { return ""; }
	$l = strlen($str) - $i;
	$ext = substr($str,$i,$l);
	return $ext;
}





// ********************
// get & reformat date
// ********************
function formatDate($date) {
	$phpdate = strtotime( $date );
	$mysqldate = date( 'dMy', $phpdate );
	echo strtoupper($mysqldate);
}





// *****************************
// list info for individual work
// *****************************
function listInfo($section,$num) {

	require('admin/!dbconnect.php');

	echo '<!-- START INFO ***************** -->						
			<ul class="info sidebar-list bg-3" data-sidebar="info">';
	
	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {

		$query_get = "SELECT * FROM works WHERE works_entry_id=" . $num . " ORDER BY works_entry_id";

		if($r = mysql_query($query_get)) {
			while($row = mysql_fetch_array($r)) {
				include('admin/!dbvariables.php');
				// check for work info, display only if some was entered
				if($workname) {
					echo '
									<li class="sidebar-list-heading">TITLE</li>
									<li data-info="name" class="sidebar-list-item">'; echo $workname . '</li>
					';
				}
				if($year) {
					echo '
									<li class="sidebar-list-heading">YEAR</li>
									<li data-info="year" class="sidebar-list-item">'; echo $year . '</li>
					';
				}
				if($media) {
					echo '
									<li class="sidebar-list-heading">MEDIA</li>
									<li data-info="media" class="sidebar-list-item">'; echo $media . '</li>
					';
				}
				if($description) {
					echo '
									<li class="sidebar-list-heading">DESCRIPTION</li>
									<li data-info="description" class="sidebar-list-item">'; echo $description . '</li>
					';
				}
				if($dimension_d || $dimension_w || $dimension_h) {
					echo '
									<li class="sidebar-list-heading">DIMENSIONS</li>
									<li data-info="dimension" class="sidebar-list-item">
					';
					
					
					if($dimension_h) {
						echo '<span data-info="height">' . $dimension_h . '</span> H';
					}
					if( ($dimension_h && $dimension_w) || ($dimension_h && $dimension_d) ) {
						echo ' x ';
					}
					if($dimension_w) {
						echo '<span data-info="width">' . $dimension_w . '</span> W';
					}
					if($dimension_w && $dimension_d) {
						echo ' x ';
					}
					if($dimension_d) {
						echo '<span data-info="depth">' . $dimension_d . '</span> D';
					}
					echo '
									</li>
					';
				}
			}
		}
	} // end if(!$dbc)
	echo '</ul>
		<!-- END INFO ******************* -->
	';
}




// *******************************
// list main works in this section
// *******************************
function listRelated($section,$num) {

	require('admin/!dbconnect.php');

	echo '<!-- START RELATED ************** -->
			<ul class="related sidebar-list bg-3" data-sidebar="related" data-number="0">
	';

	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {

		$query_get = "SELECT * FROM works WHERE works_entry_id=" . $num . " ORDER BY works_entry_id";

		if($r = mysql_query($query_get)) {
			while($row = mysql_fetch_array($r)) {
				include('admin/!dbvariables.php');
				$path = getPath($main_image);
				$name = getName($main_image);
				$number = getNumber($main_image);
				$size = getSize($main_image);
				$extension = getExt($main_image);
				
				echo '<li class="sidebar-list-item active"><a href="#' . $section . '" style="background-image: url(' . $path . $name . '_0' . '_s' . $extension . ');"></a></li>';
			}
		}

		//echo '<li class="sidebar-list-item" style="background-image: url(' . $path . $name . '-01' . '_s' . $extension . ');"></li>';

	} // end if(!$dbc)
	echo '
			</ul>
		<!-- END RELATED **************** -->
	';
}





// *******************************************************
// get the ID for the first work, and build out the module
// *******************************************************
function displayLeft($section, $num) {

	require('admin/!dbconnect.php');

	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {
	
		if($section == 'furnishings' | $section == 'sculpture' | $section == 'drawing' | $section == 'painting' | $section == 'design' | $section == 'students') {
			
				// query for the left info
				$query_get = "SELECT * FROM works WHERE works_entry_id=" . $num . " ORDER BY works_entry_id";
		
				// start the main image container
		
				if($r = mysql_query($query_get)) {
					while($row = mysql_fetch_array($r)) {
						include('admin/!dbvariables.php');
						$path = getPath($main_image);
						$name = getName($main_image);
						$number = getNumber($main_image);
						$size = getSize($main_image);
						$extension = getExt($main_image);
						
						echo '
				<div class="module-main bg-3">
					<img src="' . $path . $name . $number . $size . $extension . '" class="main-image" alt="main image" title="' . $name . '" />
				</div>
				<div class="module-sidebar">
		
					<ul class="sidebar-items-list bg-3 group">
						<li class="sidebar-header">
							<h2 class="sidebar-list-heading" data-sidebar="info" title="Learn more about this piece">INFO</h2>
						</li>
						<li class="sidebar-header">
						';
							if($available == 'yes') {
								echo '<a href="mailto:tbowdsign@verizon.net?subject=Work inquiry: ' . $workname . ' (' . $section . ')&body=I am inquiring about a ' . $section . ' listed on your website. The name of it is: ' . $name . '" target="_blank" class="sidebar-list-heading" data-sidebar="available" title="Send me an email">AVAILABLE</a>';
							}
						echo '
						</li>
						<li class="sidebar-header">
						';
							//if($related_images > 0) {
								echo '<h2 class="sidebar-list-heading" data-sidebar="related" title="View some more images of this piece">RELATED IMAGES</h2>';
							//}
						echo '
						</li>
						<li class="sidebar-item">
						';
						listInfo($section,$num);
						echo '
						</li>
						<li class="sidebar-item">
						';
								listRelated($section,$num);
						echo '
						</li>
					</ul>
					
				</div>
						';
					}
				}


		} elseif($section == 'news') {
			// set up the DB query		
			$query_get = "SELECT * FROM news ORDER BY news_entry_id DESC LIMIT 1";
			// if we could connect do your thing with the query
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
					// get all the stored DB variables
					include('admin/!dbvariables.php');
					echo '<div class="module-main bg-3">';
					echo '<div class="text">' . $content . '</div>';
					echo '<div class="display-date">';
					echo formatDate($news_date_entered);
					echo '</div>';
					echo '</div>';
				}
			}
		} elseif($section == 'studio') {
			// set up the DB query		
			$query_get = "SELECT * FROM studio ORDER BY studio_entry_id DESC LIMIT 1";
			// if we could connect do your thing with the query
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
					// get all the stored DB variables
					include('admin/!dbvariables.php');
					echo '<div class="module-main bg-3">';
					echo '<span class="display-date">';
					echo formatDate($studio_date_entered);
					echo '</span>';
					echo '<img src="' . $studio_image . '" class="main-image" alt="studio image" />';
					echo '</div>';
				}
			}
		}
		// close the DB connection
		mysql_close($dbc);
	} // end if(!$dbc)
}





// ***********************************************************
// access the DB and get all the medium thumbnails per section
// ***********************************************************
function listAdditional($section) {
	// change case to all lower
	$section = strtolower($section);
	// connect to the DB
	require('admin/!dbconnect.php');
	// check to make sure we could connect
	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {
		
		if($section == 'furnishings' | $section == 'sculpture' | $section == 'drawing' | $section == 'painting' | $section == 'design' | $section == 'students') {
			// set up the DB query		
			$query_get = "SELECT * FROM works WHERE " . $section . "='yes' ORDER BY works_entry_id";
			// if we could connect do your thing with the query
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
					// get all the stored DB variables
					include('admin/!dbvariables.php');
					$path = getPath($main_image);
					$name = getName($main_image);
					$number = getNumber($main_image);
					$size = getSize($main_image);
					$extension = getExt($main_image);
					// echo out an LI per each row of content in the DB
					echo '<li class="list-item" data-id="' . $works_entry_id . '"
					data-id="' . $works_entry_id . '"
					data-workname="' . $workname . '"
					data-year="' . $year . '"
					data-mainimage="' . $main_image . '"
					data-media="' . $media . '"
					data-desc="' . $description . '"
					data-dd="' . $dimension_d . '"
					data-dw="' . $dimension_w . '"
					data-dh="' . $dimension_h . '"
					data-available="' . $available . '"
					data-related="' . $related_images . '"
					data-date="' . $works_date_entered . '"
					style="background-image: url(' . $path . $name . $number . '_m' . $extension . ');" title="' . $name . '"></li>';
				}
			}
		} elseif($section == 'news') {
			// set up the DB query		
			$query_get = "SELECT * FROM news ORDER BY news_entry_id DESC";
			// if we could connect do your thing with the query
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
					// get all the stored DB variables
					include('admin/!dbvariables.php');
					echo '<li class="list-item" data-id="' . $news_entry_id . '" data-content="' . $content . '" data-date="';
					echo formatDate($news_date_entered);
					echo '">';
					echo formatDate($news_date_entered);
					echo '</li>';
				}
			}
		} elseif($section == 'studio') {
			// set up the DB query		
			$query_get = "SELECT * FROM studio ORDER BY studio_entry_id DESC";
			// if we could connect do your thing with the query
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
					// get all the stored DB variables
					include('admin/!dbvariables.php');

					$path = getPath($studio_image);
					$name = getName($studio_image);
					$number = getNumber($studio_image);
					$size = getSize($studio_image);
					$extension = getExt($studio_image);

					echo '<li class="list-item" data-id="' . $studio_entry_id . '" data-mainimage="' . $studio_image . '" style="background-image: url(' . $path . $name . $number . '_m' . $extension . ');" data-content="' . $studio_text . '" data-date="';
					//echo '<li class="list-item" data-id="' . $studio_entry_id . '" data-mainimage="' . $studio_image . '" data-content="' . $studio_text . '" data-date="';
					echo formatDate($studio_date_entered);
					echo '">';
					echo formatDate($studio_date_entered);
					echo '</li>';
				}
			}
		}
		// close the DB connection
		mysql_close($dbc);
	} // end if(!$dbc)
}





// ********************
// build out the module
// ********************
function buildModule($section, $kind) {
	
	// change case to all lower
	$section = strtolower($section);
	// connect to the DB
	require('admin/!dbconnect.php');
	// check to make sure we could connect

	if(!$dbc) {
		echo '<p class="error">You could not connect to the DB right now...</p>';
	} else {

		if($kind === 'work') {
			// check to see if there is a reason to display the module
			$query_get = "SELECT " . $section . " FROM works WHERE " . $section . "='yes' ORDER BY works_entry_id ASC LIMIT 1";
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
	
					// start building the module
					echo '
						<!-- ' . $section . ' module -->
						<div class="module group" data-section="' . $section . '" data-kind="' . $kind . '">
							<a name="' . $section . '"></a>
							<div class="header">' . strtoupper($section) . '</div>
					';
			
					// get the first image in the section
					$query_get = "SELECT works_entry_id FROM works WHERE " . $section . "='yes' ORDER BY works_entry_id ASC LIMIT 1";
					if($r = mysql_query($query_get)) {
						while($row = mysql_fetch_array($r)) {
						
							echo '<div class="left" data-id="' . $row[0] . '">';
							displayLeft($section, $row[0]);
						
						}
					}
			
					echo '
							</div>
							<div class="right">
								<div class="module-nav bg-3">
									<h3 class="sub-header">Additional<br/>'; echo ucwords($section) . '</h3>
									<div class="list-wrap">
										<ul class="module-list">
					';
					listAdditional($section);
					echo '
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- end ' . $section . ' module -->
					';
				}
			}// stop finding out if there is anythign to show
		} else if($kind === 'news') {
			// check to see if there is a reason to display the module
			$query_get = "SELECT * FROM news ORDER BY news_entry_id ASC LIMIT 1";
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
	
					// start building the module
					echo '
						<!-- ' . $section . ' module -->
						<div class="module group" data-section="' . $section . '" data-kind="' . $kind . '">
							<a name="' . $section . '"></a>
							<div class="header">' . strtoupper($section) . '</div>
					';
			
					// get the first image in the section
					$query_get = "SELECT * FROM news ORDER BY news_entry_id ASC LIMIT 1";
					//if($r = mysql_query($query_get)) {
						//while($row = mysql_fetch_array($r)) {
						
							echo '<div class="left" data-id="' . $row[0] . '">';
							displayLeft($section, $row[0]);
						
						//}
					//}
			
					echo '
							</div>
							<div class="right">
								<div class="module-nav bg-3">
									<h3 class="sub-header">Additional<br/>'; echo ucwords($section) . '</h3>
									<div class="list-wrap">
										<ul class="module-list">
					';
					listAdditional($section);
					echo '
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- end ' . $section . ' module -->
					';
				}
			}// stop finding out if there is anythign to show
		} else if($kind === 'studio') {
			// check to see if there is a reason to display the module
			$query_get = "SELECT * FROM studio ORDER BY studio_entry_id ASC LIMIT 1";
			if($r = mysql_query($query_get)) {
				while($row = mysql_fetch_array($r)) {
	
					// start building the module
					echo '
						<!-- ' . $section . ' module -->
						<div class="module group" data-section="' . $section . '" data-kind="' . $kind . '">
							<a name="' . $section . '"></a>
							<div class="header">' . strtoupper($section) . '</div>
					';
			
					// get the first image in the section
					$query_get = "SELECT * FROM studio ORDER BY studio_entry_id ASC LIMIT 1";
					//if($r = mysql_query($query_get)) {
						//while($row = mysql_fetch_array($r)) {
						
							echo '<div class="left" data-id="' . $row[0] . '">';
							displayLeft($section, $row[0]);
						
						//}
					//}
			
					echo '
							</div>
							<div class="right">
								<div class="module-nav bg-3">
									<h3 class="sub-header">Additional<br/>'; echo ucwords($section) . '</h3>
									<div class="list-wrap">
										<ul class="module-list">
					';
					listAdditional($section);
					echo '
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- end ' . $section . ' module -->
					';
				}
			}// stop finding out if there is anythign to show
		}// end of STUDIO module


	}// end no connect to db
}





?>