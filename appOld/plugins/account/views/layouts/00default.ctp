<!DOCTYPE HTML>
<html xml:lang="es-ES" lang="es-ES" dir="ltr">    
    <head>

        <script type="text/javascript">
            <!--
            // Inicializacion de variable global de url
            var urlDomain = "<?php echo $html->url('/', true); ?>";
            -->
        </script>

        <?php echo $html->charset(); ?>
        <title>
            <?php echo $title_for_layout; ?>
        </title>

        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no;"> 
        <meta name="apple-mobile-web-app-capable" content="yes">



        <base href="<?= $html->url('/') ?>" />
        <?php
        echo $html->meta('icon');

        // para los modal window
        echo $html->css(array(
//                    'http://code.jquery.com/mobile/latest/jquery.mobile.min.css',
//                    'jquery-mobile/jquery.mobile-1.0',
            //  'jquery-mobile/jquerymobile.coqus',
//                    'jquery-mobile/jquery.mobile-1.0rc1.min',
//                    'jquery-mobile/jquery-mobile-fluid960',
            'jquery-mobile/jquery.mobile.actionsheet',
            //  '/adition/css/ristorantino',
            '/jquery.mobile-1.3.2/jquery.mobile-1.3.2.min',
//            'jquery-mobile/jquery.mobile.min',
            '/account/css/style',
        ));

        $cssUserRole = "acl-" . $session->read('Auth.User.role');
        if (is_file(APP . WEBROOT_DIR . DS . "css" . DS . $cssUserRole . ".css")) {
            echo $html->css($cssUserRole, 'stylesheet', array('media' => 'screen'));
        }

        echo $javascript->link(array(
            'jquery/jquery-1.9.1.min',
//            'jquery/jquery-1.6.4',
            'jquery/jquery.tmpl.min',
            'knockout-2.0.0.min.js',
            'knockout.mapping-2.0.debug',
            '/jquery.mobile-1.3.2/jquery.mobile-1.3.2.min',
        ));

        //scripts de Cake
        echo $scripts_for_layout;
        ?>     

    </head>

    <body>
        <div data-role="page" data-dom-cache="false">

            <?php echo $this->element('jqm_header', array('titulo' => $title_for_layout)); ?>

            <div data-role="content">

                <div id="mesajes">
                    <?php
                    $session->flash();
                    $session->flash('auth');
                    ?>
                </div>

<?php echo $content_for_layout; ?>
                
            <?php echo $cakeDebug; ?>
            
            
            </div>

<?php echo $this->element('jqm_footer'); ?>
            
        </div>
                
        
        <div data-role="page" id="option-list">
            <div data-role="header" data-theme="d">
                    <h1>Opciones</h1>
            </div>
            
            <div data-role="content" data-theme="c">
                <ul data-role="listview">
                    <li><?php echo $html->link('Volver a Página Principal', '/', array('data-ajax'=>'false'))?></li>
                    <li><?php echo $html->link('Proveedores', array('controller'=>'proveedores'), array())?></li>
                    <li><?php echo $html->link('Impuestos', array('controller'=>'tipo_impuestos'), array())?></li>
                    <li><?php echo $html->link('Clasificaciones', array('controller'=>'clasificaciones'), array())?></li>
                </ul>
            </div>
        </div>
    </body>
</html>