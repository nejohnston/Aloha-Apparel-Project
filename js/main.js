$(function() {
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
})
$(function() {
    $('.flickity-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    percentPosition: false,
    imagesLoaded: true,
    autoPlay: false,
    prevNextButtons: false,
    resize: true,
})});

