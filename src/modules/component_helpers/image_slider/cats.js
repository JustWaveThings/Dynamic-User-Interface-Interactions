import cat1 from './images_for_slider/1.jpg';
import cat2 from './images_for_slider/2.jpg';
import cat3 from './images_for_slider/3.jpg';
import cat4 from './images_for_slider/4.jpg';
import cat5 from './images_for_slider/5.jpg';
import cat6 from './images_for_slider/6.jpg';
import cat7 from './images_for_slider/7.jpg';
import cat8 from './images_for_slider/8.jpg';
import { appendImage, createImage } from './createImage';

export const cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];

export const createCats = () => {
	cats.forEach((cat, index) => {
		const catImage = createImage(cat, 'image of cat');
		catImage.dataset.imageIndex = index;
		catImage.classList.add('slider-images-of-cats')
		appendImage(catImage);
	});
};
