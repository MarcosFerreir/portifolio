const siteNav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-toggle");

siteNav.addEventListener("show.bs.collapse", () => {
  menuButton.setAttribute("aria-label", "Fechar menu");
});

siteNav.addEventListener("hide.bs.collapse", () => {
  menuButton.setAttribute("aria-label", "Abrir menu");
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    bootstrap.Collapse.getOrCreateInstance(siteNav).hide();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("show")) {
    bootstrap.Collapse.getOrCreateInstance(siteNav).hide();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}