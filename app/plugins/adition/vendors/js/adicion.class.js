
//Parametros de configuracion
Risto.Adition.cubiertosObligatorios   = true;


/**
 * extencion del objeto array
 *
 *
 * */
Risto.Adition.adicionar = {

    yaMapeado: false,
    
    // Mozo Actualmente Activo
    currentMozo: ko.observable(new Mozo()),
    
    // Mesa Actualmente activa
    currentMesa: ko.observable(new Mesa()),
    
    // listado de mozos
    mozos: ko.observableArray( [] ),
     // orden del listado de mozos: Se puede poner cualquier valor que venga como atributo (campos de la bbdd de la tabla mozos)
    mozosOrder: ko.observable('mozo_id'),
    
    mesas: ko.observableArray( [] ),
    
    nuevaComandaParaCurrentMesa: function(){
        this.currentMesa().nuevaComanda();
    },
    
    menu: function(){
        return Risto.Adition.koAdicionModel.menu.apply(Risto.Adition.koAdicionModel, arguments);
    },
    

    /**
     * Constructor
     */
    initialize: function() {
        this.getMesasAbiertas();
    },

    /**
     *Crea un elemento DOM con el TAG pasado como parametro
     *e inserta el objeto mesa a éste.
     *
     * Ej: mesasEnTag('A')
     * me devuelve un link con un atributo "mesa"
     *
     */
    mesasEnTag: function(templateString) {
        var tmpStr = templateString || "<button>${number}</button>";
        var mesasTags = [];
        var template = $.template( null, tmpStr );
        var tag;
        for(var m in this.mesas) {
            tag = $.tmpl(template, this.mesas[m]);
            tag[0].mesa = this.mesas[m];
            $(tag[0]).click( function() {
                this.mesa.seleccionar();
            });
            mesasTags.push(tag[0]);
        }
        return mesasTags;
    },
    
    mozosEnTag: function(tagName) {
        var mozosTags = [];
        for(var m in this.mozos) {
            var tag = document.createElement(tagName);
            tag.mozo = this.mozos[m];
            mozosTags.push(tag);
        }
        return mozosTags;
    },


    mesasButonizadas: function() {
        var btns = [];
        for(var m in this.mesas) {
            btns.push(this.mesas[m].getButton());
        }
        return btns;
    },

    mozosButonizados: function() {
        var btns = [];
        for(var m in this.mozos) {
            btns.push(this.mozos[m].getButton());
        }
        return btns;
    },

    nombrificar: function(list, text) {
        for (var i in list) {
            list[i].innerHTML = list[i].obj[text];
        }
        return list;
    },

    /**
     * Me dice si tiene una mesa setteada
     * @return boolean
     */
    tieneMesaSeleccionada: function(){
        var retornar = false;
        if(this.currentMesa){
            if(this.currentMesa.estaAbierta())
                retornar = true;
            else
                retornar = false;
        }
        else{
            retornar = false;
        }
        return retornar;
    },
    
    
    /**
     * Busca una mesa por su ID en el listado de mesas
     * devuelve la mesa en caso de encontrarla.
     * caso contrario devuelve false
     * @param id Integer id de la mesa a buscar
     * @return Mesa en caso de encontrarla, false caso contrario
     */
    findMesaById: function(id){
        for (var m in this.mesas()) {
            if ( this.mesas()[m].id() == id ) {
                return this.mesas()[m];
            }            
        }
        return false;
    },
    
    
    /**
     * Busca un mozo por su ID en el listado de mozos
     * devuelve al objeto Mozo en caso de encontrarlo.
     * caso contrario devuelve false
     * @param id Integer id del Mozo a buscar
     * @return Mozo en caso de encontrarlo, false caso contrario
     */
    findMozoById: function(id){
        for (var m in this.mozos()) {
            if ( this.mozos()[m].id() == id ) {
                return this.mozos()[m];
            }            
        }
        return false;
    },
    	
		
    borrarCurrentMesa: function(){
        delete this.currentMesa;
        this.currentMesa = null;
    },

    /**
     * Setter de la currentMesa
     * @param mesa Mesa or Number . Le puedo pasar una Mesa o un Id de la mesa, da lo mismo.
     * @return Mesa o false en caso de que el ID pasado no exista
     */
    setCurrentMesa: function(mesa) {
        if ( typeof mesa == 'number') { // en caso que le paso un ID en lugar del objeto mesa
            mesa = this.findMesaById(mesa);           
        }
        this.currentMesa( mesa );
        if (mesa.mozo) {
            this.setCurrentMozo(mesa.mozo());
        }
        return this.currentMesa();
    },
		


    /**
     * // envia la mesa para ser cerrada
     * @param Boolean cubiertosObligatorios
     **/
    cerrarCurrentMesa: function(cubiertosObligatorios ){
        var cubiertosObligatorios = cubiertosObligatorios || 'undefined';

        if (this.tieneMesaSeleccionada()) {
            // si aun no se settearon la cantidad de comensales DEBE HACERLO !!
            if (cubiertosObligatorios && (this.currentMesa.getCantComensales() == 0) && (this.currentMozo.numero != 99)) {
                    showComensalesWindow();
            } else {
                if(this.tieneMesaSeleccionada()){
                    if(this.currentMesa.productos){
                        var okCerrar = window.confirm("Se va a cerrar la mesa Nº "+this.currentMesa.numero);

                        if ( okCerrar ) {
                            this.currentMesa.cerrar()
                        }
                        return okCerrar;
                    }
                    else{
                        mensajero.error("No se puede cerrar una mesa que no tiene productos cargados.");
                        return -1;
                    }
                }
            } 
        } else {
            mensajero.error("Debe seleccionar una mesa para cerrar.");
            return -2;
        }	
    },


    ticketView: function(elementToUpdate){
        var elem = elementToUpdate || document.createElement('div');
        var url = window.urlDomain+'mesas/ticket_view' + '/'+this.currentMesa.id ;
        return $(elem).load(url);
    },


    cambiarNumeroMesa: function(){
        var numero = prompt('Nuevo Número de Mesa',this.currentMesa.numero);
        var ops = {
                'data[Mesa][numero]': numero
            };
        this.currentMesa.editar(ops);
    },


    /**
     *
     * Dado un Json arma el listado de mozos
     * @param json mozos
     */
    setMozos: function(mozos){
        var mozoaux;
        for (var m in mozos){
            if (!$.isEmptyObject(mozos[m])) {
                
                mozoaux = new Mozo();
                mozoaux.cloneFromJson(mozos[m].Mozo);
                
                mozoaux.User = mozos[m].User;
                this.mozos.push(mozoaux);
            }
        }
    },


    setCurrentMozo: function(mozo){
        this.currentMozo( mozo );
        var event = $.Event('adicionCambioMozo');
        event.mozo = mozo;
        $(document).trigger(event);
    },
    


    getMesasAbiertas: function(){
        var ajaxResp = $.get(
                urlDomain + 'mozos/mesas_abiertas.json',
                this.__actualizarMozosConMesasAbiertas,
                'json'
            );
        ajaxResp.error = function(){alert("fallo conexión")}
    },
    

    /**
     * 
     * Recibiendo un json con el listado de mozos, que a su vez 
     * cada uno tiene el listado de mesas abiertas de c/u, actualiza 
     * el listado de mesas de la adicion
     * 
     */
    __actualizarMozosConMesasAbiertas: function( data ) {
        var adn = Risto.Adition.adicionar;
        if ( !adn.yaMapeado ) {
            // si aun no fue mappeado
            var mapOps = {
                'mozos': {
                    create: function(ops) {
                        return new Mozo(ops.data);
                    },
                    key: function(data) {
                        return ko.utils.unwrapObservable(data.id);
                    }
                }
            }
            adn.yaMapeado = true;
            ko.mapping.fromJS(data, mapOps, adn );
        } else {
            return ko.mapping.updateFromJS(adn, data);
        }
        $(document).trigger('adicionMesasActualizadas');
    },
    
    
    ordenarMesasPorNumero: function(){
        return this.mesas().sort(function(left, right) {
            return left.numero() == right.numero() ? 0 : (parseInt(left.numero()) < parseInt(right.numero()) ? -1 : 1) 
        })
    },
    
    
    crearNuevaMesa: function(mesaNumero, mozoId){
        var mozo = this.findMozoById(mozoId);
        var mesa = new Mesa(mozo)
        mesa.numero( mesaNumero );
        
        $cakeSaver.send({url:urlDomain+'mesas/abrirMesa.json', obj: mesa, model: 'Mesa'})
        return mesa;        
    }
};





/*____________________________________ OBSERVABLES DEPENDIENTES ___________________________*/

/******---      ADICION         -----******/


Risto.Adition.adicionar.todasLasMesas = ko.dependentObservable( function(){
    var mesasList = [];
    if ( this.mozos ) {
        for ( var m in this.mozos() ) {
            mesasList = mesasList.concat( this.mozos()[m].mesas() );
        }
    }
    return mesasList;
}, Risto.Adition.adicionar);

// listado de mesas, depende de las mesas de cada mozo, y el orden que le haya indicado
Risto.Adition.adicionar.mesas = ko.dependentObservable( function(){
                var mesasList = [];
                var order = this.mozosOrder();

                mesasList = this.todasLasMesas();
                
                if ( order ) {
                    mesasList.sort(function(left, right) {
                        return left[order]() == right[order]() ? 0 : (parseInt(left[order]()) < parseInt(right[order]()) ? -1 : 1) 
                    })
                }
                return mesasList;

}, Risto.Adition.adicionar);
     
     
     
/**
 * Variable de estado generada cuando se esta armando una comanda
 * son los productos seleccionados
 */
Risto.Adition.adicionar.productosSeleccionados = ko.dependentObservable( function(){
    return this.currentMesa().currentComanda().comanda.DetalleComanda();    
}, Risto.Adition.adicionar);     


/**
 * Variable de estado generada cuando se esta armando una comanda
 * son los sabores de un producto seleccionado
 */
Risto.Adition.adicionar.currentSabores = ko.dependentObservable( function(){
    return this.currentMesa().currentComanda().currentSabores();    
}, Risto.Adition.adicionar);   
