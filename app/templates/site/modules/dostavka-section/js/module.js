$(function () {
	//> SEC ADVANTAGES
	var adv2 = $('.dostavka-sec .advantages-content-wrapper');
	    adv2Html1 = $(adv2).html();
	    owladv2 = $(adv2),
	    owladv2Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
	        responsive:{
	             0:{
	                items:1,
	                nav: false,
	            },


	            524: {
	                items: 1,
	                nav: false
	            },

	            748:{
	                items: 1,
	                nav: false,
	            },

	            960:{
	                items: 2,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 950) {
	    startOwladv2();
	}

	$(window).resize(function () {
	    if ($(window).width() > 950) {
	         owladv2.trigger('destroy.owl.carousel');
	        $(owladv2).removeClass('owl-carousel');
	        $(adv2).html(adv2Html1);
	    } else {
	        if (!$(owladv2).hasClass("owl-carousel")) {
	            startOwladv2();            
	        }
	    }
	}); 

	function startOwladv2() {
	    $(owladv2).addClass('owl-carousel');
	      owladv2.owlCarousel(owladv2Options);
	}
	//< SEC ADVANTAGES
});