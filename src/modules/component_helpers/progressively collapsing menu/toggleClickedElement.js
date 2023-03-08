// for adding and removing event listeners to the menu dropdown in html.  On click, the menu dropdown will toggle class between having an 'active' class and removing the 'active' class.

const ToggleClickedElement = (() => {
	let targetElement;

	const removeActiveClassFromAllElements = () => {
		targetElement.forEach((element) => {
			element.classList.remove('active');
		});
	};

	const clickOutsideElement = (e) => {
		const navItem = e.target.closest('.nav.item');
		if (!e.target.matches('.nav-text')) {
			removeActiveClassFromAllElements();
		} else if (navItem && navItem.querySelector('.nav-text')) {
			navItem.classList.toggle('active');
		}
	};

	const closeMenuWhenClickOutside = () => {
		document.addEventListener('click', clickOutsideElement);
	};

	const addActiveClassToSingleElement = (e) => {
		closeMenuWhenClickOutside();
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
