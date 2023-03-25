const header = document.querySelector("header");
const toggle_btn = document.querySelector(".toggle-btn");
/*-----------Sticky Navbar--------------- */
function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/*-----------Reveal Animation--------------- */

let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/*--------------Change Page Theme--------------- */
function chageTheme() {
  if (!document.body.classList.contains("dark")) {
    document.body.classList.add("dark");
    toggle_btn.classList.replace("uil-moon", "uil-sun");
  }
}

toggle_btn.addEventListener("click", () => {
  chageTheme();
});
