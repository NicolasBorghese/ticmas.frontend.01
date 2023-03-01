// --------------------------------------------- FUNCIONES --------------------------------------//

// Recibe un Id de sección del CV y mueve la pantalla hacia esa dirección
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  let distancia;

  if(responsiveOn){
    distancia = -33;
  }else{
    distancia = -5;
  }

  if (section) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight + distancia;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  }
  responsiveOn = false;
}

// Resalta y apaga los titulos y las cajas al hacer click en la botonera
function iluminarSeccion(titulo_seccion, contenedor_seccion){

  let titulos = document.querySelectorAll(".titulo_iluminado");
  titulos.forEach(function(elemento){
    elemento.classList.remove("titulo_elegido");
  })

  let bloques = document.querySelectorAll(".bloque_iluminado");
  bloques.forEach(function(elemento){
    elemento.classList.remove("contenedor_elegido");
  })

  document.getElementById(titulo_seccion).classList.add("titulo_elegido");
  document.getElementById(contenedor_seccion).classList.add("contenedor_elegido");
  
}

// Scroll to top
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 90) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Muestra y esconde el menu responsive
let menuVisible = false;
let responsiveOn = false;
//Función que oculta o muestra el menu
function mostrar_menu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
        responsiveOn = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// --------------------------------------------- EVENTOS --------------------------------------- //

// boton perfil
document.getElementById("boton_perfil").addEventListener("click", function(){
  scrollToSection("perfil");
  iluminarSeccion("titulo_perfil_01", "perfil");

})

//boton resumen
document.getElementById("boton_resumen").addEventListener("click", function(){
  scrollToSection("resumen");
  iluminarSeccion("titulo_resumen_01", "resumen");
})

// boton información
document.getElementById("boton_informacion").addEventListener("click", function(){
  scrollToSection("informacion");
  iluminarSeccion("titulo_informacion_01", "informacion");
})

// boton formación
document.getElementById("boton_formacion").addEventListener("click", function(){
  scrollToSection("formacion");
  iluminarSeccion("titulo_formacion_01", "formacion");
})

// boton experiencia
document.getElementById("boton_experiencia").addEventListener("click", function(){
  scrollToSection("experiencia");
  iluminarSeccion("titulo_experiencia_01", "experiencia");
})

// boton habilidades
document.getElementById("boton_habilidades").addEventListener("click", function(){
  scrollToSection("habilidades");
  iluminarSeccion("titulo_habilidades_01", "habilidades");
})

// boton reconocimientos
document.getElementById("boton_reconocimientos").addEventListener("click", function(){
  scrollToSection("reconocimientos");
  iluminarSeccion("titulo_reconocimientos_01", "reconocimientos");
})
