<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Thibeault Design</title>

	<link rel="stylesheet" href="css/reset.css" />
	<link rel="stylesheet" href="css/master-10.css" />

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

	<div id="left">
		<div class="sidebar">
			<h1 class="logo"style=" margin-bottom: 20px; ">
				<img src="images/logo-fff-sm.gif" alt="logo" style="width: 265px;" />
			</h1>

			<h4 class="subheading" style=" line-height: 2em; ">Peter R. Thibeault<br/>Thibeault: DESIGN</h4>
			<div class="nav">
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
			</div>
			<div class="news">
				<div class="text">
					This is some useful information that the user will appreciate always having on the page.
					<span class="more">more news</span>
				</div>
			</div>
			<div class="copyright">
				<div class="text">
					<a href="#" class="link">&copy; 2012 Peter Thibeault</a> | <a href="#" class="link">contact</a> | <a href="#" class="link">info</a>
				</div>
			</div>
		</div>	
	</div>
	<div id="right">

		<div class="module">
			<div class="left">
				<!-- START MAIN ------- -->
				<div class="module-main">
					<img src="" class="main-image" />
				</div>
				<!-- END MAIN --------- -->
				
					
				<!-- START SIDEBAR ---- -->
				<div class="module-sidebar">
					<ul class="sidebar-items-list">
						<li class="sidebar-item">
							
							<!-- START INFO ------- -->
							<div class="info">
								<ul class="info-list">
									<li class="list-item heading">TITLE</li>
									<li class="list-item">Crane Chest</li>
									<li class="list-item heading">MEDIA</li>
									<li class="list-item">Wood</li>
									<li class="list-item heading">DIMENSIONS</li>
									<li class="list-item">2'D x 4'W x 3'H</li>
								</ul>
							</div>
							<!-- END INFO --------- -->
							
						</li>
						<li class="sidebar-item">
							
							<!-- START AVAILABLE -- -->
							<div class="available">
								<ul class="available-list">
									<li class="list-item"><img src="http://www.peterthibeault.com/site/images/for-sale.png" alt="for-sale" class="for-sale"></li>
									<li class="list-item">Your Name:</li>
									<li class="list-item"><input type="text"></li>
									<li class="list-item">Your Email:</li>
									<li class="list-item"><input type="text"></li>
									<li class="list-item"><input type="submit" value="submit"></li>
								</ul>				
							</div>
							<!-- END AVAILABLE ---- -->
							
						</li>
						<li class="sidebar-item">
			
							<!-- START RELATED ---- -->
							<div class="related">
								<ul class="related-items">
									<li class="list-item heading">RELATED IMAGES</li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
									<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-2.png" alt=""></li>
								</ul>
							</div>
							<!-- END RELATED ------ -->
							
						</li>
					<ul>	
				</div>
				<!-- END SIDEBAR ------ -->
		
			</div>
			<div class="right">
				
				<!-- START NAV -------- -->
				<div class="module-nav">
					<div class="heading">Additional Images</div>
					<div class="nav-wrap">
						<ul class="nav-list">
							<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-1.png" class="nav-item-image" width="100" height="100" /></li>
							<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-1.png" class="nav-item-image" width="100" height="100" /></li>
							<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-1.png" class="nav-item-image" width="100" height="100" /></li>
							<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-1.png" class="nav-item-image" width="100" height="100" /></li>
							<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-1.png" class="nav-item-image" width="100" height="100" /></li>
							<li class="list-item"><img src="http://www.peterthibeault.com/temp/img/chest-1.png" class="nav-item-image" width="100" height="100" /></li>
						</ul>
					</div>
				</div>
				<!-- END NAV ---------- -->
			
			</div>
		</div>





	</div>

</body>
</html>