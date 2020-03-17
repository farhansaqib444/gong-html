$(document).ready(function(){

  $( ".btn-loader" ).click(function(e){
    e.preventDefault();
    $(this).toggleClass('sending').blur();

    setTimeout(function(){
      $( ".btn-loader" ).removeClass('sending').blur();
    },1500);

  });

  $('.artist-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  });
});
