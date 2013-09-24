<!DOCTYPE html>
<html>
	<head>
		<title>Google map points to JSON array</title>
		<meta name="description" content="Convert google map points to JSON array, easily">
		<meta name="keywords" content="google,map,json,array,api,generator">
		<meta name="author" content="Michael Nguyen">
		<meta charset="UTF-8">
				
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
		<script src="pointToJSON.js"></script>	
		<link href='main.css' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div id='controls'>	
			<select>
				<option value='"car"'>car</option>
				<option value='"pedestrian"'>pedestrian</option>
			</select>
			<button id='undo'>Undo</button>
			<button id='finish'>Finish</button>
		</div>
		<div id='map_canvas'></div>	
		<textarea></textarea>
	</body>
</html>