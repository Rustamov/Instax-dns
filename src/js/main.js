svg4everybody(); //for svg spite in ie


let $body,
    wWidth = 0,
    wHeight = 0,
    W_SM = 576,
    W_MD = 768,
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
	  // centerMode: true,
	  // variableWidth: true
  })
    
});

