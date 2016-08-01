$(function () {
    $('#wond > li').hover(
        function () {
            var $this = $(this);
            $this.stop().animate({
                'width': '480px'
            }, 500);
            $('.heading', $this).stop(true, true).fadeOut();
            $('.sectnDes', $this).stop(true, true).slideDown(500);
            $('.description', $this).stop(true, true).fadeIn();
        },
        function () {
            var $this = $(this);
            $this.stop().animate({
                'width': '115px'
            }, 1000);
            $('.heading', $this).stop(true, true).fadeIn();
            $('.description', $this).stop(true, true).fadeOut(500);
            $('.sectnDes', $this).stop(true, true).slideUp(700);
        }
    );
});
