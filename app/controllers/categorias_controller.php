<?php
class CategoriasController extends AppController {

	var $name = 'Categorias';
	var $helpers = array('Html', 'Form','Cache');
	
	
	
	//var $layout;

	function index() {
		$this->Categoria->recursive = 0;	
			
		$this->set('categorias',$this->Categoria->generatetreelist(null, null, null, '&nbsp;&nbsp;&nbsp;'));	
			
	}

	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid Categoria.', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->set('categoria', $this->Categoria->read(null, $id));
	}

	function add() {
		Cache::delete('categorias');
		if (!empty($this->data)) {
			$this->Categoria->create();
			if ($this->Categoria->save($this->data)) {
				$this->Session->setFlash(__('The Categoria has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Categoria could not be saved. Please, try again.', true));
			}
		}
		
		$categorias = $this->Categoria->generatetreelist(null, null, null, '-- ');
		$this->set(compact('categorias'));
	}

	function edit($id = null) {
		Cache::delete('categorias');
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid Categoria', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->Categoria->save($this->data)) {
				$this->Session->setFlash(__('The Categoria has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Categoria could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Categoria->read(null, $id);
		}
		$this->set('categorias', $this->Categoria->generatetreelist(null, null, null, '-- '));
	}

	function delete($id = null) {
		Cache::delete('categorias');
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for Categoria', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Categoria->del($id)) {
			$this->Session->setFlash(__('Categoria deleted', true));
			$this->redirect(array('action'=>'index'));
		}
	}
	
	
	function listar(){
		//$this->cacheAction = true;
		Configure::write('debug', 0);
		$this->layout = 'ajax';
		
		
		//if (($varjson = Cache::read('categorias')) === false) {
			$categorias = $this->Categoria->array_listado();
			$varjson =  json_encode($categorias);
		//	Cache::write('categorias', $varjson);
		//}

		$this->set(compact('varjson'));
	}

}
?>