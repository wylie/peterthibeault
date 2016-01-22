<?php

    $image = $_FILES['studioImage']['name'];
    $image_tmp = $_FILES['studioImage']['tmp_name'];
    $image_type = $_FILES['studioImage']['type'];

    function getName($str) {
        $parts = explode('.',$str);
        $imgName = str_replace(' ', '_',$parts[0]);
        return $imgName;
    }
    function getExtension($str) {
        $parts = explode('.',$str);
        $extension = $parts[1];
        return $extension;
    }

    $image_name = stripslashes($image);
    $name = getName($image_name);
    $image_ext = getExtension($image_name);
    $ext = strtolower($image_ext);
    $output_folder = "../../img/studio/";
    $new_file_name = strtolower($_REQUEST['id'] . '_l.' . $ext);
    $new_file_location = $output_folder . $new_file_name;

    for ($i = 1; $i <= 10; $i++) {
        echo $i;
    }
    
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
    $new_width = 750;
    $new_height = ($height / $width) * $new_width;
    $img_dest = imagecreatetruecolor($new_width,$new_height);

    imagecopyresampled($img_dest,$src,0,0,0,0,$new_width,$new_height,$width,$height);
    $resized_location = $output_folder . $new_file_name;
    imagejpeg($img_dest,$resized_location,100);
    imagedestroy($src);
    imagedestroy($img_dest);

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
