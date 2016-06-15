$(function() {
    var $bigHeader=$('.big-header'),
        $littleHeader=$('.little-header'),
        $headerDiv = $bigHeader.outerHeight(true) + $littleHeader.outerHeight(true);
        $bottomOfHeader = $headerDiv - 100;

    console.log($headerDiv);
// trying to make a splash screen

    var $window = $(window),
      $body = $('body');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

       $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 100);
      });
// end of my script


    $(window).scroll(function(){
        if ($(window).scrollTop() > $bottomOfHeader) {
            $('.my-menu').removeClass('hidden');
        } else {
            $('.my-menu').addClass('hidden');
        }
    });

    $('.my-menu .button').click(function(e) {
        e.preventDefault;
        e.stopPropagation;
        $('#side-menu').toggleClass('visible');
    });

    $('#title').addClass('border-drawn');
});
