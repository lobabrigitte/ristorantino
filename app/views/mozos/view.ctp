<div class="mozos view">
<h2><?php  __('Mozo');?></h2>
	<dl><?php $i = 0; $class = ' class="altrow"';?>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('User'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $html->link($mozo['User']['nombre']." ".$mozo['User']['apellido'], array('controller'=> 'users', 'action'=>'view', $mozo['User']['id'])); ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Numero'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $mozo['Mozo']['numero']; ?>
			&nbsp;
		</dd>
	</dl>
</div>

