$(document).ready(function(){
    var currentIndex = 0;
    var cards = $(".drywall-card");

    function showCard(index) {
        cards.removeClass("active");
        cards.eq(index).addClass("active");
    }

    $(".arrow-leftDrywall").click(function(){
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        showCard(currentIndex);
    });

    $(".arrow-rightDrywall").click(function(){
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        showCard(currentIndex);
    });
});
