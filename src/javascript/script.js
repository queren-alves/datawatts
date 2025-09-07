document.addEventListener('DOMContentLoaded', function() {

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
});

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const icon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle('fa-x');
  });

});