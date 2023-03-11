import cat1 from './images_for_slider/1.jpg';
import cat2 from './images_for_slider/2.jpg';
import cat3 from './images_for_slider/3.jpg';
import cat4 from './images_for_slider/4.jpg';
import cat5 from './images_for_slider/5.jpg';
import cat6 from './images_for_slider/6.jpg';
import cat7 from './images_for_slider/7.jpg';
import cat8 from './images_for_slider/8.jpg';
import ImageMakerFactory from './imageMaker';

const cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];

const createCats = () => {
	cats.forEach((cat) => {
		const catImage = ImageMakerFactory(cat, 'image of another cat');
		catImage.createImage();
	});
};

export default createCats;
