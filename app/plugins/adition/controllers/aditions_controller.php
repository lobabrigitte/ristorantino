<?php 

class AditionsController extends AditionAppController {
    
	var $helpers = array('Html', 'Form');
	var $uses = array('Mozo','Mesa');
	var $current_mozo_id;
	var $current_mesa_id;
	var $current_mesa_numero;
	var $layout = 'adicion';

	
	function beforeFilter()
        {
            parent::beforeFilter();

            //siempre poner el mozo actual, cuando no hay ndie seleccionado mete un CERO
            $this->current_mozo_id =  (isset($this->passedArgs['mozo_id']))?$this->passedArgs['mozo_id']:0;

            $this->current_mesa_id = (isset($this->passedArgs['mesa_id']))?$this->passedArgs['mesa_id']:0;
            $this->current_mesa_numero = (isset($this->passedArgs['mesa_numero']))?$this->passedArgs['mesa_numero']:0;
	}
	
	
	function beforeRender()
        {
            $this->set('current_mozo_id', $this->current_mozo_id);

            $this->set('current_mesa_id', $this->current_mesa_id);
            $this->set('current_mesa_numero', $this->current_mesa_numero);


            // esto es para javascript -----------------------------------
            $this->Mozo->id = $this->current_mozo_id;
            $this->Mozo->recursive = 1;
            $this->set('current_mozo', json_encode($this->Mozo->read()));
            //---------------------------------------------------------------
	} 
	
	function home()
        {
            $this->set('mozos',$this->Mozo->dameActivos());
	}




        function abrirMesa() {
        if (!empty($this->data)) {
            // si ese numero de mesa no esta abierta continuo
            $existe = $this->Mesa->numero_de_mesa_existente($this->data['Mesa']['numero']);
            if(!$existe) {
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
            else { // si se encontro una mesa abierta con se numero
                $this->Session->setFlash(__('Ese número de mesa ya existe. No puede crear 2 mesas con el mismo número', true));

            }
        }

        $meterMesa = '';
        if (!empty($this->Mesa->id)){
            $meterMesa = '/mesa_id:'.$this->Mesa->id;
        }
        $this->redirect(array(
                'action' => 'adicionar/mozo_id:'.$this->data['Mesa']['mozo_id'].$meterMesa)
                );

    }


    
	
	
	/**
	 * 
	 * esta es la accion para que adicione la adicion
	 * la diferencia aca es que se van amostrar todas las mesas abiertas independientemente del mozo
	 * @return unknown_type
	 */
	function adicionar()
        {
            if(!empty($this->passedArgs['mozo_id'])){
                    $this->current_mozo_id = $this->passedArgs['mozo_id'];
            }

            if(!empty($this->data['Mozo']['id'])){
                    $this->current_mozo_id = $this->data['Mozo']['id'];
            }
		
            $this->Mozo->id = $this->current_mozo_id;
            $this->Mozo->hasMany['Mesa']['order'] = "created DESC";
            $this->Mozo->hasMany['Mesa']['conditions'] = "time_cobro = '0000-00-00 00:00:00'";
            $this->data = $this->Mozo->read();
            $this->set('mozos',$this->Mozo->dameActivos());

            $this->Mesa->order = "Mesa.numero ASC";
            //$this->set('mesasabiertas',$this->Mesa->listado_de_abiertas($recursividad = -1));
            $this->set('mesasabiertas',$this->Mesa->listadoAbiertasYSinCobrar($recursividad = -1));
	}
	
	
	function cambiarMozo($mozo_id = 0)
        {
            $this->current_mozo_id = $mozo_id;
            $this->current_mesa_id = isset($this->data['Mesa'][0]['id'])?$this->data['Mesa'][0]['id']:0;
            $this->current_mesa_numero = isset($this->data['Mesa'][0]['numero'])?$this->data['Mesa'][0]['numero']:0;

            $this->redirect('adicionar/mozo_id:'.$this->current_mozo_id.'/mesa_id:'.$this->current_mesa_id.'/mesa_numero:'.$this->current_mesa_numero);
	}
	
}