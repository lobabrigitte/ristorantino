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

	<th><?php echo $paginator->sort('User.nombre');?></th>
	<th><?php echo $paginator->sort('Descuento.name');?></th>
	<th><?php echo $paginator->sort('tipofactura');?></th>
	<th><?php echo $paginator->sort('imprime_ticket');?></th>
	<th class="actions"><?php __('Actions');?></th>
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
		<td>
			<?php echo $cliente['User']['nombre'].' '.$cliente['User']['apellido']; ?>
		</td>
		<td>
			<?php echo $cliente['Descuento']['name'].' (%'.$cliente['Descuento']['porcentaje'].')'; ?>
		</td>
		<td>
			<?php echo ($cliente['Cliente']['tipofactura'] == 'A' || $cliente['Cliente']['tipofactura'] == 'B')?'"'.$cliente['Cliente']['tipofactura'].'"':''; ?>
		</td>
		<td>
			<?php echo ($cliente['Cliente']['imprime_ticket'])?'SI':'NO'; ?>
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
