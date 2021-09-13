$(document).ready(function(){
    //Constructor de objetos.
    class Producto{
        constructor(pNombre, pPrecio, pDestino){
            this.nombre = pNombre;
            this.precio = pPrecio;
            this.destino = pDestino;
        }
    }
    //Array que contiene los objetos
    let listaDeProductos = [];
    let contenedor = document.getElementById("productosCargados");
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
                console.log(listaDeProductos);
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
            //borrar items de a uno.
            function borrarUno(){
                $(`.borrar${item.nombre}`).click(() =>{
                    $(`#item${item.nombre}`).remove();
                    let posicion = listaDeProductos.indexOf(item);
                    listaDeProductos.splice(posicion, 1)
                    comprobarVacio()
                });
            }
            switch(item.destino){
                case "Argentina":
                    contenedor.innerHTML +=`<div class="item" id="item${item.nombre}">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[0].impuestos,destinosDisponibles[0].envio)}</p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="bandera" width="80px" height="50px">
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado de entrega: ${destinosDisponibles[0].demora} dias.</p>
                                            <button type="button" class="btn btn-primary borrar${item.nombre}"><i class="fas fa-trash"></i></i></button>
                                            </div>`;
                                            borrarUno()
                                            
                break;
                case "Bolivia":
                    contenedor.innerHTML +=`<div class="item" id="item${item.nombre}">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[1].impuestos,destinosDisponibles[1].envio)}</p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1200px-Flag_of_Bolivia.svg.png" alt="bandera" width="80px" height="50px">
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado de entrega: ${destinosDisponibles[1].demora} dias.</p>
                                            <button type="button" class="btn btn-primary borrar${item.nombre}"><i class="fas fa-trash"></i></i></button>
                                            </div>`;
                                            borrarUno()
                break;
                case "Brasil":
                    contenedor.innerHTML +=`<div class="item" id="item${item.nombre}">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[2].impuestos,destinosDisponibles[2].envio)}</p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" alt="bandera" width="80px" height="50px">
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado de entrega: ${destinosDisponibles[2].demora} dias.</p>
                                            <button type="button" class="btn btn-primary borrar${item.nombre}"><i class="fas fa-trash"></i></i></button>
                                            </div>`;
                                            borrarUno()
                break;
                case "Chile":
                    contenedor.innerHTML +=`<div class="item" id="item${item.nombre}">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[3].impuestos,destinosDisponibles[3].envio)}</p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" alt="bandera" width="80px" height="50px">
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado de entrega: ${destinosDisponibles[3].demora} dias.</p>
                                            <button type="button" class="btn btn-primary borrar${item.nombre}"><i class="fas fa-trash"></i></i></button>
                                            </div>`;  
                                            borrarUno()                    
                break;  
                case "Paraguay":
                    contenedor.innerHTML +=`<div class="item" id="item${item.nombre}">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[4].impuestos,destinosDisponibles[4].envio)}</p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1200px-Flag_of_Paraguay.svg.png" alt="bandera" width="80px" height="50px">
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimadode entrega: ${destinosDisponibles[4].demora} dias.</p>
                                            <button type="button" class="btn btn-primary borrar${item.nombre}"><i class="fas fa-trash"></i></i></button>
                                            </div>`;
                                            borrarUno()
                break;
                case "Uruguay":
                    contenedor.innerHTML +=`<div class="item" id="item${item.nombre}">
                                            <h3>${item.nombre}</h3>
                                            <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[5].impuestos,destinosDisponibles[5].envio)}</p>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png" alt="bandera" width="80px" height="50px">
                                            <p>Destino: ${item.destino}</p>
                                            <p>Tiempo estimado de entrega: ${destinosDisponibles[5].demora} dias.</p>
                                            <button type="button" class="btn btn-primary borrar${item.nombre}"><i class="fas fa-trash"></i></i></button>
                                            </div>`;
                                            borrarUno()                  
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
    //funcion de confirmacion de compra
    function finalizarCompra(){
        if(listaDeProductos.length >= 1){
            let compra = confirm("Desea finalizar su compra?")
            if(compra){
                listaDeProductos.length = 0;
                $(".item").remove();
                $(".contVacio").css({
                    "display":"flex"
                });
                $(".final").toggle("slow");
                $("#cierreFinal").click(()=>{
                    $(".final").toggle();
                });
            }
        }
        else{
            alert("Tu carrito esta vacio, agrega productos para poder comprar!")
        }
    }   
    //Lectura de datos desde formato JSON.
    const URLJSON = "https://mauropandolfo.github.io/test/destinos.json"
    let destinosDisponibles = [];
    $.get(URLJSON, function(respuesta, estado){
        if(estado === "success"){
            let destinosObtenidos = respuesta;
            destinosObtenidos.map( x => destinosDisponibles.push(x));
        }
    });
    //controla que se muestre el mensaje en pantalla de carrito vacio.
    function comprobarVacio(){
        if(listaDeProductos.length < 1){
            $(".contVacio").css({
                "display":"flex"
            });
        }
        else{
            $(".contVacio").css({
                "display":"none"
            });
        }
    }
    // BOTONES///
    //carga de producto.
    $("#btnCard").click(() =>{
        $("#formulario").toggle("slow");
        $( function(){
            $("#formulario").draggable();
        });
    });
    //cierre de de tarjeta.
    $("#btnCierre").click(() =>{
        $("#formulario").toggle("slow");
    });
    //informacion.
    $("#btnAbout").click(()=>{
        $(".about").toggle("slow");
        $( function(){
            $(".about").draggable();
        });
        $(".about").css({
            "display":"flex"
        });
    });
    //cierre de informacion
    $("#cierreAbout").click(() =>{
        $(".about").toggle("slow");
    });
    //final de la compra
    $("#btnCompra").on('click', finalizarCompra);
    //Borrar toda la lista.
    $("#btnBorrar").on('click', borrarTodos);
    //cargar y renderizar producto
    $("#btnAdd").on('click', cargarProducto);
});