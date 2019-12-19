$(document).ready(function() {
  'use strict';
  svg4everybody({});

  function getProductsSlider() {
    var productsList = document.querySelectorAll('.js-product-slider');
    var productSlider = [];
    for (var i = 0; i < productsList.length; i++) {
      productSlider[i] = new Flickity(productsList[i], {
        pageDots: false,
        // prevNextButtons: false,
        imagesLoaded: true,
        fullscreen: true,
        lazyLoad: 1,
        wrapAround: true,
      });
    }
    var prevButton = document.querySelectorAll('.product-prev__button--prev');
    var nextButton = document.querySelectorAll('.product-prev__button--next');
    prevButton[0].addEventListener('click', function() {
      productSlider[0].previous();
    });
    nextButton[0].addEventListener('click', function() {
      productSlider[0].next();
    });
    prevButton[1].addEventListener('click', function() {
      productSlider[1].previous();
    });
    nextButton[1].addEventListener('click', function() {
      productSlider[1].next();
    });
    prevButton[2].addEventListener('click', function() {
      productSlider[2].previous();
    });
    nextButton[2].addEventListener('click', function() {
      productSlider[2].next();
    });
    prevButton[3].addEventListener('click', function() {
      productSlider[3].previous();
    });
    nextButton[3].addEventListener('click', function() {
      productSlider[3].next();
    });

    var slider = document.querySelectorAll('.js-product-slider');
    
    for (var k = 0; k < slider.length; k++) {
      var buttons = slider[k].querySelectorAll('.flickity-prev-next-button');
      for (var g = 0; g < buttons.length; g++) {
        buttons[g].style.display = 'none';
      }
      console.log(buttons);
    }

    // buttons.style.display = 'none';
    // productSlider[0].on('fullscreenChange', function(isFullscreen) {
    //   if (isFullscreen) {
    //     if (slider[0].classList.contains('flickity-enabled')) {
    //       console.log('yep');
    //       buttons.style.display = 'block';
    //     }
    //   }
    // })
  }

  function getSliderButton() {
    var slider = document.querySelectorAll('.js-product-slider');
    var buttons = document.querySelectorAll('.flickity-prev-next-button');
    for (var i = 0; i < slider.length; i++) {
      if (slider[i].classList.contains('flickity-enabled')) {
        console.log('yep');
      }
    }
  }

  getProductsSlider();
  // getSliderButton();
});