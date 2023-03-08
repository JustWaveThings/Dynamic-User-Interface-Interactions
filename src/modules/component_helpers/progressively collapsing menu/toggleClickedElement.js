// for adding and removing event listeners to the menu dropdown.  On click, the menu dropdown will toggle class between having an 'active' class and removing the 'active' class.

const ToggleClickedElement = (() => {
	let targetElement;

	const removeActiveClassFromAllElements = () => {
		targetElement.forEach((element) => {
			element.classList.remove('active');
		});
	};

	const clickOutsideElement = (e) => {
		if (
			!e.target.closest('.nav.item') &&
			!e.target.matches('.nav.item')
		) {
			console.log(e.target.closest('.nav.item'), 'e.target.closest');
			console.log(e.target.matches('.nav.item'), 'e.target.matches');
			removeActiveClassFromAllElements();
		}
	};

	const closeMenuWhenClickOutside = () => {
		document.addEventListener('click', clickOutsideElement);
	};

	const addActiveClassToSingleElement = (e) => {
		removeActiveClassFromAllElements();
		e.currentTarget.classList.add('active');
		console.log(e.target, ' - item clicked');
	};

	return {
		init: (targetSelector) => {
			targetElement = document.querySelectorAll(targetSelector);

			targetElement.forEach((element) => {
				element.addEventListener(
					'click',
					addActiveClassToSingleElement
				);
			});
			closeMenuWhenClickOutside();
		},
		destroy: () => {
			targetElement.forEach((element) => {
				element.removeEventListener(
					'click',
					addActiveClassToSingleElement
				);
				element.removeEventListener('click', clickOutsideElement);
			});
		},
	};
})();

export default ToggleClickedElement;
