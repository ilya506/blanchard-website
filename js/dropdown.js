document.addEventListener('DOMContentLoaded', () => {
	/*
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

	const menuBtns = document.querySelectorAll('.js-menu__btn');
	const drops = document.querySelectorAll('.js-dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.js-menu__item').querySelector('.dropdown');


			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');

		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.js-menu')) {

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});


