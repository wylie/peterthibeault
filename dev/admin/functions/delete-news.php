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

$kind = "news";
$myData = $_GET["data"];

$myFile = "../../data/news.json";
$fileData = file_get_contents($myFile);
echo '$fileData: ' . $fileData;

$json_encode = json_encode($fileData);
echo '$json_encode: ' . $json_encode;
unset( json_decode($json_encode) );
// echo '$json_decode: ' . $json_decode;

// $json_encode = '{"OS":"Android","Title":"Galaxy"}';
// $json_decode = json_decode($json_encode);
// unset($json_decode['Title']);

// $jsonArray = json_decode($fileData,true);
// echo '$jsonArray: ' . $jsonArray;
//
// $newJson = $_GET["data"];
// echo '$newJson: ' . $newJson;
//
// $newJson = json_decode($newJson,true);
// echo '$newJson: ' . $newJson;
//
// $jsonArray[$kind][] = $newJson;
// $ultimateJson = json_encode($jsonArray);
// echo '$ultimateJson: ' . $ultimateJson;
// unset( json_encode($jsonArray) );

$fileHandle = fopen($myFile, "w");

fwrite($fileHandle, $ultimateJson);
fclose($fileHandle);

?>
