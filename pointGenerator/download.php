<?php
	$str = str_replace('\n', "\n", $_GET['jsonArrStr']);
	header('Content-Disposition: attachment; filename="jsonMap.txt"');
	header('Content-Type: text/plain');
	header('Content-Length: ' . strlen($str));
	header('Connection: close');
	
	echo $str;
?>