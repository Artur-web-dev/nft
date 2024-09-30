const burgerMenu = document.querySelector(".burger-menu");
const popupMenuClose = document.querySelector(".popup-menu__close");
const popupMenu = document.querySelector(".popup-menu");
const popupBg = document.querySelector(".popup__bg");
const body = document.body;

burgerMenu.addEventListener("click", () => {
	body.style.overflow = "hidden";
	popupMenu.classList.add("active");
});
popupMenuClose.addEventListener("click", () => {
	popupMenu.classList.remove("active");
	body.style.overflow = "visible";
});
popupBg.addEventListener("click", () => {
	popupMenu.classList.remove("active");
	body.style.overflow = "visible";
});
