document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".menu-nav-link");
  const sections = document.querySelectorAll("section[id]");

  function setCurrentLink(sectionId) {
    navLinks.forEach(link => {
      const linkId = link.getAttribute("href").substring(1);
      link.classList.toggle("current", linkId === sectionId);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      setCurrentLink(this.getAttribute("href").substring(1));
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setCurrentLink(entry.target.id);
      }
    });
  }, {
    threshold: 0,
    rootMargin: "-25% 0px -65% 0px"
  });

  sections.forEach(section => observer.observe(section));
});