<?php

/* SVN FILE: $Id$ */
/**
 * Short description for file.
 *
 * Long description for file
 *
 * PHP versions 4 and 5
 *
 * CakePHP(tm) :  Rapid Development Framework (http://www.cakephp.org)
 * Copyright 2005-2008, Cake Software Foundation, Inc. (http://www.cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @filesource
 * @copyright     Copyright 2005-2008, Cake Software Foundation, Inc. (http://www.cakefoundation.org)
 * @link          http://www.cakefoundation.org/projects/info/cakephp CakePHP(tm) Project
 * @package       cake
 * @subpackage    cake.app.config
 * @since         CakePHP(tm) v 0.10.8.2117
 * @version       $Revision$
 * @modifiedby    $LastChangedBy$
 * @lastmodified  $Date$
 * @license       http://www.opensource.org/licenses/mit-license.php The MIT License
 */
/**
 *
 * This file is loaded automatically by the app/webroot/index.php file after the core bootstrap.php is loaded
 * This is an application wide file to load any function that is not used within a class define.
 * You can also use this to include or require any files in your application.
 *
 */
/**
 * The settings below can be used to set additional paths to models, views and controllers.
 * This is related to Ticket #470 (https://trac.cakephp.org/ticket/470)
 *
 * $modelPaths = array('full path to models', 'second full path to models', 'etc...');
 * $viewPaths = array('this path to views', 'second full path to views', 'etc...');
 * $controllerPaths = array('this path to controllers', 'second full path to controllers', 'etc...');
 *
 */
//EOF

define('THUMB_FOLDER', 'thumbs' . DS);
define('IMAGES_THUMB', IMAGES . DS . THUMB_FOLDER . DS);
define('THUMBNAIL_IMAGE_MAX_WIDTH', 150);
define('THUMBNAIL_IMAGE_MAX_HEIGHT', 150);

define('DATETIME_NULL', '0000-00-00 00:00:00');

define('MESA_ABIERTA', 1);
define('MESA_CERRADA', 2);
define('MESA_COBRADA', 3);

define('TIPO_DE_PAGO_EFECTIVO', 1);

define('MENU_FOLDER', 'menu');
define('IMG_MENU', WWW_ROOT . 'img/' . MENU_FOLDER . '/');


$estadosMesaMsg = array(
    MESA_ABIERTA => 'Abierta',
    MESA_CERRADA => 'Cerrada',
    MESA_COBRADA => 'Cobrada',
);

function comandosDeReinicializacionServidorImpresion($devName = null)
{

    debug(exec("sh /etc/init.d/spooler_srv stop"));
    $devName = empty($devName) ? $devName : ' ' . $devName;
    debug($devName);
    debug(exec("sh /etc/init.d/spooler_srv start$devName"));
    exec("cd /");
}

function jsDate($date)
{
    return date('Y-m-d H:i:s', strtotime($date));
}

/**
 * Mejora segun politicas del negocio para la funcion de redondeo
 *
 * @param double $number
 * @param integer $precision
 * @param const $extra flags de la funcion round() de PHP ver: http://php.net/manual/es/function.round.php
 */
function cqs_round($number, $precision = 0)
{
    if ($precision == 0) {
        $num = ceil($number);
    } else {
        $num = round($number, $precision);
    }
    return $num;
}

function validate_cuit_cuil($cuit)
{

    $coeficiente[0] = 5;
    $coeficiente[1] = 4;
    $coeficiente[2] = 3;
    $coeficiente[3] = 2;
    $coeficiente[4] = 7;
    $coeficiente[5] = 6;
    $coeficiente[6] = 5;
    $coeficiente[7] = 4;
    $coeficiente[8] = 3;
    $coeficiente[9] = 2;

    $ok = true;
    $resultado = 1;
    $cuit_rearmado = "";

    for ($i = 0; $i < strlen($cuit); $i = $i + 1) {    //separo cualquier caracter que no tenga que ver con numeros
        if ((Ord(substr($cuit, $i, 1)) >= 48) && (Ord(substr($cuit, $i, 1)) <= 57)) {
            $cuit_rearmado = $cuit_rearmado . substr($cuit, $i, 1);
        }
    }

    if (strlen($cuit_rearmado) <> 11) {  // si no estan todos los digitos
        $ok = false;
    } else {
        $sumador = 0;
        $verificador = substr($cuit_rearmado, 10, 1); //tomo el digito verificador

        for ($i = 0; $i <= 9; $i = $i + 1) {
            $sumador = $sumador + (substr($cuit_rearmado, $i, 1)) * $coeficiente[$i]; //separo cada digito y lo multiplico por el coeficiente
        }

        $resultado = $sumador % 11;
        if ($resultado != 0) {
            $resultado = 11 - $resultado;  //saco el digito verificador
        }

        $veri_nro = intval($verificador);

        if ($veri_nro == $resultado) {
            $ok = true;
            $cuit_rearmado = substr($cuit_rearmado, 0, 2) . "-" . substr($cuit_rearmado, 2, 8) . "-" . substr($cuit_rearmado, 10, 1);
        } else {
            $ok = false;
        }
    }

    return $ok;
}

//
//function jqmGrid_getBlockNumber($grid, $currentNumber) {
//
//    $grid = array(
//        'a' => array('a', 'b'),
//        'b' => array('a', 'b', 'c'),
//        'c' => array('a', 'b', 'c', 'd'),
//        'd' => array('a', 'b', 'c', 'd', 'e'),
//        );
//
//
//    $currentNumber+1 % $gridToNumber[strtolower($grid)]
//
//}

function crear_fechas($desde, $hasta) {
     $arr = array();
     $td = strtotime($desde);
     $th = strtotime($hasta);
     
     if ($th < $td) {
         $taux = $td;
         $td = $th;
         $th = $taux;
     }
     
     $dcurr = date('Y-m-d', $td);
     $tcurr = $td;
     while ( $tcurr <= $th ) {
         $arr[] = $dcurr;
         $dcurr = date('Y-m-d', strtotime('1 day',$tcurr));
         $tcurr = strtotime($dcurr);
         
     }     
     return $arr;
}




function generate_image_thumbnail($source_image_path, $thumbnail_image_path)
{
    list($source_image_width, $source_image_height, $source_image_type) = getimagesize($source_image_path);
    switch ($source_image_type) {
        case IMAGETYPE_GIF:
            $source_gd_image = imagecreatefromgif($source_image_path);
            break;
        case IMAGETYPE_JPEG:
            $source_gd_image = imagecreatefromjpeg($source_image_path);
            break;
        case IMAGETYPE_PNG:
            $source_gd_image = imagecreatefrompng($source_image_path);
            break;
    }
    if ($source_gd_image === false) {
        return false;
    }
    $source_aspect_ratio = $source_image_width / $source_image_height;
    $thumbnail_aspect_ratio = THUMBNAIL_IMAGE_MAX_WIDTH / THUMBNAIL_IMAGE_MAX_HEIGHT;
    if ($source_image_width <= THUMBNAIL_IMAGE_MAX_WIDTH && $source_image_height <= THUMBNAIL_IMAGE_MAX_HEIGHT) {
        $thumbnail_image_width = $source_image_width;
        $thumbnail_image_height = $source_image_height;
    } elseif ($thumbnail_aspect_ratio > $source_aspect_ratio) {
        $thumbnail_image_width = (int) (THUMBNAIL_IMAGE_MAX_HEIGHT * $source_aspect_ratio);
        $thumbnail_image_height = THUMBNAIL_IMAGE_MAX_HEIGHT;
    } else {
        $thumbnail_image_width = THUMBNAIL_IMAGE_MAX_WIDTH;
        $thumbnail_image_height = (int) (THUMBNAIL_IMAGE_MAX_WIDTH / $source_aspect_ratio);
    }
    $thumbnail_gd_image = imagecreatetruecolor($thumbnail_image_width, $thumbnail_image_height);
    imagecopyresampled($thumbnail_gd_image, $source_gd_image, 0, 0, 0, 0, $thumbnail_image_width, $thumbnail_image_height, $source_image_width, $source_image_height);
    imagejpeg($thumbnail_gd_image, $thumbnail_image_path, 90);
    imagedestroy($source_gd_image);
    imagedestroy($thumbnail_gd_image);
    return true;
}


?>