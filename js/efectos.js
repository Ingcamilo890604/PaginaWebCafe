$(document).ready(function() {
    // Efecto menu
    $('.menu a').each(function(index, elemento) {
            $(this).css({
                "top": "-200px"
            })
            $(this).animate({
                top: "0"
            }, 2000 + (index * 500))
        })
        //Efecto Textos
    if ($(window).width() > 800) {
        $(".textos").css({
            opacity: 0,
            marginTop: 0
        })
        $(".textos").animate({
            opacity: 1,
            marginTop: -50
        }, 2000)
    }
    //Scroll elementos Menu
    var acercaDe = $("#acerca-de").offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top

    $("#btn-acerca-de").on("click", function() {
        $('html, body').animate({
            scrollTop: acercaDe
        }, 500)
    })

    $("#btn-menu").on("click", function() {
        $('html, body').animate({
            scrollTop: menu
        }, 1000)
    })

    $("#btn-galeria").on("click", function() {
        $('html, body').animate({
            scrollTop: galeria
        }, 1500)
    })

    $("#btn-ubicacion").on("click", function() {
        $('html, body').animate({
            scrollTop: ubicacion
        }, 2000)
    })


})