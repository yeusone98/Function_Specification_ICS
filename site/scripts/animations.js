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
     3. SMOOTH ACCORDION — CSS Grid trick (zero layout thrashing)
     Wrap non-summary children in .pls-grid-wrap > .pls-grid-inner.
     CSS animates grid-template-rows: 0fr -> 1fr on details[open].
     No scrollHeight, no jank, GPU-composited.
  ============================================================ */
  function wrapDetails(details) {
    if (details.dataset.plsWrapped) return;
    details.dataset.plsWrapped = "1";

    var children = Array.from(details.childNodes).filter(function (n) {
      return n.nodeName !== "SUMMARY";
    });
    if (!children.length) return;

    var wrap = document.createElement("div");
    wrap.className = "pls-grid-wrap";

    var inner = document.createElement("div");
    inner.className = "pls-grid-inner";

    children.forEach(function (child) {
      inner.appendChild(child);
    });

    wrap.appendChild(inner);
    details.appendChild(wrap);
  }

  function mountSmoothAccordion() {
    Array.from(document.querySelectorAll("details")).forEach(wrapDetails);

    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          if (n.tagName === "DETAILS") wrapDetails(n);
          if (n.querySelectorAll) {
            Array.from(n.querySelectorAll("details")).forEach(wrapDetails);
          }
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ============================================================
     BOOT
  ============================================================ */
  function boot() {
    mountProgressBar();
    mountPageFadeIn();
    mountSmoothAccordion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
