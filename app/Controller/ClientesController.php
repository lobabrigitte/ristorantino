<?php

class ClientesController extends AppController
{

    var $name = 'Clientes';
    
    public $components = array('Search.Prg');
    
    public $paginate = array();

    function index()
    {
        $this->Prg->commonProcess();
        $this->paginate['conditions'] = $this->Cliente->parseCriteria($this->passedArgs);
        $this->request->data['Cliente'] = $this->passedArgs;
        $this->set('ivaResponsabilidades', $this->Cliente->IvaResponsabilidad->find('list'));
        $this->set('descuentos', $this->Cliente->Descuento->find('list'));
        $this->set('clientes', $this->paginate());
    }

    function view($id = null)
    {
        if (!$id) {
            $this->Session->setFlash(__('Invalid Cliente.', true));
            $this->redirect(array('action' => 'index'));
        }
        $this->Cliente->contain(array(
            'Descuento',
        ));
        $this->set('cliente', $this->Cliente->read(null, $id));
    }

    public function add()
    {
        if ($this->request->is('post')) {
            $this->Cliente->create();
            if ($this->Cliente->save($this->request->data)) {
                $this->Session->setFlash(__('The cliente has been saved'));
                $this->redirect(array('action' => 'index'));
            } else {
                $this->Session->setFlash(__('The cliente could not be saved. Please, try again.'));
            }
        }
        $descuentos = $this->Cliente->Descuento->find('list');
        $tipo_documentos = $this->Cliente->TipoDocumento->find('list');
        $iva_responsabilidades = $this->Cliente->IvaResponsabilidad->find('list');
        $this->set(compact('descuentos', 'iva_responsabilidades', 'tipo_documentos'));
    }

    function add_factura_a()
    {
        if (!empty($this->request->data)) {
            $this->Cliente->create();
            if ($this->Cliente->save($this->request->data)) {
                $this->Session->setFlash(__('Se agregó un nuevo cliente', true));
                if ($this->RequestHandler->is('jqm')) {
                    $this->render('result');
                }
            } else {
                $this->Session->setFlash(__('El Cliente no pudo ser gardado, intente nuevamente.', true));
            }
            $this->set('cliente_id', $this->Cliente->id);
        }

        $tipo_documentos = $this->Cliente->TipoDocumento->find('list');
        $iva_responsabilidades = $this->Cliente->IvaResponsabilidad->find('list');
        $this->set(compact('iva_responsabilidades', 'tipo_documentos'));
    }

    function edit($id = null)
    {
        if (!$id && empty($this->request->data)) {
            $this->Session->setFlash(__('Cliente incorrecto', true));
            $this->redirect(array('action' => 'index'));
        }
        if (!empty($this->request->data)) {
            if ($this->Cliente->saveAll($this->request->data)) {
                $this->Session->setFlash(__('El Cliente fue guardado', true));
                $this->redirect(array('action' => 'index'));
            } else {
                $this->Session->setFlash(__('El Cliente no pudo ser guardado.intente nuevamente.', true));
            }
        }
        if (empty($this->request->data)) {
            $this->request->data = $this->Cliente->read(null, $id);
        }
        $descuentos = $this->Cliente->Descuento->find('list');
        $tipo_documentos = $this->Cliente->TipoDocumento->find('list');
        $iva_responsabilidades = $this->Cliente->IvaResponsabilidad->find('list');

        $this->set(compact('descuentos', 'iva_responsabilidades', 'tipo_documentos'));
    }

    /**
     * delete method
     *
     * @param string $id
     * @return void
     */
    public function delete($id = null)
    {
        if (!$this->request->is('post')) {
            throw new MethodNotAllowedException();
        }
        $this->Cliente->id = $id;
        if (!$this->Cliente->exists()) {
            throw new NotFoundException(__('Invalid cliente'));
        }
        if ($this->Cliente->delete()) {
            $this->Session->setFlash(__('Cliente deleted'));
            $this->redirect(array('action' => 'index'));
        }
        $this->Session->setFlash(__('Cliente was not deleted'));
        $this->redirect(array('action' => 'index'));
    }

    function all_clientes($tipo = 'todos')
    {
        $this->pageTitle = 'Listado de Clientes';
        $tipo = '';
        $clientes = array();
        $this->Cliente->recursive = 0;
        switch ($tipo) {
            case 'a':
            case 'A':
                $clientes = $this->Cliente->todosLosTipoA();
                $tipo = 'a';
                break;
            case 'd':
            case 'descuento':
                if ($this->Session->read('Auth.User.role') == 'mozo') {
                    $clientes = $this->Cliente->todosLosDeDescuentos('all', $filtrarHastaTopeMaxDeDescuento = true);
                } else {
                    $clientes = $this->Cliente->todosLosDeDescuentos('all', false);
                }
                $tipo = 'd';
                break;
            default:
                $tipo = 'todos';

                if ($this->Session->read('Auth.User.role') == 'mozo') {
                    $clientes = $this->Cliente->todos('all', $filtrarHastaTopeMaxDeDescuento = true);
                } else {
                    $clientes = $this->Cliente->todos('all', false);
                }

                break;
        }
        $this->set('tipo', $tipo);
        $this->set('clientes', $clientes);
    }

    /**
     * me lista todos los clientes que sean del tipo Factura "A"
     *
     */
    function ajax_clientes_factura_a()
    {
        $this->set('clientes', $this->Cliente->todosLosTipoA());
    }

    /**
     * me lista todos los clientes con descuento
     *
     */
    function ajax_clientes_con_descuento()
    {
        $this->set('clientes', $this->Cliente->todosLosDeDescuentos());
    }

}

?>
