//Constructor de objetos.
class Producto{
    constructor(pNombre, pPrecio, pDestino){
        this.nombre = pNombre;
        this.precio = pPrecio;
        this.destino = pDestino;
    }
}
let destinosDisponibles = [
    {pais: "Argentina", impuestos: 1.21, envio: 3500, demora: 35},
    {pais: "Bolivia", impuestos: 1.20, envio: 3000, demora: 20},
    {pais: "Brasil", impuestos: 1.17, envio: 2600, demora: 15},
    {pais: "Chile", impuestos: 1.15, envio: 3700, demora: 40},
    {pais: "Paraguay", impuestos: 1.21, envio: 3000, emora: 20},
    {pais: "Uruguay", impuestos: 1.21, envio: 3700, emora: 40}
]
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
}
//Funcion de carga de datos en local storage.
const guardarLocal = (clave, valor)=> {localStorage.setItem(clave, valor)};
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
            document.getElementById("nombreProducto").value = '';
            document.getElementById("precioProducto").value = '';
        }
        else{
            alert("No se agregara ningun producto")
        }
    }
}
//Funcion de renderizado.
function mostrarTodos(){
    $(".productosCargados").append('');
    for(let item of listaDeProductos){
        switch(item.destino){
            case "Argentina":
                $("#productosCargados").append(`<div class="item">
                                        <h3>${item.nombre}</h3>
                                        <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[0].impuestos,destinosDisponibles[0].envio)}</p>
                                        <p>Destino: ${item.destino}</p>
                                        <p>Tiempo estimado: ${destinosDisponibles[0].demora} dias.</p>
                                        <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                        </div>`);
                $("#borrarLocal").on('click',function(){
                    $(".item").remove(); 
                    listaDeProductos.splice(-1,1);
                }); 
                
            break;
            case "Bolivia":
                $("#productosCargados").append(`<div class="item">
                                        <h3>${item.nombre}</h3>
                                        <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[1].impuestos,destinosDisponibles[1].envio)}</p>
                                        <p>Destino: ${item.destino}</p>
                                        <p>Tiempo estimado: ${destinosDisponibles[1].demora} dias.</p>
                                        <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                        </div>`);
                $("#borrarLocal").on('click',function(){
                    $(".item").remove(); 
                    listaDeProductos.splice(-1,1);
                }); 
            break;
            case "Brasil":
                $("#productosCargados").append(`<div class="item">
                                        <h3>${item.nombre}</h3>
                                        <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[2].impuestos,destinosDisponibles[2].envio)}</p>
                                        <p>Destino: ${item.destino}</p>
                                        <p>Tiempo estimado: ${destinosDisponibles[2].demora} dias.</p>
                                        <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                        </div>`);
                $("#borrarLocal").on('click',function(){
                    $(".item").remove(); 
                    listaDeProductos.splice(-1,1);
                }); 
            break;
            case "Chile":
                $("#productosCargados").append(`<div class="item">
                                        <h3>${item.nombre}</h3>
                                        <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[3].impuestos,destinosDisponibles[3].envio)}</p>
                                        <p>Destino: ${item.destino}</p>
                                        <p>Tiempo estimado: ${destinosDisponibles[3].demora} dias.</p>
                                        <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                        </div>`);
                $("#borrarLocal").on('click',function(){
                    $(".item").remove(); 
                    listaDeProductos.splice(-1,1);
                }); 
            break;
            case "Paraguay":
                $("#productosCargados").append(`<div class="item">
                                        <h3>${item.nombre}</h3>
                                        <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[4].impuestos,destinosDisponibles[4].envio)}</p>
                                        <p>Destino: ${item.destino}</p>
                                        <p>Tiempo estimado: ${destinosDisponibles[4].demora} dias.</p>
                                        <button type="button" id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                        </div>`);
                $("#borrarLocal").on('click',function(){
                    $(".item").remove(); 
                    listaDeProductos.splice(-1,1);
                }); 
            break;
            case "Uruguay":
                $("#productosCargados").append(`<div class="item">
                                        <h3>${item.nombre}</h3>
                                        <p>Precio: $ ${calcularPrecio(item.precio,destinosDisponibles[5].impuestos,destinosDisponibles[5].envio)}</p>
                                        <p>Destino: ${item.destino}</p>
                                        <p>Tiempo estimado: ${destinosDisponibles[5].demora} dias.</p>
                                        <button type="button"  id="borrarLocal" class="btn btn-primary"><i class="fas fa-trash"></i></i></button>
                                        </div>`);
                $("#borrarLocal").on('click',function(){
                    $(".item").remove(); 
                });                        
            break;
        }
    }
}
//Funcion de eliminar elementos en HTML y en array;
function borrarTodos(){
    let borra = confirm("Desea borrar todos los productos de la lista?");
    if(borra){
        $("#productosCargados").remove();
        listaDeProductos = [];
        localStorage.clear;
    }
}
//Funcion que calcula el precio final del producto.
function calcularPrecio(precio, impuesto, envio){
    let total = precio * impuesto + envio;
    return total;
}
//Codigo Principal.
let listaDeProductos = [];
$("#btnBorrar").on('click', borrarTodos);
$("#btnAdd").on('click', cargarProducto);



