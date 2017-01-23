$(function (){
$('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    percentPostition: true,
    imagesLoaded: true,
    autoPlay: true,
    prevNexButtons: false
});
});
// $(document).ready(function(e){
//     e.preventDefault();
//     $('.submit').on('click', '.button', function(){
//         if (input type email = value email then return alert string "Thank You for Subscribing!"
//         else return alert string "Please enter valid email."
//     });
// });
