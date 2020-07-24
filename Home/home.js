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

      document.querySelector(".btn").addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
      });








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








myCanvas = document.getElementById("can");

window.addEventListener('resize', resizeCanvas, false);

   /// call the first time page is loaded

function resizeCanvas() {
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
}


geometry = new THREE.Geometry();
glitch=0
theta=0
target_vertex=[
  [[-147,-123,0],[-75,-165,0],[-102,-214,0]],
  [[37,-88,0],[-48,-74,0],[-26,-143,0]],
  [[-210,-47,0],[-68,-125,0],[-92,-46,0]],
  [[-106,28,0],[-209,-39,0],[-95,-38,0]],
  [[-247,64,0],[-184,27,0],[-257,-20,0]],
  [[28,65,0],[22,-56,0],[-87,-38,0]],
  [[-87,-38,0],[28,65,0],[-100,31,0]],
  [[57,215,0],[4,178,0],[-59,197,0]],
  [[71,214,0],[9,172,0],[34,77,0]],
  [[34,77,0],[91,133,0],[71,214,0]],
  [[81,213,0],[99,136,0],[204,159,0]],
  [[36,66,0],[104,39,0],[29,-57,0]],
  [[104,39,0],[29,-57,0],[124,-30,0]],
  [[110,39,0],[164,68,0],[130,-29,0]],
  [[260,-11,0],[164,68,0],[130,-29,0]],
  [[176,67,0],[274,56,0],[267,-6,0]],
  [[133,-37,0],[223,-71,0],[259,-20,0]],
  [[38,73,0],[107,44,0],[157,73,0]],
  [[97,128,0],[38,73,0],[157,73,0]],
  [[162,77,0],[210,152,0],[106,129,0]],
  [[218,149,0],[171,75,0],[267,63,0]],
  [[17,70,0],[-95,42,0],[-73,111,0]],
  [[27,75,0],[1,172,0],[-75,193,0]],
  [[-72,119,0],[27,75,0],[-75,193,0]],
  [[-107,38,0],[-83,112,0],[-200,86,0]],
  [[-85,190,0],[-82,120,0],[-192,97,0]]
]
    triangleslist=[]
    let scene, camera, renderer;
    ADD=1

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function singlepoint(){
       for(i=0;i<79;i++){
       geometry.vertices.push( new THREE.Vector3(0,0,0));
       }
    }

    function twopoint(){
      for(i=0;i<26;i++){
        for(j=0;j<3;j++){

            if(j==0){
            geometry.vertices.push( new THREE.Vector3(0,0,0));;
            }
            else{
              geometry.vertices.push( new THREE.Vector3(target_vertex[i][j][0],target_vertex[i][j][1],target_vertex[i][j][2]));
            }
          }
        }
    }

    function line(){
      for(i=0;i<26;i++){
        for(j=0;j<3;j++){

            if(j==0 || j==1){
            geometry.vertices.push( new THREE.Vector3(0,0,0));;
            }
            else{
              geometry.vertices.push( new THREE.Vector3(target_vertex[i][j][0],target_vertex[i][j][1],target_vertex[i][j][2]));
            }
          }
        }

    }
 



    let createShapes=function(){

      // singlepoint();
      //twopoint();
      line();
      //random();

      geometry.faces.push(new THREE.Face3(0,1,2));
      geometry.faces.push(new THREE.Face3(3,4,5));
      geometry.faces.push(new THREE.Face3(6,7,8));
      geometry.faces.push(new THREE.Face3(9,10,11));
      geometry.faces.push(new THREE.Face3(12,13,14));
      geometry.faces.push(new THREE.Face3(15,16,17));
      geometry.faces.push(new THREE.Face3(18,19,20));
      geometry.faces.push(new THREE.Face3(21,22,23));
      geometry.faces.push(new THREE.Face3(24,25,26));
      geometry.faces.push(new THREE.Face3(27,28,29));
      geometry.faces.push(new THREE.Face3(30,31,32));
      geometry.faces.push(new THREE.Face3(33,34,35));
      geometry.faces.push(new THREE.Face3(36,37,38));
      geometry.faces.push(new THREE.Face3(39,40,41));
      geometry.faces.push(new THREE.Face3(42,43,44));
      geometry.faces.push(new THREE.Face3(45,46,47));
      geometry.faces.push(new THREE.Face3(48,49,50));
      geometry.faces.push(new THREE.Face3(51,52,53));
      geometry.faces.push(new THREE.Face3(54,55,56));
      geometry.faces.push(new THREE.Face3(57,58,59));
      geometry.faces.push(new THREE.Face3(60,61,62));
      geometry.faces.push(new THREE.Face3(63,64,65));
      geometry.faces.push(new THREE.Face3(66,67,68));
      geometry.faces.push(new THREE.Face3(69,70,71));
      geometry.faces.push(new THREE.Face3(72,73,74));
      geometry.faces.push(new THREE.Face3(75,76,77));

      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      geometry.verticesNeedUpdate=true;
      geometry.faces[0].vertexColors[
        (new THREE.Color(1, 0, 0 ))];


      geometry.faces[0].vertexColors=[(new THREE.Color(0xe1471d)),
      (new THREE.Color(0xe1471d)),
      (new THREE.Color(0xe1471d))];

      geometry.faces[1].vertexColors=[(new THREE.Color(0xe1471d)),
      (new THREE.Color(0xe1471d)),
      (new THREE.Color(0xe1471d))];

      geometry.faces[2].vertexColors=[(new THREE.Color(0xdf4621)),
      (new THREE.Color(0xe4441a)),
      (new THREE.Color(0xe4441a))];

      geometry.faces[3].vertexColors=[(new THREE.Color(0xe46120)),
      (new THREE.Color(0xe1461e)),
      (new THREE.Color(0xe1461e))];

      geometry.faces[4].vertexColors=[(new THREE.Color(0xe46120)),
      (new THREE.Color(0xe1461e)),
      (new THREE.Color(0xe1461e))];

      geometry.faces[5].vertexColors=[(new THREE.Color(0xe89025)),
      (new THREE.Color(0xe8631e)),
      (new THREE.Color(0xe1461e))];

      geometry.faces[6].vertexColors=[(new THREE.Color(0xe1461e)),
      (new THREE.Color(0xe89025)),
      (new THREE.Color(0xe3631a))];

      geometry.faces[7].vertexColors=[(new THREE.Color(0xe6ba06)),
      (new THREE.Color(0xeda114)),
      (new THREE.Color(0xe99908))];

      geometry.faces[8].vertexColors=[(new THREE.Color(0xe6ba06)),
      (new THREE.Color(0xf09906)),
      (new THREE.Color(0xf08e10))];


      geometry.faces[9].vertexColors=[(new THREE.Color(0xf08e10)),
      (new THREE.Color(0xf09906)),
      (new THREE.Color(0xe6ba06))];

      geometry.faces[10].vertexColors=[(new THREE.Color(0xe8ca0a)),
      (new THREE.Color(0xeca00d)),
      (new THREE.Color(0xe8ca0a))];

      geometry.faces[11].vertexColors=[(new THREE.Color(0xdf8018)),
      (new THREE.Color(0xe68518)),
      (new THREE.Color(0xe4621e))];

      geometry.faces[12].vertexColors=[(new THREE.Color(0xe68518)),
      (new THREE.Color(0xe4621e)),
      (new THREE.Color(0xdf8018))];

      geometry.faces[13].vertexColors=[(new THREE.Color(0xea8c16)),
      (new THREE.Color(0xed9912)),
      (new THREE.Color(0xeb7e13))];

      geometry.faces[14].vertexColors=[(new THREE.Color(0xe99313)),
      (new THREE.Color(0xed9912)),
      (new THREE.Color(0xeb7e13))];

      geometry.faces[15].vertexColors=[(new THREE.Color(0xea9f19)),
      (new THREE.Color(0xefaa26)),
      (new THREE.Color(0xea9915))];

      geometry.faces[16].vertexColors=[(new THREE.Color(0xef7917)),
      (new THREE.Color(0xe97f09)),
      (new THREE.Color(0xeb8f1b))];

      geometry.faces[17].vertexColors=[(new THREE.Color(0xe68b15)),
      (new THREE.Color(0xe98c1c)),
      (new THREE.Color(0xf09a0f))];

      geometry.faces[18].vertexColors=[(new THREE.Color(0xee9f0a)),
      (new THREE.Color(0xe68b15)),
      (new THREE.Color(0xf09a0f))];


      geometry.faces[19].vertexColors=[(new THREE.Color(0xeca20a)),
      (new THREE.Color(0xf5c516)),
      (new THREE.Color(0xe6a902))];

      geometry.faces[20].vertexColors=[(new THREE.Color(0xf1b813)),
      (new THREE.Color(0xeca312)),
      (new THREE.Color(0xedab0f))];

      geometry.faces[21].vertexColors=[(new THREE.Color(0xe7821f)),
      (new THREE.Color(0xe96f18)),
      (new THREE.Color(0xf17a0b))];

      geometry.faces[22].vertexColors=[(new THREE.Color(0xea9512)),
      (new THREE.Color(0xef9914)),
      (new THREE.Color(0xea8715))];

      geometry.faces[23].vertexColors=[(new THREE.Color(0xea8715)),
      (new THREE.Color(0xea9512)),
      (new THREE.Color(0xe88514))];

      geometry.faces[24].vertexColors=[(new THREE.Color(0xe5681d)),
      (new THREE.Color(0xee7b28)),
      (new THREE.Color(0xe66427))];

      geometry.faces[25].vertexColors=[(new THREE.Color(0xe99015)),
      (new THREE.Color(0xe48317)),
      (new THREE.Color(0xee6e15))];

      let material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors,
         side: THREE.DoubleSide,wireframe:true});

      triangle1 = new THREE.Mesh( geometry, material);
      scene.add(triangle1)

    }

// function handleWindowResize() {
//   HEIGHT = window.innerHeight;
//   WIDTH = window.innerWidth;
//   renderer.setSize(WIDTH, HEIGHT);
//   camera.aspect = WIDTH / HEIGHT;
//   camera.updateProjectionMatrix();
// }
  // set up the environment -
    // initiallize scene, camera, objects and renderer
    let init = function() {

resizeCanvas(); 
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0f202c);

        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75,
                        window.innerWidth / window.innerHeight,
                        1, 1000);
        camera.position.z = 300;
        camera.position.y = 0;
        camera.position.x = -50;


        // create the renderer
        renderer = new THREE.WebGLRenderer({antialias: true, canvas: myCanvas});
        renderer.setSize(window.innerWidth*0.7,window.innerHeight*0.7);

        lights = new THREE.PointLight( 0xFFA500,1);
        lights.position.set( 40,50,140);
        scene.add(lights);


        createShapes();


    };

    function handleWindowResize() {
  console.log("Hello");
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}



    // main animation loop - calls 50-60 times per second.
    let mainLoop = function() {




      // triangle1.faces[0].position.x+=10;
      // triangle1.rotation.z+=0.02;
     // triangle1.rotation.y+=0.02;
     // triangle1.position.x+=3*Math.sin(theta);
       triangle1.position.z+=0.5*Math.cos(theta);
       theta+=0.04;
      triangle1.geometry.verticesNeedUpdate=true;



       for(i=0;i<78;i++){
         if (triangle1.geometry.vertices[i].x!=target_vertex[Math.floor(i/3)][i%3][0]){
           if(target_vertex[Math.floor(i/3)][i%3][0]<0){
             triangle1.geometry.vertices[i].x-=1;}
             else{
               triangle1.geometry.vertices[i].x+=1;
             }
         }
         if (triangle1.geometry.vertices[i].y!=target_vertex[Math.floor(i/3)][i%3][1]){
           if(target_vertex[Math.floor(i/3)][i%3][1]<0){
             triangle1.geometry.vertices[i].y-=1;}
             else{
               triangle1.geometry.vertices[i].y+=1;
             }
         }

       }


    if (triangle1.geometry.vertices[42].x==target_vertex[14][0][0] && triangle1.geometry.vertices[42].y==target_vertex[14][0][1]){
     triangle1.material.wireframe=false;
    }
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };


    init();
    mainLoop();





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