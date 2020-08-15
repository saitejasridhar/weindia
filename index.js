$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});


$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});





var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();


  const testDesc = document.querySelector(".description");
      const imageDesc = document.querySelector(".photo-descriptive");
      const cofee = document.querySelector(".cofee");
      const title = document.querySelector(".l-heading");

      delay(function(){}, 5000 )

      const tl = gsap.timeline({ defaults: { duration: 3 } });
      tl.from(".anim1", { y: -50, opacity: 0, stagger: 0.4 })
        .from("aside", { backgroundPosition: "-200px", opacity: 0 }, "-=1")
        .from(
          cofee,
          {
            y: 20,
            opacity: 0
          },
          "-=0.2"
        );









     (function($) {
 
  var SliceSlider = {
    
    /**
     * Settings Object
     */
    settings: {
      delta:              0,
      currentSlideIndex:  0,
      scrollThreshold:    40,
      slides:             $('.slide'),
      numSlides:          $('.slide').length,
      navPrev:            $('.js-prev'),
      navNext:            $('.js-next'),
    },
    
    /**
     * Init
     */
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    
    /**
     * Bind our click, scroll, key events
     */
    bindEvents: function(){
      
      // Scrollwheel & trackpad
      s.slides.on({
        'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
      });
      // On click prev
      s.navPrev.on({
        'click' : SliceSlider.prevSlide
      });
      // On click next
      s.navNext.on({
        'click' : SliceSlider.nextSlide
      });
      // On Arrow keys
      $(document).keyup(function(e) {
        // Left or back arrows
        if ((e.which === 37) ||  (e.which === 38)){
          SliceSlider.prevSlide();
        }
        // Down or right
        if ((e.which === 39) ||  (e.which === 40)) {
          SliceSlider.nextSlide();
        }
      });
    },
    
    /** 
     * Interept scroll direction
     */
    handleScroll: function(e){

      // Scrolling up
      if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 

        s.delta--;
     
        if ( Math.abs(s.delta) >= s.scrollThreshold) {
          SliceSlider.prevSlide();
        }
      }
 
      // Scrolling Down
      else {
 
        s.delta++;
 
        if (s.delta >= s.scrollThreshold) {
          SliceSlider.nextSlide();
        }
      }
 
      // Prevent page from scrolling
      return false;
    },

    /**
     * Show Slide
     */
    showSlide: function(){ 
      // reset
      s.delta = 0;
      // Bail if we're already sliding
      if ($('body').hasClass('is-sliding')){
        return;
      }
      // Loop through our slides
      s.slides.each(function(i, slide) {

        // Toggle the is-active class to show slide
        $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
        $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
        $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
        
        // Add and remove is-sliding class
        $('body').addClass('is-sliding');

        setTimeout(function(){
            $('body').removeClass('is-sliding');
        }, 1000);
      });
    },

    /**
     * Previous Slide
     */
    prevSlide: function(){
      
      // If on first slide, loop to last
      if (s.currentSlideIndex <= 0) {
        s.currentSlideIndex = s.numSlides;
      }
      s.currentSlideIndex--;
      
      SliceSlider.showSlide();
    },

    /**
     * Next Slide
     */
    nextSlide: function(){
      
      s.currentSlideIndex++;
   
      // If on last slide, loop to first
      if (s.currentSlideIndex >= s.numSlides) { 
        s.currentSlideIndex = 0;

       
      }
 
      SliceSlider.showSlide();
    },
  };
  SliceSlider.init();
})(jQuery);







$(function () {

    // Define window variables

    var winScrollTop = $(window).scrollTop();
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;

    // Define scene classes.
    var sceneClass = 'scene';
    var sceneActiveClass = sceneClass + '--active';
    var sceneEndedClass = sceneClass + '--ended';

    $(window).on('resize', function () {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
    });

    // Scene classes function.
    function setScene($el) {

        // Get bounding values from section.
        var bounding = $el.data('elDom').getBoundingClientRect();

        if (bounding.top > winHeight) {

            // Section is below the viewport.
            // Section has not ended or started, therefore remove classes.
            $el.find('.scene').removeClass(sceneActiveClass);
            $el.find('.scene').removeClass(sceneEndedClass);

        } else if (bounding.bottom < 0) {

            // Section is above the viewport.
            // Section has ended, therefore remove classes.
            $el.find('.scene').addClass(sceneEndedClass);
            $el.find('.scene').removeClass(sceneActiveClass);

        } else {

            // We're now inside the section, not below or above.
            // If top of section is at top of viewport, add class active.
            if (bounding.top <= 0) {
                $el.find('.scene').addClass(sceneActiveClass);
            }

            // If top of section is below top of viewport, remove class active.
            if (bounding.top > 0) {
                $el.find('.scene').removeClass(sceneActiveClass);
            }

            // If bottom of section is at bottom of viewport, add class ended.
            if (bounding.bottom <= (winHeight)) {
                $el.find('.scene').addClass(sceneEndedClass);
            }

            // If bottom of section is not at bottom of viewport, remove class ended.
            if (bounding.bottom > (winHeight)) {
                $el.find('.scene').removeClass(sceneEndedClass);
            }
        }
    }

    // This function sets up the horizontal scroll. This applies data attributes to the section for later use.
    function setUpHorizontalScroll($el) {

        var sectionClass = $el.attr('class');

        // Set content wrapper variables & data attributes.
        var $contentWrapper = $el.find('.' + sectionClass + '__content-wrapper');
        var contentWrapperDom = $contentWrapper.get(0);
        $el.data('contentWrapper', $contentWrapper);
        $el.data('contentWrapperDom', contentWrapperDom);

        // Set content wrapper scroll width variables & data attributes.
        var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
        $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);

        // Set right max variables & data attributes.
        var rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
        var rightMaxMinus = -(rightMax);
        $el.data('rightMax', Number(rightMaxMinus));

        // Set initialized data variable to false do incidate scrolling functionality doesn't work yet.
        $el.data('initalized', false);

        // Set height of section to the scroll width of content wrapper.
        $el.css('height', $el.data('contentWrapperScrollWidth'));

        // Set data attribute for outerHeight.
        $el.data('outerHeight', $el.outerHeight());

        // Set data attribute for offset top.
        $el.data('offsetTop', $el.offset().top);

        // Set data initialized data variable to true to indicate ready for functionality.
        $el.data('initalized', true);

        // Set data variable for transform X (0 by default)
        $el.data('transformX', '0');

        // Add class of init
        $el.addClass($el.attr('class') + '--init');
    }

    function resetHorizontalScroll($el) {
      
      
        // Update data attribute for content wrapper scroll width.
    
      var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
        $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);
      

        // Update rightMax variables & data attributes.
        rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
        rightMaxMinus = -(rightMax);
        $el.data('rightMax', Number(rightMaxMinus));

        // Update height of section to the scroll width of content wrapper.
        $el.css('height', $el.data('contentWrapperScrollWidth'));

        // Update data attribute for outerHeight.
        $el.data('outerHeight', $el.outerHeight());

        // Update data attribute for offset top.
        $el.data('offsetTop', $el.offset().top);

        // If transform is smaller than rightmax, make it rightmax.
        if ($el.data('transformX') <= $el.data('rightMax')) {
            $el.data('contentWrapper').css({
                'transform': 'translate3d(' + $el.data('rightMax') + 'px, 0, 0)',
            });
        }
    }

    var $horizontalScrollSections = $('.horizontal-scroll-section');
    var $horizontalScrollSectionsTriggers = $horizontalScrollSections.find('.trigger');

    // Each function - set variables ready for scrolling functionality. Call horizontal scroll functions on load and resize.
    $horizontalScrollSections.each(function (i, el) {
      
        var $thisSection = $(this);

        $(this).data('elDom', $(this).get(0));

        // Set up horizontal scrolling data attributes and show section all have been computed.
        setUpHorizontalScroll($(this));

        // Now we're ready, call setScene on load that adds classes based on scroll position.
        setScene($(this));

        // Resize function
        $(window).on('resize', function () {
            // Reset horizontal scrolling data attributes and transform content wrapper if transform is bigger than scroll width.
            resetHorizontalScroll($thisSection);
            // Reset scene positioning.
            setScene($thisSection);
        });

    });

    function setupHorizontalTriggers($el, section) {
        var parent = $el.parent();
        var positionLeft = parent.position().left;
        var positionLeftMinus = -(positionLeft);
        var triggerOffset = $el.data('triggerOffset');
        triggerOffset = !triggerOffset ? 0.5 : triggerOffset = triggerOffset;
        $el.data('triggerOffset', triggerOffset);
        $el.data('triggerPositionLeft', positionLeftMinus);
        $el.data('triggerSection', section);
    }

    function useHorizontalTriggers($el) {
        if ($el.data('triggerSection').data('transformX') <= ($el.data('triggerPositionLeft') * $el.data('triggerOffset'))) {
            $el.data('triggerSection').addClass($el.data('class'));
        } else {
            if ($el.data('remove-class') !== false) {
                $el.data('triggerSection').removeClass($el.data('class'));
            }
        }
    }

    $horizontalScrollSectionsTriggers.each(function (i, el) {
        setupHorizontalTriggers($(this), $(this).closest('.horizontal-scroll-section'));
    });

    function transformBasedOnScrollHorizontalScroll($el) {

        // Get amount scrolled variables.
        var amountScrolledContainer = winScrollTop - $el.data('offsetTop');
        var amountScrolledThrough = (amountScrolledContainer / ($el.data('outerHeight') - (winHeight - winWidth)));

        // Add transform value variable based on amount scrolled through multiplied by scroll width of content.
        var toTransform = (amountScrolledThrough * $el.data('contentWrapperScrollWidth'));

        // Add transform value for minus (as we're transforming opposite direction).
        var toTransformMinus = -(toTransform);

        // If transform value is bigger or equal than 0, set value to 0.
        toTransformMinus = Math.min(0, toTransformMinus);

        // If transform value is smaller or equal than rightMax, set value to rightMax.
        toTransformMinus = Math.max(toTransformMinus, $el.data('rightMax'));

        // Update transformX data variable for section.
        $el.data('transformX', Number(toTransformMinus));

        // If section has been initalized, apply transform.
        if ($el.data('initalized') == true) {
            $el.data('contentWrapper').css({
                'transform': 'translate3d(' + $el.data('transformX') + 'px, 0, 0)'
            });
        }
    }

    // 
    $(window).on('scroll', function(){
     
        // Get window scroll top.
        winScrollTop = $(window).scrollTop();

        // Each function in horizontal scroll sections.
        $horizontalScrollSections.each(function (i, el) {
            transformBasedOnScrollHorizontalScroll($(this));
            setScene($(this));
        });

        // Each function for horizontal scroll section triggers.
        $horizontalScrollSectionsTriggers.each(function (i, el) {
            useHorizontalTriggers($(this));
        });
                 
    });

});