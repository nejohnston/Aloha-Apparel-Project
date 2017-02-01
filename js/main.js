$(document).ready(function() {
    $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    percentPostition: true,
    imagesLoaded: true,
    autoPlay: true,
    prevNexButtons: false
});
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
