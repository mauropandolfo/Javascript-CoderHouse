$(document).ready(function(){
    //Constructor de objetos.
    class Producto{
        constructor(pNombre, pPrecio, pDestino){
            this.nombre = pNombre;
            this.precio = pPrecio;
            this.destino = pDestino;
        }
    }
    //Funcion de validacion de formularios.
    function validar(){
        let formularioNombre = document.getElementById("nombreProducto").value;
        let formularioPrecio = document.getElementById("precioProducto").value;
        if(formularioNombre == '' || isNaN(formularioPrecio) || formularioPrecio == ''){
            alert("Los Datos ingresados no son validos!");
            datosOk = false;
            document.getElementById("nombreProducto").value = '';
            document.getElementById("precioProducto").value = '';
        }
        else{
            datosOk = true;
        }
    };
    //Funcion de carga de productos.
    function cargarProducto(e){
        e.preventDefault();
        validar();
        if(datosOk){
            let confirma = confirm("Desea Agregar este producto?");
            if(confirma){
                let pNombre = document.getElementById("nombreProducto").value;
                let pPrecio = parseFloat(document.getElementById("precioProducto").value);
                let pDestino = document.getElementById("destinoProducto").value;
                let productoActual = new Producto(pNombre, pPrecio, pDestino); 
                listaDeProductos.push(productoActual);
                mostrarTodos(); 
                $("#formulario").toggle(100);
                $(".contVacio").css({
                    "display":"none"
                });
                document.getElementById("nombreProducto").value = '';
                document.getElementById("precioProducto").value = '';
            }
            else{
                alert("No se agregara ningun producto")
            }
        }
    };
    //Funcion de renderizado.
    function mostrarTodos(){
        contenedor.innerHTML = '';
        for(let item of listaDeProductos){
            switch(item.destino){
                case "Argentina":
                    contenedor.innerHTML +=`<div class="item">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[0].impuestos,destinosDisponibles[0].envio)}</p>
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado: ${destinosDisponibles[0].demora} dias.</p>
                                            <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                            </div>`;
                break;
                case "Bolivia":
                    contenedor.innerHTML +=`<div class="item">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[1].impuestos,destinosDisponibles[1].envio)}</p>
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado: ${destinosDisponibles[1].demora} dias.</p>
                                            <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                            </div>`; 
                break;
                case "Brasil":
                    contenedor.innerHTML +=`<div class="item">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[2].impuestos,destinosDisponibles[2].envio)}</p>
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado: ${destinosDisponibles[2].demora} dias.</p>
                                            <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                            </div>`; 
                break;
                case "Chile":
                    contenedor.innerHTML +=`<div class="item">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[3].impuestos,destinosDisponibles[3].envio)}</p>
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado: ${destinosDisponibles[3].demora} dias.</p>
                                            <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                            </div>`;                        
                break;  
                case "Paraguay":
                    contenedor.innerHTML +=`<div class="item">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[4].impuestos,destinosDisponibles[4].envio)}</p>
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado: ${destinosDisponibles[4].demora} dias.</p>
                                            <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                            </div>`; 
                break;
                case "Uruguay":
                    contenedor.innerHTML +=`<div class="item">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[5].impuestos,destinosDisponibles[5].envio)}</p>
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado: ${destinosDisponibles[5].demora} dias.</p>
                                            <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                            </div>`;                 
                break;
            }
        }
    };
    //Funcion de eliminar elementos en HTML y en array.
    function borrarTodos(){
        if(listaDeProductos.length >= 1){
            borra = confirm("Desea borrar todos los productos de la lista?");
            if(borra){
                $(".item").remove();
                listaDeProductos.length = 0;
                $(".contVacio").css({
                    "display":"flex"
                    });
                }
        }
        else{
            alert("Tu lista esta vacia!");
        }
    };
    //Funcion que calcula el precio final del producto.
    function calcularPrecio(precio, impuesto, envio){
        let total = precio * impuesto + envio;
        return total;
    };
    //Funcion de mostrar tarjeta de carga de producto.
    $("#btnCard").click(() =>{
        $("body").prepend(
            ` <div class="contForm" id="formulario">
                <div class="tituloForm">
                    <h3>Ingresa el producto</h3>
                </div>
                <div class="formInput">
                    <form id="formulario">
                        <label for="destinoProducto">Que desea traer?</label>
                        <input type="text" id="nombreProducto" placeholder="Nombre/Descripcion." >
                        <label for="destinoProducto">Cuanto cuesta?</label>
                        <input type="text" id="precioProducto" placeholder="Precio." >
                        <label for="destinoProducto">Donde deseas enviarlo?</label>
                        <select name="" id="destinoProducto" >
                            <option>Argentina</option>
                            <option>Bolivia</option>
                            <option>Brasil</option>
                            <option>Chile</option>
                            <option>Paraguay</option>
                            <option>Uruguay</option>
                        </select> 
                        <div class="botones">
                            <button type="button" id="btnAdd" class="btn btn-primary"><i class="fas fa-plus"></i></button>
                            <button type="button" id="btnCierre" class="btn btn-primary"><i class="fas fa-times"></i></button>
                        </div>  
                    </form> 
                </div>
            </div>`
        );
        $("#formulario").toggle("slow");
        $( function(){
            $("#formulario").draggable();
        });
        $("#btnAdd").on('click', cargarProducto);
        $("#btnCierre").click(() =>{
            $("#formulario").remove();
            $("#fomulario").toggle("slow");
        });
    });
    //boton de informacion.
    $("#btnAbout").click(()=>{
        $("body").prepend(
            `<div class="about">
                <p>
                    <strong>l'importateur</strong> es una plataforma ficticia donde vas a poder cotizar el envio de tus productos
                    del extranjero a tu pais, nuestro servicio se encuentra disponible en Argentina, Bolivia, Brasil, Chile, Paraguay y
                    Uruguay.
                    <br>
                    El precio mostrado en pantalla incluye costos del producto, envio e impuestos de acuerdo al destino seleccionado.
                    <br>
                    Para agregar productos a la lista solo presiona el boton <i class="fas fa-plus"></i>, completa el formulario y listo,
                    si queres eliminar algun elemento podes precionar el boton <i class="fas fa-trash"></i>, dentro del producto para 
                    eliminarlo o el que se encuentra al pie de la pagina para vaciar la lista.
                    <br>
                    <button type="button" id="cierreAbout" class="btn btn-primary"><i class="fas fa-times"></i></button>
                </p>
            </div>`
        );
        $(".about").toggle("slow");
        $( function(){
            $(".about").draggable();
        });
        $("#cierreAbout").click(() =>{
            $(".about").remove();
        });
    });

    
    //Codigo Principal.
    let listaDeProductos = [];
    let contenedor = document.getElementById("productosCargados");
    $("#btnBorrar").on('click', borrarTodos);
    //Lectura de datos desde formato JSON.
    const URLJSON = "../destinos.json"
    let destinosDisponibles = [];
    $.getJSON(URLJSON, function(respuesta, estado){
        if(estado === "success"){
            let destinosObtenidos = respuesta;
            destinosObtenidos.map( x => destinosDisponibles.push(x));
        }
    });
});