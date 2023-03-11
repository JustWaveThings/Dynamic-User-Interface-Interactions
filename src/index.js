import './style.css';
import cat from './modules/component_helpers/image_slider/images_for_slider/1.jpg';
import toggle from './modules/component_helpers/progressively collapsing menu/toggleClickedElement';
/* import imageManager from './modules/component_helpers/image_slider/imageContainer'; */

toggle.init('.nav.item');

/* function createImage(src, alt, width, height) {
	const img = new Image();
	img.src = src;
	img.alt = alt;
	img.width = width;
	img.height = height;
	return img;
}

const myContainer = document.querySelector('.main-slider');
const myImage = createImage(image, 'A sample image', '500', '300');
myContainer.appendChild(myImage);
 */

const ImageManager = (src, altTag, appenderClass, width, height) => {
	const addAttrs = (image) => {
		const img = image;
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

const catImage = ImageManager(cat, 'image of a cat');

catImage.image();
