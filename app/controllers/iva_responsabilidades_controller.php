<?php
class IvaResponsabilidadesController extends AppController {

	var $name = 'IvaResponsabilidades';
	var $helpers = array('Html', 'Form');

	function index() {
		$this->IvaResponsabilidad->recursive = 0;
		$this->set('ivaResponsabilidades', $this->paginate());
	}

	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid IvaResponsabilidad.', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->set('ivaResponsabilidad', $this->IvaResponsabilidad->read(null, $id));
	}

	function add() {
		if (!empty($this->data)) {
			$this->IvaResponsabilidad->create();
			if ($this->IvaResponsabilidad->save($this->data)) {
				$this->Session->setFlash(__('The IvaResponsabilidad has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The IvaResponsabilidad could not be saved. Please, try again.', true));
			}
		}
	}

	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid IvaResponsabilidad', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->IvaResponsabilidad->save($this->data)) {
				$this->Session->setFlash(__('The IvaResponsabilidad has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The IvaResponsabilidad could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->IvaResponsabilidad->read(null, $id);
		}
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for IvaResponsabilidad', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->IvaResponsabilidad->del($id)) {
			$this->Session->setFlash(__('IvaResponsabilidad deleted', true));
			$this->redirect(array('action'=>'index'));
		}
	}

}
?>