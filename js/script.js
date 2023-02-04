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
	$('.slider').slick({
		slidesToShow: 1,
		arrows: false,
		lazyLoad: 'ondemand',
		asNavFor: '.sliderTitle'
	});
	$('.sliderTitle').slick({
		infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		centerMode: true,
  		centerPadding: '60px',
		asNavFor: '.slider',
		arrows: false,
		focusOnSelect: true,
		lazyLoad: 'ondemand',
	});
})

