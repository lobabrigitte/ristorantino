<?php
/**
 * This file is loaded automatically by the app/webroot/index.php file after core.php
 *
 * This file should load/create any application wide configuration settings, such as
 * Caching, Logging, loading additional configuration files.
 *
 * You should also use this file to include any files that provide global functions/constants
 * that your application uses.
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Config
 * @since         CakePHP(tm) v 0.10.8.2117
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

// Setup a 'default' cache configuration for use in the application.
Cache::config('default', array('engine' => 'File'));

/**
 * The settings below can be used to set additional paths to models, views and controllers.
 *
 * App::build(array(
 *     'Model'                     => array('/path/to/models', '/next/path/to/models'),
 *     'Model/Behavior'            => array('/path/to/behaviors', '/next/path/to/behaviors'),
 *     'Model/Datasource'          => array('/path/to/datasources', '/next/path/to/datasources'),
 *     'Model/Datasource/Database' => array('/path/to/databases', '/next/path/to/database'),
 *     'Model/Datasource/Session'  => array('/path/to/sessions', '/next/path/to/sessions'),
 *     'Controller'                => array('/path/to/controllers', '/next/path/to/controllers'),
 *     'Controller/Component'      => array('/path/to/components', '/next/path/to/components'),
 *     'Controller/Component/Auth' => array('/path/to/auths', '/next/path/to/auths'),
 *     'Controller/Component/Acl'  => array('/path/to/acls', '/next/path/to/acls'),
 *     'View'                      => array('/path/to/views', '/next/path/to/views'),
 *     'View/Helper'               => array('/path/to/helpers', '/next/path/to/helpers'),
 *     'Console'                   => array('/path/to/consoles', '/next/path/to/consoles'),
 *     'Console/Command'           => array('/path/to/commands', '/next/path/to/commands'),
 *     'Console/Command/Task'      => array('/path/to/tasks', '/next/path/to/tasks'),
 *     'Lib'                       => array('/path/to/libs', '/next/path/to/libs'),
 *     'Locale'                    => array('/path/to/locales', '/next/path/to/locales'),
 *     'Vendor'                    => array('/path/to/vendors', '/next/path/to/vendors'),
 *     'Plugin'                    => array('/path/to/plugins', '/next/path/to/plugins'),
 * ));
 *
 */

/**
 * Custom Inflector rules, can be set to correctly pluralize or singularize table, model, controller names or whatever other
 * string is passed to the inflection functions
 *
 * Inflector::rules('singular', array('rules' => array(), 'irregular' => array(), 'uninflected' => array()));
 * Inflector::rules('plural', array('rules' => array(), 'irregular' => array(), 'uninflected' => array()));
 *
 */

/**
 * Plugins need to be loaded manually, you can either load them one by one or all of them in a single call
 * Uncomment one of the lines below, as you need. make sure you read the documentation on CakePlugin to use more
 * advanced ways of loading plugins
 *
 * CakePlugin::loadAll(); // Loads all plugins at once
 * CakePlugin::load('DebugKit'); //Loads a single plugin named DebugKit
 *
 */

/**
 * You can attach event listeners to the request lifecycle as Dispatcher Filter . By Default CakePHP bundles two filters:
 *
 * - AssetDispatcher filter will serve your asset files (css, images, js, etc) from your themes and plugins
 * - CacheDispatcher filter will read the Cache.check configure variable and try to serve cached content generated from controllers
 *
 * Feel free to remove or add filters as you see fit for your application. A few examples:
 *
 * Configure::write('Dispatcher.filters', array(
 *		'MyCacheFilter', //  will use MyCacheFilter class from the Routing/Filter package in your app.
 *		'MyPlugin.MyFilter', // will use MyFilter class from the Routing/Filter package in MyPlugin plugin.
 * 		array('callable' => $aFunction, 'on' => 'before', 'priority' => 9), // A valid PHP callback type to be called on beforeDispatch
 *		array('callable' => $anotherMethod, 'on' => 'after'), // A valid PHP callback type to be called on afterDispatch
 *
 * ));
 */
Configure::write('Dispatcher.filters', array(
	'AssetDispatcher',
	'CacheDispatcher'
));

/**
 * Configures default file logging options
 */
App::uses('CakeLog', 'Log');
CakeLog::config('debug', array(
	'engine' => 'FileLog',
	'types' => array('notice', 'info', 'debug'),
	'file' => 'debug',
));
CakeLog::config('error', array(
	'engine' => 'FileLog',
	'types' => array('warning', 'error', 'critical', 'alert', 'emergency'),
	'file' => 'error',
));














// Read configuration file from ini file
App::uses('IniReader', 'Configure');
Configure::config('ini', new IniReader(ROOT . "/" . APP_DIR . '/Config/'));
Configure::load('coqus_config', 'ini');


App::uses('PrinterHelperSkel', 'PrinterEngine.Lib');
App::uses('FiscalPrinterHelper', 'PrinterEngine.Lib');


CakePlugin::load('Acl', array('bootstrap' => true));


CakePlugin::loadAll(array(
    'Adition',
    'Stats',
)); // Loads all plugins at once

CakePlugin::load('DebugKit');

//reglas en español

Inflector::rules('singular', array(
    'rules' => array('/([r|d|j|n|l|m|y|z])es$/i' => '\1', '/as$/i' => 'a', '/([ti])a$/i' => '\1a'),
    'irregular' => array(
        'fiscal_printers' => 'fiscal_printer',
        'printers' => 'printer',
        'config_categories' => 'config_category',
    ),
        )
);

Inflector::rules('plural', array(
    'rules' => array('/([r|d|j|n|l|m|y|z])$/i' => '\1es', '/a$/i' => '\1as'),
    'irregular' => array(
        'user' => 'users',
        'group' => 'groups',
        'adicion' => 'adicion',
        'cajero' => 'cajero',
        'fiscal_printer' => 'fiscal_printers',
        'printer' => 'printers',
        'query' => 'queries',
        'action' => 'actions',
        'inventory' => 'inventories',
        'category' => 'categories',
        'config_category' => 'config_categories',
        'pquery_category' => 'pquery_categories',
        'habitación' => 'habitaciones',
    ),
    'uninflected' => array()
        )
);





/* TIENEN QUE SER LOS MISMOS ID´s QUE EN LA TABLA !!! */
define('MESA_ABIERTA', 1);
define('MESA_CERRADA', 2);
define('MESA_COBRADA', 3);



define('MENU_FOLDER', 'menu');
define('IMG_MENU', WWW_ROOT . 'img/' . MENU_FOLDER . '/');


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

function convertir_para_busqueda_avanzada($text)
{
    $text = strtolower($text);
    $text = trim($text);
    $text = "($text)";
    $patron = array(
        // Espacios, puntos y comas por guion
        //'/[\., ]+/' => '-',
        // Vocales
        '/a/' => '(á|a|A|Á)',
        '/e/' => '(é|e|E|É)',
        '/i/' => '(í|i|I|Í)',
        '/o/' => '(ó|o|O|Ó)',
        '/u/' => '(ú|u|Ú|U)',
        '/A/' => '(á|a|A|Á)',
        '/E/' => '(é|e|E|É)',
        '/I/' => '(í|i|I|Í)',
        '/O/' => '(ó|o|O|Ó)',
        '/U/' => '(ú|u|Ú|U)',
        '/Á/' => '(á|a|A|Á)',
        '/É/' => '(é|e|E|É)',
        '/Í/' => '(í|i|I|Í)',
        '/Ó/' => '(ó|o|O|Ó)',
        '/Ú/' => '(ú|u|Ú|U)',
        '/á/' => '(á|a|A|Á)',
        '/é/' => '(é|e|E|É)',
        '/í/' => '(í|i|I|Í)',
        '/ó/' => '(ó|o|O|Ó)',
        '/ú/' => '(ú|u|Ú|U)',
        '/n/' => '(ñ)',
        '/ñ/' => '(n|ñ)',
        '/s/' => '(z|s|c|x)',
        '/c/' => '(z|s|c)',
        '/z/' => '(z|s|c)',
        // Agregar aqui mas caracteres si es necesario
        '/°/' => '',
        '/º/' => '',
        '/n°/' => '%',
        '/nº/' => '%',
        '/ /' => '%',
        '/x/' => '(x|s|X|S)'
    );
    // caracteres especiales de expresiones regulares
//                $text = preg_quote($text);
    $text_aux = '';
    for ($i = 0; $i < strlen($text); $i++) {
        $caracter = $text[$i];
        $text_aux .= preg_replace(array_keys($patron), array_values($patron), $caracter, 1);
    }

    return $text_aux;
}

function aplanar_mesa($mesa)
{
    if (!empty($mesa['Mesa'])){
        $nm = $mesa['Mesa'];
    } else {
        $nm = $mesa;
    }
    foreach ($mesa as $k=>$att) {
        if ( $k != 'Mesa') {
            $nm[$k] = $att;
        }        
    }    
    if ( !empty($nm['Cliente']['IvaResponsabilidad']['TipoFactura']['codename']) ) {
        $codename = $nm['Cliente']['IvaResponsabilidad']['TipoFactura']['codename'];
        $nm['cliente_tipofactura'] = '"'.$codename.'"';
    } else {
        $nm['cliente_tipofactura'] = '"B"';
    }
    
    $dto = 0;
    if ( !empty($nm['Cliente']['Descuento']['porcentaje']) ) {
        $dto += $nm['Cliente']['Descuento']['porcentaje'];
    }
    if ( !empty($nm['Descuento']['porcentaje']) ) {
        $dto += $nm['Descuento']['porcentaje'];
    }
    
    
    $dtotxt = $dto?"$dto%":"";
    $nm['estado_name'] = $nm['Estado']['name'];
    $nm['cliente_dto'] = $dtotxt;
    $nm['cliente_abr'] = $nm['cliente_tipofactura']." ".$nm['cliente_dto'];
    $nm['time_abrio_abr'] = "Abrió ".date('H:i', strtotime($nm['created']));
    $nm['time_cerro_abr'] = empty($nm['time_cerro'])?"":"Cerró ".date('H:i', strtotime($nm['time_cerro']));
    $nm['time_cobro_abr'] = empty($nm['time_cobro'])?"":"Cobró ".date('H:i', strtotime($nm['time_cobro']));
    if (!empty($nm['_importe_descuento'])) {
        $nm['importe_abr'] = 'Total $'.$nm['subtotal'].' - $'.$nm['importe_descuento'].' ='.$nm['total'];
    } else {
        $nm['importe_abr'] = 'Total $'.$nm['total'];
    }
    
    return $nm;
}

function aplanar_mesas($mesas)
{
    $newMesas = array();
    foreach ($mesas as $m) {
        $newMesas[] = aplanar_mesa($m);
    }
    return $newMesas;
}




define('THUMBNAIL_IMAGE_MAX_WIDTH', 150);
define('THUMBNAIL_IMAGE_MAX_HEIGHT', 150);

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

