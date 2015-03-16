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
	<script src="js/master.js"></script>
	
</head>
<body class="bg-1">

	<div class="l-left">
		
		<div class="stage"></div>
		
		<!-- sidebar -->
		<div class="sidebar bg-2">
			
			<!-- alert -->
			<div class="alert wip">
				This site is a work in progress. New works will be added shortly. Check back often to see what's new!
			</div>
			<!-- end alert -->
			
			<!-- sub-header -->
			<div class="sub-header">
				<h2 class="sub-heading"><nobr>Peter R. Thibeault</nobr><br/><nobr>Thibeault: DESIGN</nobr></h2>
			</div>
			<!-- end sub-header -->
			
			<!-- nav -->
			<div class="nav">
				<?php navDisplay() ?>
			</div>
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
		
		<?php buildModule('furnishings', 'work'); ?>

		<?php buildModule('sculpture', 'work'); ?>

		<?php buildModule('drawing', 'work'); ?>

		<?php buildModule('painting', 'work'); ?>

		<?php buildModule('design', 'work'); ?>

		<?php buildModule('students', 'work'); ?>

		<?php buildModule('studio', 'studio'); ?>

		<?php buildModule('news', 'news'); ?>

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