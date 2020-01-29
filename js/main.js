// animaciones scroll
AOS.init();

let ubicacionPrincipal = window.pageYOffset//0

window.addEventListener("scroll", function(){
  let desplazamientoActual = window.pageYOffset;//180
  if(ubicacionPrincipal>=desplazamientoActual){
    this.document.getElementsByTagName('nav')[0].style.top = "0px"
  }else{
    this.document.getElementsByTagName('nav')[0].style.top = "-100px"
  }
  ubicacionPrincipal=desplazamientoActual;
})

// menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
  if(semaforo){
    document.querySelectorAll(".hamburguer")[0].style.color = "#F8F8F8"
    semaforo=false;
  }else{
    document.querySelectorAll(".hamburguer")[0].style.color = "#F94258"
    semaforo=true;
  }
  enlacesHeader.classList.toggle('menudos')
})
