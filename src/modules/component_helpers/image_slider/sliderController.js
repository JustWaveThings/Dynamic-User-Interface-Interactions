/* eslint-disable no-plusplus */
import sliderInterfaceContainer from './sliderInterfaceContainer';

/* 
 1. this needs to assign event listeners using event delegation for the slider interface container buttons and the left and right arrows. We need to use the data-attributes I assigned to the buttons and images. -- done

 2. this needs to be able to update the slider interface container buttons to reflect the current image being displayed by putting a class on the button that matches the current image being displayed.  -- done 
  
 2.1 I will put an 'active' on both the button and the image that should be displayed and style them separately in css. This should update either by a click on a button in the slider nav   -- done

 2.2 make the arrows work to advance - rewind   done 
 
 2.3 or by the timing function that moves the slider forward every 5 seconds     

 3. need a function that will remove a class from the active button and image and add it to the next button and image every 5 seconds if no other button is clicked in the last 5 seconds.  this function will also need to loop back to the first image and button if it is on the last image and button. if a button is clicked, the timer should reset to 5 seconds. if the left or right arrow is clicked, the timer should reset to 5 seconds. 
 
*/

export function setActive(index) {
  const buttons = document.querySelectorAll(
    '.nav-slider-position-indicator-buttons'
  );
  const images = document.querySelectorAll('.slider-images-of-cats');
  buttons.forEach((button) => {
    button.classList.remove('active-slider');
  });
  images.forEach((image) => {
    image.classList.remove('active-image');
  });
  buttons[index].classList.toggle('active-slider');
  images[index].classList.toggle('active-image');
}

function navArrowAction(arrow) {
  const catListLength =
    document.querySelectorAll('.slider-images-of-cats').length - 1;

  let currentActiveIndex =
    document.querySelector('.active-slider').dataset.navIndex;

  if (arrow === 'slider-reverse') {
    if (currentActiveIndex === '0') {
      setActive(catListLength);
    } else {
      setActive(currentActiveIndex - 1);
    }
  }

  if (arrow === 'slider-forward') {
    if (+currentActiveIndex === catListLength) {
      setActive('0');
    } else {
      setActive(++currentActiveIndex);
    }
  }
}

let pauseRecursiveSlider = false;

function sliderController() {
  // grab the slider interface container
  const sliderNavContainer = document.querySelector('.slider-interface-nav');

  // event delegation to handle either a click on the slider nav button or an arrow
  sliderNavContainer.addEventListener('click', (e) => {
    if (!e.target.dataset.navIndex) {
      const arrow = e.target.dataset.navArrow;
      navArrowAction(arrow);
      return;
    }

    const index = e.target.dataset.navIndex;
    setActive(index);
    pauseRecursiveSlider = true;
  });
}

// how to pass pauseRecursiveSlider to the recursive function from sliderController?

export function sliderNavAdvanceRecursive() {
  const catListLength =
    document.querySelectorAll('.slider-images-of-cats').length - 1;
  let currentActiveIndex =
    document.querySelector('.active-slider').dataset.navIndex;
  // console.log(currentActiveIndex);
  if (+currentActiveIndex === catListLength) {
    currentActiveIndex = -1;
  }
  currentActiveIndex++;
  setActive(currentActiveIndex);

  if (pauseRecursiveSlider) {
    console.log(`true = paused leg of the timeout block`)
    setTimeout(() => {
      sliderNavAdvanceRecursive(false);
    }, '5000');
  } else {
    console.log(`else leg of the timeout block`)
    setTimeout(sliderNavAdvanceRecursive, '1000');
  }
}

export default sliderController;

// this version as of 3 / 13 / 23 the autoadvance and the nav forward back buttons work...
