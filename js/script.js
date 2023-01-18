const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu__body');
const body = document.body

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')

	})
}

const menu_Btn = document.querySelector('.menuIcon');
const Menu = document.querySelector('.menuBody');

if (menu_Btn && Menu) {
	menu_Btn.addEventListener('click', () => {
		Menu.classList.toggle('active')
		menu_Btn.classList.toggle('active')

	})
}
