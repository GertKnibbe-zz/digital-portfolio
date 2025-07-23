document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".menu-nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(el => el.classList.remove("current"));
      this.classList.add("current");
    });
  });

  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute("href").substring(1);
          if (href === id) {
            link.classList.add("current");
          } else {
            link.classList.remove("current");
          }
        });
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
