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

// get the data
$data = $_GET["data"];
// get the section
$section = $_GET["section"];
// get the index passed in
$index = $_GET["index"];
// make sure that the index is a number…
$index = intval($index);

// get the file we want to edit
$file = "../../data/" . $section . ".json";
// get the contents of that file
$fileData = file_get_contents($file);
// decode the new data
$data = json_decode($data, true);
// decode the old data
$json = json_decode($fileData, true);

$len = sizeof($json[$section]);
echo $len;

// set the desired index of the old data with the new data
if( $index < $len) {
    $json[$section][$index] = array_replace( $json[$section][$index], $data );
} else {
    $json[$section][$index] = $data;
}

// fix the indexing
$json[$section] = array_values(array_filter($json[$section]));
// encode the date again
$json = json_encode($json);
// open the file
$fileHandle = fopen($file, "w");
// write the file
fwrite($fileHandle, $json);
// close the file
fclose($fileHandle);

$json = json_encode(array(
  'data' => $data,
  'section' => $section,
  'index' => $index
));

echo $json;

?>
