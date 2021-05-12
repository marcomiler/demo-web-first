/*la siguiente es una funcion para ver si se hace scroll en la pagina 
para arriba o para abajo, mostrando el nav si se scrollea para arriba
y ocultandolo si se scrollea para abajo*/
//al inicio la ubicacionprincipal valdra 0
let ubicacionPrincipal = window.pageYOffset;//ubicacion de la parte de la pagina estamos
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;//ubicacion de la pagina cuando se hace scroll
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";//que muestre el nav
    }
    else{ //cuando baja el scroll:
        document.getElementsByTagName("nav")[0].style.top = "-100px";//que oculte el nav
       
    }

    ubicacionPrincipal = desplazamientoActual;
});

// Menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    }
    else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menu2");
})