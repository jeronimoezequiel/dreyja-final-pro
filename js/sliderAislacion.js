let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.ais-slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.ais-slide').prepend(items[items.length -1]);
});


//REDIRECCION DE BOTON +info AISLACIONES A SU SECCION
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "+ Info"
    var btnInfo = document.getElementById("btn-Aislaciones");

    // Agregar un event listener para el clic en el botón
    btnInfo.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener la posición vertical de la sección de Techos Alveolares
        var techosSection = document.getElementById("aislaciones");
        var techosSectionPosition = techosSection.getBoundingClientRect().top;

        // Obtener la altura de la barra de navegación (si hay una)
        var navHeight = document.querySelector('.aislaciones').offsetHeight;

        // Calcular el desplazamiento
        var offset = techosSectionPosition - navHeight;

        // Desplazar la ventana hasta la sección de Techos Alveolares con suavidad
        window.scrollBy({
            top: offset,
            left: 0,
            behavior: 'smooth'
        });
    });
});