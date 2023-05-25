$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
} );
