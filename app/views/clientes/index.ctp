<div class="clientes index">
<h2><?php __('Clientes');?></h2>
<p>
<?php
echo $paginator->counter(array(
'format' => __('Page %page% of %pages%, showing %current% records out of %count% total, starting on record %start%, ending on %end%', true)
));
?></p>
<table cellpadding="0" cellspacing="0">
<tr>
	<th><?php echo $paginator->sort('Usuario','User.username');?></th>
	<th><?php echo $paginator->sort('Tipo Descuento','Descuento.name');?></th>
	<th><?php echo $paginator->sort('Tipo de Factura','tipofactura');?></th>
	<th><?php echo $paginator->sort('imprime_ticket');?></th>
	<th><?php echo $paginator->sort('nombre');?></th>
	<th><?php echo $paginator->sort('CUIT/CUIL/DNI', 'nrodocumento');?></th>
	<th><?php echo $paginator->sort('Creado','created');?></th>
	<th class="actions"><?php __('Acciones');?></th>
</tr>
<?php
$i = 0;
foreach ($clientes as $cliente):
	$class = null;
	if ($i++ % 2 == 0) {
		$class = ' class="altrow"';
	}
?>
	<tr<?php echo $class;?>>
		<td title="<?php echo $cliente['User']['nombre'].", ".$cliente['User']['apellido']; ?>">
			<?php echo $cliente['User']['username']; ?>
		</td>
		<td title="<?php echo $cliente['Descuento']['description']." (%".$cliente['Descuento']['porcentaje'].")"; ?>">
			<?php echo $cliente['Descuento']['name']; ?>
		</td>
		<td>
			<?php echo ($cliente['Cliente']['tipofactura'])?'"'.$cliente['Cliente']['tipofactura'].'"':'Remito'; ?>
		</td>
		<td>
			<?php echo ($cliente['Cliente']['imprime_ticket'])?'Si':'No'; ?>
		</td>
		<td>
			<?php echo $cliente['Cliente']['nombre']; ?>
		</td>
		<td>
			<?php echo $cliente['Cliente']['nrodocumento']." (".$cliente['TipoDocumento']['name'].")"; ?>
		</td>
		<td>
			<?php echo date('d/m/Y H:i',strtotime($cliente['Cliente']['created'])); ?>
		</td>
		<td class="actions">
			<?php echo $html->link(__('View', true), array('action'=>'view', $cliente['Cliente']['id'])); ?>
			<?php echo $html->link(__('Edit', true), array('action'=>'edit', $cliente['Cliente']['id'])); ?>
			<?php echo $html->link(__('Delete', true), array('action'=>'delete', $cliente['Cliente']['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $cliente['Cliente']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
</table>
</div>
<div class="paging">
	<?php echo $paginator->prev('<< '.__('previous', true), array(), null, array('class'=>'disabled'));?>
 | 	<?php echo $paginator->numbers();?>
	<?php echo $paginator->next(__('next', true).' >>', array(), null, array('class'=>'disabled'));?>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('New Cliente', true), array('action'=>'add')); ?></li>
	</ul>
</div>