import './style.css';
import cat from './modules/component_helpers/image_slider/images_for_slider/1.jpg';
import toggle from './modules/component_helpers/progressively collapsing menu/toggleClickedElement';
import ImageMakerFactory from './modules/component_helpers/image_slider/imageMaker';

toggle.init('.nav.item');

const catImage = ImageMakerFactory(cat, 'image of a cat');

catImage.createImage();
