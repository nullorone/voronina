'use strict';

(function() {
  var navigation = document.querySelector('.header-nav');
  var navigationList = document.querySelector('.header-nav__list');
  var navigationButtonClose;

  var hideNavigation = function () {
    navigation.classList.remove('header-nav__btn-close');
    navigationList.style.display = 'none';
    navigationButtonClose.removeEventListener('click', hideNavigation);
  };

  var showNavigation = function () {
    navigation.classList.add('header-nav__btn-close');
    navigationList.style.display = 'initial';
    navigationButtonClose = document.querySelector('.header-nav__btn-close');
    navigationButtonClose.addEventListener('click', hideNavigation);
  };

  window.addEventListener('resize', function () {
    if (window.matchMedia("(max-width: 1440px)").matches) {
      navigation.classList.remove('header-nav__btn-close');
      navigationList.style.display = 'none';
      navigation.addEventListener('click', showNavigation);
    } else {
      navigationList.style.display = 'initial';
    }
  })

})();
