/*--------------------------------------------------------------------------------------------------- Risto.Adicion.detalleComanda
 *
 *
 * Clase DetalleComanda
 */


Risto.comanda.detalleComanda = function(jsonData) {

    this.imprimir       = ko.observable( true );
    this.cant           = ko.observable( 0 );
    this.cant_eliminada = ko.observable( 0 );
    this.es_entrada     = ko.observable( 0 );
    this.observacion    = ko.observable( '' );
    this.modificada     = ko.observable( false );
    this.Producto       = ko.observable( new Risto.menu.producto() );
    this.Sabor          = ko.observableArray( [] );
    
    if ( jsonData ) {Risto.menu.pro
        this.Producto =  ko.observable ( new Risto.menu.producto( jsonData.Producto ) );        
        
        
        if ( jsonData.Sabor && jsonData.Sabor.length){
            var s = 0;
            for (s in jsonData.Sabor) {
                if ( jsonData.Sabor[s].Sabor ) {
                    this.Sabor.push( new Risto.menu.sabor( jsonData.Sabor[s].Sabor) );
                } else {
                    this.Sabor.push( new Risto.menu.sabor( jsonData.Sabor[s]) );
                }
                
            }
            delete jsonData.Sabor;
        }

        delete jsonData.Producto;

        jsonData.es_entrada = parseInt( jsonData.es_entrada );
    } else {
        jsonData = {}
    }


    ko.mapping.fromJS( jsonData, {} , this );
    
    // Observables Dependientes
    this.producto_id = ko.dependentObservable( function(){
        if ( this.Producto() ) {
            return this.Producto().id;
        }
        return undefined;
    },this);
    
    
    this.comandera_id = ko.dependentObservable( function(){
        var prod = this.Producto();
        if ( prod ) {
            return prod.comandera_id;
        }
        return undefined;
    }, this);
    
    
    return this;
}


Risto.comanda.detalleComanda.prototype = {
    Producto    : function( ) {},
    Sabor: function( ) {return []}, // array de Sabores

    // cant de este producto seleccionado
    cant        : function( ) {return 0},
    cant_eliminada: function( ) {return 0},
    es_entrada  : function( ) {return 0},
    observacion : function( ) {return ''},
    modificada  : function( ) {return false},
    model       : 'DetalleComanda',
    
    
    /**
     *Es el valor del producto sumandole los sabores
     */
    precio: function(){
        var total = parseFloat( this.Producto().precio );
        for (var s in this.Sabor() ){
            total += parseFloat( this.Sabor()[s].precio );
        }
        return total;
    },
    
    
    /**
     * Devuelve la cantidad real del producto que se debe adicionar a la mesa.
     * O sea, la cantidad agregada menos la quitada
     */
    realCant: function(){
        return parseInt( this.cant() ) - parseInt( this.cant_eliminada() );
    },
    
    
    
    /**
     *  Devuelve el nombre del producto y al final, entre parentesis los 
     *  sabores si es que tiene alguno
     *  Ej: Ensalada (tomate, lechuga, cebolla)
     *  @return String
     */
    nameConSabores: function(){
        var nom = '';
        if ( this.Producto ) {
            if ( typeof this.Producto().name == 'function'){
                nom += this.Producto().name();
            } else {
                nom += this.Producto().name;
            }
            
            if ( this.Sabor().length > 0 ){
                var dsname = '';
                for (var ds in this.Sabor()) {
                    if ( ds > 0 ) {
                        // no es el primero
                        dsname += ', ';
                    }
                    if (typeof this.Sabor()[ds].name == 'function') {
                        dsname += this.Sabor()[ds].name();
                    } else {
                        dsname += this.Sabor()[ds].name;
                    }
                }
                
                if (dsname != '' ){
                    nom = nom+' ('+dsname+')';
                }                
            }
        }
        
        return nom;
    },
    
    
    
    /**
     * Dispara un evento de producto seleccionado
     */
    seleccionar: function(){        
        this.cant( parseInt(this.cant() ) + 1 );
        this.modificada(true);
    },
    
    
    deseleccionar: function(){
        if (this.realCant() > 0 ) {
            this.cant_eliminada( parseInt( this.cant_eliminada() ) + 1 );
            this.modificada(true);
        }
    },
    
    deseleccionarYEnviar: function(){
        
        if (!window.confirm('Seguro que desea eliminar 1 unidad de '+this.Producto().name)){
            return false;
        }
        
        if (this.realCant() > 0 ) {
            this.cant_eliminada( parseInt( this.cant_eliminada() ) + 1 );
            this.modificada(true);
        }
        var dc = this;
        Risto.cakeSaver.send({
           url: urlDomain + '/detalle_comandas/edit/' + dc.id(),
           obj: dc
        }, function() {
        });
    },
    
    /**
     * Modifica el estado de el objeto indicando si es entrada o no
     * modifica this.es_entrada
     */
    toggleEsEntrada: function(){
        if ( this.es_entrada() ) {
            this.es_entrada( 0 );
        } else {
            this.es_entrada( 1 );
        }
        
    },
    
    
    /**
     * Si este detalleComanda debe ser una entrada, devuelve true
     * 
     * @return Boolean
     */
    esEntrada: function(){
        // no se por que pero hay veces en que viene el boolean como si fuera un character asique deboi
        // hacer esta verificacion
        return this.es_entrada();
    },
    
    
    /**
     * Lee el formulario de la DOM y le mete el valor de observacion
     * Bindea el evento cuando abrio el formulario, pero cuando lo submiteo lo desbindea, 
     * para que otro lo pueda utilizar. O sea, el mismo formulario sirve para 
     * muchos detallesComandas
     */
    addObservacion: function(e){
        this.modificada(true);
        var cntx = this;
        $('#obstext').val( this.observacion() );
        $('#form-comanda-producto-observacion').submit( function(){
            cntx.observacion(  $('#obstext').val() );
            $('#form-comanda-producto-observacion').unbind();
            return false;
        });
    },
    
    
    /**
     * Si el DetalleComanda tiene sabores asignados, devuelve true, caso contrario false
     * @return Boolean
     */
    tieneSabores: function(){
        if ( this.Sabor().length > 0) {
            return true;
        }
        return false;
    }
}
