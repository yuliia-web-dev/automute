"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const closeBtn = document.querySelector('.announcement__btn');
	const announcement = document.querySelector('.announcement');

	if (!closeBtn || !announcement) return;

	closeBtn.addEventListener('click', function () {
		announcement.classList.add('hidden');
	});
});
