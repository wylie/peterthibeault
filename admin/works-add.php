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
	<article class="admin" data-page="works-add">
		<nav class="pages">
			<?php require('nav.php'); ?>
		</nav>
		
		<section class="module">
			<header class="section-header">
				<h1>Add Works</h1>
			</header>
			<div class="content">
				<!-- <form method="post" id="uploadworks" enctype="multipart/form-data">-->
				<form action="upload_main.php" method="post" id="uploadworks" enctype="multipart/form-data">

					<hr class="module-divider"/>
					
					<div class="works-edit">
						<h3>Sections:</h3><br/>
						<div class="sections">					
							<input type="checkbox" name="furnishings" id="furnishings" value="furnishings"><label class="label" for="furnishings">Furnishings</label>
							<input type="checkbox" name="sculpture" id="sculpture" value="sculpture"><label class="label" for="sculpture">Sculpture</label>
							<input type="checkbox" name="drawing" id="drawing" value="drawing"><label class="label" for="drawing">Drawing</label>
							<input type="checkbox" name="painting" id="paintings" value="paintings"><label class="label" for="paintings">Painting</label>
							<input type="checkbox" name="design" id="design" value="design"><label class="label" for="design">Design</label>
							<input type="checkbox" name="students" id="students" value="students"><label class="label" for="students">Students</label>
						</div>
					</div>

					<input type="hidden" name="MAX_FILE_SIZE" value="5000000" />
					<div class="module-main bg-3">
						<input size="25" name="main_image" type="file" />
						<div class="input-restrictions">
							jpg and png files only
						</div>
					</div>
					<div class="module-sidebar">
	
						<ul class="sidebar-items-list bg-3 group">
							<li class="sidebar-item">
								
								<!-- START INFO ***************** -->
								<div class="info">
									<ul class="sidebar-list">
										<li class="sidebar-list-heading">TITLE</li>
										<li class="sidebar-list-item"><input id="workname" name="workname" type="text" class="form-input" /></li>
										<li class="sidebar-list-heading">YEAR</li>
										<li class="sidebar-list-item"><input id="year" name="year" type="text" class="form-input" /></li>
										<li class="sidebar-list-heading">MEDIA</li>
										<li class="sidebar-list-item"><input id="media" name="media" type="text" class="form-input" /></li>
										<li class="sidebar-list-heading">DESCRIPTION</li>
										<li class="sidebar-list-item"><textarea id="description" name="description" type="text" class="form-input" rows="5"></textarea></li>
										<li class="sidebar-list-heading">DIMENSIONS</li>
										<li class="sidebar-list-item"><input id="dimension_d" name="dimension_d" type="text" class="form-input" style="width: 25px;" />D x <input id="dimension_w" name="dimension_w" type="text" style="width: 25px;" class="form-input" />W x <input id="dimension_h" name="dimension_h" type="text" style="width: 25px;" class="form-input" />H</li>
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
											<select id="available" name="available">
												<option value="no">No</option>
												<option value="yes">Yes</option>
											</select>
										</li>
										<!--
										<script type="text/javascript">
											$(function() {
												$('#available').change(function() {
													var related = $('#available option:selected').val();
													console.log(related);
													if(related == 'yes') {
														$('.price').slideDown(250);
													}
													if(related == 'no') {
														$('.price').slideUp(250);
													}
												});
											});
										</script>
										<div class="price" style="display: none;">
											<li class="sidebar-list-heading">PRICE</li>
											<li class="sidebar-list-item">$<input id="price" name="price" type="text" class="form-input" /></li>
										</div>
										-->
									</ul>				
								</div>
								<!-- END AVAILABLE ************** -->
								
							</li>
						</ul>
		
					</div>

					<input type="submit" value="Upload this work" class="button primary-action upload" disabled="disabled" />
					<input type="hidden" name="ref" value="work" />
					<input type="hidden" name="number" value="0" />
					<input type="hidden" name="submitted" value="true" />
					
					<p><?php //addWorks(); ?></p>
				</form>
			</div>
		</section>
		
	</article>
</div>

</body>
</html>