
$('.owl-carousel').owlCarousel({
    stagePadding: 372,
    loop:true,
    rtl: true,
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

$(document).ready(function(){
    $('.faq-item').on('click', function() {        
      $(this).find('p').toggle();
      $(this).find('.bb-down').toggle();
      $(this).find('.bb-up').toggle();
    });
  });


  $(document).ready(function(){
    $('.faq-item .bb-up').on('click', function() {        
      $('.faq-item').find('.mt-3').hide();
      $(this).hide();
      $('.faq-item').find('.bb-down').show();
    });
  });
