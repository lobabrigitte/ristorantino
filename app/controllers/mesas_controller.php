<?php
class MesasController extends AppController {

	var $name = 'Mesas';
	var $helpers = array('Html', 'Form');
	var $components = array( 'Printer');
	
		
	
	function index() {
		$this->Mesa->recursive = 0;
		$this->set('mesas', $this->paginate());
	}

	function view($id = null) {
		$this->layout='ajax';
		
		
		if (!$id) {
			$this->Session->setFlash(__('Invalid Mesa.', true));
			$this->redirect(array('action'=>'index'));
		}
		
		$this->Mesa->id = $id;
		$items = $this->Mesa->listado_de_productos();
		
		
		$mesa = $this->Mesa->read(null, $id);	
		$this->set(compact('mesa', 'items'));	
		
		$cont = 0;
		//debug($items);
		//convierto detaleComanda a Producto por el Json, porque en javascript tengpo una coleccion de productos para esta mesa, y no DetalleComandas como lo llamo en php
		foreach ($items as $d):
			$mesa['Producto'][$cont]['cantidad'] = $d[0]['cant'];
			$mesa['Producto'][$cont]['name'] = $d['Producto']['name'];
			$mesa['Producto'][$cont]['id'] 	 = $d['Producto']['id'];
			$cont++;
		endforeach;
		
		//debug($mesa);
		
		$this->set('mesa_json', json_encode($mesa));
		$this->set('mozo_json', json_encode($this->Mesa->Mozo->read(null, $mesa['Mozo']['id'])));
	}

	function abrirMesa() {
		if (!empty($this->data)) {
			// si ese numero de mesa no esta abierta continuo
			$existe = $this->Mesa->numero_de_mesa_existente($this->data['Mesa']['numero']);			
			if(!$existe){
				$this->Mesa->create();
				if ($this->Mesa->save($this->data,$validate = false)) {
					$this->Session->setFlash(__('Se abrió la mesa n° '.$this->data['Mesa']['numero'], true));
					//debug($this->data);
				//	$this->Mesa->Mozo->id = $this->data['Mesa']['mozo_id'];
				//	$this->data = $this->Mesa->Mozo->read();
					
				} else {
					$this->Session->setFlash(__('La mesa no pudo ser abierta. Intente nuevamente.', true));			
				}
			
			}
			else{ // si se encontro una mesa abierta con se numero
				$this->Session->setFlash(__('Ese número de mesa ya existe. No puede crear 2 mesas con el mismo número', true));
				
			}
		}
		
		$this->redirect(array(	'controller'=>'Adicion', 
											'action' => 'adicionar/mozo_id:'.$this->data['Mesa']['mozo_id']));
		
	}
	
	
	
	private function __imprimir($mesa_id){
		$this->Mesa->id = $mesa_id;
		
		$productos = $this->Mesa->dameProductosParaTicket();
		
		$mesa = $this->Mesa->read();
		$mesa_nro = $mesa['Mesa']['numero'];
		$mozo_nro = $mesa['Mozo']['numero'];
		
		$prod = array();
		
		$cont  = 0;
		$total = 0;
		foreach ($productos as $p){
			$prod[$cont]['nombre'] 	 = $p['Producto']['abrev'];
			$prod[$cont]['precio'] 	 =  $p['Producto']['precio'];
			$prod[$cont]['cantidad'] =  $p[0]['cant'];
			$cont++;
			$total += $p['Producto']['precio']*$p[0]['cant'];
		}
		
		if($mesa['Mesa']['menu']>0)
		{
			unset($prod);
			$prod[0]['nombre'] = 'Menu';
			$total_x_menu = $total/$mesa['Mesa']['menu'];
			$total_x_menu = round($total_x_menu*100) / 100;
			$prod[0]['precio'] = $total_x_menu;
			$prod[0]['cantidad'] = $mesa['Mesa']['menu'];
		}
		
		$print_success = true;
		$imprimio_ticket = false;
		$tipoticket = 'Ticket Factura "B"';		
		$porcentaje_descuento = 0;
		if (empty($mesa['Cliente'])):
			$print_success = $this->Printer->imprimirTicket($prod, $mozo_nro, $mesa_nro);
			$imprimio_ticket = true;
			
		elseif($mesa['Cliente']['imprime_ticket'] > 0 || $mesa['Cliente']['imprime_ticket'] == ''):
				switch($mesa['Cliente']['tipofactura']):
					case 'A':
						$print_success = $this->Printer->imprimirTicketFacturaA($prod, $mesa['Cliente'], $mozo_nro, $mesa_nro);
						$tipoticket = 'Ticket Factura "A"';
						$imprimio_ticket = true;
						break;
					case '':
					case 'B':
						$print_success = $this->Printer->imprimirTicket($prod, $mozo_nro, $mesa_nro);
						$tipoticket = 'Ticket Factura "B"';
						$imprimio_ticket = true;
						break;
					default:						
						if(!empty($mesa['Cliente'])){
							if($mesa['Cliente']['descuento_id']){
								$this->Mesa->Cliente->Descuento->id = $mesa['Cliente']['descuento_id'];
								$descuento = $this->Mesa->Cliente->Descuento->read();
								$porcentaje_descuento = $descuento['Descuento']['porcentaje'];
							}
						}
						$print_success = $this->Printer->imprimirTicketConComandera($prod, $mozo_nro, $mesa_nro,$porcentaje_descuento);
						$tipoticket = 'Ticket Descuento';
						$imprimio_ticket = true;
				endswitch;				
		endif;
		
		$vreturn['print_success'] = false;
		$vreturn['imprimio_ticket'] = false;
		$vreturn['tipoticket'] = $tipoticket;
		$vreturn['porcentaje_descuento'] = $porcentaje_descuento;
		$vreturn['Mesa'] = $mesa;
		
		if($print_success):			
			$vreturn['print_success'] = true;
			if($imprimio_ticket):
				$vreturn['imprimio_ticket'] = true;
			endif;
		endif;
		
		return $vreturn;
	}

	
	function cerrarMesa($mesa_id){

		$this->Mesa->id = $mesa_id;
		$vreturn = $this->__imprimir($mesa_id);
//		debug($vreturn);
		
		$print_success   = $vreturn['print_success'];
		$imprimio_ticket = $vreturn['imprimio_ticket'];
		$tipoticket      = $vreturn['tipoticket'];
		$mesa = $vreturn['Mesa'];
		$mesa_nro = $mesa['Mesa']['numero'];
		$mozo_nro = $mesa['Mozo']['numero'];
		
		
		if($print_success):
			$this->Mesa->cerrar_mesa();
	
			if($imprimio_ticket):
				$this->log("Se envió a imprimir el ticket de la mesa $mozo_nro, mozo $mesa_nro. Mesa ID: $mesa_id",LOG_INFO);
				$this->Session->setFlash("Se envió a imprimir el $tipoticket Mesa $mesa_nro");
			else:
				$this->Session->setFlash("Se cerró la Mesa $mesa_nro sin imprimir ticket");
			endif;
		else:
			$this->log("No se pudo imprimir el ticket de la mesa $mozo_nro, mozo $mesa_nro. Mesa ID: $mesa_id",LOG_ERROR);
			$this->Session->setFlash("No se pudo imprimir el $tipoticket Mesa $mesa_nro");
		endif;
		
		$this->redirect("/adicion/adicionar/mozo_id:".$mesa['Mozo']['id']);
	}
	
	
	
	
	function imprimirTicket($mesa_id){
		$vreturn = $this->__imprimir($mesa_id);
		$print_success   = $vreturn['print_success'];
		$imprimio_ticket = $vreturn['imprimio_ticket'];
		$tipoticket      = $vreturn['tipoticket'];
		$mesa = $vreturn['Mesa'];
		$mesa_nro = $mesa['Mesa']['numero'];
		$mozo_nro = $mesa['Mozo']['numero'];
		
		if($print_success):
			$this->Mesa->cerrar_mesa();
			
			if($imprimio_ticket):
				$this->log("Se envió a imprimir el ticket de la mesa $mozo_nro, mozo $mesa_nro. Mesa ID: $mesa_id",LOG_INFO);
				$this->Session->setFlash("Se envió a imprimir el $tipoticket Mesa $mesa_nro");
			else:
				$this->Session->setFlash("Se cerró la Mesa $mesa_nro sin imprimir ticket");
			endif;
		else:
			$this->log("No se pudo imprimir el ticket de la mesa $mozo_nro, mozo $mesa_nro. Mesa ID: $mesa_id",LOG_ERROR);
			$this->Session->setFlash("No se pudo imprimir el $tipoticket Mesa $mesa_nro");
		endif;
		
	}

	
	
	
	
	
	
	
	
	function add() {
		if (!empty($this->data)) {
			$this->Mesa->create();
			if ($this->Mesa->save($this->data)) {
				$this->Session->setFlash(__('La mesa fue guardada', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('La mesa no pudo ser guardada. Intente nuevamente.', true));
			}
		}
		$mozos = $this->Mesa->Mozo->find('list');
		$descuentos = $this->Mesa->Descuento->find('list');
		$this->set(compact('mozos', 'descuentos'));
	}
	
	
	
	/**
	 * Esta accion edita cualquiera de los campos de la mesa, 
	 * pero hay que pasar en la variabla $this->data el ID de 
	 * la mesa si o si para que funcione
	 * 
	 * @return boolean 1 on success 0 fail
	 */
	function ajax_edit(){
		$this->autoRender = false;
		
		if (!empty($this->data)) {
			if(isset($this->data['Mesa']['id'])){
				if(($this->data['Mesa']['id'] != '') || ($this->data['Mesa']['id'] != null) || ($this->data['Mesa']['id'] != 0)){
					$this->Mesa->recursive = -1;
					$this->Mesa->id = $this->data['Mesa']['id'];
					
					/*
					$mesa = $this->Mesa->read();

					while(list($k,$v) = each($this->data['Mesa'])){
						if($k!='modified'){ // para que no me sobreescriba el campo modified
							$mesa['Mesa'][$k] = $v;
						}
					}
					
					if ($this->Mesa->save($mesa)) {
						return 1;
					} else {
						debug($this->Mesa->validationErrors);
						return 0;
					}
					*/
					foreach($this->data['Mesa'] as $field=>$valor):
						if($field == 'id') continue;// el id no lo tengo que actualizar
						if ($this->Mesa->saveField($field, $valor, $validate = true)) {
							return 1;
						} else {
							debug($this->Mesa->validationErrors);
							return 0;
						}
					endforeach;
				}
			}
		}
		return -1;
	}
	

	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid Mesa', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->Mesa->save($this->data)) {
				$this->Session->setFlash(__('La mesa fue editada correctamente', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('La mesa no pudo ser guardada. Intente nuevamente.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Mesa->read(null, $id);
		}
		
		$this->Mesa->id = $id;
		$items = $this->Mesa->listado_de_productos();
		
		
		$mesa = $this->Mesa->read(null, $id);	
		$this->set(compact('mesa', 'items'));	
		
		
		$mozos = $this->Mesa->Mozo->find('list',array('fields'=>array('id','numero')));
		$this->set(compact('mozos'));
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for Mesa', true));
			$this->redirect('/cajero/mesas_abiertas');
		}
		if ($this->Mesa->del($id)) {
			$this->Session->setFlash(__('Mesa deleted', true));
			$this->redirect('/cajero/mesas_abiertas');
		}
	}

}
?>