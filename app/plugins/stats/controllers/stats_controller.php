<?php

class StatsController extends StatsAppController {

    var $helpers = array('Html', 'Form', 'Ajax', 'Number');
    var $components = array('Auth', 'RequestHandler');
    var $uses = array('Mesa', 'Account.Egreso', 'Account.Gasto','Cash.Zeta');

    function year() {
        //SELECT SUM(total),YEAR(mesas.created) FROM `mesas` GROUP BY YEAR(mesas.created) ORDER BY YEAR(mesas.created) asc
        /*
          $group = array(
          'YEAR(mesas.created)',
          );
         */
        $this->Mesa->recursive = -1;

        $mesasporaño = $this->Mesa->find('all', array(
                    'fields' => array('SUM(total) AS total', 'YEAR(Mesa.created) AS anio'),
                    'group' => 'YEAR(Mesa.created)',
                    'order' => 'YEAR(Mesa.created) asc'
                ));


        $this->set('mesas', $mesasporaño);
    }

    /**
     *
     * @param type $groupByRange string posibilidades: day - month -  year. Indica como seran agrupados los datos
     * 
     */
    function mesas_total($groupByRange = 'day') {
        $egresos = array();
        $horarioCorte = Configure::read('Horario.corte_del_dia');
        $desdeHasta = '1 = 1';
        $limit = '';
        $lineas = array($desdeHasta);
        
        // por default buscar 1 semana atras
        if (empty($this->data['Linea'])){
            $this->data['Linea'][0]['hasta'] = date('d/m/Y',strtotime('now'));
            $this->data['Linea'][0]['desde'] = date('d/m/Y',strtotime('-1 month'));
        }
        
        $mesasLineas = array();
        if ( !empty($this->data['Linea'] )) {
            $lineas = array();
            foreach ($this->data['Linea'] as $linea) {
                if(!empty($linea['desde']) && !empty($linea['hasta']))
                    {
                    
                    list($dia, $mes, $anio) = explode("/", $linea['desde']);
                    $desde = $anio."-".$mes."-".$dia;

                    list($dia, $mes, $anio) = explode("/", $linea['hasta']);
                    $hasta = $anio."-".$mes."-".$dia;
                    
                    
                    // primero buscar los egresos del intervalo seleccionado
                    $egresos = $this->Egreso->pagosDelDia($desde, $hasta);
                    $egresos_total = 0;
                    foreach ($egresos as $e) {
                        $egresos_total += $e['Egreso']['importe'];
                    }
                    $this->set('egresos_total', $egresos_total);
                    $egresos = array($egresos);
                    
                    // buscar gastos
                    $gasOps = array(
                        'fields' => array(
                            'sum(Gasto.importe_neto) as neto',
                            'sum(Gasto.importe_total) as total',
                        ),
                        'conditions' => array(
                            'Gasto.created BETWEEN ? AND ?' => array($desde, $hasta)
                        ),
                        'group' => array(
                            'DATE(Gasto.created)'
                        )
                    );
                    $gastosSumas = $this->Gasto->find('first', $gasOps);
                    $gasOps['group'] = array(
                            'DATE(Gasto.created)'
                    );
                    $gastos = $this->Gasto->find('all', $gasOps);
                    $this->set('gastos', $gastos);
                    $this->set('gastos_neto', $gastosSumas[0]['neto']);
                    $this->set('gastos_total', $gastosSumas[0]['total']);
                    
                    
                    $zetas = $this->Zeta->delDia($desde, $hasta);
                    $zeta_iva_total = $zeta_neto_total = 0;
                    foreach ($zetas as $z) {
                        $zeta_iva_total += $z[0]['iva'];
                        $zeta_neto_total += $z[0]['neto'];
                    }
                    $this->set('zetas', $zetas);
                    $this->set('zeta_iva_total', $zeta_iva_total);
                    $this->set('zeta_neto_total', $zeta_neto_total);
                    
                    // luego, lo mas largo: buscar las mesas
                    $fields = array();
                    $group = array();
                    
                    switch ( strtolower( $groupByRange) ){
                        case 'day':
                            break;
                        case 'month':
//                            $fields[] = 'GET_FORMAT( DATE(Mesa.created),"%Y-%m") as "fecha"';
                            $fields[] = 'YEAR(Mesa.created) as "anio"';
                            $fields[] = 'MONTH(Mesa.created) as "mes"';
                            $fields[] = 'CONCAT(YEAR(Mesa.created),"-",MONTH(Mesa.created)) as "fecha"';
                            
                            $group = array(
                                 'YEAR(fecha)','MONTH(fecha)',
                            );
                            break;
                        case 'year':
                            $fields[] = 'YEAR(Mesa.created) as "fecha"';
                            $group = array(
                                 'YEAR(fecha)',
                            );
                            break;
                    }
                    
                    
                    $mesas = $this->Mesa->totalesDeMesasEntre($desde, $hasta, array(
                        'fields' => $fields,
                        'group' => $group,
                    ));
                    
                    
                    $resumenCuadro = array(
                        'total' => 0,
                        'cubiertos' => 0,
                        'desde' => $desde,
                        'hasta' => $hasta,
                    );
                   
                    foreach ($mesas as &$m) {
                        $m['Mesa'] = $m[0];
                         
                         $resumenCuadro['cubiertos'] += $m['Mesa']['cant_cubiertos'];
                         $resumenCuadro['total'] += $m['Mesa']['total'];
                            
                        unset($m[0]);
                    }
                    $mesasLineas[] = $mesas;
                }
            }
        }
        
        $this->set('egresos', $egresos);
        $this->set('mesas', $mesasLineas);
        $this->set('resumenCuadro', $resumenCuadro);
    }

    
    
    function mozos_total() {        
        // por default buscar hoy
        if ( empty($this->data['Linea']) ) {
            $this->data['Linea'][0]['hasta'] = date('d/m/Y',strtotime('now'));
            $this->data['Linea'][0]['desde'] = date('d/m/Y',strtotime('-1 week'));
        }
        
        $mesasLineas = array();
        if ( !empty($this->data['Linea'] )) {
            $lineas = array();
            foreach ($this->data['Linea'] as $linea) {
                if(!empty($linea['desde']) && !empty($linea['hasta']))
                    {
                    list($dia, $mes, $anio) = explode("/", $linea['desde']);
                    $desde = $anio."-".$mes."-".$dia;

                    list($dia, $mes, $anio) = explode("/", $linea['hasta']);
                    $hasta = $anio."-".$mes."-".$dia;
                    


                    $mesas = $this->Mesa->totalesDeMesasEntre($desde, $hasta, array(
                        'fields' => array(
                             'Mozo.*'
                        ),
                        'group' => array(
                            'Mozo.id',
                            'Mozo.numero',
                        ),
                        'order' => array(
                            'fecha DESC',
                            'Mozo.numero ASC',
                        ),
                        'contain' => array(
                            'Mozo'
                        )
                    ));
                                   
                    $fechas = array();
                    foreach ($mesas as &$m) {                       
                        $fechas[$m[0]['fecha']][$m['Mozo']['id']] = $m;
                    }
                }
            }
        }
        $this->set('fechas', $fechas);
        $this->set('mozos', $mesas);
    }
    
    function mesas_factura() {
        //SELECT * FROM `clientes` WHERE DATE(created) >=(select date_sub(curdate(),interval 1 year)as Date)and DATE(created) <= NOW();
        $desde = 'select date_sub(curdate(),interval 1 day)as Date;';
        //SELECT * FROM `clientes` WHERE DATE(created) >=(select date_sub(curdate(),interval 1 year)as Date)
        $select = 'SELECT * FROM `clientes` WHERE DATE(created) >=';

        $test = $this->Mesa->query($desde);

        if(!empty($this->passedArgs['p']) && $this->passedArgs['p']!='dia'){
            
               debug($this->passedArgs['p']);
               
             if($this->passedArgs['p']=='anio'){
                 //query de año
                 $desde = '(select date_sub(curdate(),interval 1 year)as Date)';
                 $query = 'SELECT * FROM `mesas` WHERE DATE(created) >='.$desde.'and DATE(created) <= NOW();';
                 $mesas = $this->Mesa->query($query);
             }else{
                    if($this->passedArgs['p']=='mes'){
                        //query de mes
                        $desde = '(select date_sub(curdate(),interval 1 month)as Date)';
                        $query = 'SELECT * FROM `mesas` WHERE DATE(created) >='.$desde.'and DATE(created) <= NOW();';                       
                        $mesas = $this->Mesa->query($query);                      
                       }else {
                               if($this->passedArgs['p']=='semana'){
                                   //query de semana
                                    $desde = '(select date_sub(curdate(),interval 1 week)as Date)';
                                    $query = 'SELECT * FROM `mesas` WHERE DATE(created) >='.$desde.'and DATE(created) <= NOW();';                       
                                    $mesas = $this->Mesa->query($query);
                               }
                       }
                } 
                
         }else {
              //query default del dia
                $query = 'SELECT * FROM `clientes` WHERE DATE(created) = NOW();';                       
                $mesas = $this->Mesa->query($query);
            //SELECT * FROM `clientes` WHERE DATE(created) ="2010-02-01";
         }
         debug($mesas);
        $this->set('mesas', $mesas);
        // la consulta debe hacerse a mesas y luego relacionarla con "pagos" y con  "tipo de pagos". Sumar y enviar solo el total
        // Me guardo en un array todo los tipos de pago y ya tengo las mesas, hacer un foreach por cada mesa busco el id en la tabla pagos y voy sumando en el array de tipo de pagos.
        
    }


    function dia() {



        $this->Mesa->recursive = -1;

        $mesaspordia = $this->Mesa->find('all', array(
                    'fields' => array('SUM(total) AS total', 'DAY(Mesa.created) AS dia'),
                    'group' => 'DAY(Mesa.created)',
                    'order' => 'DAY(Mesa.created) asc'
                ));


        $this->set('mesas', $mesaspordia);
    }

    function index() {
        
    }

    function mozos_mesas() {
        
    }

    function mozos_pagos() {
        
    }

    function mozos_productos() {
        
    }

    function mesas_ranking() {
        
    }

    /* function mesastotal() {

      } */



    function mesas_pago() {
        
    }

    function mesas_clientes() {
        
    }

    function cont_ingresos() {
        
    }

    function cont_caja() {
        
    }

    function prod_ranking() {
        
    }

    function prod_ingresos() {
        
    }

    function prod_pedidos() {
        
    }

    function prod_listado() {
        
    }

    function real_mesasabiertas() {
        
    }

    function real_comandas() {
        
    }

    function real_comensales() {
        
    }

    function real_mesasmozos() {
        
    }

}

?>