<?php

	require('!require.php');
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Peter Thibeault</title>
	
	<link href="css/master.css" rel="stylesheet" />
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="js/script.js"></script>
	
</head>
<body class="bg-1">

	<div class="l-left">
		
		<!-- sidebar -->
		<div class="sidebar bg-2">
			
			<!-- sub-header -->
			<div class="sub-header">
				<h2 class="sub-heading"><nobr>Peter R. Thibeault</nobr><br/><nobr>Thibeault: DESIGN</nobr></h2>
			</div>
			<!-- end sub-header -->
			
			<!-- nav -->
			<!-- <div class="nav">
				<?php // navDisplay() ?>
			</div> -->
			<ul class="nav" id="nav"></ul>
			<!-- end nav -->
			
			<!-- copyright -->
			<div class="copyright">
				<div class="text">
					&copy;
					<?php
					
						$startYear = '2012';
						$thisYear = date("Y");
						if( $startYear == $thisYear ) {
							echo $thisYear;
						} else {
							echo $startYear . '&ndash;' . $thisYear;
						}
						
					?>
					Peter Thibeault<!--  | <a href="#" class="link">info</a> | <a href="#" class="link">The Duke</a> -->
				</div>				
			</div>
			<!-- end copyright -->
			
		</div>
		<!-- end sidebar -->		
		
		
	</div>
	<div class="l-right">
		
		<!-- header -->
		<div class="logo">
			<h1 class="logo-image">
				THIBEAULT
			</h1>
		</div>
		<!-- end header -->
		
		<ul id="results"></ul>

		<div id="works"></div>

		<!--
		<div class="module group" id="result">
			<div class="header">FURNISHINGS</div>
			<div class="left">
				<div class="module-main bg-3">
					<img id="resultImg" class="main-image" alt="main image" />
				</div>
				<div class="module-sidebar">
					<ul class="sidebar-items-list bg-3 group">
						<li class="sidebar-header">
							<h2 class="sidebar-list-heading">INFO</h2>
						</li>
						<li class="sidebar-header"></li>
						<li class="sidebar-header">
							<h2 class="sidebar-list-heading">RELATED IMAGES</h2>
						</li>
						<li class="sidebar-item">
						<ul class="info bg-3">
							<li class="sidebar-list-heading">TITLE</li>
							<li class="sidebar-list-item" id="resultTitle"></li>
							<li class="sidebar-list-heading">
								MEDIA
							</li>
							<li class="sidebar-list-item" id="resultMedia"></li>
							<li class="sidebar-list-heading">DESCRIPTION</li>
							<li class="sidebar-list-item" id="resultDescription"></li>
							<li class="sidebar-list-heading">DIMENSIONS</li>
							<li class="sidebar-list-item" id="resultDimensions"></li>
						</ul>
						</li>
						<li class="sidebar-item">
							<ul class="related sidebar-list bg-3">
								<li class="sidebar-list-item active">
									<a href="#furnishings" style="background-image: url(../img/works/chest-645_0_s.jpg);"></a>
								</li>
								<li class="sidebar-list-item extra">
									<a href="#furnishings" style="background-image: url(../img/works/chest-645_1_s.jpg);"></a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<div class="module-nav bg-3">
					<h3 class="sub-header">Additional<br>Furnishings</h3>
					<div class="list-wrap">
						<ul class="module-list">
							<li class="list-item active" style="background-image: url(../img/works/mantle-clock-297_0_m.jpg);"></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		-->

		<!-- cv module -->
		<div class="module group" id="cv">
			<a name="cv"></a>
			<div class="header">CV</div>
			<div class="module-main bg-3">
				<?php
					// outputs e.g.  somefile.txt was last modified: December 29 2002 22:16:23.
					
					$filename = 'admin/resume/resume-raw.php';
					if (file_exists($filename)) {
					    echo '<div class="cv-date">' . strtoupper(date("dMy", filemtime($filename))) . '</div>';
					}
				?>		
				<div class="cv"></div>
			</div>
		</div>
		<!-- end cv module -->
		
		<!-- contact module -->
		<div class="module group" id="contact">
			<a name="contact"></a>
			<div class="header">CONTACT</div>
			<div class="module-main bg-3">
				<form method="post" action="#contact">
					<input type="text" name="name" placeholder="Your Name" />
					<input type="text" name="email" placeholder="Your Email" />
					<textarea name="message" placeholder="Your Message"></textarea>
					<button type="submit" class="submit">Send</button>
					<input type="hidden" name="mailed" value="true">
					<?php emailed() ?>
				</form>
			</div>
		</div>
		<!-- end contact module -->
		
	</div>

<!-- GOOGLE ANALYTICS -->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35184574-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- end GOOGLE ANALYTICS -->

</body>
</html>