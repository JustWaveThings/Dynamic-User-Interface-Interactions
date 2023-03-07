// for adding and removing event listeners to the menu dropdown.  On click, the menu dropdown will toggle class between having an 'active' class and removing the 'active' class.

const ToggleClickedElement = (() => {
	// private
	let targetElement;

	const toggleElement = () => {
		targetElement.classList.toggle('active');
	};

	// public
	return {
		init: (targetSelector) => {
			targetElement = document.querySelector(targetSelector);
			targetElement.addEventListener('click', toggleDropdown);
		},
		destroy: () => {
			targetElement.removeEventListener('click', toggleDropdown);
		},
	};
})();

export default ToggleClickedElement;
