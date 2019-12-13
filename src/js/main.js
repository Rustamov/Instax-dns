svg4everybody(); //for svg spite in ie


let $body,
    wWidth = 0,
    wHeight = 0,
    W_SM = 380,
    W_MD = 720,
    W_LG = 992,
    W_XL = 1200,

    LOADER_HTML = '<div class="overlay-loader"><div class="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>'

;


$(document).ready(function () {
  $body = $('body');

  $('.sec-3__slides').slick({
  	dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 6,
	  responsive: [
		  {
	      breakpoint: W_LG,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	      }
	    },
		  {
	      breakpoint: W_SM,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	      }
	    },
	  ]
	  // centerMode: true,
	  // variableWidth: true
  })
    
});

