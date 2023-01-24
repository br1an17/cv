let imagen = document.getElementById("miImagen");
let angulo = document.getElementById("angulo");
let apellido = document.getElementById("apellido");


function cambiarATech() {
  document.getElementById("tech").style.display = "block";
  document.getElementById("clasico").style.display = "none";
  document.getElementById("oficio").innerText = "Desarrollador Full-Stack";
  
  angulo.style.background = "red";
  imagen.src = "../cv/img/mias/mia1.jpg";
  apellido.style.color= "red"

}

function cambiarAClass() {
  document.getElementById("clasico").style.display = "block";
  document.getElementById("tech").style.display = "none";
  imagen.src = "../cv/img/mias/brian.jpg";
  angulo.style.background = "#2fb7fe"
  apellido.style.color=  "#2fb7fe"
}
