$(function() {
    var $bigHeader=$('.big-header'),
        $littleHeader=$('.little-header'),
            $headerDiv = $bigHeader.outerHeight(true) || $littleHeader.outerHeight(true);
        $bottomOfHeader = $headerDiv;

    console.log($headerDiv);
// trying to make a splash screen

    var $window = $(window),
      $body = $('body');

       $window.on('load', function() {
        window.setTimeout(function() {
          $('#banner .fadecard').addClass('invisible');
        }, 1000);
      });

// adding the button a little later
              $window.on('load', function() {
        window.setTimeout(function() {
          $('#subt').removeClass('invisiblestart1');
          $('#subt').addClass('visiblestart1');
        }, 1500);
      });

// adding the button a little later
              $window.on('load', function() {
        window.setTimeout(function() {
          $('#newsbits').removeClass('invisiblestart2');
          $('#newsbits').addClass('visiblestart2');
          $('#morearrow').removeClass('beforearrow');
          $('#morearrow').addClass('arrowcomesin');
        }, 2500);
      });
// scroll down when clicking on "more"

$('#morearrow').click(function() {
   //optionally remove the 500 (which is time in milliseconds) of the
   //scrolling animation to remove the animation and make it instant
  $('html,body').animate({
        scrollTop: $(".one").offset().top},
        'slow');
});

// menutop appearing when scrolling down
    $(window).resize(function() {
        $headerDiv = $bigHeader.outerHeight(true) || $littleHeader.outerHeight(true);
        $bottomOfHeader = $headerDiv;
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > $bottomOfHeader) {
            $('.my-menu').removeClass('hidden');
        } else {
            $('.my-menu').addClass('hidden');
        }
    });

// hamburger menu

    $('.my-menu .button').click(function(e) {
        e.preventDefault;
        e.stopPropagation;
        $('#side-menu').toggleClass('visible');
    });

//border effect on title
   $('#title').addClass('border-drawn');
});

