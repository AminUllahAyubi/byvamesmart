
var slickMainFrame = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  speed: 1000,
  dots: false,
  infinite: true,
};
var slickTabFrame = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  speed: 1000,
  dots: false,
  infinite: true,
  fade:true,
};

$('.features_image_slider').slick(slickMainFrame);
$('.features_1_image_slider').slick(slickMainFrame);
$('.features_2_image_slider').slick(slickMainFrame);
$('.features_3_image_slider').slick(slickMainFrame);
$('.features_4_image_slider').slick(slickMainFrame);
$('.tab_1_image_slider').slick(slickTabFrame);
$('.tab_2_image_slider').slick(slickTabFrame);


// // Silk Carousel slick
function slickCarousel() {
    // mobile image slider
    $('.product_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      speed: 1000,
      dots: true,
      infinite: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          }
      ]
  });
}
slickCarousel();

//Bootstrap Form Validation js
(function() {
  'use strict';
  window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('form_validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
      });
  }, false);
})();

// bottom to top scroll js
function scrollToTop(){
  //Get the button
  var mybutton = document.getElementById("scrollToTopBtn");
  // When the user scrolls down 150px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);
}scrollToTop();