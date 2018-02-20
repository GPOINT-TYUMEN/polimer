$(function () {
	//> SEC ADVANTAGES
	var hti33 = $('.catalog-module .advantages-content-wrapper');
	    hti33Html1 = $(hti33).html();
	    owlhti33 = $(hti33),
	    owlhti33Options = {
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
	                items: 1,
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
	        
	function startOwlhti33() {
	    $(owlhti33).addClass('owl-carousel');
	      owlhti33.owlCarousel(owlhti33Options);
	}
	
	startOwlhti33();

	$('body').on('click', '.catalog-module .advantage-but', function () {
		var contentMore = $(this).parent().parent().find('.show-modal-window').html();

		$('.more-content .content').html(contentMore);
	});
	//< SEC ADVANTAGES
});