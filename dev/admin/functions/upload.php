<?php

    $quality = 100;
    $path = "../../img/works/";
    $id = $_REQUEST['id'];
    $key = '_l-';
    $num = $_REQUEST['num'];

    function getName( $str ) {
        $regex = "/(\s|\.[^.pngPNG|^.jpgJPG|^.gifGIF])/";
        $imgName = stripslashes( strtolower( preg_replace( $regex, '_', $str ) ) );
        return $imgName;
    }
    function getExtension($str) {
        $parts = explode('.',$str);
        $ext = strtolower($parts[1]);
        $ext = '.' . strtolower($parts[1]);
        return $ext;
    }
    function convertImage( $originalImage, $outputImage, $quality ) {
        $exploded = explode( '.',$originalImage );
        $ext = $exploded[count( $exploded ) - 1];

        if( preg_match('/jpg|jpeg/i',$ext) ) {
            $imageTmp = imagecreatefromjpeg( $originalImage );
        } else if( preg_match('/png/i',$ext) ) {
            $imageTmp = imagecreatefrompng( $originalImage );
        } else if( preg_match('/gif/i',$ext) ) {
            $imageTmp = imagecreatefromgif( $originalImage );
        } else if( preg_match('/bmp/i',$ext) ) {
            $imageTmp = imagecreatefrombmp( $originalImage );
        } else {
            return 0;
        }

        // quality is a value from 0 (worst) to 100 (best)
        imagejpeg( $imageTmp, $outputImage, $quality );
        imagedestroy( $imageTmp );

        return 1;
    }

    function convert( $img, $img_info ) {
        switch ($img_info[mime]) {
          case IMAGETYPE_GIF:
              $src = imagecreatefromgif($img);
              break;
          case IMAGETYPE_JPEG:
            $src = imagecreatefromjpeg($img);
            break;
          case 'image/png':
              $src = imagecreatefrompng($img);
              echo "\n\n $src: ";
              echo $src;
              echo "\n\n";
              break;
          default:
            die("Unknown filetype");
        }
    }

    $size = $_FILES['workImage']['size'];
    $tmp = $_FILES['workImage']['tmp_name'];

    $img_info = getimagesize($tmp);
    print_r( $img_info[mime] );

    $name = getName($_FILES['workImage']['name']);
    $image_ext = getExtension($name);

    $new_file_name = $id . $key . $num . $image_ext;
    // echo $tmp;
    // echo "\n\n";
    // if( move_uploaded_file( $tmp, $path . $new_file_name ) ) {
    // if( convertImage( $tmp, $path . $new_file_name, $quality ) ) {
    convert( $tmp, $img_info );
    // if( convert( $tmp, $img_info ) ) {
        // $msg = "Success, your image uploaded!";
    // } else {
        // $msg = "Failed, your image did not upload!";
    // }

    $json = json_encode(array(
        'msg' => $msg,
        'image_tmp' => $tmp,
        'extension' => $ext,
        'id' => $num,
        'name' => $name,
        'newFileName' => $new_file_name
    ));

    // echo $json;

?>
