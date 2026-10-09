
// Mobile navigation elements
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
const menuIcon = document.querySelector(".menu-toggle i");

// Open and close the mobile menu
if (menuButton && navigation && menuIcon) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuIcon.classList.toggle("bi-list", !isOpen);
        menuIcon.classList.toggle("bi-x-lg", isOpen);
    });
}
