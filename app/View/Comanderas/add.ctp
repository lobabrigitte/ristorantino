<div class="comanderas form">
<?php echo $this->Form->create('Comandera');?>
	<fieldset>
		<legend><?php echo __('Add Comandera'); ?></legend>
	<?php
		echo $this->Form->input('name');
		echo $this->Form->input('description');
		echo $this->Form->input('driver_name', array('after' => 'Formato en el que será la salida de la impresión'));
		echo $this->Form->input('path', array('after' => 'Se utiliza cuando se configura para que imprima archivos (Files) en lugar de usar CUPS'));
		echo $this->Form->input('imprime_ticket');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit'));?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Comanderas'), array('action' => 'index'));?></li>
		<li><?php echo $this->Html->link(__('List Productos'), array('controller' => 'productos', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Producto'), array('controller' => 'productos', 'action' => 'add')); ?> </li>
	</ul>
</div>