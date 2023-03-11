// what I want to do is create a reusuable factory function that takes in what the container will append to, the image itself, the image source, the image attributes and outputs an image object that can be used to display all the images processed by the factory function

const imageManager = (src, altTag, appenderClass, width, height) => {
	const addAttrs = () => {
		img.src = src;
		img.alt = altTag;
		if (width !== undefined) img.width = width;
		if (width === undefined) img.width = 800;
		if (height !== undefined) img.height = height;
		if (height === undefined) img.height = 500;
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

	const imageObject = () => {
		const img = new Image();
		addAttrs(img);
		appendTo().appendChild(img);
		return img;
	};

	return {
		image: imageObject,
	};
};

export default imageManager;
