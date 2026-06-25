(function () {
  "use strict";

  function scrollToTarget(target) {
    if (!target) return;

    var smoother = window.ScrollSmoother && window.ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top 100px");
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      var target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      scrollToTarget(target);
    });
  });

  if (window.location.hash) {
    window.addEventListener("load", function () {
      var target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(function () {
          scrollToTarget(target);
        }, 800);
      }
    });
  }
})();
