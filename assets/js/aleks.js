$(function() {
    var $headerDiv = $('.big-header') || $('.little-header'),
        $bottomOfHeader = $headerDiv.outerHeight(true);

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
