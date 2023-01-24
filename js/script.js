const menuBtns = document.getElementsByClassName('menu-icon');
const menus = document.getElementsByClassName('menu__body');
const body = document.body

if (menuBtns && menus) {
	for (let i = 0; i < menuBtns.length; i++ ){
		menuBtns[i].addEventListener('click', () => {
			menus[i].classList.toggle('active')
			menuBtns[i].classList.toggle('active')
			body.classList.toggle('lock')
			
		})
	}
}

$(document).ready(function(){
	$('.slider').slick();
})

