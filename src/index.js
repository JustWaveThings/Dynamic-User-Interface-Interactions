import './style.css';
import toggle from './modules/component_helpers/progressively collapsing menu/toggleClickedElement';
import { createCats } from './modules/component_helpers/image_slider/cats';
import sliderInterfaceContainer from './modules/component_helpers/image_slider/sliderInterfaceContainer';
import test from './modules/component_helpers/image_slider/sliderController';


toggle.init('.nav.item');

createCats();

const main = document.querySelector('.main');
main.appendChild(sliderInterfaceContainer());


test()