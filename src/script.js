require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import sliders from './modules/sliders';
import { openModalWindow } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => openModalWindow('.modal', modalTimerId), 300000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal('[data-modal]', '.modal', modalTimerId);
	timer('.timer', '2021-04-13');
	calc();
	cards();
	forms('form', modalTimerId);
	sliders({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});


});




