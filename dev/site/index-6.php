<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Thibeault Design</title>

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/master-6.css" />
	<link rel="stylesheet" href="css/new.css" />

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

	<style type="text/css">
		#left {
			width: 300px;
		}
		#right {
			margin: 0 25px 0 350px;
		}
		header.module {
			min-width: 0;
			padding-top: 0;
		}
		header.module .logo {
			padding-bottom: 10px;
		}
	</style>

</head>
<body>

	<section id="left">
		<section class="sidebar">
			<header class="module">
				<h1 class="logo"><img src="images/logo-fff.png" alt="logo" /></h1>
				<h4 class="subheading">The website of<br/>Peter R. Thibeault and Thibeault: DESIGN</h4>
			</header>
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
					<li class="item"><a href="#" class="link">Contact</a></li>
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
			<h2>FURNITURE</h2>
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
								<ul class="i-ul">
									<li class="i-item"><img src="images/for-sale.png" alt="for-sale" class="for-sale"/></li>
								</ul>
							</li>
							<li class="l-item">
								<ul class="i-ul">
									<li class="i-item">Dimensions</li>
									<li class="i-item">Media</li>
									<li class="i-item">Price</li>
									<li class="i-item">Related</li>
									<li class="i-item">Images</li>
									<li class="i-item">etc.</li>
								</ul>
							</li>
							<li class="l-item"></li>
						</ul>
					</div>
				</div>
				<div class="new-nav">
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

	</section>

</body>
</html>