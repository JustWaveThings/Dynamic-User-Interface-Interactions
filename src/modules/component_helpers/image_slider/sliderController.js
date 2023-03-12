import sliderInterfaceContainer from "./sliderInterfaceContainer"

/* 
 1. this needs to assign event listeners using event delegation for the slider interface container buttons and the left and right arrows. We need to use the data-attributes I assigned to the buttons and images.

 2. this needs to be able to update the slider interface container buttons to reflect the current image being displayed by putting a class on the button that matches the current image being displayed.

 3. need a function that will remove a class from the active button and image and add it to the next button and image every 5 seconds if no other button is clicked in the last 5 seconds.  this function will also need to loop back to the first image and button if it is on the last image and button. if a button is clicked, the timer should reset to 5 seconds. if the left or right arrow is clicked, the timer should reset to 5 seconds. 
 
*/

function test() {

const sliderNavContainer = document.querySelector('.slider-interface-nav')

console.log(sliderNavContainer)

sliderNavContainer.addEventListener('click', (e)=> {
    console.log(e.target.dataset.navIndex)
})

}
export default test