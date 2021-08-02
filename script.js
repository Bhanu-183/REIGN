$(".navbar-collapse a").click(function () {
    var element;
    element = document.getElementById('navbarSupportedContent');
    element.className = element.className.replace("show", "");
});

function navchange(evt, navname) {
    var i, tablinks;
    tabcontent = document.getElementsByClassName("nav-link");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    document.getElementById(navname).className += " active";
    // evt.currentTarget.className += " active";
}



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


function openProject(evt, tabName) {
    var i, projectcontent, tablinks;
    projectcontent = document.getElementsByClassName("project-content");
    for (i = 0; i < projectcontent.length; i++) {
        projectcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("project-tabs");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" clicked", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " clicked";
}


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