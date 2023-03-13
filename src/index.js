import './style.css';
import toggle from './modules/component_helpers/progressively collapsing menu/toggleClickedElement';
import { createCats } from './modules/component_helpers/image_slider/cats';
import sliderInterfaceContainer from './modules/component_helpers/image_slider/sliderInterfaceContainer';
import sliderController, {setActive,  sliderNavAdvanceRecursive} from './modules/component_helpers/image_slider/sliderController';


toggle.init('.nav.item');

createCats();

const main = document.querySelector('.main');
main.appendChild(sliderInterfaceContainer());


sliderController();
setActive(0)
sliderNavAdvanceRecursive()


/* 

I have a currently working image slider that I'm trying to add a pause for 5 seconds if the user clicks the advance button.

So here's the issue. I need to pause the advance of the recursive function sliderNavAdvance() on a click in the slider nav container. 

Currently the slider advances every 1 second, even if I click on the slider nav container.

My dillema: I need to be able to get the value of the pauseRecursiveSlider variable from the sliderController function to the sliderNavAdvanceRecursive function every time there's a click event on the slider nav container.  

I can't get the value of the pause variable to the sliderNavAdvanceRecursive function.  I declared the pause variable in the module scope, I know I can't export a non const variable to another module as that would not get updated after the inital import into the other module. I've tried numerous things to overcome this short of looking up a solution that implements it... 

Here is my repo/branch that is up to date, and I can share my screen and talk through this with anyone who can lend a hand.  I've been at this issue for several hours and it's a foundational thing that I'm missing. 

https://github.com/JustWaveThings/Dynamic-User-Interface-Interactions/tree/feature_pause_advance_on_nav_click 
*/