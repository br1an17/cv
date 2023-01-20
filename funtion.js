let ocultar_tecnologias = document.getElementById("ocultarTecnologias")

let tegnologias = document.getElementById("tecnologias")


ocultar_tecnologias.addEventListener("click",toggleTec)



function toggleTec() {
tegnologias.classList.toggle("mostrar")
}


let ocultar_redes = document.getElementById("ocultarRedes")

let contacto = document.getElementById("contacto")


ocultar_redes.addEventListener("click",toggleRedes)



function toggleRedes() {
    contacto.classList.toggle("mostrar")
}