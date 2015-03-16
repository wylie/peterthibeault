<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Thibeault Design</title>

	<link rel="stylesheet" href="css/reset.css" />
	<style type="text/css">
		/* -------------------------------- */
		/* COLUMNS ------------------------ */
		/* -------------------------------- */
		.col {display: inline-block;float: left;position: relative;overflow: hidden;}
		.one-col .col {width: 100%;}
		.two-col .col {width: 50%;}
		.two-col-left .col {width: 25%;}
		.two-col-left .col:last-child {width: 75%;}
		.two-col-right .col {width: 75%;}
		.two-col-right .col:last-child {width: 25%;}
		.three-col .col {width: 33.3333333333%;}
		.three-col-left .col {width: 33.3333333333%;}
		.three-col-left .col:last-child {width: 66.6666666666%;}
		.three-col-right .col {width: 66.6666666666%;}
		.three-col-right .col:last-child {width: 33.3333333333%;}
		.four-col .col {width: 25%;}
		.five-col .col {width: 25%;}
		.six-col .col {width: 16.6666666667%;}
		.seven-col .col {width: 14.2857142857%;}
		.eight-col .col {width: 12.5%;}
		.nine-col .col {width: 11.1111111111%;}
		.ten-col .col {width: 10%;}
		/* -------------------------------- */
		/* END COLUMNS -------------------- */
		/* -------------------------------- */
		html, body {
			font-family: arial, helvetica, sans-serif;
			color: #FFF;
			height: 100%;
			background: #CCC;
		}
		* {
			box-sizing: border-box;
		}
		#wrap {
			height: 100%;
		}
		#left {
			background-color: #333;
			width:  320px;
			height: 100%;
			border-right: 1px solid rgba(255, 255, 255,.75);
			box-shadow: 5px 0 5px rgba(0, 0, 0, .25);
			padding: 20px;
			position: fixed;
			top:0;
			bottom:0;
			left:0;
			text-shadow: -1px 1px 1px #000;
		}
		#right {
			margin-left: 300px;
		}
		#left * {
			width: 100%;
		}
		#logo {
			font-size: 3em;
			text-align: right;
		}
		nav {
			margin: 100px 0;
		}
		nav li {
			padding: 10px 0;
			border-bottom: 1px solid rgba(255,255,255,.25);
			cursor: pointer;
		}
		nav li:hover {
			background-color: rgba(255,255,255,.25);
		}		
		nav li:last-child {
			margin-bottom: 0;
			border-bottom: none;
		}
		#news {
			font-size: 1.5em;
		}
		#news .older {
			font-size: .5em;
			text-align: right;
			display: block;
			margin-top: 20px;
			text-decoration: underline;
			cursor: pointer;
		}
		.module {
			background-color: #999;
			min-height: 200px;
			margin-left: 10%;
			max-width: 700px;
			margin-top: 200px;
			border-radius: 4px;
			box-shadow: 0 0 1px black;
			border: 5px solid rgba(255,255,255,.75);
			position: relative;
		}
		.module:first-child {
			margin-top: 50px;
		}
		.image {
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 100%;
		}
		.studio .image {
			background-image: url(images/studio.jpg);
		}
		.studio .image {
			min-height: 400px;
			box-shadow: inset 0 0 10px rgba(0,0,0,.5);
		}
		.caption {
			position: absolute;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
			color: white;
			text-shadow: none;
			width: 200px;
			padding: 10px;
		}
		.caption.left {
			text-align: right;
			left: 0;
			border-right: 1px solid rgba(255, 255, 255, .3);
			box-shadow: 5px 0 10px rgba(0, 0, 0, .25);
		}
		.caption.right {
			text-align: left;
			right: 0;
			border-left: 1px solid rgba(255, 255, 255, .3);
			box-shadow: -5px 0 10px rgba(0, 0, 0, .25);
		}
		.caption .close {
			position: absolute;
			bottom: 10px;
			font-size: 0.7em;
			color: rgba(255,255,255,.75);
			width: 15%;
			cursor: pointer;
		}
		.caption .close:hover {
			text-decoration: underline;
		}
		.caption.right .close {
			right: 10px;
		}
		.caption.right .close {
			left: 10px;
		}
		.caption .module-heading-3 {
			font-size: 1.2em;
			margin-bottom:10px;
			border-bottom: 1px dotted rgba(255,255,255, .25);
			padding-bottom: 10px;
		}
		.furniture .image {
			 height: 475px;
		}
		.furniture .image {
			background-image: url(images/chest.jpg);
		}
		.furniture .nav {
			height: 100px;
		}
		.furniture .nav .nav-item {
			list-style: none;
			display: inline-block;
			height: 80%;
			width: 12%;
			float: left;
			margin-right: 0.7%;
			margin-top: 10px;
			cursor: pointer;
		}
		.furniture .nav .nav-item:first-child {
			margin-left: 0.5%;
		}
		.furniture .nav .nav-item:last-child {
			margin-right: 0;
		}
		.furniture .nav .nav-image {
			background-image: url('http://www.peterthibeault.com/temp/img/chest-2.png');
			background-size: 200%;
			background-repeat: no-repeat;
			background-position: center center;
			width: 100%;
			height: 100%;
			display: block;
			border: 1px solid rgba(0,0,0,.5);
			box-shadow: 0 0 1px #FFF;
			border-radius: 3px;
		}
		.news {
			font-size: 2.5em;
			color: #000;
			text-shadow: -1px 1px 1px rgba(255,255,255,.5);
			padding: 20px;
			line-height: 1.25em;
		}
		section h2 {
			position: absolute;
			top: -40px;
			left: -50px;
			font-size: 2em;
			opacity: 0.05;
			color: black;
		}
		/*
		.module-heading-1 {
			font-size: 2em;
		}
		.module-heading-2 {
			font-size: 1.75em;
		}
		.module-heading-3 {
			font-size: 1.5em;
		}
		*/	
		.module-heading-4 {
			font-size: .3em;
			font-weight: normal;
			color: rgba(255,255,255,0.8);
		}	</style>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="script.js"></script>

</head>
<body>

<div id="wrap">
	<div id="left">
		<div id="logo">
			<h1 class="module-heading-1">THIBEAULT</h1>
			<h4 class="module-heading-4">The website of Peter R. Thibeault and Thibeault: DESIGN</h4>
		</div>
		<nav>
			<ul>
				<li>Nav One</li>
				<li>Nav Two</li>
				<li>Nav Three</li>
				<li>Nav Four</li>
			</ul>
		</nav>
		<div id="news">
			<p>Some new goes in here. Trust me, it will be more awesome than this news is, this news is not really news and more of a placeholder.</p>
			<span class="older">older news</span>
		</div>
	
	</div>
	<div id="right">
		<div id="canvas">
			<section class="module studio">
				<h2>STUDIO</h2>
				<div class="caption right">
					<h3 class="module-heading-3">Peter in his studio!</h3>
					See where he makes and creates.
				</div>
				<div class="image"></div>
			</section>
			<section class="module furniture">
				<h2>FURNITURE</h2>
				<div style="position:  relative; border-bottom:  5px solid rgba(255,255,255,.75);">
					<div class="caption right">
						<h3 class="module-heading-3">Wood Chest</h3>
						It has drawers.
					</div>
					<div class="image"></div>
				</div>
				<section>
					<ul class="nav">
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
					</ul>					
				</section>
			
			</section>
			<section class="module">
				<h2>NEWS</h2>
				<div class="news">Some new goes in here. Trust me, it will be more awesome than this news is, this news is not really news and more of a placeholder.</div>
			</section>
			<br/><br/>
		</div>
	</div>
</div>	

</body>
</html>