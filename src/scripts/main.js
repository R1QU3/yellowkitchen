const menuWrapper = document.getElementById("menu-wrapper");
const menuContainer = document.getElementById("menu-container");
const menuButton = document.getElementById("toggleMenu");
const menuIcon = menuButton.querySelector("img#menu-icon");
let iconName;

const toggleMenu = () => {
  menuWrapper.classList.toggle("hidden");
  menuContainer.classList.toggle("hidden");
  iconName = menuIcon.src.includes("hamburger") ? menuIcon.src.replace("hamburger", "close") : menuIcon.src.replace("close", "hamburger");
  menuIcon.setAttribute("src", iconName);
}

menuButton.addEventListener("click", toggleMenu);
