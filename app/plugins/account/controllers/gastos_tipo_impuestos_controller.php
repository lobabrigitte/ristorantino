<?php
class GastosTipoImpuestosController extends AppController {

	var $name = 'GastosTipoImpuestos';
	var $helpers = array('Html', 'Form');

	function index() {
		$this->GastosTipoImpuesto->recursive = 0;
		$this->set('gastosTipoImpuestos', $this->paginate());
	}

	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid GastosTipoImpuesto', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('gastosTipoImpuesto', $this->GastosTipoImpuesto->read(null, $id));
	}

	function add() {
		if (!empty($this->data)) {
			$this->GastosTipoImpuesto->create();
			if ($this->GastosTipoImpuesto->save($this->data)) {
				$this->Session->setFlash(__('The GastosTipoImpuesto has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The GastosTipoImpuesto could not be saved. Please, try again.', true));
			}
		}
	}

	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid GastosTipoImpuesto', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->GastosTipoImpuesto->save($this->data)) {
				$this->Session->setFlash(__('The GastosTipoImpuesto has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The GastosTipoImpuesto could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->GastosTipoImpuesto->read(null, $id);
		}
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for GastosTipoImpuesto', true));
			$this->redirect(array('action' => 'index'));
		}
		if ($this->GastosTipoImpuesto->del($id)) {
			$this->Session->setFlash(__('GastosTipoImpuesto deleted', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->Session->setFlash(__('The GastosTipoImpuesto could not be deleted. Please, try again.', true));
		$this->redirect(array('action' => 'index'));
	}

}
?>