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
});
