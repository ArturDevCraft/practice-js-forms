const filePicker = document.querySelector('.files input[type="file"]');

filePicker.addEventListener('change', fileHandler);

function fileHandler(e) {
	const files = e.target.files;
	for (const f of files) {
		if (f.type.includes('image')) {
			const reader = new FileReader();
			reader.onload = (e) => appendImage(e, f.name, f.size);
			reader.readAsDataURL(f);
		}
	}
}

function appendImage(readerEvent, name, size) {
	const listElement = document.querySelector('.images-list__item--prototype');
	const parentList = listElement.parentElement;
	const newElement = listElement.cloneNode(true);
	const img = newElement.querySelector('.images-list__item-img');
	const nameElement = newElement.querySelector('.images-list__item-name');
	const sizeElement = newElement.querySelector('.images-list__item-size');

	newElement.classList.remove('images-list__item--prototype');
	img.src = readerEvent.target.result;
	nameElement.innerText = name;
	sizeElement.innerText = Math.round((size / 1024 / 1024) * 100) / 100 + 'MB';

	parentList.appendChild(newElement);
}
