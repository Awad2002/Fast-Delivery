
$('.gallery .owl-carousel').owlCarousel({
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

$('.clients .owl-carousel').owlCarousel({
    stagePadding: 10,
    loop:true,
    margin:73,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:6,
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


  $(document).ready(function(){
    $('#Governorate').change(function(){
        var data= $(this).val();
        $('.subarea').hide();
        if(data == 'ahmadi'){
            $('.subarea#ahmadi').show();
        } else if (data == 'al-asimah') {
            $('.subarea#al-asimah').show();
        } else if (data == 'farwaniya') {
            $('.subarea#farwaniya').show();
        } else if (data == 'farwaniya') {
            $('.subarea#farwaniya').show();
        } else if (data == 'hawalli') {
            $('.subarea#hawalli').show();
        } else if (data == 'jahra') {
            $('.subarea#jahra').show();
        } else if (data == 'mubarak') {
            $('.subarea#mubarak').show();
        }
      });
  })

  $(document).ready(function(){
    $('.next-btn1').on('click', function(){
        $('.tab1').hide();
        $('.tab2').show();
        $('#step2').addClass('active');
        $('#step2').next('h6').addClass('color-my');
    })
  })

  $(document).ready(function(){
    $('.next-btn2').on('click', function(){
        $('.tab2').hide();
        $('.tab3').show();
        $('#step3').addClass('active');
        $('#step3').next('h6').addClass('color-my');
    })
  })
