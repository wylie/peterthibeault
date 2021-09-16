<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Thibeault Design</title>

	<link rel="stylesheet" href="styles.css" />
	<style type="text/css">
		html, body {
			font-family: arial, helvetica, sans-serif;
		}
		* {
			box-sizing: border-box;
		}
		#wrap {
			width: 75%;
			height: 500px;
			margin: 25px auto 0;
		}
		#left,
		#right {
			height: 500px;
			float: left;
		}
		#right {
			width: 75%;
		}
		#left {
			width: 25%;
			position: relative;
		}
		#canvas {
			background: green;
			height: 100%;
		}
		#logo {
			height: 75px;
			margin-top: 10px;
			white-space: nowrap;
		}
		#logo h1 {
			margin: 0;
			font-size: 4em;
			line-height: 1em;
			text-transform: uppercase;
			font-family: arial;
			text-shadow: -1px 1px 1px #999;
			color: #333;
		}
		nav {
			width: 90%;
			height: auto;
			cursor: pointer;
		}
		nav ul {
			margin: 0;
			padding:0;
			list-style-type: none;
		}
		nav li {
			border-top: 1px solid #CCC;
		}
		nav li:hover {
			background-color: #CCC;
		}
		nav li:first-child {
			border-top: none;
		}
		#news {
			background: red;
			width: 90%;
			height: auto;
			max-height: 30%;
			max-height: 50%;
			overflow: auto;
			margin-top: 5%;
			min-height: 150px;
			padding: 0 10px;
		}
		#news .older {
			font-size: .75em;
			display: block;
			text-align: right;
			margin-bottom: 5px;
			text-decoration: underline;
			cursor: pointer;
		}
		@media all and (max-width: 815px) {
			#left {
				width: 100%;
				height: auto;
				float: none;
			}
			#right {
				width: 100%;
			}
			nav {
				width: 25%;
				float: left;			
			}
			#news {
				width: 75%;
				floaT: left;
				margin-top: 0;			
			}
		}
		@media all and (max-width: 350px) {

		}
		
	</style>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="script.js"></script>

</head>
<body>

<div id="wrap">
	<div id="left">
		<div id="logo">
			<h1>Thibeault Design</h1>
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
			<span class="older">Older news</span>
		</div>
	
	</div>
	<div id="right">
		<div id="canvas"></div>
	</div>
</div>	

</body>
</html>