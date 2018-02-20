$(function () {
	//> SEC ADVANTAGES
	var adv1 = $('.oplata .advantages-content-wrappers');
	    adv1Html1 = $(adv1).html();
	    owlAdv1 = $(adv1),
	    owlAdv1Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        lazyLoad: true,
	        items:1,
		    margin:10,
		    autoHeight:true,
	        responsive:{
	             0:{
	                items:1,
	                nav: false,
	            },


	            524: {
	                items: 2,
	                nav: false
	            },

	            748:{
	                items: 2,
	                nav: false,
	            },

	            960:{
	                items: 2,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 950) {
	    startOwlAdv1();
	}

	$(window).resize(function () {
	    if ($(window).width() > 950) {
	         owlAdv1.trigger('destroy.owl.carousel');
	        $(owlAdv1).removeClass('owl-carousel');
	        $(adv1).html(adv1Html1);
	    } else {
	        if (!$(owlAdv1).hasClass("owl-carousel")) {
	            startOwlAdv1();            
	        }
	    }
	}); 

	function startOwlAdv1() {
	    $(owlAdv1).addClass('owl-carousel');
	      owlAdv1.owlCarousel(owlAdv1Options);
	}
	//< SEC ADVANTAGES
});