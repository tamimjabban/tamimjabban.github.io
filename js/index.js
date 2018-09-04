$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".name").removeClass("hide");
            $(".navbar").addClass("bg-custom");

            //   $(".name").css("display" , "inline");
        } else {

            $(".name").addClass("hide");
            $(".navbar").removeClass("bg-custom");

        }
    });

    $('.navbar-nav a').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(event.delegateTarget.hash).offset().top - 150
        }, 0);
    });
})