/* eslint-disable no-plusplus */
import sliderInterfaceContainer from "./sliderInterfaceContainer"

/* 
 1. this needs to assign event listeners using event delegation for the slider interface container buttons and the left and right arrows. We need to use the data-attributes I assigned to the buttons and images. -- done

 2. this needs to be able to update the slider interface container buttons to reflect the current image being displayed by putting a class on the button that matches the current image being displayed.  -- done 
  
 2.1 I will put an 'active' on both the button and the image that should be displayed and style them separately in css. This should update either by a click on a button in the slider nav   -- done

 2.2 make the arrows work to advance - rewind 
 
 2.3 or by the timing function that moves the slider forward every 5 seconds   

 3. need a function that will remove a class from the active button and image and add it to the next button and image every 5 seconds if no other button is clicked in the last 5 seconds.  this function will also need to loop back to the first image and button if it is on the last image and button. if a button is clicked, the timer should reset to 5 seconds. if the left or right arrow is clicked, the timer should reset to 5 seconds. 
 
*/





function setActive(index) {
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
    console.log(arrow)
    let currentActiveIndex = document.querySelector('.active-slider').dataset.navIndex
    console.log(currentActiveIndex)
    if (arrow === "slider-reverse"){
        setActive(--currentActiveIndex)
    }
    if (arrow === "slider-forward"){
        setActive(++currentActiveIndex)
    }

     // 1 I need to know what index has the active class (done), and then either increment or decrement by one based on target, and pass that as the parameter to setActive.   Done !
     
     // NOW WORKING ON -  2 Also the edge case where we increment past the last index, or decrement past 0.  

     /*   What are my options  ---  
     
     on the reverse button click, check if the current index is 0, if it is, instead trying to go to -1, have it go to the last index of the array

     on the forward click, if the index is at the last index of the array, go to zero.
     
     */


}

function sliderController(){


const sliderNavContainer = document.querySelector('.slider-interface-nav')



sliderNavContainer.addEventListener('click', (e)=> {
    if(!e.target.dataset.navIndex){
        const arrow = e.target.dataset.navArrow;
        // console.log(arrow);
        navArrowAction(arrow)
        return 
    }
    console.log(e.target.dataset.navIndex)  
    const index = e.target.dataset.navIndex 
    
    setActive(index)

   
})

}



export default sliderController