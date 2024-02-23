document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.muro-compuesto-referencias ul li a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('href'); // Obtiene el valor del atributo href
            const targetElement = document.querySelector(targetId); // Encuentra el elemento con el id correspondiente

            if (targetElement) {
                const offsetTop = targetElement.offsetTop; // Obtiene la posición superior del elemento
                const windowHeight = window.innerHeight; // Altura de la ventana del navegador
                const scrollPosition = offsetTop - (windowHeight / 2); // Calcula la posición de desplazamiento

                window.scrollTo({ // Realiza el desplazamiento suave hacia el elemento
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

//Boton + info de regreso al detalle del muro 
document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.querySelector('.btn-contentSf a[href="#muro-compuesto-img"]');

    if (infoButton) {
        infoButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const targetElement = document.querySelector(this.getAttribute('href')); // Encontrar el elemento de destino
            const windowHeight = window.innerHeight; // Altura de la ventana del navegador
            const imageHeight = targetElement.clientHeight; // Altura de la imagen
            const scrollPosition = targetElement.offsetTop - (windowHeight / 3) + (imageHeight / 3); // Calcular la posición de desplazamiento

            window.scrollTo({ // Realizar el desplazamiento suave hacia la imagen
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    }
});

