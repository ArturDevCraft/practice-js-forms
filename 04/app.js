document.addEventListener('DOMContentLoaded', init);

function init() {
	const boxElement = document.querySelector('.box');
	const panelElement = document.querySelector('.panel');
	setBoxShadow(boxElement, '#000000');
	initEvents(boxElement, panelElement);
}

function setBoxShadow(element, colorInHex, opacity = 1) {
	const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

	element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function initEvents(boxElement, panelElement) {
	const color = panelElement.querySelector('input[name="color"]');
	const opacity = panelElement.querySelector('input[name="opacity"]');

	color.addEventListener('change', (e) =>
		onColorChange(color, opacity, boxElement)
	);

	opacity.addEventListener('mousemove', (e) => {
		if (e.buttons == 1) {
			onColorChange(color, opacity, boxElement);
		}
	});
}

function onColorChange(color, opacity, boxElement) {
	const alpha = opacity.value / 100;
	setBoxShadow(boxElement, color.value, alpha);
}

function getChannelColor(colorInHex, channelName) {
	let start;
	switch (channelName) {
		case 'red':
			start = 1;
			break;
		case 'green':
			start = 3;
			break;
		case 'blue':
			start = 5;
			break;
	}

	const channelColorHex = colorInHex.substr(start, 2);
	const channelColorDec = parseInt(channelColorHex, 16);

	return channelColorDec;
}
