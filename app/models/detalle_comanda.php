<?php
class DetalleComanda extends AppModel {

	var $name = 'DetalleComanda';
	var $validate = array(
		'producto_id' => array('numeric'),
		'cant' => array('numeric'),
		'mesa_id' => array('numeric')
	);

	
	var $actsAs = array('Containable');
	
	
	//The Associations below have been created with all possible keys, those that are not needed can be removed
	var $belongsTo = array(
			'Producto' => array('className' => 'Producto',
								'foreignKey' => 'producto_id',
								'conditions' => '',
								'fields' => '',
								'order' => ''
			),
			'Comanda' => array('className' => 'Comanda',
								'foreignKey' => 'comanda_id',
								'conditions' => '',
								'fields' => '',
								'order' => ''			
			)
	);
	
	var $hasMany = array(
			'DetalleSabor' => array('className' => 'DetalleSabor',
								'foreignKey' => 'detalle_comanda_id',
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
        
       function beforeSave($options = array()) {
           $this->data[$this->name]['modified'] = date('Y-m-d H:i:s', strtotime('now'));
           
           return parent::beforeSave($options);
       }
	
	
	function guardar($data){		
		$this->save($data);
		unset($this->id);
		return $this;
	}

}
?>