<?php
class Mesa extends AppModel {

	var $name = 'Mesa';
	var $actsAs = array('Containable');

	
	var $validate = array(
		'numero' => array(
			'notempty',
			'numeric',
			'numero_de_mesa_inexistente' => array(
                         'rule' => array('numero_de_mesa_inexistente'),
                         'message'=> 'El número ya existe.'
            )	
	));
	
	
	//The Associations below have been created with all possible keys, those that are not needed can be removed
	var $belongsTo = array(
			'Mozo' => array('className' => 'Mozo',
								'foreignKey' => 'mozo_id',
								'conditions' => '',
								'fields' => '',
								'order' => ''
			),
			'Cliente' => array('className' => 'Cliente',
								'foreignKey' => 'cliente_id',
								'conditions' => '',
								'fields' => '',
								'order' => ''
			)
	);


	
	var $hasOne = array(
			'Comensal' => array('className' => 'Comensal',
								'foreignKey' => 'mesa_id',
								'dependent' => true,
								'conditions' => '',
								'fields' => '',
								'order' => ''
			),
			'Pago' => array('className' => 'Pago',
								'foreignKey' => 'mesa_id',
								'dependent' => true,
								'conditions' => '',
								'fields' => '',
								'order' => '')
	);

	var $hasMany = array(
			'Comanda' => array('className' => 'Comanda',
								'foreignKey' => 'mesa_id',
								'dependent' => true,
								'conditions' => '',
								'fields' => '',
								'order' => '',
								'limit' => '',
								'offset' => '',
								'exclusive' => '',
								'finderQuery' => '',
								'counterQuery' => ''
			)
	);
	
	
	
	
	function cerrar_mesa($mesa_id = 0)
	{
		$this->id = ($mesa_id == 0)?$this->id:$mesa_id;	
				
		$result = $this->saveField('total', $this->calcular_total());
		$result = $this->saveField('time_cerro', date( "Y-m-d H:i:s",strtotime('now')));
		
	}
	
	
	

	
	/**
	 * Calcula el total de la mesa cuyo id fue seteado en $this->Mesa->id 
	 * return @total el valor
	 */
	function calcular_total(){
		$fields 	= array('sum(cant)*precio as "total"');
		$conditions = array('mesa_id'=>$this->id);
		$group 		= 'producto_id having sum(cant)>0';
		//return $this->DetalleComanda->find('first',array('fields'=>$fields, 'conditions'=> $conditions, 'group'=>$group));
		
		
		$total =  $this->query("
								select sumadas.mesa_id as mesa_id,sum(total) as total, dd.descuento,  sum(total)*(1-dd.descuento/100) as total_con_descuento 
from (
	select c.mesa_id as mesa_id, sum(s.precio*(dc.cant-dc.cant_eliminada)) as total
	from detalle_comandas dc
	left join detalle_sabores ds on (ds.detalle_comanda_id =  dc.id)
	left join sabores s on (s.id = ds.sabor_id)
	left join comandas c on (dc.comanda_id = c.id)
	where 
	c.mesa_id = $this->id AND
	(dc.cant-dc.cant_eliminada) > 0
	group by c.mesa_id

	UNION

	select c.mesa_id as mesa_id, sum(p.precio*(dc.cant-dc.cant_eliminada)) as total
	from detalle_comandas dc
	left join productos p on (dc.producto_id = p.id)
	left join comandas c on (dc.comanda_id = c.id)
	where 
	c.mesa_id = $this->id AND
	(dc.cant-dc.cant_eliminada) > 0
	group by c.mesa_id
) as sumadas

LEFT JOIN

	(select mesa_id, IF(ISNULL(descuentos.porcentaje), 0 , descuentos.porcentaje) as descuento
		from detalle_comandas
		left join comandas on (comanda_id = comandas.id)
		left join mesas on (mesa_id = mesas.id)
		left join clientes on (clientes.id = mesas.cliente_id )
		left join descuentos on (clientes.descuento_id = descuentos.id)
		where 
		mesa_id = $this->id
		group by mesa_id
	) as dd on (dd.mesa_id = sumadas.mesa_id)
	group by sumadas.mesa_id
										
		");
		
		/*
		if($total[0]['dd']['descuento']){
			$total[0][0]['total'] = round($total[0][0]['total']);
		}
		*/
		$total = round($total[0][0]['total_con_descuento']);
		return $total ;	
	}
	
	
	
	
	
	
	/**
	 * Me devuelve ellistado de productos de una mesa en especial
	 *
	 */
	function listado_de_productos($id = 0)
	{
		if($id != 0) 	$this->id = $id;	
		
		$items = $this->Comanda->DetalleComanda->find('all',array(
									'conditions'=>array(
										'Comanda.mesa_id'=>$this->id,
										'(DetalleComanda.cant - DetalleComanda.cant_eliminada) >'=>0),
									'order'=>'Comanda.id ASC, Producto.categoria_id ASC, Producto.id ASC',
									'contain'=>array('Producto','Comanda','DetalleSabor'=>'Sabor(name,precio)')
						));
		for($i=0; $i<count($items); $i++){
			$items[$i]['DetalleComanda']['cant_final'] = $items[$i]['DetalleComanda']['cant']-	$items[$i]['DetalleComanda']['cant_eliminada'];
		}
		
		return $items;
	}
	
	
	
	function listado_de_abiertas($recursive = -1){
		
		$conditions = array("Mesa.time_cobro" => "0000-00-00 00:00:00",
							"Mesa.time_cerro" => "0000-00-00 00:00:00");
		
		if($recursive>-1){
			$this->recursive = $recursive;			
			$mesas = $this->find('all', array('conditions'=>$conditions));
		}			
		else{
			$mesas = $this->find('all', array('conditions'=>$conditions,'contain'=>array('Mozo(numero)')));
		}
		return $mesas;
	}
	
	
	/**
	 * nos dice si el numero de mesa existe o no
	 * 
	 * @param integer numero demesa
	 * @return boolean
	 */
	function numero_de_mesa_existente($numero_mesa = 0){
		if($numero_mesa == 0){
		 	if(!empty($this->data['Mesa']['numero'])){
		 		$numero_mesa = $this->data['Mesa']['numero'];
		 	}
		 }		
		 
		$this->recursive = -1;
		$conditions = array(
							'time_cobro'=>'0000-00-00 00:00:00', 
							'numero'=>$numero_mesa);
		
		if(!empty($this->id)){
			if($this->id != ''){
				$conditions = array_merge($conditions, array('Mesa.id <>'=> $this->id));
		
			}
		}
		
		$result = $this->find('count',array('conditions'=>$conditions));

		return ($result>0)?true:false;
		
	}
	
	
	function numero_de_mesa_inexistente($numero_mesa = 0){
		 return ($this->numero_de_mesa_existente($numero_mesa))?false:true;
		 
	}
	
	
	function getNumero($mesa_id = 0){
		if($mesa_id != 0){
			$this->id = $mesa_id;
		}
		$mesa = $this->read();
		return $mesa['Mesa']['numero'];
		
	}
	
	
	
	function dameProductosParaTicket($id = 0){
		if($id != 0) $this->id = $id;	
		
		$items = $this->Comanda->DetalleComanda->find('all',array(
									'conditions'=>array(
										'Comanda.mesa_id'=>$this->id,
										'(DetalleComanda.cant - DetalleComanda.cant_eliminada) >'=> 0),
									'order'=>
										'Producto.categoria_id ASC, Producto.id ASC',
									'contain'=>array(
										'Producto(abrev,precio,categoria_id)',
										'Comanda(id)',
										'DetalleSabor'=>array('Sabor(name,precio)'))									
						));	
		for($i=0; $i<count($items); $i++){
			$items[$i]['DetalleComanda']['cant_final'] = $items[$i]['DetalleComanda']['cant']-	$items[$i]['DetalleComanda']['cant_eliminada'];
		}
		//debug($items);die();
		return $items;
	}
	
	
	
	/**
	 * devuelve todaslasmesas cerradas orcdenadas por fecha de cierre ASC
	 * @return array mesas find(all)
	 */
	function todasLasCerradas(){
		$this->recursive = 0;
		$conditions = array("time_cobro = '0000-00-00 00:00:00'",
							"time_cerro <> '0000-00-00 00:00:00'");
		return $this->find('all',array('conditions'=>$conditions, 'order'=>'time_cerro'));
	}
}
?>