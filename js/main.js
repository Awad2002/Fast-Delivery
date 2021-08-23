
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

$(document).ready(function(){
    $('.faq-item .bb-down').on('click', function() {        
      $(this).next('p').show();
      $(this).hide();
      $(this).parents('div.faq-item').find('.bb-up').show();
    });
  });


  $(document).ready(function(){
    $('.faq-item .bb-up').on('click', function() {        
      $('.faq-item').find('.mt-3').hide();
      $(this).hide();
      $('.faq-item').find('.bb-down').show();
    });
  });


  