<?php

    $kind = "news";
    $newJson = $_GET["data"];

    $myFile = "../../data/news.json";
    $fileData = file_get_contents($myFile);
    $jsonArray = json_decode($fileData, true);
    $newJson = json_decode($newJson, true);
    $jsonArray[$kind][] = $newJson;
    $ultimateJson = json_encode($jsonArray, JSON_PRETTY_PRINT);

    $fileHandle = fopen($myFile, "w");

    fwrite($fileHandle, $ultimateJson);
    fclose($fileHandle);

    $name = "thanks for the new data!";
    echo json_encode($name);

?>
