$(document).ready(function () {
    // Inicializar el carrusel Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false, // Desactivar la reproducción automática
    });

    // Agregar un controlador de eventos para cambiar la foto al hacer clic en un selector en el primer "div"
    $("#drywall-card-1 .selector").on("click", function () {
        var targetId = $(this).data("target");
        var slideIndex = $(this).data("slide");

        // Activar el cambio de diapositiva en el carrusel correspondiente
        $(targetId + " .owl-carousel").trigger("to.owl.carousel", slideIndex);
    });

    // Agregar un controlador de eventos para cambiar la foto al hacer clic en un selector en el segundo "div"
    $("#drywall-card-2 .selector").on("click", function () {
        var targetId = $(this).data("target");
        var slideIndex = $(this).data("slide");

        // Activar el cambio de diapositiva en el carrusel correspondiente
        $(targetId + " .owl-carousel").trigger("to.owl.carousel", slideIndex);
    });
});

