const menuActive = document.querySelector('.menu-active');
const burger = document.querySelector('.navigationTop__rightSide_burger');

function toggleMenu() {
	menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
