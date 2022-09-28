window.addEventListener("DOMContentLoaded", function () {

    var insliderTop = document.querySelector('.insliderTop');
    var banner1 = document.querySelector('.banner1');
    var inslider = document.querySelector('.inslider');
    var closeBanner = document.querySelector('.inslider__close');
    var jsbannersticky = document.querySelector('#js-banner-sticky');
    var mybannerHeight = insliderTop.offsetHeight;


    //kompascom only : top sticky condition
    if (jsbannersticky != null) {
        jsbannersticky.style.height = mybannerHeight + "px"; 
    }

    setTimeout(function(){ 
        inslider.classList.add("inslider--play");
    }, 250);

    closeBanner.addEventListener("click", function () {
        inslider.classList.remove("inslider--play");
        inslider.classList.add("inslider--stop");        
        setTimeout(function(){ 
            insliderTop.style.display = "none"; 
            if (jsbannersticky != null) {
                jsbannersticky.style.height = 0; 
            }           
        }, 500);
        
    });
    

});




