<div class="proveedores index">
<h2><?php __('Proveedores');?></h2>
<p>
<?php
    echo $paginator->counter(array(
        'format' => __('Mostrando %start% a %end% de %count% proveedores', true)
    ));
?></p>
<table cellpadding="0" cellspacing="0">
<tr>
	<th><?php echo $paginator->sort('name');?></th>
	<th><?php echo $paginator->sort('CUIT', 'cuit');?></th>
	<th><?php echo $paginator->sort('mail');?></th>
	<th><?php echo $paginator->sort('telefono');?></th>
	<th><?php echo $paginator->sort('domicilio');?></th>
	<th><?php echo $paginator->sort('created');?></th>
	<th class="actions"><?php __('Actions');?></th>
</tr>
<?php
$i = 0;
foreach ($proveedores as $proveedor):
	$class = null;
	if ($i++ % 2 == 0) {
		$class = ' class="altrow"';
	}
?>
	<tr<?php echo $class;?>>
		<td>
			<?php echo $proveedor['Proveedor']['name']; ?>
		</td>
		<td>
			<?php echo $proveedor['Proveedor']['cuit']; ?>
		</td>
		<td>
			<?php echo $proveedor['Proveedor']['mail']; ?>
		</td>
		<td>
			<?php echo $proveedor['Proveedor']['telefono']; ?>
		</td>
		<td>
			<?php echo $proveedor['Proveedor']['domicilio']; ?>
		</td>
		<td>
			<?php echo date("d/m/Y H:i", strtotime($proveedor['Proveedor']['created'])); ?>
		</td>
		<td class="actions">
			<?php echo $html->link(__('View', true), array('action' => 'view', $proveedor['Proveedor']['id'])); ?>
			<?php echo $html->link(__('Edit', true), array('action' => 'edit', $proveedor['Proveedor']['id'])); ?>
			<?php echo $html->link(__('Delete', true), array('action' => 'delete', $proveedor['Proveedor']['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $proveedor['Proveedor']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
</table>
</div>
<?
if (@$paginator->numbers()) {
?>
    <div class="paging">
    <?php echo $paginator->prev('<< ' . __('anterior', true), array(), null, array('class' => 'disabled')); ?> | 
    <?php echo $paginator->numbers(); ?>	
    <?php echo $paginator->next(__('siguiente', true) . ' >>', array(), null, array('class' => 'disabled')); ?>
    </div>
<?
}
?>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('Nuevo Proveedor', true), array('action' => 'add')); ?></li>
	</ul>
</div>