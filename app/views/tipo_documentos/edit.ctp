<div class="tipoDocumentos form">
<?php echo $form->create('TipoDocumento');?>
	<fieldset>
 		<legend><?php __('Editar tipo de documento');?></legend>
	<?php
		echo $form->input('id');
		echo $form->input('codigo_fiscal');
		echo $form->input('name');
	?>
<?php echo $form->end('Submit');?>
	</fieldset>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('Delete', true), array('action' => 'delete', $form->value('TipoDocumento.id')), null, sprintf(__('Are you sure you want to delete # %s?', true), $form->value('TipoDocumento.id'))); ?></li>
		<li><?php echo $html->link(__('List TipoDocumentos', true), array('action' => 'index'));?></li>
	</ul>
</div>