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
                    }
