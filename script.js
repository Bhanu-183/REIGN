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