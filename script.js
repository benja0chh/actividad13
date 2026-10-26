function cambiarSesion(boton) {
    boton.innerText = "Cerrar sesión";
}
 
function ocultar(boton) {
    boton.remove();
}
 
function meGusta(titulo, idContador) {
    alert("Te gustó la definición: " + titulo);
 
    let contador = document.getElementById(idContador);
    contador.innerText = Number(contador.innerText) + 1;
}
 