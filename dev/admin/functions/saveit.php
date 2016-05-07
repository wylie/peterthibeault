<?php

if (function_exists('get_magic_quotes_gpc') && get_magic_quotes_gpc()) {
    function strip_slashes($input) {
        if (!is_array($input)) {
            return stripslashes($input);
        }
        else {
            return array_map('strip_slashes', $input);
        }
    }
    $_GET = strip_slashes($_GET);
    $_POST = strip_slashes($_POST);
    $_COOKIE = strip_slashes($_COOKIE);
    $_REQUEST = strip_slashes($_REQUEST);
}

function customError($errno, $errstr) {
    echo "<b>Error:</b> [$errno] $errstr<br>";
    echo "Ending Script";
    die("Ending Script");
}
set_error_handler("customError");

$section = $_GET["section"];
$myData = $_GET["data"];
 
// echo $section;
// echo $myData;

$myFile = "../../data/" . $section . ".json";
$fileData = file_get_contents($myFile);
$jsonArray = json_decode($fileData,true);
$newJson = $_GET["data"];
$newJson = json_decode($newJson,true);
$jsonArray[$section][] = $newJson;
$ultimateJson = json_encode($jsonArray);

$fileHandle = fopen($myFile, "w");

fwrite($fileHandle, $ultimateJson);
fclose($fileHandle);

?>
