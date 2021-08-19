
$('.owl-carousel').owlCarousel({
    stagePadding: 372,
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 10,
        },
        600:{
            items:1,
            stagePadding: 30,
        },
        1000:{
            items:1,
        }
    }
})