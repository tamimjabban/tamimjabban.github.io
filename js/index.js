$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // if (scroll < 100) {
        // }
        if (scroll > 400) {
            $(".navbar").addClass('scrolled')
            $(".navbar-brand").css("visibility", "visible")
        } else {
            $(".home-tag").first().addClass("active")
            $(".navbar").removeClass('scrolled')
            $(".navbar-brand").css("visibility", "hidden")

        }
    });
})