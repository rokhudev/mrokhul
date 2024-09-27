const menuButton = document.querySelector(".menu__button");
const sidebar = document.createElement("div");
const scrollToTopBtn = document.querySelector(".scroll__to__top");

sidebar.classList.add("sidebar");
sidebar.innerHTML = `
  <span class="close-btn">&times;</span>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#tools">Tools</a></li>
    <li><a href="#project">Project</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
`;

document.body.appendChild(sidebar);

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const closeButton = sidebar.querySelector(".close-btn");
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Scroll dengan efek smooth
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", scrollToTop);
