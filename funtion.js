let imagen = document.getElementById("miImagen");
let angulo = document.getElementById("angulo");
let anguloInferior = document.getElementById("anguloI");
let apellido = document.getElementById("apellido");
// let dark =document.getElementById("dark")
let main_body = document.getElementById("right-section");
// let luna = document.getElementById("luna")
// let luna2 = document.getElementById("luna2")
let tech = document.getElementById("tech")
let clasico = document.getElementById("clasico")
let oficio = document.getElementById("oficio")
let titulo = document.getElementById("p4")
titulo.classList.add()

let contador = 0
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")



function cambiarATech() {
  tech.style.display = "block";
  clasico.style.display = "none";
  oficio.innerText = "Desarrollador Full-Stack";
  anguloInferior.style.background = "#500008"
  angulo.style.background = "#a42500";
  imagen.src = "./img/mias/mia1.jpg";
  apellido.style.color= "#a42500"
  main_body = document.getElementById("right-section2")
 
}


function cambiarAClass() {
  tech.style.display = "none";
  clasico.style.display = "block";
  oficio.innerText = "DEDICADO Y PERSEVERANTE";
  imagen.src = "./img/mias/20210527_232927.jpg";
  anguloInferior.style.background = "#3d3f42"
  angulo.style.background = "#2fb7fe"
  apellido.style.color=  "#2fb7fe"
  main_body = document.getElementById("right-section")
 
}

// function darkMode(){
//   main_body.classList.toggle("dark-mode")
//   titulo.classList.toggle ("red")

// }
function cambio (){

if(contador===0){
  contador = 1
  main_body.classList.add("dark-mode")
btn.src="./img/logos/sol.png"

}else{
  main_body.classList.remove("dark-mode")
  btn.src="./img/logos/luna.png"
  contador = 0
}

}
function cambio2 (){

  if(contador===0){
    contador = 1
    main_body.classList.add("dark-mode")
  btn2.src="./img/logos/sol.png"

  }else{
    main_body.classList.remove("dark-mode")
    btn2.src="./img/logos/luna.png"
    contador = 0
  }
  
  }
console.log(titulo.classList)

btn.addEventListener("click",cambio)
btn2.addEventListener("click",cambio2)
