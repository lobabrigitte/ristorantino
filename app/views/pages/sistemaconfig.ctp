        <?php    
        echo $this->element('menuadmin');
        ?>

<div class="grid_6 administracion_menu push_4">
    <h1>Acciones del sistema</h1>
    <div class="grid_7 alpha omega">
    <h2>Impresoras</h2>
    <?php
    echo $html->link('CUPS Printer Manager',FULL_BASE_URL.':631').'<br>';
    echo $html->link('Comandera','/Comanderas').'<br>';
    echo $html->link('Listar Dispositivos Fiscales','/cashier/listar_dispositivos').'<br>';
    ?>
    </div>
    
    <div class="grid_7 alpha omega">
    <h2>Configuración</h2>
    <?php
    echo $html->link('Crear consultas para las estadísticas (avanzado)','/pquery/queries').'<br>';
    ?>
    </div>
    
</div>
