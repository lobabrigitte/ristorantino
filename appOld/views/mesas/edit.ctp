
        <div class="row mesas form">
            <?php echo $form->create('Mesa'); ?>
            <legend><?php __('Editando Mesa'); ?></legend>
            <div class="col-md-6 ">
                <fieldset>
                    
                    <?php
                    echo $form->input('id');
                    echo $form->input('estado_id');
                    echo $form->input('numero', array('label' => 'Número de Mesa'));
                    echo $form->input('mozo_id', array());
                    ?>
                </fieldset>
            </div>

            <div class="col-md-6">
                <fieldset>
                    <?php
                    echo $form->input('cant_comensales', array('label' => 'Cant. de Cubiertos (comensales)'));
                    echo $form->input('total', array());
                    
                    echo "<br>".$form->submit('Guardar Cambios', array('class'=>'btn btn-primary btn-lg')); ?>
                    
                    
                </fieldset>
            </div>
            <?php echo $form->end(); ?>
        </div>

        <div class="clear"></div>
        
        <div class="row detallesmesa">
            <h2>Detalles de la Mesa</h2>

            <dl>
                <?php
                echo "<dt>Tipo Factura</dt>";
                if ($mesa['Cliente']['tipofactura'] == '') {
                    $tipofac = "B";
                    $mesa['Cliente']['tipofactura'] = "B";
                }

                if ($mesa['Cliente']['tipofactura'] === 0) {
                    $tipofac = 'Remito';
                } else {
                    $tipofac = $mesa['Cliente']['tipofactura'];
                }

                echo "<dd>\"$tipofac\" &nbsp;</dd>";

                if (empty($mesa['Cliente']['tipofactura'])) {
                    echo "<dt>Nombre</dt>";
                    echo "<dd>" . $mesa['Cliente']['nombre'] . "&nbsp;</dd>";

                    echo "<dt>Descuento</dt>";
                    $dto = (!empty($mesa['Cliente']['Descuento']['porcentaje'])) ? $mesa['Cliente']['Descuento']['porcentaje'] : "0";
                    echo "<dd>" . $dto . "% &nbsp;</dd>";
                }

                echo "</dd>"
                ?>
            </dl>

            <p>
                <?php
                echo "Abrió a las <b>" . date('H:i', strtotime($this->data['Mesa']['created'])) . "</b>";

                if (!empty($this->data['Mesa']['time_cerro'])) {
                    echo ", Cerró a las <b>" . date('H:i', strtotime($this->data['Mesa']['time_cerro'])) . "</b>";
                }

                if (!empty($this->data['Mesa']['time_cobro'])) {
                    echo ", Cobrada a las <b>" . date('H:i', strtotime($this->data['Mesa']['time_cobro'])) . "</b>";
                }
                ?>
            </p>
        </div>

        <ul class="items_mesas">

            <?php
            $totalSumado = 0;
            foreach ($items as $comanda):
                echo "<li><p>";
                echo "#" . $comanda['id'] . "</p>";
                echo $html->link("Reimprimir Comanda #" . $comanda['id'], array('controller' => 'comandas', 'action' => 'imprimir', $comanda['id']), array('style' => 'float:right;margin-right: 100px;font-size:120%;color:#000000;font-weight: normal;'));
                if ($comanda['observacion']) {
                    echo "<cite>Observacion: ";
                    echo $comanda['observacion'] . "</cite>";
                    //echo "</li>";
                }
                ?>
                <ul>
                <?php //debug($comanda); ?>
                <?php foreach ($comanda['DetalleComanda'] as $detalle) { ?>
                        <li>
                        <?php echo "Cant Pedida: " . $detalle['cant'] . ($detalle['cant_eliminada'] != '0' ? " Sacada: " . $detalle['cant_eliminada'] : '') ?>
                            <br>
                            <span style="color: #AD0101; font-weight: normal; font-size: 120%; <?php if (($detalle['cant'] - $detalle['cant_eliminada']) == 0) echo "text-decoration: line-through;" ?> ">
                            <?php echo $detalle['cant'] - $detalle['cant_eliminada'] . ")  " . (!empty($detalle['Producto']['name']) ? $detalle['Producto']['name'] : '') . " [p-u $ " . $detalle['Producto']['precio'] . "]" ?>
                            </span>
                        </li>
                                <?php
                                if (count($detalle['DetalleSabor']) > 0) {
                                    $primero = true;
                                    echo "<cite>";
                                    echo "(";
                                    foreach ($detalle['DetalleSabor'] as $sabor) {
                                        if (!$primero) {
                                            echo ", ";
                                        }
                                        $primero = false;
                                        echo $sabor['Sabor']['name'] . ($sabor['Sabor']['precio'] != '0' ? " [ $" . $sabor['Sabor']['precio'] . "]" : '');

                                        $totalSumado += ($detalle['cant'] - $detalle['cant_eliminada']) * $sabor['Sabor']['precio'];
                                    }
                                    echo ")";
                                    echo "</cite>";
                                }

                                $totalSumado += ($detalle['cant'] - $detalle['cant_eliminada']) * $detalle['Producto']['precio'];
                            }
                            ?>
                </ul>


                </li>
                <?php
            endforeach;
            ?>

        </ul>

        <div class="mesastotaledit">
<?php
//echo "<p>La suma de los productos da: <strong> $$totalSumado</strong></p>";
//
    //echo "<p><br>Segun funciones especiales:";

echo "<h3>SUBTOTAL = <span>$$subtotal</span></h3>";
$dto = empty($mesa['Cliente']['Descuento']['porcentaje']) ? 0 : $mesa['Cliente']['Descuento']['porcentaje'];
echo "<h3>TOTAL = <span>$$total</span> </h3>";
if ($dto != '0') {
    echo "(Dto: $dto%)";
}
echo "</p>";

//echo "<p><br><br>Segun base de datos: <br>";
//echo "<h5>Subtotal almacenado en Base de Datos: $".$mesa['Mesa']['subtotal']."<h5>";
//echo "<h5>Total almacenado en Base de Datos: $".$mesa['Mesa']['total']."<h5>";
//echo "</p>";
?>
        </div>


        <div class="actions">
            <ul>
                <li><?php echo $html->link(__('Borrar', true), array('action' => 'delete', $form->value('Mesa.id')), null, sprintf('Seguro que querés borrar la mesa Número # %s?', $form->value('Mesa.numero'))); ?></li>
                <li><?php echo $html->link(__('Listar Mesas', true), array('action' => 'index')); ?></li>
            </ul>
        </div>

    </div>
</div>