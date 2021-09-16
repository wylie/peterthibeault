<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Thibeault Design</title>

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/master-7.css" />
	<link rel="stylesheet" href="css/new-7.css" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript">
		$(function() {
		/*place jQuery actions here*/
			
			//$(".logo-heading").fitText();
			//$('.logo').find('.heading').fitText(1);
			
			$('.nav-list').find('.item').on('click', function() {
				$(this).siblings().removeClass('active').end().addClass('active');
			});
			var bodyH = $('body').height();
//			console.log(bodyH);
			if( bodyH <= 575) {
				//console.log('smaller!');
				$('#left').find('.sidebar').css('height', '575px');
			};
		});
		
	</script>

</head>
<body>

	<section id="left">
		<section class="sidebar">
			<h1 class="logo"style=" margin-bottom: 20px; ">
				<img src="images/logo-fff-sm.gif" alt="logo" style="width: 265px;" />
			</h1>

			<h4 class="subheading" style=" line-height: 2em; ">Peter R. Thibeault<br/>Thibeault: DESIGN</h4>
			<nav class="nav">
				<ul class="nav-list">
					<li class="item active"><a href="#" class="link">Furnishings</a></li>
					<li class="item"><a href="#" class="link">Sculpture</a></li>
					<li class="item"><a href="#" class="link">Drawing</a></li>
					<li class="item"><a href="#" class="link">Painting</a></li>
					<li class="item"><a href="#" class="link">Design</a></li>
					<li class="item"><a href="#" class="link">News</a></li>
					<li class="item"><a href="#" class="link">Studio</a></li>
					<li class="item"><a href="#" class="link">CV</a></li>
					<li class="item" stfyle="border-bottom:none;"><a href="#" class="link">Contact</a></li>
				</ul>
			</nav>
			<section class="news">
				<div class="text">
					This is some useful information that the user will appreciate always having on the page.
					<span class="more">more news</span>
				</div>
			</section>
			<section class="copyright">
				<div class="text">
					<a href="#" class="link">&copy; 2012 Peter Thibeault</a> | <a href="#" class="link">contact</a> | <a href="#" class="link">info</a>
				</div>
			</section>
		</section>	
	</section>
	<section id="right">
		<div class="new-module">
			<h2>FURNISHINGS</h2>
			<div class="furniture">
				<div class="left">
					<div class="image">
						<img src="http://peterthibeault.com/site/images/chest.jpg" />
					</div>
					<div class="info">
						<ul class="l-ul">
							<li class="l-item">
								<dl class="i-ul">
									<dt class="i-item"><h3>TITLE</h3></dt>
									<dd class="i-item">Crane Chest</dd>
									<dt class="i-item"><h3>MEDIA</h3></dt>
									<dd class="i-item">Wood</dd>
									<dt class="i-item"><h3>DIMENSIONS</h3></dt>
									<dd class="i-item">2'D x 4'W x 3'H</dd>
								</dl>
							<li class="l-item">
								<?php include("available.php"); ?>
							</li>
							<li class="l-item">
								<?php include("related-images.php"); ?>
							</li>
							<li class="l-item"></li>
						</ul>
					</div>
				</div>
				<div class="new-nav">
					<div class="more-nav">
						<h3>ADDITIONAL FURNISHINGS</h3>
					</div>				
					<ul class="l-ul">
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
					</ul>
				</div>
				<div class="clear"></div>
			</div>
		</div>

		<div class="new-module" style="margin-top: 200px;">
			<h2>STUDIO</h2>
			<div class="studio">
				<div class="left">
					<div class="image">
						<img src="http://www.peterthibeault.com/site/images/studio.jpg" />
					</div>
				</div>
				<div class="new-nav">
					<div class="more-nav">
						<h3>IN THE STUDIO</h3>
					</div>				
				<ul class="l-ul">
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
						<li class="l-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" /></li>
					</ul>
				</div>
				<div class="clear"></div>
			</div>
		</div>

		<div class="new-module" style="margin-top: 200px;">
			<h2>CV</h2>
				<script type="text/javascript">
					$(function() {
						
						$('.new-module .cv .left').load('../admin/resume/resume-raw.php');
						
					});
				</script>

			<div class="cv">
				<div class="left" style="background: #666; width:  100%; padding:  20px;">
				</div>
			</div>
		</div>

		<div class="new-module" style="margin: 200px 0;">
			<h2>NEWS</h2>
				<script type="text/javascript">
					$(function() {
						
						$('.new-module .news .left').load('../admin/news/news-raw.php');
						
					});
				</script>

			<div class="news">
				<div class="left" style="background: #666; width:  100%; padding:  20px;">
				</div>
			</div>
		</div>

	</section>

</body>
</html>