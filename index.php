<html>
	<head>
		<title>Landing page</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="jquery-3.3.1.min.js"></script>
		
		<!--Theme css. href tag changed by PHP-->
		<link rel="stylesheet" type="text/css" href="css/themes/default/default.css" />
		
		<!--main css-->
		<link rel="stylesheet" type="text/css" href="css/main.css" />
		
		<!--app css-->
		<link rel="stylesheet" type="text/css" href="applications/main/open-application/css/open-application.css" />
		<link rel="stylesheet" type="text/css" href="applications/swf-player/css/swf-player.css" />
		
	</head>
	<body>
		<header>
			<h1 id="header-title">MINIMAL v1.0</h1>
			<div id="logo-button"></div>
			<!-- header title changed by PHP -->
			<ul id="function-list">
				<li class="function-list-item" id="open-application">Open Application</li>
				<li class="function-list-item" id="personal-bookmarks">Personal Bookmarks</li>
				<li class="function-list-item debug" id="show-viewport">Show Viewport</li>
			</ul>
		</header>
		
		<div id="popup-screen">
			<div id="popup-viewport">
				<div id="close-popup-button" class="button">X</div>
				<div class="clear"></div>
				<div id="render"></div>
			</div>
		</div>
		
		<div id="app-viewport">
			<div id="viewport-header">
				<span id="app-name">Loading...</span>
				<div id="close-viewport-button" class="button">X</div>
			</div>
			<div id="render"></div>
		</div>
		
		<script src="js/index.js"></script>
	
	</body>
</html>