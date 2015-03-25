<?php

	require('!require-admin.php');
	
?>
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
	<script src="js/admin.js"></script>
	
</head>
<body>

<div class="wrap">
	<?php require('login.php'); ?>
	<article class="admin" data-page="works-manage">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		<section class="module manage">
			<header class="section-header">
				<h1>Manage Works</h1>
			</header>
			<div class="works-edit">
				<h2>A Stat:</h2><br/>
				<p>You have a total of <?php
				
					require('!dbconnect.php');
					
					$queryCount = "SELECT COUNT(*) FROM works";
					$resultCount = mysql_query($queryCount);
					$count = mysql_result($resultCount, 0);
					
					echo $count;
					
					$queryFurn = "SELECT COUNT(*) FROM works WHERE furnishings='yes'";
					$resultFurn = mysql_query($queryFurn);
					$furn = mysql_result($resultFurn, 0);

					$queryScul = "SELECT COUNT(*) FROM works WHERE sculpture='yes'";
					$resultScul = mysql_query($queryScul);
					$scul = mysql_result($resultScul, 0);

					$queryDraw = "SELECT COUNT(*) FROM works WHERE drawing='yes'";
					$resultDraw = mysql_query($queryDraw);
					$draw = mysql_result($resultDraw, 0);

					$queryPain = "SELECT COUNT(*) FROM works WHERE painting='yes'";
					$resultPain = mysql_query($queryPain);
					$pain = mysql_result($resultPain, 0);

					$queryDesi = "SELECT COUNT(*) FROM works WHERE design='yes'";
					$resultDesi = mysql_query($queryDesi);
					$desi = mysql_result($resultDesi, 0);

					$queryStud = "SELECT COUNT(*) FROM works WHERE students='yes'";
					$resultStud = mysql_query($queryStud);
					$stud = mysql_result($resultStud, 0);
					
				?> items in the database!</p>

				<hr class="module-divider"/>

				<h2>Filter Works By Section</h2><br/>
				<div class="filter">
					<input type="radio" name="section" id="furnishings"><label class="label" for="furnishings">Furnishings (<?php echo $furn;?>)</label>
					<input type="radio" name="section" id="sculpture"><label class="label" for="sculpture">Sculpture (<?php echo $scul;?>)</label>
					<input type="radio" name="section" id="drawing"><label class="label" for="drawing">Drawing (<?php echo $draw;?>)</label>
					<input type="radio" name="section" id="painting"><label class="label" for="painting">Painting (<?php echo $pain;?>)</label>
					<input type="radio" name="section" id="design"><label class="label" for="design">Design (<?php echo $desi;?>)</label>
					<input type="radio" name="section" id="students"><label class="label" for="students">Students (<?php echo $stud;?>)</label><br/><br/>
					<input type="radio" name="section" id="all" checked="checked" /><label class="label" for="all">Display all</label>
				</div>
								
			</div>
			<?php
			//function getwork() {
				require('!dbconnect.php');
				if(!$dbc) {
						echo '<p class="error">You could not connect to the DB right now...</p>';
				} else {
					// get the old news items
					$query_get = "SELECT * FROM works ORDER BY works_entry_id ASC";
					if($r = mysql_query($query_get)) {
						while($row = mysql_fetch_array($r)) {
							include('!dbvariables.php');
			?>
			<div class="content<?php

			// add a class based on the section(s) the work is in
			$querySections = "SELECT * FROM works WHERE works_entry_id=' . $works_entry_id . '";
			if($sec_furnishings) {
				echo ' furnishings';
			} elseif($sec_sculpture) {
				echo ' sculpture';
			} elseif($sec_drawing) {
				echo ' drawing';
			} elseif($sec_painting) {
				echo ' painting';
			} elseif($sec_design) {
				echo ' design';
			} elseif($sec_students) {
				echo ' students';
			}
			?>" id="<?php echo $works_entry_id ?>">
				<form action="works-edit.php" method="POST" id="uploadworks" enctype="multipart/form-data">

					<hr class="module-divider"/>
					
					<div class="work">
						<div class="works-edit">
							<h3>Date Added:</h3>
							<?php formatDate($works_date_entered); ?>
						</div><!-- end class="works-edit" -->
					</div><!-- end of class="work" -->
					
					<div class="module-main bg-3">
						<img src="<?php echo $main_image; ?>" alt="" class="main-image" />
					</div><!-- end of class="module-main bg-3" -->
					<div class="module-sidebar">
						<ul class="sidebar-items-list bg-3 group">
							<li class="sidebar-item">
								<!-- START INFO ***************** -->
								<div class="info">
									<ul class="sidebar-list">
										<li class="sidebar-list-heading">TITLE</li>
										<li class="sidebar-list-item"><input id="workname" name="workname" type="text" class="form-input" value="<?php echo $workname; ?>" /></li>
										
										<li class="sidebar-list-heading">YEAR</li>
										<li class="sidebar-list-item"><input id="year" name="year" type="text" class="form-input" value="<?php echo $year; ?>" /></li>
										
										<li class="sidebar-list-heading">MEDIA</li>
										<li class="sidebar-list-item"><input id="media" name="media" type="text" class="form-input" value="<?php echo $media; ?>" /></li>
										<li class="sidebar-list-heading">DESCRIPTION</li>
										<li class="sidebar-list-item"><textarea id="description" name="description" type="text" class="form-input" rows="5"><?php echo $description; ?></textarea></li>
										<li class="sidebar-list-heading">DIMENSIONS</li>
										<li class="sidebar-list-item"><input id="dimension_d" name="dimension_d" type="text" class="form-input" style="width: 25px;" value="<?php echo $dimension_d; ?>" />D x <input id="dimension_w" name="dimension_w" type="text" style="width: 25px;" class="form-input" value="<?php echo $dimension_w; ?>" />W x <input id="dimension_h" name="dimension_h" type="text" style="width: 25px;" class="form-input" value="<?php echo $dimension_h; ?>" />H</li>
									</ul>
								</div>
								<!-- END INFO ******************* -->
							</li>
							<li class="sidebar-item">
								<!-- START AVAILABLE ************ -->
								<div class="available">
									<ul class="sidebar-list">
										<li class="sidebar-list-heading">Available</li>
										<li class="sidebar-list-item">
											<select id="available">
												<option>Select One</option>
												<?php
													if($available == 'yes') {
														echo '
															<option value="yes" selected="yes">Yes</option>
															<option value="no">No</option>
														';
													} else {
														echo '
															<option value="yes">Yes</option>
															<option value="no" selected="yes">No</option>
														';
													}
												?>
											</select>
										</li>
									</ul>				
								</div>
								<!-- END AVAILABLE ************** -->
							</li>
							<li class="sidebar-item">
								<!-- START RELATED ************** -->
								<!--
								<div class="related">
									<ul class="sidebar-list">
										<li class="sidebar-list-heading">RELATED IMAGES</li>
										<li class="sidebar-list-item">
											<?php
										
												echo $related_images;
										
											?>
										</li>
									</ul>
								</div>
								-->
								<!-- END RELATED **************** -->
							</li>
						</ul>
					</div><!-- end class="module-sidebar" -->
	
					<div class="works-edit group" id="works_entry_id-<?php echo $works_entry_id; ?>">
						<button type="submit" name="edit" value="save" class="save button">Save this work</button>
						<button type="submit" name="edit" value="delete" class="delete button">Delete this work</button>
						<input type="hidden" name="id" value="<?php echo $works_entry_id; ?>" />
						<input type="hidden" name="submitted" value="true" />
					</div>
				</form>
			</div>
							<?php
						}
					}// end if($r...
					
					// close the DB connection
					mysql_close($dbc);		
				} // end if(!$dbc)
			?>
		</section><!-- end of class="module" -->
	</article><!-- end of class="admin" -->
</div><!-- end of class="wrap" -->

</body>
</html>