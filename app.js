(function( $ ) {

	'use strict';

	$(function() {

		var barHeight;

		// Show notification bar
		if ( $('.mtsnb').length > 0 ) {
			barHeight = $('.mtsnb').outerHeight();
			$('body').css('padding-top', barHeight).addClass('has-mtsnb');
		}

		// Hide Button
		$(document).on('click', '.mtsnb-hide', function(e) {

			e.preventDefault();

			var $this = $(this);

			if ( !$this.hasClass('active') ) {
				$this.closest('.mtsnb').removeClass('mtsnb-shown').addClass('mtsnb-hidden');
				$('body').css('padding-top', 0);
			}
		});

		// Show Button
		$(document).on('click', '.mtsnb-show', function(e) {

			e.preventDefault();

			var $this = $(this);
			
			if ( !$this.hasClass('active') ) {
				barHeight = $('.mtsnb').outerHeight();
				$this.closest('.mtsnb').removeClass('mtsnb-hidden').addClass('mtsnb-shown');
				$('body').css('padding-top', barHeight);
			}
		});
	});

})( jQuery );

jQuery(document).ready(function($) {
    var graphic = $('.we-are__graphic');
  
    if (graphic.length) {
  
        var delay = (function(){var timer = 0;return function(callback, ms){clearTimeout (timer);timer = setTimeout(callback, ms);};})();
  
        jQuery(function($, win) {
        $.fn.inViewport = function(cb) {
            return this.each(function(i,el){
                function visPx(){
                    var H = $(this).height(),
                    r = el.getBoundingClientRect(), 
                    t=r.top, 
                    b=r.bottom;
                    return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
                } visPx();$(win).on("resize scroll ready", visPx);});};}(jQuery, window));
  
        var sections = $('.we-are__content div');
  
        sections.each(function(i , e) {
            var section = $(e);
            section.inViewport(function(px) {
              if(px > 200 && !this.initNumAnim) {
                $(this).addClass('active');
                section.find('#dashed-circle').addClass('active');
                section.find('#graphic-12oclock').addClass('active');
                section.find('#graphic-3oclock').addClass('active');
                section.find('#graphic-6oclock').addClass('active');
                section.find('#graphic-9oclock').addClass('active');
                section.find('#person-12oclock').addClass('active');
                section.find('#person-3oclock').addClass('active');
                section.find('#person-6oclock').addClass('active');
                section.find('#person-9oclock').addClass('active');
                section.find('#jigsaw-12oclock').addClass('active');
                section.find('#jigsaw-3oclock').addClass('active');
                section.find('#jigsaw-6oclock').addClass('active');
                section.find('#jigsaw-9oclock').addClass('active');
                section.find('#paper-plane').addClass('active');
                section.find('#twinkles').addClass('active');
                section.find('#jigsaw-shadow').addClass('active');
                section.find('.we-are__single').addClass('active');
                $('.we-are__label').addClass('active');
                $('.we-are__description').addClass('active');
              }
        });
    });
};
$(window).on("load resize",function(e){

    if (window.matchMedia("(min-width: 1647px)").matches) {

        console.log('large');
        var type = 0.5, //circle type - 1 whole, 0.5 half, 0.25 quarter
            radius = '188px', //distance from center
            start = -90, //shift start from 0
            startL = 45, //shift start from 0

            elementsR = $('.we-are__right .we-are__single'),
            elementsL = $('.we-are__left .we-are__single'),

            numberOfElementsR = (type === 1) ?  elementsR.length : elementsR.length - 1, //adj for even distro of elements when not full circle
            sliceR = 360 * type / numberOfElementsR;

            numberOfElementsL = (type === 1) ?  elementsL.length : elementsL.length - 1, //adj for even distro of elements when not full circle
            sliceL = -360 * type / numberOfElementsL;

        elementsR.each(function(i) {
            var el = $(this),
                rotate = (sliceR * i + start)/2,
                rotateReverse = rotate * -1;
            
            el.css({
                'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
            });
        });
        elementsL.each(function(i) {
            var el = $(this),
                rotate = -45 * i + 45,
                rotateReverse = rotate * -1;
            
            el.css({
                'transform': 'rotate(' + rotate + 'deg) translate(-' +  radius + ') rotate(' + rotateReverse + 'deg)'
            });
        });
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
        console.log('medium');
        var type = 0.5, //circle type - 1 whole, 0.5 half, 0.25 quarter
            radius = '130px', //distance from center
            start = -90, //shift start from 0
            startL = 45, //shift start from 0

            elementsR = $('.we-are__right .we-are__single'),
            elementsL = $('.we-are__left .we-are__single'),

            numberOfElementsR = (type === 1) ?  elementsR.length : elementsR.length - 1, //adj for even distro of elements when not full circle
            sliceR = 360 * type / numberOfElementsR;

            numberOfElementsL = (type === 1) ?  elementsL.length : elementsL.length - 1, //adj for even distro of elements when not full circle
            sliceL = -360 * type / numberOfElementsL;

        elementsR.each(function(i) {
            var el = $(this),
                rotate = (sliceR * i + start)/2,
                rotateReverse = rotate * -1;
            
            el.css({
                'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
            });
        });
        elementsL.each(function(i) {
            var el = $(this),
                rotate = -45 * i + 45,
                rotateReverse = rotate * -1;
            
            el.css({
                'transform': 'rotate(' + rotate + 'deg) translate(-' +  radius + ') rotate(' + rotateReverse + 'deg)'
            });
        });
    } else {
        console.log('small');
        elementsR = $('.we-are__right .we-are__single');
        elementsL = $('.we-are__left .we-are__single');
        elementsR.each(function() {
            $(this).css({
                'transform': 'none'
            });
        });
        elementsL.each(function(i) {
            $(this).css({
                'transform': 'none'
            });
        });
    }
}); 
});

jQuery(document).ready(function() {

  /* THE ROCKET */

  jQuery('img.the-rocket').addClass('shake');
  jQuery('.the-cloud.small').addClass('out');
  jQuery('.the-cloud.big').addClass('out');

  setTimeout(function(){
  jQuery('img.the-rocket').removeClass('shake').addClass('launch');
}, 2000);

  setTimeout(function(){
  jQuery('.the-cloud.small').delay(1000).removeClass('out').addClass('explode');
  jQuery('.the-cloud.big').delay(1000).removeClass('out').addClass('explode');
}, 3000);

 setTimeout(function(){
 jQuery('img.the-rocket').removeClass('launch').addClass('rocket_back');
}, 6000);

/* THE LIGHT BULB */

jQuery('img.the-bulb').addClass('jump');
jQuery('img.the-shadow').addClass('grow');

});

jQuery(document).ready(function() {

  /* SOBOLD HOMEPAGE ANIMATIONS START */

jQuery(function($, win) {
$.fn.inViewport = function(cb) {
 return this.each(function(i,el){
   function visPx(){
     var H = $(this).height(),
         r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
     return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
   } visPx();
   $(win).on("resize scroll", visPx);
 });
};
}(jQuery, window));

jQuery(".design-container").inViewport(function(px) { // Make use of the `px` argument!!!
 // if element entered V.port ( px>0 ) and
 // if prop initNumAnim flag is not yet set
 //  = Animate numbers
 if(px > 100 && !this.initNumAnim) {
   this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
 jQuery('.design-container').removeClass('prevent-animation').addClass('animate-it');
};
});

jQuery(".home-develop-image-container").inViewport(function(px) { // Make use of the `px` argument!!!
 // if element entered V.port ( px>0 ) and
 // if prop initNumAnim flag is not yet set
 //  = Animate numbers
 if(px > 100 && !this.initNumAnim) {
   this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
 jQuery('.home-develop-image-container').removeClass('prevent-animation').addClass('animate');
};
});

jQuery(".home-deliver-image-container").inViewport(function(px) { // Make use of the `px` argument!!!
 // if element entered V.port ( px>0 ) and
 // if prop initNumAnim flag is not yet set
 //  = Animate numbers
 if(px > 100 && !this.initNumAnim) {
   this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
 jQuery('.home-deliver-image-container').removeClass('prevent-animation').addClass('animate');
};
});

/* SOBOLD HOMEPAGE ANIMATIONS ENDS */

});
jQuery(document).ready(function() {

  jQuery("img.white_back_image.screen-fade-from-left-white").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
     jQuery(this).addClass('detach');
   });
   
});

jQuery(document).ready(function($) {

  jQuery("img.the-cog-pink").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
     jQuery(this).addClass('rotate');
   });

   jQuery(".first img.the-arrow").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      jQuery(this).addClass('vibrate');
    });

    jQuery(".first img.the-arrow-shadow").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
       jQuery(this).addClass('vibrate');
     });

     jQuery(".second img.the-arrow").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        jQuery(this).addClass('vibrate');
      });

      jQuery(".second img.the-arrow-shadow").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
         jQuery(this).addClass('vibrate');
       });

       jQuery("img.the-cog-white").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
          jQuery(this).addClass('rotate');
        });

        jQuery(".graph-line-one").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
           jQuery(this).addClass('up-down-one');
         });

         jQuery(".graph-line-two").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            jQuery(this).addClass('up-down-two');
          });

         jQuery(".graph-line-three").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            jQuery(this).addClass('up-down-three');
          });

          jQuery(".graph-line-four").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
             jQuery(this).addClass('up-down-four');
           });

           jQuery(".graph-line-five").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
              jQuery(this).addClass('up-down-five');
            });

});


  jQuery(document).ready(function () {

  !function($,window,document,undefined){$.fn.doubleTapToGo=function(action){return"ontouchstart"in window||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i)?(this.each("unbind"===action?function(){$(this).off(),$(document).off("click touchstart MSPointerDown",handleTouch)}:function(){function handleTouch(e){for(var resetItem=!0,parents=$(e.target).parents(),i=0;i<parents.length;i++)parents[i]==curItem[0]&&(resetItem=!1);resetItem&&(curItem=!1)}var curItem=!1;$(this).on("click",function(e){var item=$(this);item[0]!=curItem[0]&&(e.preventDefault(),curItem=item)}),$(document).on("click touchstart MSPointerDown",handleTouch)}),this):!1}}(jQuery,window,document);

  var current = 1;
	jQuery("nav#mobile-navigation .menu-item").each(function() {
   	jQuery(this).attr("data-id", current);
    current++;
	});

  jQuery("#menu-icon").click(function(){
    jQuery("html").toggleClass("noScroll");
    jQuery("#menu-icon").toggleClass("open");
    jQuery(".custom-nav-overlay").toggleClass("show");
    jQuery(".custom-nav-wrapper").toggleClass("opened");
    jQuery("nav#mobile-navigation .menu-item").toggleClass("delay-500");
	});

   jQuery( '.menu-main-menu-container li:has(ul)' ).doubleTapToGo();

  jQuery("#menu-icon.open").click(function(){
    var current = 8;
	jQuery("nav#mobile-navigation .menu-item").each(function() {
   	jQuery(this).attr("data-id", current);
    current--;
	});
  });

  jQuery(".custom-nav-wrapper.opened").click(function(){
    jQuery("html").removeClass("noScroll");
    jQuery("#menu-icon").removeClass("open");
    jQuery(".custom-nav-overlay").removeClass("show");
    jQuery(".custom-nav-wrapper").removeClass("opened");
    jQuery("nav#mobile-navigation .menu-item").removeClass("delay-500");
    });

});

  jQuery(document).ready(function() {

  var menu_height = jQuery('.header-wrapper').outerHeight();

  jQuery('.the-home-spacer').css({
    'height' : menu_height
  });

 /* SOBOLD SLICK FOR HOMEPAGE HEADER */

    jQuery('.homepage-header-carousel-container').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

  jQuery('.slick-dots').addClass('container');

  		jQuery(".homepage-header-carousel-outer.slick-current .homepage-header-carousel-inner").addClass("animatedParent");
    	jQuery(".homepage-header-carousel-outer.slick-current .homepage-header-carousel").addClass("animated fadeInLeftShort go delay-250");
    	jQuery(".homepage-header-carousel-outer.slick-current img").addClass("animated fadeInDownShort go delay-250");
      jQuery(".homepage-header-carousel-outer.slick-current .homepage-info-slick-container a.button").addClass("animated fadeInLeftShort delay-500 go");

  jQuery(".homepage-header-carousel-container").on("afterChange", function (){

    if (jQuery(".homepage-header-carousel-outer").hasClass("slick-current")) {
      	jQuery(".homepage-header-carousel-inner").removeClass("animatedParent");
    	jQuery(".homepage-header-carousel").removeClass("animated fadeInLeftShort delay-250 go");
    	jQuery(".homepage-header-carousel-outer img").removeClass("animated fadeInDownShort delay-250 go");
      jQuery(".homepage-info-slick-container a.button").removeClass("animated fadeInLeftShort delay-500 go");
  		jQuery(".homepage-header-carousel-outer.slick-current .homepage-header-carousel-inner").addClass("animatedParent");
    	jQuery(".homepage-header-carousel-outer.slick-current .homepage-header-carousel").addClass("animated fadeInLeftShort delay-250 go");
      jQuery(".homepage-header-carousel-outer.slick-current .homepage-info-slick-container a.button").addClass("animated fadeInLeftShort delay-500 go");
    	jQuery(".homepage-header-carousel-outer.slick-current img").addClass("animated fadeInDownShort delay-250 go");
	} else {
    	jQuery(".homepage-header-carousel-inner").removeClass("animatedParent");
    	jQuery(".homepage-header-carousel").removeClass("animated fadeInLeftShort delay-250 go");
      jQuery(".homepage-info-slick-container a.button").removeClass("animated fadeInLeftShort delay-500 go");
    	jQuery(".homepage-header-carousel-outer img").removeClass("animated fadeInDownShort delay-250 go");
    }

  });

  jQuery('.testimonial-content').slick({
    slidesToShow: 4,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    arrows: true,
    dots : false,
    centerMode: true,
    responsive: [
    {
      breakpoint: 1921,
      settings: {
        slidesToShow: 3,
        infinite: true,
        variableWidth: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        centerMode: false,
        arrows: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
          variableWidth: true,
          adaptiveHeight: true,
          dots: true,
          arrows: false,
          centerMode: true
        }
    },
    {
      breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: true,
        //  centerPadding: '60px'
        }
      }
    ]
  });

  if (Modernizr.mq('(max-width: 767px)')) {
  } else {
    if(jQuery(".testimonials-header.container").length > 0)  {

      var boxPos  = jQuery(".testimonials-header.container").offset(),
      toLeft  = boxPos.left,
      extraleft = toLeft + 0;

      jQuery(".testimonial-content-outer .slick-list").css({
        'padding-left' : extraleft + "px"
      });

      jQuery(window).resize(function(){
        var boxPos  = jQuery(".testimonials-header.container").offset(),
            toLeft  = boxPos.left,
            extraleft = toLeft + 0;

        jQuery(".testimonial-content-outer .slick-list").css({
          'padding-left' : extraleft + "px"
        });
      });
    }
  }

  /* SOBOLD SLICK FOR NEW CLIENTS BLOCK */
  jQuery('.img-row-container').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

jQuery(window).on('resize orientationchange', function() {

  var menu_height = jQuery('.header-wrapper').outerHeight();

  jQuery('.the-home-spacer').css({
    'height' : menu_height
  });

});

jQuery(document).ready(function($) {
    jQuery('.deliver-sector-drop-down').change( function(event) {
        // Prevent defualt action - opening tag page
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        // Get tag slug from title attirbute
        var selecetd_taxonomy = $('.deliver-sector-drop-down option:selected').val();

        // After user click on tag, fade out list of posts
        jQuery('.deliver-projects-container').fadeOut();

        data = {
            action: 'filter_posts', // function to execute
            afp_nonce: afp_vars.afp_nonce, // wp_nonce
            taxonomy: selecetd_taxonomy, // selected tag

          };

        $.post( afp_vars.afp_ajax_url, data, function(response) {

            if( response ) {
                // Display posts on page
                $('.deliver-projects-container').html( response );
                // Restore div visibility
                $('.deliver-projects-container').fadeIn();
            };
          });

  });

});

jQuery(document).ready(function($) {
	var loadMoreButton = $('.print-design__load-more .button');
	var maxPage = $(loadMoreButton).attr('data-max-pages');
	var currPage = $(loadMoreButton).attr('data-current-page');

	
	if (maxPage <= 1) {
		$('.print-design__load-more').hide();
	}

	jQuery('.print-design .project-dropdown').change( function(event) {		
		// Prevent defualt action - opening tag page
        if (event.preventDefault) {
        	event.preventDefault();
        } else {
        	event.returnValue = false;
        };
        
        $('.print-design__load-more').hide();
        currPage = 1;
        $(loadMoreButton).attr('data-current-page', currPage);
        // Get taxonomy slug from title attribute
        var pd_selected_taxonomy_sector = $('.print-design .sector-drop-down option:selected').val();
        // After user click on tag, fade out list of posts
        jQuery('.print-design .print-design__row').fadeOut();

        var pd_data = {
        	action: 'print_design_dropdown', // function to execute
            security: vars_print_design_dropdown.nonce_print_design_dropdown, // wp_nonce
			pd_taxonomy_sector: pd_selected_taxonomy_sector, // selected taxonomy
			currentPage: currPage,
        };
        
		run_ajax(pd_data);

		function run_ajax(data) {
			$.ajax({
				method: 'POST',
				url: vars_print_design_dropdown.print_design_dropdown_url,
				data: data,
			}).done(function(response){
	            $('.print-design .print-design__row').html(response).fadeIn();
	            $('.print-design__brochure').click(function(){
					var pdfUrl = $(this).attr('src');
					
					$('.flipbookLightbox').css('display', 'flex');

					$('.flipbookLightbox__wrapper').FlipBook({
						pdf: pdfUrl,
						controlsProps: {
							scale: {
								default: 0.8
							}
						},
						template: {
				          html: '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/templates/sobold-template.html',
				          styles: [
				            '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/css/sobold-print-design.css'
				          ],
				          links: [
				            {
				              rel: 'stylesheet',
				              href: '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/css/font-awesome.min.css'
				            }
				          ],
				          script: '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/js/default-book-view.js'
				        }
					});
				})
	            maxPage = maxPagesFiltered;
	            if (maxPage > 1) {
	            	$('.print-design__load-more').show();
	            }
			});
		}
	});

	jQuery(loadMoreButton).click(function(){
		// Prevent defualt action - opening tag page
		if (event.preventDefault) {
	        event.preventDefault();
	    } else {
	        event.returnValue = false;
	    }
		
		currPage++;
		$(loadMoreButton).attr('data-current-page', currPage);
		// Get taxonomy slug from title attribute
        var pd_selected_taxonomy_sector = $('.print-design .sector-drop-down option:selected').val();

		var dataPdLm = {
            action: 'print_design_dropdown', //function to execute
            security: vars_print_design_dropdown.nonce_print_design_dropdown, //wp_nonce
            pd_taxonomy_sector: pd_selected_taxonomy_sector, // selected taxonomy
			currentPage: currPage //allows AJAX PHP file to access new variable value
        };

        run_ajax(dataPdLm);

		function run_ajax(data) {
			$.ajax({
				method: 'POST',
				url: vars_print_design_dropdown.print_design_dropdown_url,
				data: data,
			}).done(function(response){
	        	$('.print-design .print-design__row').append(response).fadeIn();
     			$('.print-design__brochure').click(function(){
					var pdfUrl = $(this).attr('src');
					
					$('.flipbookLightbox').css('display', 'flex');

					$('.flipbookLightbox__wrapper').FlipBook({
						pdf: pdfUrl,
						controlsProps: {
							scale: {
								default: 0.8
							}
						},
						template: {
				          html: '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/templates/sobold-template.html',
				          styles: [
				            '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/css/sobold-print-design.css'
				          ],
				          links: [
				            {
				              rel: 'stylesheet',
				              href: '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/css/font-awesome.min.css'
				            }
				          ],
				          script: '/wp-content/themes/SoBold/js/3d-flip-book/3d-flip-book/js/default-book-view.js'
				        }
					});
				})
	          	$(loadMoreButton).attr('data-max-pages', maxPagesFiltered);
	            maxPage = maxPagesFiltered;
	            if (currPage == maxPage) {
	            	$('.print-design__load-more').hide();
	            }
			});
		}
	});
});

jQuery(document).ready(function($){

  var map = $('.dynamic-map__image-front');
  var map_w = map.outerWidth();
  //var map_h = map.outerHeight();

  var pointers = {};
  var pointer_list = $('.image-pointer');

  pointer_list.each(function(){

    var el = $(this);
    var el_id = el.attr('data_pin');
    var el_left = el.css('left');
    var el_top = el.css('top');

    el_top_r = el_top.replace('px' , '');
    el_left_r = el_left.replace('px' , '');

    var pointer = {
      'x': el_left_r,
      'y': el_top_r
    };

    pointers[el_id] = pointer;

  });

  if (map_w < 1114) {
    calculatepinposition(1114 , map_w);
  } else {
    $('.image-pointer').css('opacity' , 1);
  }

  $(window).resize(function(){
    calculatepinposition('resize' , '');
  });

  function calculatepinposition(oldx , newx) {

    if (oldx == 'resize') {
      var map_resize_w = map.outerWidth();
    } else {
      map_w = oldx;
      var map_resize_w = newx;
    }

    if (map_w != map_resize_w) {

        var perc = ( map_resize_w * 100 ) / map_w;

        for (var el in pointers) {

          pointers[el].x  = (pointers[el].x /100) * perc;
          pointers[el].y = (pointers[el].y /100) * perc;
        }

        pointer_list.each(function(i , el){

          var el_data_pin = $(el).attr('data_pin');

          $(el).css('left' , pointers[el_data_pin].x+'px');
          $(el).css('top' , pointers[el_data_pin].y+'px');

        });

        map_w = map_resize_w;

    }

    $('.image-pointer').css('opacity' , 1);
  }

});

