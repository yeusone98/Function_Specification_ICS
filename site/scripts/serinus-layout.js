(function () {
  "use strict";

  function normalizePathname(pathname) {
    return pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  }

  function extractText(node) {
    return (node && node.textContent ? node.textContent : "")
      .replace(/¶/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getDocumentLinks() {
    var selector = "nav.md-nav--primary > ul.md-nav__list > li.md-nav__item > a.md-nav__link";
    var links = Array.from(document.querySelectorAll(selector));
    var unique = new Map();

    links.forEach(function (link) {
      var rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) {
        return;
      }

      var url;
      try {
        url = new URL(rawHref, window.location.href);
      } catch (_error) {
        return;
      }

      if (url.origin !== window.location.origin) {
        return;
      }

      var key = normalizePathname(url.pathname);
      if (!unique.has(key)) {
        unique.set(key, {
          href: url.href,
          label: extractText(link) || key,
        });
      }
    });

    return Array.from(unique.values());
  }

  function mountDocumentSwitcher() {
    if (document.querySelector(".md-header__document-switch")) {
      return;
    }

    var documents = getDocumentLinks();
    if (documents.length < 2) {
      return;
    }

    var headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) {
      return;
    }

    var wrapper = document.createElement("div");
    wrapper.className = "md-header__option md-header__document-switch";
    var switcher = document.createElement("div");
    switcher.className = "md-document-switch";

    var currentPath = normalizePathname(window.location.pathname);
    var currentDocument = documents.find(function (entry) {
      return normalizePathname(new URL(entry.href).pathname) === currentPath;
    }) || documents[0];

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "md-document-switch__trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Switch document");

    var label = document.createElement("span");
    label.className = "md-document-switch__label";
    label.textContent = currentDocument.label;

    var caret = document.createElement("span");
    caret.className = "md-document-switch__caret";

    trigger.appendChild(label);
    trigger.appendChild(caret);

    var menu = document.createElement("ul");
    menu.className = "md-document-switch__menu";
    menu.setAttribute("role", "listbox");

    documents.forEach(function (entry) {
      var optionPath = normalizePathname(new URL(entry.href).pathname);
      var isActive = optionPath === currentPath;

      var item = document.createElement("li");
      item.className = "md-document-switch__option";

      var action = document.createElement("button");
      action.type = "button";
      action.className = "md-document-switch__item" + (isActive ? " md-document-switch__item--active" : "");
      action.textContent = entry.label;
      action.setAttribute("role", "option");
      if (isActive) {
        action.setAttribute("aria-selected", "true");
      }
      action.addEventListener("click", function () {
        window.location.assign(entry.href);
      });

      item.appendChild(action);
      menu.appendChild(item);
    });

    function setOpen(isOpen) {
      switcher.classList.toggle("is-open", isOpen);
      trigger.setAttribute("aria-expanded", String(isOpen));
    }

    trigger.addEventListener("click", function () {
      setOpen(!switcher.classList.contains("is-open"));
    });

    document.addEventListener("click", function (event) {
      if (!switcher.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });

    switcher.appendChild(trigger);
    switcher.appendChild(menu);
    wrapper.appendChild(switcher);

    var titleBlock = headerInner.querySelector("[data-md-component='header-title']");
    var palette = headerInner.querySelector("[data-md-component='palette']");

    if (palette && palette.parentElement === headerInner) {
      headerInner.insertBefore(wrapper, palette);
    } else if (titleBlock && titleBlock.nextSibling) {
      headerInner.insertBefore(wrapper, titleBlock.nextSibling);
    } else {
      headerInner.appendChild(wrapper);
    }
  }

  function mountSingleThemeToggle() {
    var paletteForm = document.querySelector(".md-header [data-md-component='palette']");
    if (!paletteForm) {
      return;
    }

    if (paletteForm.querySelector(".md-single-theme-toggle")) {
      return;
    }

    var inputs = Array.from(paletteForm.querySelectorAll("input.md-option[name='__palette']"));
    if (inputs.length < 2) {
      return;
    }

    var sunPath =
      "M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0-7 2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm.02 10 1.76-3.77a7.131 7.131 0 0 0 2.38 4.14zM20.65 7l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zm-.01 10-4.14.36c.59-.51 1.12-1.14 1.54-1.86.42-.73.69-1.5.83-2.29zM12 22l-2.41-3.44c.74.27 1.55.44 2.41.44.82 0 1.63-.17 2.37-.44z";
    var moonPath =
      "m17.75 4.09-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3zm3.5 6.91-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31";

    function getSchemeInput(scheme) {
      return (
        inputs.find(function (input) {
          return input.getAttribute("data-md-color-scheme") === scheme;
        }) || null
      );
    }

    function getCurrentScheme() {
      var fromBody = document.body.getAttribute("data-md-color-scheme");
      if (fromBody) {
        return fromBody;
      }

      var checkedInput = inputs.find(function (input) {
        return input.checked;
      });
      return checkedInput ? checkedInput.getAttribute("data-md-color-scheme") || "default" : "default";
    }

    function applyPalette(input) {
      if (!input) {
        return;
      }

      var scheme = input.getAttribute("data-md-color-scheme") || "";
      var primary = input.getAttribute("data-md-color-primary") || "";
      var accent = input.getAttribute("data-md-color-accent") || "";
      var media = input.getAttribute("data-md-color-media") || "";

      if (typeof __md_set === "function") {
        __md_set("__palette", {
          color: {
            media: media,
            scheme: scheme,
            primary: primary,
            accent: accent,
          },
        });
      }

      document.body.setAttribute("data-md-color-media", media);
      document.body.setAttribute("data-md-color-scheme", scheme);
      document.body.setAttribute("data-md-color-primary", primary);
      document.body.setAttribute("data-md-color-accent", accent);
    }

    var button = document.createElement("button");
    button.type = "button";
    button.className = "md-header__button md-icon md-single-theme-toggle";

    function updateButtonIcon() {
      var currentScheme = getCurrentScheme();
      var isDark = currentScheme === "slate";

      button.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="' +
        (isDark ? sunPath : moonPath) +
        '"/></svg>';
      button.setAttribute("title", isDark ? "Light mode" : "Dark mode");
      button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    button.addEventListener("click", function () {
      var currentScheme = getCurrentScheme();
      var targetScheme = currentScheme === "slate" ? "default" : "slate";
      var targetInput = getSchemeInput(targetScheme);

      if (!targetInput) {
        return;
      }

      targetInput.checked = true;
      targetInput.dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );

      applyPalette(targetInput);
      updateButtonIcon();
    });

    paletteForm.appendChild(button);
    updateButtonIcon();

    var observer = new MutationObserver(function () {
      updateButtonIcon();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-md-color-scheme"],
    });
  }

  function mountImageLightbox() {
    var content = document.querySelector(".md-content .md-typeset");
    if (!content) {
      return;
    }

    var images = Array.from(content.querySelectorAll("img")).filter(function (image) {
      var src = image.getAttribute("src") || "";
      if (!src) {
        return false;
      }
      if (image.classList.contains("twemoji")) {
        return false;
      }
      return !src.startsWith("data:image/svg+xml");
    });

    if (!images.length) {
      return;
    }

    var lightbox = document.querySelector(".md-image-lightbox");
    var lightboxImage;
    var lightboxCaption;
    var lastActiveElement = null;

    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.className = "md-image-lightbox";
      lightbox.setAttribute("role", "dialog");
      lightbox.setAttribute("aria-modal", "true");
      lightbox.setAttribute("hidden", "hidden");

      var closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "md-image-lightbox__close";
      closeButton.setAttribute("aria-label", "Close image preview");
      closeButton.textContent = "×";

      var figure = document.createElement("figure");
      figure.className = "md-image-lightbox__figure";

      lightboxImage = document.createElement("img");
      lightboxImage.className = "md-image-lightbox__img";
      lightboxImage.alt = "";

      lightboxCaption = document.createElement("figcaption");
      lightboxCaption.className = "md-image-lightbox__caption";

      figure.appendChild(lightboxImage);
      figure.appendChild(lightboxCaption);
      lightbox.appendChild(closeButton);
      lightbox.appendChild(figure);
      document.body.appendChild(lightbox);

      function closeLightbox() {
        lightbox.setAttribute("hidden", "hidden");
        document.body.classList.remove("md-image-lightbox-open");
        lightboxImage.removeAttribute("src");
        lightboxCaption.textContent = "";
        if (lastActiveElement && typeof lastActiveElement.focus === "function") {
          lastActiveElement.focus();
        }
      }

      closeButton.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
          closeLightbox();
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !lightbox.hasAttribute("hidden")) {
          closeLightbox();
        }
      });
    } else {
      lightboxImage = lightbox.querySelector(".md-image-lightbox__img");
      lightboxCaption = lightbox.querySelector(".md-image-lightbox__caption");
    }

    function openLightbox(image) {
      var source = image.currentSrc || image.getAttribute("src");
      if (!source) {
        return;
      }

      var altText = (image.getAttribute("alt") || "").trim();
      lastActiveElement = document.activeElement;

      lightboxImage.setAttribute("src", source);
      lightboxImage.setAttribute("alt", altText || "Image preview");
      lightboxCaption.textContent = altText;
      lightboxCaption.hidden = !altText;

      lightbox.removeAttribute("hidden");
      document.body.classList.add("md-image-lightbox-open");
    }

    images.forEach(function (image) {
      if (image.dataset.lightboxBound === "true") {
        return;
      }

      image.dataset.lightboxBound = "true";
      image.classList.add("md-image-zoomable");

      if (!image.hasAttribute("tabindex")) {
        image.setAttribute("tabindex", "0");
      }

      image.setAttribute("role", "button");
      image.setAttribute("aria-label", image.getAttribute("alt") || "Open image preview");

      image.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        openLightbox(image);
      });

      image.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });
  }

  function buildSectionTree() {
    var container = document.querySelector(".md-content .md-typeset");
    if (!container) {
      return [];
    }

    var headings = Array.from(container.querySelectorAll("h2[id], h3[id]"));
    var sections = [];
    var current = null;
    var idMap = new Map();

    function normalizeHeadingId(heading) {
      var originalId = heading.id;
      if (!originalId) {
        return "";
      }

      var count = idMap.get(originalId) || 0;
      var uniqueId = originalId;

      if (count > 0) {
        uniqueId = originalId + "-" + (count + 1);
        heading.id = uniqueId;
      }

      idMap.set(originalId, count + 1);

      if (uniqueId !== originalId) {
        var anchor = heading.querySelector("a[href^='#']");
        if (anchor) {
          anchor.setAttribute("href", "#" + uniqueId);
        }
      }

      return uniqueId;
    }

    headings.forEach(function (heading) {
      var id = normalizeHeadingId(heading);
      if (!id) {
        return;
      }

      if (heading.tagName === "H2") {
        current = {
          id: id,
          text: extractText(heading),
          element: heading,
          children: [],
        };
        sections.push(current);
        return;
      }

      if (!current) {
        current = {
          id: id,
          text: extractText(heading),
          element: heading,
          children: [],
        };
        sections.push(current);
        return;
      }

      current.children.push({
        id: id,
        text: extractText(heading),
        element: heading,
      });
    });

    return sections;
  }

  function setSidebarTitle(sidebarSelector, labelText) {
    var title = document.querySelector(sidebarSelector + " .md-nav__title");
    if (!title) {
      return;
    }

    title.removeAttribute("for");

    var icon = title.querySelector(".md-nav__icon");
    title.textContent = "";
    if (icon) {
      title.appendChild(icon);
    }
    title.appendChild(document.createTextNode(labelText));
  }

  function renderPrimaryTableOfContents(sections, activeSectionId) {
    var primaryRoot = document.querySelector(".md-sidebar--primary nav.md-nav--primary");
    if (!primaryRoot) {
      return;
    }

    setSidebarTitle(".md-sidebar--primary", "Table of contents");

    var tocList = primaryRoot.querySelector(":scope > .md-nav__list");
    if (!tocList) {
      return;
    }

    tocList.innerHTML = "";

    sections.forEach(function (section) {
      var item = document.createElement("li");
      item.className = "md-nav__item";

      var link = document.createElement("a");
      var isActive = section.id === activeSectionId;
      link.className = "md-nav__link" + (isActive ? " md-nav__link--active" : "");
      link.href = "#" + section.id;

      var text = document.createElement("span");
      text.className = "md-ellipsis";
      text.textContent = section.text;

      link.appendChild(text);
      item.appendChild(link);
      tocList.appendChild(item);
    });
  }

  function resolveSectionTarget(sections, hashId) {
    if (!sections.length) {
      return null;
    }

    if (!hashId) {
      return {
        section: sections[0],
        activeId: sections[0].id,
      };
    }

    for (var i = 0; i < sections.length; i += 1) {
      var section = sections[i];
      if (section.id === hashId) {
        return {
          section: section,
          activeId: section.id,
        };
      }

      for (var j = 0; j < section.children.length; j += 1) {
        var child = section.children[j];
        if (child.id === hashId) {
          return {
            section: section,
            activeId: child.id,
          };
        }
      }
    }

    return {
      section: sections[0],
      activeId: sections[0].id,
    };
  }

  function buildSectionPageMap(sections) {
    var container = document.querySelector(".md-content .md-typeset");
    if (!container) {
      return null;
    }

    var children = Array.from(container.children);
    var pageMap = new Map();

    sections.forEach(function (section, index) {
      var start = children.indexOf(section.element);
      var end = index + 1 < sections.length ? children.indexOf(sections[index + 1].element) : children.length;
      var nodes = start >= 0 && end >= start ? children.slice(start, end) : [section.element];
      pageMap.set(section.id, nodes);
    });

    if (sections.length) {
      var firstStart = children.indexOf(sections[0].element);
      if (firstStart > 0) {
        var leadingNodes = children.slice(0, firstStart).filter(function (node) {
          return node.tagName !== "H1";
        });
        if (leadingNodes.length) {
          pageMap.set(sections[0].id, leadingNodes.concat(pageMap.get(sections[0].id) || []));
        }
      }
    }

    var alwaysVisible = children.filter(function (node) {
      return node.tagName === "H1";
    });

    return {
      pageMap: pageMap,
      alwaysVisible: alwaysVisible,
    };
  }

  function setVisibleSection(pageState, activeSectionId) {
    if (!pageState) {
      return;
    }

    pageState.pageMap.forEach(function (nodes, sectionId) {
      var hidden = sectionId !== activeSectionId;
      nodes.forEach(function (node) {
        node.classList.toggle("md-section-hidden", hidden);
      });
    });

    pageState.alwaysVisible.forEach(function (node) {
      node.classList.remove("md-section-hidden");
    });
  }

  function locateActiveChildInSection(section, headerOffset) {
    if (!section) {
      return "";
    }

    var candidates = [{ id: section.id, element: section.element }].concat(section.children);
    var activeId = section.id;
    var activationLine = headerOffset + Math.min(320, Math.max(120, window.innerHeight * 0.32));

    candidates.forEach(function (item) {
      if (!item || !item.element) {
        return;
      }

      if (item.element.getBoundingClientRect().top <= activationLine) {
        activeId = item.id;
      }
    });

    var scrollRoot = document.documentElement;
    var nearBottom = window.innerHeight + window.scrollY >= scrollRoot.scrollHeight - 8;
    if (nearBottom && candidates.length) {
      activeId = candidates[candidates.length - 1].id;
    }

    return activeId;
  }

  function mountSectionPager(sections, onNavigate) {
    var host = document.querySelector(".md-content__inner");
    if (!host || sections.length < 2) {
      return null;
    }

    var existing = host.querySelector(".md-doc-section-pager");
    if (existing) {
      existing.remove();
    }

    var nav = document.createElement("nav");
    nav.className = "md-doc-section-pager";
    nav.setAttribute("aria-label", "Pager");

    function createButton(kind, desc) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "md-doc-section-pager__btn md-doc-section-pager__btn--" + kind;

      var descEl = document.createElement("span");
      descEl.className = "md-doc-section-pager__desc";
      descEl.textContent = desc;

      var titleEl = document.createElement("span");
      titleEl.className = "md-doc-section-pager__title";

      button.appendChild(descEl);
      button.appendChild(titleEl);

      return {
        button: button,
        titleEl: titleEl,
      };
    }

    var prev = createButton("prev", "Previous page");
    var next = createButton("next", "Next page");

    var currentIndex = 0;

    prev.button.addEventListener("click", function () {
      if (currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    });

    next.button.addEventListener("click", function () {
      if (currentIndex < sections.length - 1) {
        onNavigate(currentIndex + 1);
      }
    });

    nav.appendChild(prev.button);
    nav.appendChild(next.button);
    host.appendChild(nav);

    return {
      update: function (index) {
        currentIndex = index;

        if (index > 0) {
          prev.button.disabled = false;
          prev.button.classList.remove("is-hidden");
          prev.titleEl.textContent = sections[index - 1].text;
        } else {
          prev.button.disabled = true;
          prev.button.classList.add("is-hidden");
          prev.titleEl.textContent = "";
        }

        if (index < sections.length - 1) {
          next.button.disabled = false;
          next.button.classList.remove("is-hidden");
          next.titleEl.textContent = sections[index + 1].text;
        } else {
          next.button.disabled = true;
          next.button.classList.add("is-hidden");
          next.titleEl.textContent = "";
        }
      },
    };
  }

  function mountSimpleCopyrightFooter() {
    var host = document.querySelector(".md-content__inner");
    if (!host) {
      return;
    }

    var existing = host.querySelector(".md-simple-copyright");
    if (existing) {
      return;
    }

    var footer = document.createElement("footer");
    footer.className = "md-simple-copyright";
    footer.textContent = "© PLS Poro Language Space";
    host.appendChild(footer);
  }

  function renderOnThisPage(section, activeId) {
    var tocRoot = document.querySelector(".md-sidebar--secondary [data-md-component='toc']");
    if (!tocRoot || !section) {
      return;
    }

    setSidebarTitle(".md-sidebar--secondary", "On this page");

    tocRoot.innerHTML = "";

    var rootItem = document.createElement("li");
    rootItem.className = "md-nav__item md-nav__item--active";

    var rootLink = document.createElement("a");
    rootLink.className = "md-nav__link" + (activeId === section.id ? " md-nav__link--active" : "");
    rootLink.href = "#" + section.id;
    rootLink.textContent = section.text;
    rootItem.appendChild(rootLink);

    if (section.children.length) {
      var nestedNav = document.createElement("nav");
      nestedNav.className = "md-nav";
      nestedNav.setAttribute("aria-label", section.text);

      var nestedList = document.createElement("ul");
      nestedList.className = "md-nav__list";

      section.children.forEach(function (child) {
        var item = document.createElement("li");
        item.className = "md-nav__item";

        var link = document.createElement("a");
        var isActive = activeId === child.id;
        link.className = "md-nav__link" + (isActive ? " md-nav__link--active" : "");
        link.href = "#" + child.id;
        link.textContent = child.text;

        item.appendChild(link);
        nestedList.appendChild(item);
      });

      nestedNav.appendChild(nestedList);
      rootItem.appendChild(nestedNav);
    }

    tocRoot.appendChild(rootItem);
  }

  function mountSectionAwareToc() {
    var sections = buildSectionTree();
    if (!sections.length) {
      return;
    }

    var pageState = buildSectionPageMap(sections);
    var state = {
      sectionId: "",
      activeId: "",
    };
    var pager = mountSectionPager(sections, function (targetIndex) {
      var target = sections[targetIndex];
      if (!target) {
        return;
      }

      var targetHash = "#" + target.id;
      if (window.location.hash !== targetHash) {
        window.location.hash = target.id;
      } else {
        applyTarget({ section: target, activeId: target.id }, true);
      }
    });
    mountSimpleCopyrightFooter();

    function applyTarget(target, shouldScrollToTop) {
      if (!target || !target.section) {
        return;
      }

      if (state.sectionId === target.section.id && state.activeId === target.activeId) {
        return;
      }

      var sectionChanged = state.sectionId !== target.section.id;
      state.sectionId = target.section.id;
      state.activeId = target.activeId;

      renderPrimaryTableOfContents(sections, target.section.id);
      renderOnThisPage(target.section, target.activeId);
      setVisibleSection(pageState, target.section.id);

      if (pager) {
        pager.update(sections.indexOf(target.section));
      }

      if (sectionChanged && shouldScrollToTop) {
        window.scrollTo(0, 0);
      }
    }

    function syncFromHash(shouldScrollToTop) {
      var hashId = decodeURIComponent(window.location.hash || "").replace(/^#/, "");
      var target = resolveSectionTarget(sections, hashId);
      applyTarget(target, shouldScrollToTop);
    }

    var scrollScheduled = false;
    function syncOnScroll() {
      if (scrollScheduled) {
        return;
      }
      scrollScheduled = true;

      window.requestAnimationFrame(function () {
        scrollScheduled = false;

        if (!state.sectionId) {
          return;
        }

        var currentSection = sections.find(function (section) {
          return section.id === state.sectionId;
        });
        if (!currentSection) {
          return;
        }

        var header = document.querySelector(".md-header");
        var headerOffset = (header ? header.offsetHeight : 0) + 22;
        var nextActiveId = locateActiveChildInSection(currentSection, headerOffset);

        if (!nextActiveId || nextActiveId === state.activeId) {
          return;
        }

        state.activeId = nextActiveId;
        renderOnThisPage(currentSection, state.activeId);
      });
    }

    syncFromHash(false);
    window.addEventListener("hashchange", function () {
      syncFromHash(true);
    });
    window.addEventListener("scroll", syncOnScroll, { passive: true });
    window.addEventListener("resize", syncOnScroll);
  }

  function boot() {
    mountDocumentSwitcher();
    mountSingleThemeToggle();
    mountImageLightbox();
    mountSectionAwareToc();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
