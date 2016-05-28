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

// set the section
$section = $_GET["section"];
// get the index passed in
$index = $_GET["index"];
// make sure that the index is a number…
$index = intval($index);
// get the file we want to edit
$myFile = "../../data/" . $section . ".json";
// get the contents of that file
$fileData = file_get_contents($myFile);
// encode the contents of the file
$json_encode = json_encode($fileData);
// decode the contents of the file
$json = json_decode($fileData, true);
// loop through the file
foreach ($json[$section] as $key => $val) {
  // find the matching index in the JSON data
  if ($key == $index) {
    // remove that index from the JSON data
    unset($json[$section][$key]);
  }
}
// fix the indexing
$json[$section] = array_values(array_filter($json[$section]));
// encode the date again
$json = json_encode($json);
// open the file
$fileHandle = fopen($myFile, "w");
// write the file
fwrite($fileHandle, $json);
// close the file
fclose($fileHandle);

$json = json_encode(array(
  'section' => $section
));

echo $json;

?>
