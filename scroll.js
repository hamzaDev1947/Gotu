$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    
    if (scroll >= 150) {
        
        $(".head").addClass("nav-active");
    } else {
        $(".head").removeClass("nav-active");
    }

    

}); 