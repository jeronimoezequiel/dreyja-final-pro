document.getElementById('btn__menu').addEventListener("click", mostrar_menu);
document.getElementById('back_menu').addEventListener("click", ocultar_menu);

nav = document.getElementById('nav');
background_menu = document.getElementById('back_menu');

function mostrar_menu() {
    
    nav.style.right = "0px";
    background_menu.style.display = "block";
};

function ocultar_menu() {

    nav.style.right = "-250px";
    background_menu.style.display = "none";
};

//Menu hamburguesa E-COMERCE
const openMenuHeader = document.querySelector ('#open-menu-header');
const closeMenuHeader = document.querySelector ('#close-menu-header');
const aside = document.querySelector ('aside');

openMenuHeader.addEventListener("click", () => {
    aside.classList.add ("aside-visible");
});

closeMenuHeader.addEventListener("click", () => {
    aside.classList.remove ("aside-visible");
});

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}));
