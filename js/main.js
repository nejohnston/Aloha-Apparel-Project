$(document).ready(function() {
    $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    percentPostition: true,
    imagesLoaded: true,
    autoPlay: true,
    prevNexButtons: false
});
})

$(function scrollNav() {
$('#nav a').click(function(){  
  //Toggle Class
  debugger;
  $(".first-scroll").removeClass("first-scroll");      
  $(this).closest('li').addClass("first-scroll");
  var theClass = $(this).attr("first-scroll");
  $('.'+theClass).parent('li').addClass('first-scroll');
  //Animate
  $('html, body').stop().animate({
      scrollTop: $( $(this).attr('href') ).offset().top - 160
  }, 4000);
  return false;
});
$('.scrollTop a').scrollTop();
}
,scrollNav())
