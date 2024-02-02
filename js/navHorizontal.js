document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav__link-drywall');
    const cards = document.querySelectorAll('.drywall-card');

    // Mostrar la tarjeta correspondiente a "MONTANTE" al cargar la página
    showCard('drywall-card-1');
    activateLink(0); // Activar el primer enlace al cargar la página

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetCardId = this.getAttribute('data-target');
            showCard(targetCardId);
            activateLink(index);
        });
    });

    function showCard(cardId) {
        cards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('active-card');
        });

        const targetCard = document.getElementById(cardId);
        if (targetCard) {
            targetCard.style.display = 'flex';
        }
    }

    function activateLink(index) {
        navLinks.forEach(link => {
            link.classList.remove('active-card');
        });
        navLinks[index].classList.add('active-card');

        // Además, quitar la clase active-card de todas las tarjetas
        cards.forEach(card => {
            card.classList.remove('active-card');
        });
    }
});

//Menu nav de tarjetas cielorraso
document.addEventListener('DOMContentLoaded', function () {
    const navLinksCielorraso = document.querySelectorAll('.nav__link-cielorraso');
    const cardsCielorraso = document.querySelectorAll('.cielorraso-card');

    // Mostrar la tarjeta correspondiente a "LARGUERO" al cargar la página
    showCardCielorraso('cielorraso-card-1');
    activateLinkCielorraso(0); // Activar el primer enlace al cargar la página

    navLinksCielorraso.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetCardId = this.getAttribute('data-target');
            showCardCielorraso(targetCardId);
            activateLinkCielorraso(index);
        });
    });

    function showCardCielorraso(cardId) {
        cardsCielorraso.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('active-card-cielorraso');
        });

        const targetCard = document.getElementById(cardId);
        if (targetCard) {
            targetCard.style.display = 'flex';
            targetCard.classList.add('active-card-cielorraso');
        }
    }

    function activateLinkCielorraso(index) {
        navLinksCielorraso.forEach(link => {
            link.classList.remove('active-card-cielorraso');
        });
        navLinksCielorraso[index].classList.add('active-card-cielorraso');

        // Además, quitar la clase active-card-cielorraso de todas las tarjetas
        cardsCielorraso.forEach(card => {
            card.classList.remove('active-card-cielorraso');
        });
    }
});

//CIELORRASO DESMONTABLE
document.addEventListener('DOMContentLoaded', function () {
    const navLinksCielorrasoDesmontable = document.querySelectorAll('.nav__link-cielorraso-desmontable');
    const cardsCielorrasoDesmontable = document.querySelectorAll('.cielorraso-card-desmontable');
    const navCielorrasoDesmontable = document.querySelector('.nav-cielorraso-desmontable');

    // Mostrar la tarjeta correspondiente a "PERIMETRAL" al cargar la página
    showCardCielorrasoDesmontable('cielorraso-desmontable-card-1');
    activateLinkCielorrasoDesmontable(navLinksCielorrasoDesmontable[0]); // Activar el primer enlace al cargar la página

    navLinksCielorrasoDesmontable.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetCardId = this.getAttribute('data-target');
            showCardCielorrasoDesmontable(targetCardId);
            activateLinkCielorrasoDesmontable(this);
        });
    });

    function showCardCielorrasoDesmontable(cardId) {
        cardsCielorrasoDesmontable.forEach(card => {
            card.style.display = 'none';
        });

        const targetCard = document.getElementById(cardId);
        if (targetCard) {
            targetCard.style.display = 'flex';
        }
    }

    function activateLinkCielorrasoDesmontable(activeLink) {
        navLinksCielorrasoDesmontable.forEach(link => {
            link.classList.remove('active-card-cielorraso-desmontable');
            link.style.color = ''; // Restablecer color
            link.style.fontWeight = ''; // Restablecer peso de la fuente
            link.style.textDecoration = ''; // Restablecer subrayado
        });

        activeLink.classList.add('active-card-cielorraso-desmontable');
        activeLink.style.color = '#d30809';
        activeLink.style.fontWeight = 'bold';
    }
});





// SCROLL VERTICAL DE CIELORRASOS A SU SECCIÓN
$(document).ready(function () {
    $("#btn-techos").on("click", function (e) {
        e.preventDefault();

        var targetElement = $("#cielorraso")[0];
        var windowHeight = $(window).height();
        var sectionHeight = targetElement.clientHeight;

        // Calcular el desplazamiento necesario para centrar la sección
        var offset = targetElement.offsetTop - (windowHeight - sectionHeight) / 2;

        // Hacer scroll hasta el elemento
        $("html, body").animate({
            scrollTop: offset
        }, 900, function () {
            // Ajustar la posición de centrado después de la animación
            var finalOffset = $(targetElement).offset().top - (windowHeight - sectionHeight) / 2;
            $(window).scrollTop(finalOffset);
        });
    });
});

//SCROLL DESDE ACCESORIOS A SHOP
document.addEventListener('DOMContentLoaded', function () {
    const btnTechos = document.getElementById('btn-techos');
    const shopSection = document.getElementById('shop');

    btnTechos.addEventListener('click', function (e) {
        e.preventDefault();

        const offset = document.getElementById('titulo-principal').offsetTop; // Obtener la posición del título
        window.scrollTo({ top: shopSection.offsetTop - offset, behavior: 'smooth' }); // Desplazarse a la sección "shop" considerando el título
    });
});




