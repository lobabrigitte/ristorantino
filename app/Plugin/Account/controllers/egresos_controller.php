<?php

class EgresosController extends AccountAppController
{

    var $name = 'Egresos';
    var $helpers = array('Html', 'Form', 'Number', 'Jqm');

    function index()
    {
        $this->Egreso->recursive = 1;
        $this->set('egresos', $this->paginate());
    }

    function history()
    {
        $this->pageTitle = "Pagos Realizados";
        $this->Egreso->recursive = 1;

        $conditions = array();
        $url = $this->params['url'];
        unset($url['ext']);
        unset($url['url']);

        
        if (!empty($url['fecha_desde'])) {
            $conditions['DATE(Egreso.fecha) >='] = $url['fecha_desde'];
            $this->request->data['Egreso']['fecha_desde'] = $url['fecha_desde'];
        }

        if (!empty($url['fecha_hasta'])) {
            $conditions['DATE(Egreso.fecha) <='] = $url['fecha_hasta'];
            $this->request->data['Egreso']['fecha_hasta'] = $url['fecha_hasta'];
        }        

        if (empty($url)) {
            $conditions['DATE(Egreso.fecha) >='] = $this->request->data['Egreso']['fecha_desde'] = date('Y-m-d', strtotime('-2 day'));
            $conditions['DATE(Egreso.fecha) <='] = $this->request->data['Egreso']['fecha_hasta'] = date('Y-m-d', strtotime('now'));
        }
        
        $this->paginate = array(
            'contain' => array(
                'TipoDePago',
                'Gasto' => array(
                    'Proveedor',
                    'TipoFactura',
                ),
            ),
            'conditions' => $conditions,
        );

        $this->set('proveedores', $this->Egreso->Gasto->Proveedor->find('list'));
        $this->set('egresos', $this->paginate());
    }

    function edit($egreso_id)
    {
        if (!empty($this->request->data)) {
            if (!$this->Egreso->save($this->request->data )) {
                $this->Session->setFlash('El pago no pudo ser guardado');
            } else {
                $this->Session->setFlash('El Pago fue guardado');
            }
        }
        $this->request->data = $this->Egreso->read(null, $egreso_id);
        $this->set('tipoDePagos', $this->Egreso->TipoDePago->find('list'));
        $this->render('add');
    }

    function add($gasto_id = null)
    {
        $gastos = array();
        if (!empty($gasto_id)) {
            $gastos[] = $gasto_id;
        }

        $suma_gastos = 0;
        $cant_gastos = 0;
        $gastosAll = array();

        if (!empty($this->request->data['Gasto'])) {
            
            // re armo el array de gastos limpiando los que no fueron seleccionados para pagar
            foreach ($this->request->data['Gasto'] as $g) {
                if ($g['gasto_seleccionado']) {
                    $gastos[] = $g['gasto_seleccionado'];
                }
            }
            $cant_gastos = count($gastos);
        }

        if (!empty($gastos)) {
            // calculo la suma total del los gastos $$ seleccionados
            $gastosAll = $this->Egreso->Gasto->find('all', array(
                'conditions' => array(
                    'Gasto.id' => $gastos,
                ),
                'recursive' => 1,
                    ));
            foreach ($gastosAll as $g) {
                $suma_gastos += $g['Gasto']['importe_total'] - $g['Gasto']['importe_pagado'];
            }

            $this->set('gastos', $this->Egreso->Gasto->find('list', array(
                        'conditions' => array(
                            'Gasto.id' => $gastos,
                        )
                    )));
        } else {
            $this->flash('Error, se debe seleccionar algun gasto', array('index'));
        }

        if (count($gastos) > 1) {
            $this->pageTitle = 'Pagando ' . count($gastos) . ' Gastos';
        } else {
            $this->pageTitle = 'Pagando ' . count($gastos) . ' Gasto';
        }
        
        $this->request->data['Egreso']['fecha'] = $date = date('Y-m-d H:i', strtotime('now'));
        $this->request->data['Egreso']['total'] = $suma_gastos;
        $this->set('tipoDePagos', $this->Egreso->TipoDePago->find('list'));
        $this->request->data['Gasto'] = $gastos;
        $this->set('cant_gastos', $cant_gastos);
        $this->set('gastosAll', $gastosAll);
    }

    function save()
    {
        if (!empty($this->request->data)) {
            $this->Egreso->create();
            if ($this->Egreso->save($this->request->data)) {
                $this->Session->setFlash('El Pago fue guardado correctamente');
                $this->redirect(array('controller' => 'gastos', 'action' => 'index'));
            } else {
                $this->Session->setFlash('Error al guardar el pago');
            }
        }
    }

    function view($id)
    {
        if (empty($id)) {
            $this->flash('No se pasó un ID de pago correcto', array('controller' => 'gastos', 'action' => 'index'));
        }
        $this->Egreso->id = $id;
        $this->Egreso->contain(array(
            'TipoDePago',
            'Gasto.Proveedor'
        ));
        $this->set('egreso', $this->Egreso->read());
    }
    
    
    function delete($id = null)
    {
        if (!$id) {
            $this->Session->setFlash(__('Invalid id for Egreso', true));
            $this->redirect(array('action' => 'history'));
        }
        if ($this->Egreso->del($id)) {
            $this->Session->setFlash(__('Egreso deleted', true));
            if ( !$this->request->is('ajax') ) {
                $this->redirect(array('action' => 'history'));
            }
        }
        $this->Session->setFlash(__('The Egreso could not be deleted. Please, try again.', true));
        $this->redirect(array('action' => 'history'));
    }

}

?>