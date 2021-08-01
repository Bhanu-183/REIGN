$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 2200) {
        $(window).off("scroll", startCounter);
        $('.downloads').each(function () {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $('.minutes').each(function () {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $('.coffees').each(function () {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });

    }
}

$(document).ready(function () {


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
            $(".navbar").css("background", "rgba(0,0,0,0.95)");
        } else {
            $(".navbar").css("background", "rgba(0,0,0,0)");
        }
    });
});

function videoEnded() {
    document.getElementById('video').style.display = "none";
}