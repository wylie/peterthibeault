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
			background-image: url('images/texture.png');
		}
		.link {
			color: inherit;
			text-decoration: inherit;			
		}
		* {
			box-sizing: border-box;
		}


		/* -------------------------------- */
		/* LAYOUT ------------------------- */
		/* -------------------------------- */
		#wrap {
			height: 100%;
		}
		#left {
			width:  320px;
			height: 100%;
			position: fixed;
			top:0;
			bottom:0;
			left:0;
		}
		#right {
			margin-left: 350px;
			height: 100%;
		}
		/* -------------------------------- */
		/* END LAYOUT --------------------- */
		/* -------------------------------- */



		/* -------------------------------- */
		/* SIDEBAR ------------------------ */
		/* -------------------------------- */
		.sidebar {
			height: 100%;
			padding: 15px;
			background-color: #333;
			
			border-right: 1px solid rgba(255, 255, 255,.75);
			box-shadow: 5px 0 5px rgba(0, 0, 0, .25);
			text-shadow: -1px 1px 1px #000;
			background-image: url('images/texture.png');
		}
		.sidebar .logo {
			text-align: right;
		}
		.sidebar .logo-heading {
			font-size: 3em;
		}
		.sidebar .logo-sub-heading {
			font-weight: normal;
			color: rgba(255,255,255,0.8);
			font-size: .9em;
		}
		.sidebar .nav {
			margin: 100px 0;
			height: 100px;
		}
		.sidebar .nav .nav-item {
			padding: 7px;
			cursor: pointer;
			display: inline-block;
			float: left;
			width: auto;
			margin: 1px;
			background-color: rgba(0,0,0,.25);
			border: 1px solid rgba(255, 255, 255, .2);
			font-size: 1em;
			box-shadow: 0 0 1px black;
		}
		.sidebar .nav .nav-item.active {
			background-color: rgba(255,255,255,.15);
			box-shadow: inset 0 0 1px #000;
		}
		.sidebar .nav .nav-item:hover {
			background-color: rgba(255,255,255,.25);
			box-shadow: inset 0 0 1px #000;
		}
		.sidebar .sidebar-heading {
			left: 0;
			top: -20px;
			font-size: 2em;
			color: rgba(255, 255, 255, .25);
			text-shadow: none;			
		}
		.sidebar .text {
			font-size: 1.5em;
		}
		.sidebar .more {
			font-size: .5em;
			text-align: right;
			display: block;
			margin-top: 20px;
			text-decoration: underline;
			cursor: pointer;
		}
		/* -------------------------------- */
		/* END SIDEBAR -------------------- */
		/* -------------------------------- */


		/* -------------------------------- */
		/* MODULE ------------------------- */
		/* -------------------------------- */
		.module {
			max-width: 800px;
			min-width: 450px;
			padding: 20px;
			margin-top: 150px;
			position: relative;
		}
		.module > section {
			clear: both;
			background-color: #999;
			width: 100%;
			border-radius: 4px;
			box-shadow: 0 0 1px black;
			border: 5px solid rgba(255,255,255,.75);
			position: relative;
		}
		.module:first-child {
			margin-top: 50px;
		}
		.module .module-heading {
			position: absolute;
			left: 0;
			top: -20px;
			font-size: 2em;
			color: rgba(255, 255, 255, .25);			
		}
		.module .module-nav {
			border-top: 5px solid rgba(255, 255, 255, .75);
		}
		.module .nav {
			position: relative;
			height: 100px;
			list-style-type: none;
		}
		.module .nav .nav-item {
			display: inline-block;
			height: 80%;
			width: 11%;
			float: left;
			margin: 0 5px;
			margin-top: 10px;
			cursor: pointer;
			overflow: hidden;
			border: 1px solid rgba(0,0,0,.5);
			box-shadow: 0 0 1px #FFF;
			border-radius: 10px;
		}
		.module .nav .nav-item:nth-child(2) {
			margin-left: 12px;
		}
		.module .nav .nav-image {
			background-image: url('image/default.png');
			background-size: 150%;
			background-repeat: no-repeat;
			background-position: center center;
			width: 100%;
			height: 100%;
			display: block;
		}
		.module .nav-arrow {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 40px;
			background: rgba(0, 0, 0, .25);
			font-size: 3em;
			text-align: center;
			line-height: 2em;
			cursor: pointer;
		}
		.module .nav-arrow.left {
			left: 0;
			border-right: 1px solid rgba(255,255,255,.35);
		}
		.module .nav-arrow.right {
			right: 0;
			border-left: 1px solid rgba(255,255,255,.35);
		}
		.module .nav-arrow .arrow {
			color: rgba(255,255,255,.5);
		}
		.module .nav-arrow:hover {
			background: rgba(0, 0, 0, .5);
		}
		.module .nav-arrow:hover .arrow {
			color: rgba(255,255,255,.75);
		}
		.module .nav-arrow.disabled {
			position: absolute;
			left:-9999px;
		}
		.module .bg {
			position: relative;;
		}
		.module .bg .bg-image {
			width: 100%;
			margin-bottom: -2px;
		}
		.module .caption {
			position: absolute;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
			color: white;
			text-shadow: none;
			width: 200px;
			padding: 10px;
		}
		.module .text {
			font-size: 2.5em;
			color: #000;
			text-shadow: -1px 1px 1px rgba(255,255,255,.5);
			padding: 20px;
			line-height: 1.25em;
		}
		.module .caption.left {
			text-align: right;
			left: 0;
			border-right: 1px solid rgba(255, 255, 255, .3);
			box-shadow: 5px 0 10px rgba(0, 0, 0, .25);
		}
		.module .caption.right {
			text-align: left;
			right: 0;
			border-left: 1px solid rgba(255, 255, 255, .3);
			box-shadow: -5px 0 10px rgba(0, 0, 0, .25);
		}
		.module .caption .caption-heading {
			font-size: 1.2em;
			margin-bottom:10px;
			border-bottom: 1px dotted rgba(255,255,255, .25);
			padding-bottom: 10px;
		}
		/* -------------------------------- */
		/* END MODULE --------------------- */
		/* -------------------------------- */
		
		
		.furniture .nav .nav-image {
			background-image: url('http://www.peterthibeault.com/temp/img/chest-2.png');
		}
		.furniture .image {
			 height: 475px;
		}
		.furniture .image {
			background-image: url(images/chest.jpg);
		}
		.copyright {
			position: absolute;
			bottom: 20px;
			font-size: .4em;
			color: #555;
			text-shadow: none;
			text-align: center;
			width: 290px;
		}
		.copyright .link {
			color: #777;
		}
		.copyright .link:hover {
			color: #999;
		}
	</style>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="script.js"></script>

</head>
<body>

	<section id="left">
		<section class="sidebar">
			<header class="logo">
				<h1 class="logo-heading">THIBEAULT</h1>
				<h4 class="logo-sub-heading">The website of<br/>Peter R. Thibeault and Thibeault: DESIGN</h4>
			</header>
			<nav class="nav">
				<ul class="nav-list">
					<li class="nav-item active"><a href="#furniture" class="link">in the studio</a></li>
					<li class="nav-item">news</li>
					<li class="nav-item"><a href="#furniture" class="link">furniture</a></li>
					<li class="nav-item">paintings</li>
					<li class="nav-item">prints</li>
					<li class="nav-item">for sale</li>
					<li class="nav-item">contact</li>
				</ul>
			</nav>
			<section class="news">
				<div class="text">
					This is some useful informaiton that the user will appreciate always having on the page.
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
		
		<section class="module">
			<a target="studio"></a>
			<h2 class="module-heading">STUDIO</h2>
			<section class="studio">
				<div class="bg">
					<div class="caption right">
						<h3 class="caption-heading">See Peter working in his studio!</h3>
						See where he makes and creates all sorts of stuff.
					</div>
					<img src="images/studio.jpg" alt="Studio" class="bg-image" />
				</div>
			</section>
		</section>
		
		
		<section class="module">
			<a target="news"></a>
			<h2 class="module-heading">NEWS</h2>
			<section class="news">
				<div class="text">
					Some new goes in here. Trust me, it will be more awesome than this news is, this news is not really news and more of a placeholder.
				</div>
			</section>		
			
		</section>
		
		
		<section class="module">
			<a target="furniture"></a>
			<h2 class="module-heading">FURNITURE</h2>
			<section class="furniture">
				<div class="bg">
					<div class="caption right">
						<h3 class="caption-heading">Wood Chest</h3>
						It has drawers.
					</div>
					<img src="images/chest.jpg" alt="Furniture" class="bg-image" />
				</div>
				<section class="module-nav">
					<ul class="nav">
						<li class="nav-arrow left disabled"><span class="arrow">&lt;</span></li>
						<li class="navTrust-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-item"><span class="nav-image"></span></li>
						<li class="nav-arrow right"><span class="arrow">&gt;</span></li>
					</ul>					
				</section>
			</section>		
		</section>

	</section>

</body>
</html>