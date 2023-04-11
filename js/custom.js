(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

document.querySelector(".webone_link").onclick =() =>{
  window.open ('https://sleepy-scrubland-64819.herokuapp.com/home')
}

document.querySelector(".webone").onclick =() =>{
  window.open ('https://sleepy-scrubland-64819.herokuapp.com/home')
}

document.querySelector(".pig").onclick =() =>{
  window.open ('https://cerulean-pasca-c4ca07.netlify.app/#')
}

document.querySelector(".git_1").onclick =() =>{
  window.open ('https://github.com/sauravsaran99/TataCliq-Back-end')
}

document.querySelector(".lakmelink").onclick =() =>{
  window.open ('https://sauravsaran99.github.io/lakmeindia/')
}

document.querySelector(".lakmek").onclick =() =>{
  window.open ('https://sauravsaran99.github.io/lakmeindia/')
}

document.querySelector(".git_2").onclick =() =>{
  window.open ('https://github.com/sauravsaran99/lakmeindia')
}

document.querySelector(".git_3").onclick =() =>{
  window.open ('https://github.com/sauravsaran99/pig-game-')
}