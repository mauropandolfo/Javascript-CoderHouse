function mostrarTarjeta(){
    let tarjeta = document.getElementById("formulario");
    if (tarjeta.style.display === "block"){
        tarjeta.style.display = "none";
    }
    else{
        tarjeta.style.display = "block"
    }
}