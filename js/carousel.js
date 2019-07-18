// console.log("loaded carousel");
//
// // Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//   interval: false
// });
//
// // for every slide in carousel, copy the next slide's item in the slide.
// // Do the same for the next, next item.
// $('.multi-item-carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
//
//   if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//   } else {
//   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   }
// });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin:30,
    stagePadding: 28,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:3
        }
    },
    nav: false,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
});

// $(document).on('ready', function() {
//   $(".center").slick({
//     centerMode: true,
//     centerPadding: '30px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 800,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });

// var carousel;
// $(document).ready(function () {
//     carousel = $(".unorderedList");
//     carousel.itemslide();
// });
