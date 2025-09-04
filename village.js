// Toggle hamburger menu
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
}

// Navbar scroll effect
const header = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });
});
