const MenuItem = (() => {
	// private
	let menuItem;

	const createMenuItem = (menuItemText) => {
		menuItem = document.createElement('li');
		menuItem.classList.add('menu-item');
		menuItem.textContent = menuItemText;
		return menuItem;
	};

	// public
	return {
		init: (menuItemText) => createMenuItem(menuItemText),
	};
})();
