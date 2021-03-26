function closeModalWindow(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function openModalWindow(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function modal(triggerSelector, modalSelector, modalTimerId) {

	//   Modal  

	const openModal = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);

	openModal.forEach(btn => {
		btn.addEventListener('click', () => openModalWindow(modalSelector, modalTimerId));
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModalWindow(modalSelector);
		}

	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModalWindow(modalSelector);
		}
	});

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModalWindow(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);


}

export default modal;
export { closeModalWindow };
export { openModalWindow };