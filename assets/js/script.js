// toggle menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById("toggleMenu");
  const menu = document.getElementById("menu");

  toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("-translate-y-[750px]");
    if (menu.classList.contains("-translate-y-[750px]")) {
      toggleMenu.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
    } else {
      toggleMenu.innerHTML = '<i class="bi bi-x"></i>';
    }
  });
});

// copyright
document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("copyright");
  const year = new Date().getFullYear();
  copyright.innerHTML = year;
});


// faqs
document.querySelectorAll(".bg-white button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("clicked");
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    // Toggle the max-height of the content
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand
      icon.textContent = "-";
    }

    // Rotate the icon
    icon.classList.toggle("rotate-180");
  });
});


// Loader
window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});