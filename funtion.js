let imagen = document.getElementById("miImagen");
let angulo = document.getElementById("angulo");
let anguloInferior = document.getElementById("anguloI");
let apellido = document.getElementById("apellido");
let dark =document.getElementById("dark")
let main_body = document.getElementById("right-section");
let luna = document.getElementById("luna")
let luna2 = document.getElementById("luna2")
let tech = document.getElementById("tech")
let clasico = document.getElementById("clasico")
let oficio = document.getElementById("oficio")



function cambiarATech() {
  tech.style.display = "block";
  clasico.style.display = "none";
  oficio.innerText = "Desarrollador Full-Stack";
  anguloInferior.style.background = "#500008"
  angulo.style.background = "#a42500";
  imagen.src = "../cv/img/mias/mia1.jpg";
  apellido.style.color= "#a42500"
  main_body = document.getElementById("right-section2")
}




function cambiarAClass() {
  tech.style.display = "none";
  clasico.style.display = "block";
  oficio.innerText = "DEDICADO Y PERSEVERANTE";
  imagen.src = "../cv/img/mias/brian.jpg";
  anguloInferior.style.background = "#3d3f42"
  angulo.style.background = "#2fb7fe"
  apellido.style.color=  "#2fb7fe"
  main_body = document.getElementById("right-section")

}

function darkMode(){
  main_body.classList.toggle("dark-mode")
}


