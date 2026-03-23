(function () {
  "use strict";

  /* ============================================================
     1. READING PROGRESS BAR
  ============================================================ */
  function mountProgressBar() {
    if (document.querySelector(".pls-home-page")) return;

    var bar = document.createElement("div");
    bar.id = "pls-read-bar";
    document.body.appendChild(bar);

    function updateBar() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct.toFixed(2) + "%";
    }

    window.addEventListener("scroll", updateBar, { passive: true });
    updateBar();
  }

  /* ============================================================
     2. CONTENT FADE-IN ON PAGE LOAD
  ============================================================ */
  function mountPageFadeIn() {
    if (document.querySelector(".pls-home-page")) return;

    var content = document.querySelector(".md-content__inner");
    if (!content) return;

    content.classList.add("pls-fade-enter");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        content.classList.add("pls-fade-enter--active");
      });
    });
  }

  /* ============================================================
     BOOT
  ============================================================ */
  function boot() {
    mountProgressBar();
    mountPageFadeIn();
    // Accordion animation is handled natively by MkDocs Material
    // for consistent behavior across all details types (book, info, etc.)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
