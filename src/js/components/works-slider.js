import {Swiper} from '/node_modules/swiper/swiper-bundle.esm';

if (document.querySelector('.works__slider')) {
	// eslint-disable-next-line no-new
	new Swiper('.works__slider', {
		slidesPerView: 3,
		slidesPerScroll: 1,
		spaceBetween: 76,
		speed: 400,
		loop: true,
		navigation: {
			nextEl: '.works__slider-btn--next',
			prevEl: '.works__slider-btn--prev',
		},
		grabCursor: true,
	});
}
