<?php

    # this is a bad fix…
    $key = '_l-';
    $num = $_REQUEST['num'];
    $value = 750;

    $image = $_FILES['workImage']['name'];
    $number = $_FILES['workImage']['number'];
    $image_tmp = $_FILES['workImage']['tmp_name'];
    $image_type = $_FILES['workImage']['type'];

    function getName($str) {
        $regex = "/(\s|\.[^.pngPNG|^.jpgJPG|^.gifGIF])/";
        $imgName = stripslashes(strtolower(preg_replace($regex, '_', $str)));
        return $imgName;
    }
    function getExtension($str) {
        $parts = explode('.',$str);
        $ext = strtolower($parts[1]);
        return $ext;
    }

    $name = getName($image);
    $image_ext = getExtension($image_name);
    $output_folder = "../../img/works/";
    $new_file_name = $_REQUEST['id'] . $key . $num . '.' . $ext;
    $new_file_location = $output_folder . $new_file_name;

    move_uploaded_file($image_tmp, $new_file_location);

    if($ext == 'jpg' || $ext == 'jpeg' ) {
        $ext = 'jpg';
        $src = imagecreatefromjpeg($new_file_location);
    } else if($ext == 'png') {
        $src = imagecreatefrompng($new_file_location);
    } else {
        $src = imagecreatefromgif($new_file_location);
    }

    list($width,$height) = getimagesize($new_file_location);

    // width of the main image
    $new_width = $value;
    $new_height = ($height / $width) * $new_width;
    $img_dest = imagecreatetruecolor($new_width,$new_height);

    imagecopyresampled($img_dest,$src,0,0,0,0,$new_width,$new_height,$width,$height);
    $resized_location = $output_folder . $new_file_name;
    imagejpeg($img_dest,$resized_location,100);
    imagedestroy($src);
    imagedestroy($img_dest);

    echo '$resized_location: ' . $resized_location;

    $file_content = file_get_contents($resized_location);
    $data_url = 'data:image/jpeg;base64,' . base64_encode($file_content);

    $json = json_encode(array(
        'dataUrl' => $data_url,
        'extension' => $ext,
        'id' => $_REQUEST['id'],
        'name' => $image,
        'newFileName' => $new_file_name,
        'type' => $image_type
    ));

    echo $json;
?>
