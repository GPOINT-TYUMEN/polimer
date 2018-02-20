$(function () {
	//> SEC ADVANTAGES
	var oui66 = $('.advantages-module-1 .advantages-content-wrapper');
	    oui66Html1 = $(oui66).html();
	    owloui66 = $(oui66),
	    owloui66Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        dots: false,
	        items: 1,
	        lazyLoad: true,
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
	                items: 3,
	                nav: false,
	            }
	        }        
	    }; 
	        
	function startOwloui66() {
	    $(owloui66).addClass('owl-carousel');
	      owloui66.owlCarousel(owloui66Options);
	}

	startOwloui66();
	
	$('body').on('click', '.advantages-module-1 .advantage-but', function () {
		var contentMore = $(this).parent().parent().find('.show-modal-window').html();

		$('.more-content .content').html(contentMore);
	});
	//< SEC ADVANTAGES
});