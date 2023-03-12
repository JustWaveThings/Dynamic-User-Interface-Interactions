import { cats } from './cats';

function sliderInterfaceContainer() {
	const sliderInterface = document.createElement('nav');
	sliderInterface.classList.add('slider-interface-nav');

	const leftArrow = document.createElement('button');
	leftArrow.classList.add('left-arrow');
	leftArrow.textContent = '<';// replace with image 

	const rightArrow = document.createElement('button');
	rightArrow.classList.add('right-arrow');
	rightArrow.textContent = '>'; // replace with image 

	sliderInterface.appendChild(leftArrow);

	cats.forEach((_, index) => {
		const imageIndex = document.createElement('button');
		imageIndex.dataset.navIndex = index;
		imageIndex.textContent = ''; // replace with image
		sliderInterface.appendChild(imageIndex);
	});

	sliderInterface.appendChild(rightArrow);

	return sliderInterface;
}

export default sliderInterfaceContainer;
