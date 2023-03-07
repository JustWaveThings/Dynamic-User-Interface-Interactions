/* 

Putting this on ice - it is not what the task asked for.

*/

/* 
- menuItemLevel is the level of the menu item in the menu hierarchy
1 = top level menu item  ul.nav list - the anchor. Only one per menu.
2 = li .nav . item  
3 = ul .sub-nav 
4 = li .sub-li 
5 = span .sub-span  - where the menuItem text will be placed. 

- menuItemText is the text that will be displayed in the menu item


*/

function CreateMenuItem() {
	// private
	let menuItem;
	const createMenuItem = (menuItemLevel, menuItemText) => {
		switch (menuItemLevel) {
			case 1:
				break;

			default:
				break;
		}

		menuItem = document.createElement('');
		menuItem.classList.add('menu-item');
		menuItem.textContent = menuItemText;
		return menuItem;
	};

	// public
	return {
		init: (menuItemText) => createMenuItem(menuItemText),
	};
}
