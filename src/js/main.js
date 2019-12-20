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

  slider();

 	function slider() {
	  // Init fancybox
		// =============
		let selector = '.slick-slide:not(.slick-cloned) .sec-3__slide-img';

		// Skip cloned elements
		$('[data-dns-fancybox]').fancybox({
		  selector : selector,
		  type: 'image',
		  loop: true,
		  gutter: 0,
		  buttons: [
		    // "zoom",
		    //"share",
		    // "slideShow",
		    //"fullScreen",
		    //"download",
		    // "thumbs",
		    "close"
		  ],
		  baseTpl:
	    '<div class="fancybox-container fancybox-dns" role="dialog" tabindex="-1">' +
	    '<div class="fancybox-bg"></div>' +
	    '<div class="fancybox-inner">' +
	    // '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
	    
	    '<div class="fancybox-stage">' +
	    '<div class="fancybox-toolbar">{{buttons}}</div>' +
	    '<div class="fancybox-navigation">{{arrows}}</div>' +
	    '</div>' +
	    // '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
	    '</div>' +
	    '</div>',

		  // backFocus : false
		});

		// Attach custom click event on cloned elements, 
		// trigger click event on corresponding link
		$(document).on('click', '.slick-cloned', function(e) {
		  $(selector)
		    .eq( ( $(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length )
		    .trigger("click.fb-start", {
		      $trigger: $(this)
		    });

		  return false;
		});


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
	  });

 	};
    
});

