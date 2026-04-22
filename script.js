
const texto = document.getElementById("mensaje");
const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");
const efectoBoton = document.getElementById("toggle");

boton.addEventListener("click", function(){
    texto.textContent = "Haz cambiado este texto con JavaScript!";


});

