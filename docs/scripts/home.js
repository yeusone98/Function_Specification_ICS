(function () {
  "use strict";

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
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

  function mountCardTilt(homeRoot) {
    var cards = Array.from(homeRoot.querySelectorAll("[data-tilt]"));
    if (!cards.length) {
      return;
    }

    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (event) {
        var rect = card.getBoundingClientRect();
        var rx = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        var ry = ((event.clientX - rect.left) / rect.width) * 2 - 1;

        card.style.setProperty("--tilt-x", String(rx * -2.1) + "deg");
        card.style.setProperty("--tilt-y", String(ry * 2.1) + "deg");
      });

      card.addEventListener("mouseleave", function () {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  function boot() {
    var homeRoot = document.querySelector(".pls-home-page");
    if (!homeRoot) {
      return;
    }

    document.body.classList.add("pls-home-active");
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
