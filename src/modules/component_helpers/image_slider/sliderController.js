/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import sliderInterfaceContainer from "./sliderInterfaceContainer"

/* 
 1. this needs to assign event listeners using event delegation for the slider interface container buttons and the left and right arrows. We need to use the data-attributes I assigned to the buttons and images. -- done

 2. this needs to be able to update the slider interface container buttons to reflect the current image being displayed by putting a class on the button that matches the current image being displayed.  -- done 
  
 2.1 I will put an 'active' on both the button and the image that should be displayed and style them separately in css. This should update either by a click on a button in the slider nav   -- done

 2.2 make the arrows work to advance - rewind   done 
 
 2.3 or by the timing function that moves the slider forward every 5 seconds      Done 

 3. if any slider nav button is clicked it resets the advance timer to 0. 
 
*/


let pause = false;



export function setActive(index) {
    const buttons = document.querySelectorAll('.nav-slider-position-indicator-buttons')
    const images = document.querySelectorAll('.slider-images-of-cats')
    buttons.forEach((button) => {
        button.classList.remove('active-slider')
    })
    images.forEach((image) => {
        image.classList.remove('active-image')
    })
  buttons[index].classList.toggle('active-slider')
  images[index].classList.toggle('active-image')
  }

  function navArrowAction(arrow){
    
    const catListLength = document.querySelectorAll('.slider-images-of-cats').length-1
    
    let currentActiveIndex = document.querySelector('.active-slider').dataset.navIndex
    
    
    if (arrow === "slider-reverse" ){
        if (currentActiveIndex === '0'){
            setActive(catListLength)     
        } else {
            setActive(currentActiveIndex -1)
        }   
    }

    if (arrow === "slider-forward"){
        if(+currentActiveIndex === catListLength){
            setActive('0')
        } else {
            setActive(++currentActiveIndex)
        }
    }   

}



function arrowClicked(e){
    
    if(!e.target.dataset.navIndex){
        const arrow = e.target.dataset.navArrow;
        navArrowAction(arrow)
    }

    const index = e.target.dataset.navIndex 
    
    setActive(index)
    console.log(pause, `pause in arrowClicked`)
    return pause    
}


function sliderController(){
    const sliderNavContainer = document.querySelector('.slider-interface-nav')
    sliderNavContainer.addEventListener('click', (e) => (arrowClicked(e)))

}

export function sliderNavAdvance(paused) {
    let currentActiveIndex = document.querySelector('.active-slider').dataset.navIndex
    // console.log(currentActiveIndex)
    if(+currentActiveIndex === 7) {
      currentActiveIndex = -1
    }
    currentActiveIndex++
    setActive(currentActiveIndex)
    console.log(pause)
    if (paused) {
        console.log(`pause activated`)
        setTimeout(() => {
            sliderNavAdvance(false)
    }, 5000); 
    } else {
    setTimeout(sliderNavAdvance, "1000")
    }
}
    
export default sliderController

