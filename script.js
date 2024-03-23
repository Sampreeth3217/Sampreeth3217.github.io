function ToggleMenu()
{
    const menu = document.querySelector(".Menu-links");
    const icon = document.querySelector(".Hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}