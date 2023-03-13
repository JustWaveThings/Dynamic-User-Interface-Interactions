function createImage(src, alt,  width = '600', height = '400', ) {
	const img = new Image();
	img.src = src;
	img.alt = alt;
	img.width = width;
	img.height = height;

	return img;
}

function appendImage(image, container = '.img-slider-container') {
	const myContainer = document.querySelector(container);
	myContainer.appendChild(image);
}

export { createImage, appendImage };
