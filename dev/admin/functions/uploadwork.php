<?php
    $key = '_l-';
    $num = $_REQUEST['num'];
    $id = $_REQUEST['id'];
    $quality = 100;

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
        $ext = '.' . strtolower($parts[1]);
        return $ext;
    }
    function convertImage($originalImage, $outputImage, $quality) {
        echo $originalImage;
        echo "\n\n";
        echo $outputImage;
        echo "\n\n";
        // jpg, png, gif or bmp?
        $exploded = explode('.',$originalImage);
        $ext = $exploded[count($exploded) - 1];
        echo $ext;
        echo "\n\n";

        if ( preg_match('/jpg|jpeg/i',$ext) ) {
            $imageTmp = imagecreatefromjpeg($originalImage);
        } else if( preg_match('/png/i',$ext) ) {
            $imageTmp = imagecreatefrompng($originalImage);
        } else if( preg_match('/gif/i',$ext) ) {
            $imageTmp = imagecreatefromgif($originalImage);
        } else if( preg_match('/bmp/i',$ext) ) {
            $imageTmp = imagecreatefrombmp($originalImage);
        } else {
            return 0;
        }

        // quality is a value from 0 (worst) to 100 (best)
        imagejpeg($imageTmp, $outputImage, $quality);
        imagedestroy($imageTmp);

        return 1;
    }

    function resize() {
        // list($width,$height) = getimagesize($new_file_location);

        // width of the main image
        // $new_width = $value;
        // $new_height = ($height / $width) * $new_width;
        // $img_dest = imagecreatetruecolor($new_width,$new_height);

        // imagecopyresampled($img_dest,$src,0,0,0,0,$new_width,$new_height,$width,$height);
        // $resized_location = $output_folder . $new_file_name;
        // imagejpeg($img_dest,$resized_location,100);
        // imagedestroy($src);
        // imagedestroy($img_dest);

        // echo '$resized_location: ' . $resized_location;
    }


    $name = getName($image);
    $image_ext = getExtension($name);
    $output_folder = "../../img/works/";
    $new_file_name = $id . $key . $num . $image_ext;
    $new_file_location = $output_folder . $new_file_name;

    convertImage($new_file_location, 'shazam', $quality);
    // move_uploaded_file($image_tmp, $new_file_location);

    // $file_content = file_get_contents($resized_location);
    // $data_url = 'data:image/jpeg;base64,' . base64_encode($file_content);

    $json = json_encode(array(
        'image_tmp' => $image_tmp,
        'extension' => $image_ext,
        'id' => $id,
        'name' => $image,
        'newFileName' => $new_file_name,
        'type' => $image_type
    ));

    echo $json;
?>
