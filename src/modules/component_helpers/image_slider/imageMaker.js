// keeping for posterity, but not the right of a factory function

/* const ImageMakerFactory = (
	src,
	altTag,
	width,
	height,
	appenderClass
) => {
	// 1. added image as a parameter
	const addAttrs = (image) => {
		// 2. declared img as a variable within this function and set it to the parameter 'image'
		const img = image;
		img.src = src;
		img.alt = altTag;
		if (width) img.width = width;
		if (!width) img.width = 800;
		if (height) img.height = height;
		if (!height) img.height = 500;
	};

	// eslint-disable-next-line consistent-return
	const appendTo = () => {
		if (!appenderClass) {
			return document.querySelector('.img-slider-container');
		}
		if (appenderClass) {
			return document.querySelector(appenderClass);
		}
	};

	const createImage = () => {
		const img = new Image();
		addAttrs(img);
		appendTo().appendChild(img);
		return img;
	};

	return {
		createImage,
	};
};

export default ImageMakerFactory;
 */
