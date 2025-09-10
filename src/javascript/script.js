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

const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('form');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById('form-' + tab.dataset.tab).classList.add('active');
  });
});

const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    const errorMsg = input.nextElementSibling;

    input.addEventListener("input", () => {
      if (!input.checkValidity()) {
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
      }
    });

    input.addEventListener("blur", () => {
      if (!input.checkValidity()) {
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
      }
    });
  });