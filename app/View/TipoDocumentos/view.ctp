<div class="tipoDocumentos view">
<h2><?php echo __('Tipo de documento');?></h2>
	<dl><?php $i = 0; $class = ' class="altrow"';?>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php echo __('Id'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $tipoDocumento['TipoDocumento']['id']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php echo __('Codigo Fiscal'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $tipoDocumento['TipoDocumento']['codigo_fiscal']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php echo __('Nombre'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $tipoDocumento['TipoDocumento']['name']; ?>
			&nbsp;
		</dd>
	</dl>
</div>
<div class="actions">
	<ul>
		<li><?php echo $this->Html->link(__('Editar Tipo de Documento'), array('action' => 'edit', $tipoDocumento['TipoDocumento']['id'])); ?> </li>
		<li><?php echo $this->Html->link(__('Borrar Tipo de Documento'), array('action' => 'delete', $tipoDocumento['TipoDocumento']['id']), null, sprintf(__('Are you sure you want to delete # %s?'), $tipoDocumento['TipoDocumento']['id'])); ?> </li>
		<li><?php echo $this->Html->link(__('Listar Tipo de Documentos'), array('action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('Crear Tipo de Documento'), array('action' => 'add')); ?> </li>
	</ul>
</div>