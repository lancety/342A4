var id = 1;

// Constants
var JSONARR_BEGIN = '{\n"points": [\n';
var JSONOBJ_START = '{';
var JSONOBJ_ID = '"id":';
var JSONOBJ_SEPERATOR = ', ';
var JSONOBJ_X = '"x":';
var JSONOBJ_Y = '"y":';
var JSONOBJ_TYPE = '"type":';
var JSONOBJ_CONNECTIONS_BEGIN = '"connections":[';
var JSONOBJ_CONNECTIONS_END = ']';
var JSONOBJ_END = '},\n';
var JSONARR_END = '\n]\n}\n';

// Load map
$(document).ready(function() {
	function initMap() {
		var mapCanvasObj = document.getElementById('map_canvas');
		var mapOpts = {
		      center: new google.maps.LatLng(-34.405777, 150.877923),
		      zoom: 16,
		      mapTypeId: google.maps.MapTypeId.ROADMAP				
		};
		var map = new google.maps.Map(mapCanvasObj, mapOpts);
		
		google.maps.event.addListener(map, "click", function (e) {	
	        	var JSONObj = 
	        		JSONOBJ_START + 
	        		JSONOBJ_ID + (id++) + JSONOBJ_SEPERATOR + 
	        		JSONOBJ_X + e.latLng.lat().toFixed(6) + JSONOBJ_SEPERATOR + 
	        		JSONOBJ_Y + e.latLng.lng().toFixed(6) + JSONOBJ_SEPERATOR + 
	        		JSONOBJ_TYPE + $('select').val() + JSONOBJ_SEPERATOR + 
	        		JSONOBJ_CONNECTIONS_BEGIN + JSONOBJ_CONNECTIONS_END + 
	        		JSONOBJ_END;
	        		
	        	$('textarea').val( $('textarea').val() + JSONObj );
		});					
	}
	initMap();
	
	$('#undo').click(function() {
		$('textarea').val( $('textarea').val().replace(/{.*},\n$/, '') );
		id--;
	});
	
	// JSON array begin and end values
	$('textarea').val(JSONARR_BEGIN);
	$('#finish').click(function() {
		// Remove last comma
		$('textarea').val( $('textarea').val().replace(/,\n$/g,'') );
		// End JSON array
		$('textarea').val( $('textarea').val() + JSONARR_END );
		// Download as .txt
		var encodedJsonArrStr = $('textarea').val().replace(/\n/g,'\\n');
		window.location.href = 'download.php?jsonArrStr=' + encodedJsonArrStr;
	});
});