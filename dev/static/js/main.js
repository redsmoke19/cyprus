$(document).ready(function() {
  'use strict';
  svg4everybody({});

  function getProductsSlider() {
    var productsList = document.querySelectorAll('.js-product-slider');
    var productSlider = [];
    for (var i = 0; i < productsList.length; i++) {
      productSlider[i] = new Flickity(productsList[i], {
        pageDots: false,
        prevNextButtons: false,
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
  }

  getProductsSlider();
});