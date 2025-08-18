/*
  My Choice Mortgage & Finance — interactions
*/

(function () {
  // Mobile nav toggle
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && e.target !== toggle) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Intersection reveal
  const toReveal = document.querySelectorAll(".reveal");
  const obs =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        )
      : null;
  if (obs) toReveal.forEach((el) => obs.observe(el));
  else toReveal.forEach((el) => el.classList.add("in-view"));

  // Dynamic year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Lightweight form handling: fallback to email compose via mailto
  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const phone = data.get("phone") || "";
      const service = data.get("service") || "";
      const message = data.get("message") || "";

      const subject = encodeURIComponent(`Enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:info@mychoicemortgage.com.au?subject=${subject}&body=${body}`;
    });
  }
})();
