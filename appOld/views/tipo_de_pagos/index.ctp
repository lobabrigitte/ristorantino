    <?php  
    echo $this->element('menuadmin');
     ?>



<div class="tipoDePagos index">
   
    <div class="text-right" style="float: right">
    <?php echo $html->link(__('Crear Tipo de pago', true), array('action'=>'edit'), array('class'=> 'btn btn-primary btn-lg')); ?>
    </div>
<h2><?php __('Tipo de Pagos');?></h2>
<p>
<?php
echo $paginator->counter(array(
'format' => __('Pagina %page% de %pages%, mostrando %current% elementos de %count%', true)
));
?></p>
<table class="table">
<tr>
	<th><?php echo $paginator->sort('id');?></th>
	<th><?php echo $paginator->sort('Nombre');?></th>
	<th class="actions"><?php __('Acciones');?></th>
</tr>
<?php
$i = 0;
foreach ($tipoDePagos as $tipoDePago):
	$class = null;
	if ($i++ % 2 == 0) {
		$class = ' class="altrow"';
	}
?>
	<tr<?php echo $class;?>>
		<td>
                    <?php echo $tipoDePago['TipoDePago']['id']; ?>
                    <?php echo $html->image($tipoDePago['TipoDePago']['image_url'], array('width'=>40)); ?>
		</td>
		<td>
			<?php echo $tipoDePago['TipoDePago']['name']; ?>
		</td>
		<td class="actions">
			<?php echo $html->link(__('Editar', true), array('action'=>'edit', $tipoDePago['TipoDePago']['id'])); ?>
			<?php echo $html->link(__('Borrar', true), array('action'=>'delete', $tipoDePago['TipoDePago']['id']), null, sprintf(__('¿Está seguro que desea borrar el tipo de pago: %s?', true), $tipoDePago['TipoDePago']['name'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
</table>
</div>
<div class="paging">
	<?php echo $paginator->prev('<< '.__('anterior', true), array(), null, array('class'=>'disabled'));?>
 | 	<?php echo $paginator->numbers();?>
	<?php echo $paginator->next(__('próximo', true).' >>', array(), null, array('class'=>'disabled'));?>
</div>

