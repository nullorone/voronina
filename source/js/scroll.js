'use strict';

(function () {
  var linksNavigation = document.querySelectorAll('[href^="#"]');
  var SPEED_SCROLL = 0.5;

  linksNavigation.forEach(function (link) {
    link.addEventListener('click', function(evt) {
      evt.preventDefault();
      var positionSection = window.pageYOffset;
      var idSection = this.href.replace(/[^#]*(.*)/, '$1');
      var offsetToSection = document.querySelector(idSection).getBoundingClientRect().top;
      var start = null;

      var step = function(time) {
        if (start === null) {
          start = time;
        }
        var progress = time - start;
        var newPosition = (offsetToSection < 0 ? Math.max(positionSection - progress/SPEED_SCROLL, positionSection + offsetToSection) : Math.min(positionSection + progress/SPEED_SCROLL, positionSection + offsetToSection));

        window.scrollTo(0, newPosition);

        if (newPosition != positionSection + offsetToSection) {
          requestAnimationFrame(step);
        } else {
          location.idSection = idSection;
        }
      }
      requestAnimationFrame(step);
    }, false);
  })
})();


