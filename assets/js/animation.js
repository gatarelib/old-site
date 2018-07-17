$(document).ready(function() {
    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    	}
		});

    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
