// Initialize event listeners for menu button and menu links
document.addEventListener('DOMContentLoaded', function(event) {	
	let i;
	let menuOpen = false;
	const menu = document.getElementById('menu');
	const menuLinks = menu.getElementsByTagName('a');

	document.getElementById('menubutton').addEventListener('click', function() {
		if (!menuOpen) {
			openMenu();
		} else {
			closeMenu();
		}
	});

	document.getElementById('menushade').addEventListener('click', function() {
		closeMenu();
	});

	// Close menu when any menu link is clicked
	if (window.screen.availWidth < 768) {
		for (i = 0; i < menuLinks.length; i++) {
			const element = menuLinks[i];
			element.addEventListener('click', function(event) {
				closeMenu();
			});
		}
	}

	// Animations for opening menu
	function openMenu() {
		menuOpen = true;
		fadeInMenuItems();
		document.getElementById('menu').style.animation = 'menuIn .3s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeOut .2s ease forwards';
		document.getElementById('menushade').style.display = 'block';
		document.getElementById('menushade').style.animation = 'fadeIn .3s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopOpen .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomOpen .3s ease forwards';
	}

	// Animations for closing menu
	function closeMenu() {
		menuOpen = false;
		fadeOutMenuItems();
		document.getElementById('menu').style.animation = 'menuOut .3s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeIn .5s ease forwards';
		document.getElementById('menushade').style.animation = 'fadeOut .3s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopClose .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomClose .3s ease forwards';

		// Remove menu shade after it is faded out
		setTimeout(function() {
			document.getElementById('menushade').style.display = 'none';
		}, 300);
	}

	// Fade in menu links from left to right
	function fadeInMenuItems() {
		let j;
		let delay = 150;
		const nodes = document.querySelectorAll('#menu > a > p');

		// Fade in each menu link, adding a delay to the next link
		for (j = 0; j < nodes.length; j++) {
			const element = nodes[j];
			setTimeout(function() {
				element.style.animation = 'fadeIn .3s ease forwards';
			}, delay)
			delay += 60;
		}
	}

	// Fade out menu links
	function fadeOutMenuItems() {
		let k;
		const nodes = document.getElementById('menu').getElementsByTagName('p');

		for (k = 0; k < nodes.length; k++) {
			nodes[k].style.animation = 'fadeOut .1s ease forwards';
		}
	}
});
