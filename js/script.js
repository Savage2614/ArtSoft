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
const menu__Btn = document.querySelector('.menu__Icon');
const Menu1 = document.querySelector('.menu__Body');

if (menu__Btn && Menu1) {
	menu__Btn.addEventListener('click', () => {
		Menu1.classList.toggle('active')
		menu__Btn.classList.toggle('active')

	})
}

