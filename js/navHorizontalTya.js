document.addEventListener('DOMContentLoaded', function () {
    const navLinksTecho = document.querySelectorAll('.nav__linkTecho');
    const cardsTecho = document.querySelectorAll('.cardTecho');

    // Mostrar la tarjeta correspondiente a "CHAPA ONDULADA" al cargar la página
    showCardTecho('techo-card-1');
    activateLinkTecho(0); // Activar el primer enlace al cargar la página

    navLinksTecho.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetCardId = this.getAttribute('data-target');
            showCardTecho(targetCardId);
            activateLinkTecho(index);
        });
        link.addEventListener('mouseover', function () {
            this.style.color = '#d30809'; // Cambiar color al pasar el mouse
            // this.style.textDecoration = 'underline'; // Subrayar al pasar el mouse
        });
        link.addEventListener('mouseout', function () {
            if (!this.classList.contains('active-card')) {
                this.style.color = ''; // Restaurar color al salir del hover
                this.style.textDecoration = ''; // Eliminar subrayado al salir del hover
            }
        });
    });

    function showCardTecho(cardId) {
        cardsTecho.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('active-card-techo');
        });

        const targetCard = document.getElementById(cardId);
        if (targetCard) {
            targetCard.style.display = 'block';
            targetCard.classList.add('active-card-techo');
            activateLinkTecho(Array.from(navLinksTecho).findIndex(link => link.getAttribute('data-target') === cardId));
        }
    }

    function activateLinkTecho(index) {
        navLinksTecho.forEach(link => {
            link.classList.remove('active-card');
            link.style.color = ''; // Restaurar el color del texto
            link.style.textDecoration = ''; // Restaurar el subrayado
        });
        navLinksTecho[index].classList.add('active-card');
        navLinksTecho[index].style.color = '#d30809'; // Establecer el color activo
    }
});

//REDIRECCION DE BOTON TECHO ALVEOLAR A SU SECCION
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "+ Info"
    var btnInfo = document.getElementById("btn-techoZinc");

    // Agregar un event listener para el clic en el botón
    btnInfo.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener la posición vertical de la sección de Techos Alveolares
        var techosSection = document.getElementById("techoZinc");
        var techosSectionPosition = techosSection.getBoundingClientRect().top;

        // Obtener la altura de la barra de navegación (si hay una)
        var navHeight = document.querySelector('.navTecho').offsetHeight;

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

//NAV DE TECHO ALVEOLAR
document.addEventListener('DOMContentLoaded', function () {
    const navLinksTechoAlveolar = document.querySelectorAll('.nav__linkTechoAlveolar');
    const cardsTechoAlveolar = document.querySelectorAll('.cardTechoAlveolar');

    // Mostrar la tarjeta correspondiente al primer enlace al cargar la página
    showCardTechoAlveolar('alveolar-card-1');
    activateLinkTechoAlveolar(0); // Activar el primer enlace al cargar la página

    navLinksTechoAlveolar.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetCardId = this.getAttribute('data-target');
            showCardTechoAlveolar(targetCardId);
            activateLinkTechoAlveolar(index);
        });
        link.addEventListener('mouseover', function () {
            this.style.color = '#d30809'; // Cambiar color al pasar el mouse
            // this.style.textDecoration = 'underline'; // Subrayar al pasar el mouse
        });
        link.addEventListener('mouseout', function () {
            if (!this.classList.contains('active-card')) {
                this.style.color = ''; // Restaurar color al salir del hover
                this.style.textDecoration = ''; // Eliminar subrayado al salir del hover
            }
        });
    });

    function showCardTechoAlveolar(cardId) {
        cardsTechoAlveolar.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('active-card-techoAlveolar');
        });

        const targetCard = document.getElementById(cardId);
        if (targetCard) {
            targetCard.style.display = 'block';
            targetCard.classList.add('active-card-techoAlveolar');
            activateLinkTechoAlveolar(Array.from(navLinksTechoAlveolar).findIndex(link => link.getAttribute('data-target') === cardId));
        }
    }

    function activateLinkTechoAlveolar(index) {
        navLinksTechoAlveolar.forEach(link => {
            link.classList.remove('active-card');
            link.style.color = ''; // Restaurar el color del texto
            link.style.textDecoration = ''; // Restaurar el subrayado
        });
        navLinksTechoAlveolar[index].classList.add('active-card');
        navLinksTechoAlveolar[index].style.color = '#d30809'; // Establecer el color activo
    }
});

//REDIRECCION DE BOTON TECHO ALVEOLAR A SU SECCION
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "+ Info"
    var btnInfo = document.getElementById("btn-techoAlveolar");

    // Agregar un event listener para el clic en el botón
    btnInfo.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener la posición vertical de la sección de Techos Alveolares
        var techosSection = document.getElementById("techosAlveolares");
        var techosSectionPosition = techosSection.getBoundingClientRect().top;

        // Obtener la altura de la barra de navegación (si hay una)
        var navHeight = document.querySelector('.navTechoAlveolar').offsetHeight;

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

//REDIRECCION DE BOTON Accesorios  A SU e-shop
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "+ Info"
    var btnInfo = document.getElementById("btn-Accesorios");

    // Agregar un event listener para el clic en el botón
    btnInfo.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtener la posición vertical de la sección de Techos Alveolares
        var techosSection = document.getElementById("wrapper");
        var techosSectionPosition = techosSection.getBoundingClientRect().top;

        // Obtener la altura de la barra de navegación (si hay una)
        var navHeight = document.querySelector('.shop-logo').offsetHeight;

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
