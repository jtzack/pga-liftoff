/* =========================================================
   Liftoff Landing Page — behavior
   ========================================================= */

/* -------------------------------------------------------------------
   SAMCART CHECKOUT URL  —  single source of truth.
   Replace the placeholder below with the live Liftoff SamCart link.
   Every "Join Liftoff" / "Join Now" button on the page points here.
   ------------------------------------------------------------------- */
var SAMCART_URL = "https://vine-perch-730.notion.site/pga-liftoff-coming-soon";

(function () {
  "use strict";

  // Wire every CTA to the SamCart checkout (unless it's still a placeholder).
  var isPlaceholder = /YOUR-SUBDOMAIN/.test(SAMCART_URL);
  document.querySelectorAll(".js-join").forEach(function (el) {
    if (isPlaceholder) return; // leave anchor pointing at #join until URL is set
    el.setAttribute("href", SAMCART_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Sticky CTA bar: slide in once the 2nd section has scrolled out of view,
  // and keep it pinned for the rest of the page.
  var ctaBar = document.getElementById("ctaBar");
  var ctaTrigger = document.getElementById("approach");
  if (ctaBar && ctaTrigger) {
    if ("IntersectionObserver" in window) {
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var past = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          ctaBar.classList.toggle("show", past);
          ctaBar.setAttribute("aria-hidden", past ? "false" : "true");
        });
      }, { threshold: 0 });
      barObserver.observe(ctaTrigger);
    } else {
      ctaBar.classList.add("show");
      ctaBar.setAttribute("aria-hidden", "false");
    }
  }

  // Render Lucide icons.
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Scroll-reveal: fade-up on enter (respects prefers-reduced-motion via CSS).
  var reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reveals.length === 0) {
    reveals.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
  reveals.forEach(function (el) { io.observe(el); });
})();
