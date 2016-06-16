$(function() {
    var $bigHeader=$('.big-header'),
        $littleHeader=$('.little-header'),
        $headerDiv = $bigHeader.outerHeight(true) || $littleHeader.outerHeight(true);
        $bottomOfHeader = $headerDiv - 100;

    console.log($headerDiv);
// trying to make a splash screen

    var $window = $(window),
      $body = $('body');

       $window.on('load', function() {
        window.setTimeout(function() {
          $('#banner .fadecard').addClass('invisible');
        }, 1000);
      });

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
