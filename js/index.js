$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".name").removeClass("hide");
            $(".navbar").addClass("bg-custom");

        //   $(".name").css("display" , "inline");
        }
  
        else{
            
            $(".name").addClass("hide");
            $(".navbar").removeClass("bg-custom");

        }
    })
  })