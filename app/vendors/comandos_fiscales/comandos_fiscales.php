<?php 


abstract class ComandosFiscales
{
	/* Llenar para cada tipo y modelo de impresora estos 3 variables estaticas  */
	const FS = "";
	const ESC = "";
	const DOBLE_ANCHO = "";
	
	
	
	
	/**
	 * Me abre un documento fiscal
	 * 
	 * @param $tipo_ticket el topo de ticket que quiero abrir
	 * las psobilidades son:
	 * 							"T": abre un ticket
	 * 							"A": abre ticket factura 'A'
	 * 							"B": abre ticket factura 'B' o 'C'
	 */
	public abstract function openFiscalReceipt($tipo_ticket);
	
	/**
	 * Imprime texto fiscal que se muestra por lo general antes de los articulos. 
	 * No puede contener la palabra TOTAL, porque se puede bloquear la impresora
	 * @param string $texto el texto a imprimir (notar que es por lnea el texto, o sea, 
	 * 						cuidado en pasarme del limite maximo de cacacteres por linea que soporta la impresora
	 * @param integer $display depende del modelo ela impresora si tiene display o no
	 */
	public abstract function printFiscalText($texto, $doble_ancho = false ,$display = 0);
	
	
	/**
	 *  Imprime un articulo, o sea una linea del articulo con su description y su precio, cantidad, etc
	 *  
	 *  @param string $descripcion_articulo descripcion del articulo EJ: Coca-Cola
	 *  @param number $cantidad puede ser un entero o un float depende de la impresora
	 *  @param number $monto float o integer depende de laimpresora
	 *  @param number $porcentaje_iva depende de la impresora algunas hay queponerle el porcentaje estilo 21.00, y otras va un 0.21
	 *  @param boolean $suma dice si el item suma o resta
	 *	@param number $impuesto_interno puede ser float o integer dependiendo laimpresora
	 *	@param number $display si la impresora tiene display aca va un digito especial para que sepa que mostrar en el display
	 *	@param boolean $precio_totalsi es precio tital quiere decir que el precio que le pasé como parametro tiene el IVA incluido, caso contrario, el precio es sin IVA y la impresora se lo va a sumar automaticamente de acuerdo al IVA qe se le pasó cmo parametro
	 */
	public abstract function printLineItem($descripcion_articulo, $cantidad, $monto, $porcentaje_iva = 21, $suma = true, $impuesto_interno = 0, $display = 0, $precio_total = true);
	
	
	/**
	 * TotalPago
	 * 
	 * @param string $texto Ejemplo: "Pago en efectivo"
	 * @param number $monto_pagado integer o float dependiendo de la impresora
	 * @param $operacion las piopsibilidades son:
	 * 											'C': Cancela el ticket
	 * 											'T': pago parcial o total 
	 * 											'R': devolucion de pago
	 * @param $display	 para las impresoras que tengan display
	 */
	public abstract function totalTender($texto, $monto_pagado, $operacion = "T", $display = 0);
	
	
	/**
	 * Cierra el comprobante
	 * @param integer $cant_copias 	pr ahora solo vi que funcione en la Hasar 441. Este parametro dice cuantas copias iprimir del comprobante
	 * 								pr default va cero porque solo funciona en 1 modelo y pr lo general esta funcion no es util
	 */
	public abstract function closeFiscalReceipt($cant_copias = 0);
	
	
	/**
	 * Imprime el comprobante X/Z
	 * 
	 * @param $tipo_cierre puede ser:
	 * 								'X': imprime un cierre X
	 * 								'Z': imprime un cierre Z
	 */
	public abstract function dailyClose($tipo_cierre = 'X');
	
	
	/**
	 * Consulta de estado
	 */
	public abstract function statusRequest();
	
	
	/**
	 * Setea fecha y hora
	 */
	public abstract function setDateTime();
	
	
	/**
	 * Setea el encabezado y el pie de pagina
	 * 
	 * @param $numero_de_linea
	 * @param $texto
	 */
	public abstract function setHeaderTrailer($numero_de_linea,$texto = "-",$doble_ancho = false);
	
	
	/**
	 * Setea los datos del Cliente, por lo general se usa para hacer factura A
	 * 
	 * @param string $nombre_cliente nombre o razon social
	 * @param integer $documento valor del DNI, CIUT, CUIL, etc
	 * @param CHAR $respo_iva
	 * 					'I' responsable inscripto
	 * 					'E' Excento
	 * 					'A' No responsable
	 * 					'C' Consumidor final
	 * 					'T' No categorizado
	 * @param CHAR $tipo_documento
	 * 					'C' CUIT
	 * 					'L' CUIL
	 * 					'0' Lbreta enrolamiento
	 * 					'1' Libreta civica
	 * 					'2' DNI
	 * 					'3' Pasaporte
	 * 					'4' Cedula de Identidad
	 * @param string $domicilio
	 */
	public abstract function setCustomerData($nombre_cliente,$documento,$respo_iva, $tipo_documento, $domicilio = '');
}



?>