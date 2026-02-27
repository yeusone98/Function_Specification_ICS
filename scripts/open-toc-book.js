function openSingleAdmonitionFromHash() {
  const hash = decodeURIComponent(location.hash);
  if (!hash) return;

  // Luôn đóng tất cả khối ??? book
  document.querySelectorAll("details.book").forEach((el) => {
    el.removeAttribute("open");
  });

  const heading = document.querySelector(hash);
  if (!heading) return;

  // Tìm khối ??? gần nhất sau heading (nếu có)
  setTimeout(() => {
    let el = heading.nextElementSibling;
    while (el) {
      if (el.tagName === "DETAILS" && el.classList.contains("book")) {
        el.setAttribute("open", "true");
        setTimeout(() => {
          heading.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 10);
        return;
      }
      if (/^H[1-3]$/.test(el.tagName)) break;
      el = el.nextElementSibling;
    }
  }, 10);
}

document.addEventListener("DOMContentLoaded", openSingleAdmonitionFromHash);
window.addEventListener("hashchange", openSingleAdmonitionFromHash);
