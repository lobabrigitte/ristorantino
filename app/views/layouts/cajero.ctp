<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<?php echo $html->charset(); ?>
	<title>
		<?php echo $title_for_layout; ?>
	</title>
	<?php
		echo $html->meta('icon');

		//echo $html->css('cake');
		echo $html->css('Cajero');
		
		// para los modal window
		echo $html->css('windowthemes/default');
		echo $html->css('windowthemes/alert');
		
		
		echo $javascript->link('prototype');		
		echo $javascript->link('scriptaculous');

		echo $javascript->link('php');
		
		echo $javascript->link('cajero/cajero');	
		echo $javascript->link('cajero/head');
		
		
		// Modal window  Prototype window by http://prototype-window.xilinus.com/index.html
		echo $javascript->link('window');

		
			?>
</head>
<body>
	<div id="container">
	
		<?php if($session->flash()){?>
		<div id="mesajes"><?php $session->flash(); ?></div>
		<script type="text/javascript">
			setTimeout(function(){$('mesajes').hide()}, 400);
		</script>
		<?php }?>
		
		
		<div id="content">
			
			<div id="navegador">
				<?php echo $html->link('HOME','/pages/home',array('class'=> 'boton letra-chica'));?>
				<?php $agrega_clase = ($this->action == 'cobrar')?' boton-apretado':''?>
				<?php echo $html->link('Cajero','/cajero/cobrar',array('class'=> 'boton letra-chica '.$agrega_clase));?>
				<?php $agrega_clase = ($this->action == 'mesas_abiertas')?' boton-apretado':''?>
				<?php echo $html->link('Mesas Abiertas','/cajero/mesas_abiertas',array('class'=> 'boton letra-chica '.$agrega_clase));?>
			</div>			
			
			<div id="funciones-impresora">
				<?php echo $html->link('Informe X','/cajero/cierre_x',array('class'=> 'boton letra-chica'));?>
				<?php echo $html->link('Cierre Z','/cajero/cierre_z',array('class'=> 'boton letra-chica'));?>
				<?php echo $html->link('Vaciar Cola Impresión','/cajero/vaciar_cola_impresion_fiscal',array('class'=> 'boton letra-chica'));?>
			</div>
			
			<?php echo $content_for_layout; ?>
		</div>
	</div>
	<?php //echo $javascript->link('cajero/tail'); ?>
	<?php echo $cakeDebug; ?>
	
</body>
</html>