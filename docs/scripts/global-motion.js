(function () {
  "use strict";

  var revealObserver = null;

  function prefersReducedMotion() {
    return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function collectRevealTargets() {
    var contentRoot = document.querySelector(".md-content .md-typeset");
    if (!contentRoot) {
      return [];
    }

    var children = Array.from(contentRoot.children).filter(function (node) {
      if (!node || !node.tagName) {
        return false;
      }

      if (node.classList.contains("md-section-hidden")) {
        return false;
      }

      return !node.matches("h1, script, style");
    });

    children.forEach(function (node, index) {
      node.classList.add("md-motion-item");
      if (!node.style.getPropertyValue("--md-motion-delay")) {
        node.style.setProperty("--md-motion-delay", String((index % 7) * 42) + "ms");
      }
    });

    return children;
  }

  function animateTableRows(scope) {
    var tables = scope.matches("table") ? [scope] : Array.from(scope.querySelectorAll("table"));

    tables.forEach(function (table) {
      if (table.dataset.rowMotionReady === "true") {
        return;
      }

      table.dataset.rowMotionReady = "true";
      table.classList.add("md-table-row-motion");

      Array.from(table.querySelectorAll("tbody tr")).forEach(function (row, rowIndex) {
        row.style.setProperty("--md-row-index", String(rowIndex));
      });
    });
  }

  function refreshRevealObserver() {
    var targets = collectRevealTargets();
    if (!targets.length) {
      return;
    }

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      targets.forEach(function (target) {
        target.classList.add("is-visible");
        animateTableRows(target);
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            animateTableRows(entry.target);
            revealObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -12% 0px",
        }
      );
    }

    targets.forEach(function (target) {
      if (target.dataset.motionObserved === "true") {
        return;
      }

      target.dataset.motionObserved = "true";
      revealObserver.observe(target);
    });
  }

  function mountReadingProgress() {
    if (document.querySelector(".md-reading-progress")) {
      return;
    }

    var progress = document.createElement("div");
    progress.className = "md-reading-progress";

    var bar = document.createElement("span");
    bar.className = "md-reading-progress__bar";
    progress.appendChild(bar);
    document.body.appendChild(progress);

    var queued = false;
    function updateProgress() {
      var root = document.documentElement;
      var scrollTop = window.scrollY || root.scrollTop || 0;
      var scrollRange = Math.max(1, root.scrollHeight - window.innerHeight);
      var ratio = Math.max(0, Math.min(1, scrollTop / scrollRange));
      bar.style.transform = "scaleX(" + String(ratio) + ")";
    }

    function queueUpdate() {
      if (queued) {
        return;
      }

      queued = true;
      window.requestAnimationFrame(function () {
        queued = false;
        updateProgress();
      });
    }

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    queueUpdate();
  }

  function mountHeadingFocus() {
    var activeTimer = 0;

    function flashHeading(id) {
      if (!id) {
        return;
      }

      var heading = document.getElementById(id);
      if (!heading || !/^H[1-6]$/.test(heading.tagName)) {
        return;
      }

      heading.classList.remove("md-heading-focus");
      void heading.offsetWidth;
      heading.classList.add("md-heading-focus");

      window.clearTimeout(activeTimer);
      activeTimer = window.setTimeout(function () {
        heading.classList.remove("md-heading-focus");
      }, 1150);
    }

    function syncFromHash() {
      var hash = decodeURIComponent(window.location.hash || "").replace(/^#/, "");
      flashHeading(hash);
    }

    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("a[href^='#']");
      if (!trigger) {
        return;
      }

      var targetId = decodeURIComponent((trigger.getAttribute("href") || "").replace(/^#/, ""));
      if (!targetId) {
        return;
      }

      window.requestAnimationFrame(function () {
        flashHeading(targetId);
      });
    });

    window.addEventListener("hashchange", syncFromHash);
    syncFromHash();
  }

  function mountCursorHalo() {
    if (prefersReducedMotion()) {
      return;
    }

    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    if (document.querySelector(".md-cursor-halo")) {
      return;
    }

    var halo = document.createElement("div");
    halo.className = "md-cursor-halo";
    document.body.appendChild(halo);

    var posX = 0;
    var posY = 0;
    var ticking = false;

    function drawHalo() {
      ticking = false;
      halo.style.transform = "translate3d(" + String(posX) + "px, " + String(posY) + "px, 0)";
    }

    function queueDraw() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(drawHalo);
    }

    document.addEventListener("mousemove", function (event) {
      posX = event.clientX;
      posY = event.clientY;
      document.body.classList.add("md-cursor-active");
      queueDraw();
    });

    document.addEventListener("mouseleave", function () {
      document.body.classList.remove("md-cursor-active");
    });

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "visible") {
        document.body.classList.remove("md-cursor-active");
      }
    });
  }

  function boot() {
    document.body.classList.add("md-motion-enhanced");

    mountReadingProgress();
    mountHeadingFocus();
    mountCursorHalo();
    refreshRevealObserver();

    window.addEventListener("hashchange", function () {
      window.requestAnimationFrame(refreshRevealObserver);
    });

    window.addEventListener("resize", function () {
      window.requestAnimationFrame(refreshRevealObserver);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
