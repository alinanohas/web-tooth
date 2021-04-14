
const maxRotationDegreesX = 31;
const maxRotationDegreesY = 31;
const perspectivePx = 600;

$(document).ready(function () {

  const trackingAreaShiftX = $(".wear").offset().left;
  const trackingAreaShiftY = $(".wear").offset().top;

  const halfTrackingAreaWidth = $(".wear").width() / 2;
  const halfTrackingAreaHeight = $(".wear").height() / 2;

  const mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth;
  const mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight;

  $.each($(".wear"), function (index, value) {

    let wear = index + 1;
    let ellipse = $(".wear").children()[index];
    // let ellipse = $(".wear").children()[index] && $(".fill-brief").children()[0] ;
    console.log('ellipse', ellipse);


    $(`.wear${wear}`).on("mousemove", function () {

      // let ind = $(".wear").index(this);
      // let ellipse = $(".wear").children()[ind];

      let x = event.clientX - mouseCoordinateCorrectionX;
      let y = event.clientY - mouseCoordinateCorrectionY;

      let rotationY = x * 15 / halfTrackingAreaWidth;
      let rotationX = -y * maxRotationDegreesY / halfTrackingAreaHeight;

      let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.2, 1.2)`;
      let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.4)`;

      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-moz-transform", transform);
      $(ellipse).css("-ms-transform", transform);
      $(ellipse).css("-o-transform", transform);
      $(ellipse).css("transform", transform);
      $(ellipse).css("transform", transform);
      $(`.el-txt${wear}`).css("transform", transform2);
      $(ellipse).css("box-shadow", "0px 4px 30px 9px rgba(249, 180, 24, 0.2)");
      $(ellipse).css("background-color", " #000");
      $(ellipse).css("z-index", " 999");

    });

    $(`.wear${wear}`).on("mouseleave", function () {

      // let ind = $(".wear").index(ellipse);
      // let ellipse = $(".wear").children()[ind];

      let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;
      $(ellipse).css("transform", transform);
      $(ellipse).css("box-shadow", "none");

      $(`.el-txt${wear}`).css("transform", transform);
      $(ellipse).css("background-color", " transparent");
      $(ellipse).css("z-index", " -1");

    });

  });
});


//Мої правки

$('.slide-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<img class="prev" src="Style/Images/Arrow 2.png" alt="" style="height: 10px; cursor: pointer;">',
  nextArrow: '<img class="next" src="Style/Images/Arrow 2.png" alt="" style="transform: rotate(180deg); height: 10px; cursor: pointer;">',
  asNavFor: '.slider-nav',
  variableWidth: true,
  adaptiveHeight: true,
});
$('.slider-nav').slick({
  slidesToShow: 8,
  // slidesToScroll: 1,
  asNavFor: '.slide-box',
  variableWidth: true,
  // dots: true,
  // centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 4,
        // slidesToScroll: 1,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 4,
        //   slidesToScroll: 1,
        //   infinite: true,
        //   dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 1,
        dots: false

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1,
        dots: false

      }
    }
  ]
});


$('.slide-box').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('#external-buttons p.active').removeClass('active');
  $('#external-buttons p').eq(nextSlide).addClass('active');
});


$('#external-buttons p').on('click', function (e) {
  e.preventDefault();
  $('#external-buttons p.active').removeClass('active');
  $(this).addClass('active');
  var targetSlide = $(this).data('target');
  $('.slide-box').slick('slickGoTo', targetSlide);
});


//   $(document).ready(function(){
//     $('div[data-type="background"]').each(function(){
//         var $bgobj = $(this); 
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
//             var coords = 'center '+ yPos + 'px';
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// });


// $(window).scroll(function () {

//   $('.anim').css({
//       'top': 200-($(this).scrollTop() / 3) + "px"
//   });

// });


// $(window).scroll(function() {
//   var top_of_element = $(".our-best-team").offset().top;
//   var bottom_of_element = $(".our-best-team").offset().top + $(".our-best-team").outerHeight();
//   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//   var top_of_screen = $(window).scrollTop();

//   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

//    $('.members-photo').css({ 
//      'position' : 'relative',
//      'top': -200 + "px"
//     });

//   } else {

//     $('.members-photo').css({ 
//       'position' : 'relative',
//       'top': 0 + "px"
//      });
//   }
// });

// $('.parallax').each(function(){ 

//   if ($(this).is_on_screen()) {
//     var firstTop = $(this).offset().top;
//     var winScrollTop = $(window).scrollTop();
//     var shiftDistance = (firstTop - winScrollTop)*0.02;

//     $(this).css("transform":"translateY("+shiftDistance+"px)");
//   }
// }); 

console.log($(".members-photo").length);

$(document).ready(function () {
  //parallax scroll
  $(window).on("load scroll", function () {
    var parallaxElement = $(".about-members"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          // viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5;
          viewPortHeight = window.innerHeight * 0.5 - elementHeight;
          scrolled = windowTop - elementTop + viewPortHeight;

          viewPortHeight2 = window.innerHeight * 0.5 - ($('.hi').scrollTop());
          scrolled2 = windowTop - $('.hi').offset().top + viewPortHeight2;

        var shiftDistance = (elementTop - windowTop) * 0.05;

        speed = currentElement.data('animation-speed') + 's';

        currentElement.css({
          // transform: "translateY("+shiftDistance+"px)",
          transform: "translate3d(0," + scrolled * -0.16 + "px, 0)",
          // transition: `transform  ${speed} cubic-bezier(.19,1,.22,1)`
          transition: `transform cubic-bezier(.19,1,.22,1) ${speed}`
          // transition: `transform cubic-bezier(.19,1,.22,1) `
        });
        $(".lef").css({

          transform: "translateX(" + -shiftDistance + "px)",
          transition: `0.6s linear`
        });
        $(".rig").css({

          transform: "translateX(" + shiftDistance + "px)",
          transition: `0.6s linear`
        });
        $('.hello').css({
          transform: "translateY(" + scrolled2 * 1.2 + "px) scale(2)",
          transition: `linear`

        });
        $('.we').css({
          transform: "translateX(" + scrolled2 * -0.2 + "px)",
          transition: `linear`

        })
      }
    });
  });
});

