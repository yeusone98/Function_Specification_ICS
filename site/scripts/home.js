(function () {
  "use strict";

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function animateCounter(element, target) {
    var duration = 1100;
    var startTs = 0;

    function step(timestamp) {
      if (!startTs) {
        startTs = timestamp;
      }

      var elapsed = timestamp - startTs;
      var progress = Math.min(1, elapsed / duration);
      var value = Math.round(target * easeOutCubic(progress));
      element.textContent = String(value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function mountReveal(homeRoot) {
    var revealNodes = Array.from(homeRoot.querySelectorAll("[data-reveal]"));
    if (!revealNodes.length) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    revealNodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  function mountCounters(homeRoot) {
    var metricNodes = Array.from(homeRoot.querySelectorAll(".pls-metric[data-count]"));
    if (!metricNodes.length) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var metric = entry.target;
          var target = parseInt(metric.getAttribute("data-count") || "0", 10);
          var valueNode = metric.querySelector(".pls-metric__number");

          if (valueNode && !metric.dataset.counted) {
            metric.dataset.counted = "true";
            animateCounter(valueNode, target);
          }

          observer.unobserve(metric);
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    metricNodes.forEach(function (metric) {
      observer.observe(metric);
    });
  }

  function mountCursorAura(homeRoot) {
    if (!window.matchMedia) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    function syncAura(event) {
      var rect = homeRoot.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width) * 100;
      var y = ((event.clientY - rect.top) / rect.height) * 100;

      homeRoot.style.setProperty("--cursor-x", String(clamp(x, 0, 100).toFixed(2)) + "%");
      homeRoot.style.setProperty("--cursor-y", String(clamp(y, 0, 100).toFixed(2)) + "%");
      homeRoot.style.setProperty("--cursor-aura-opacity", "1");
    }

    homeRoot.addEventListener("pointerenter", syncAura);
    homeRoot.addEventListener("pointermove", syncAura);
    homeRoot.addEventListener("pointerleave", function () {
      homeRoot.style.setProperty("--cursor-aura-opacity", "0");
    });
  }

  function mountCardTilt(homeRoot) {
    if (
      window.matchMedia &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches)
    ) {
      return;
    }

    var cards = Array.from(homeRoot.querySelectorAll("[data-tilt]"));
    if (!cards.length) {
      return;
    }

    cards.forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var rx = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        var ry = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        var px = ((event.clientX - rect.left) / rect.width) * 100;
        var py = ((event.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--tilt-x", String(rx * -2.1) + "deg");
        card.style.setProperty("--tilt-y", String(ry * 2.1) + "deg");
        card.style.setProperty("--mouse-x", String(clamp(px, 0, 100).toFixed(2)) + "%");
        card.style.setProperty("--mouse-y", String(clamp(py, 0, 100).toFixed(2)) + "%");
        card.style.setProperty("--mouse-glow-opacity", "1");
      });

      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--mouse-glow-opacity", "0");
      });
    });
  }

  function boot() {
    var homeRoot = document.querySelector(".pls-home-page");
    if (!homeRoot) {
      return;
    }

    document.body.classList.add("pls-home-active");
    mountCursorAura(homeRoot);
    mountReveal(homeRoot);
    mountCounters(homeRoot);
    mountCardTilt(homeRoot);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
