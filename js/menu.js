// Initialize event listeners for menu button and menu links
document.addEventListener('DOMContentLoaded', function(event) {	
	let i;
	let menuOpen = false;
	const menu = document.getElementById('menu');
	const nodes = menu.getElementsByTagName('a');

	document.getElementById('menubutton').addEventListener('click', function() {
		if (!menuOpen) {
			menuOpen = true;
			openMenu();
		} else {
			menuOpen = false;
			closeMenu();
		}
	});

	document.getElementById('menushade').addEventListener('click', function() {
		menuOpen = false;
		closeMenu();
	});

	// Close menu when any menu link is clicked
	for (i = 0; i < nodes.length; i++) {
		const element = nodes[i];
		element.addEventListener('click', function() {
			menuOpen = false;
			closeMenu();
		});
	}
});

function openMenu() {
	fadeInMenuItems();
	document.getElementById('menu').style.animation = 'menuIn .3s ease forwards';
	document.getElementById('menumiddle').style.animation = 'fadeOut .2s ease forwards';
	document.getElementById('menushade').style.display = 'block';
	document.getElementById('menushade').style.animation = 'fadeIn .3s ease forwards';
	document.getElementById('menutop').style.animation = 'menuTopOpen .3s ease forwards';
	document.getElementById('menubottom').style.animation = 'menuBottomOpen .3s ease forwards';
}

function closeMenu() {
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

function fadeInMenuItems() {
	let i;
	let delay = 150;
	const nodes = document.querySelectorAll('#menu > a > p');

	// Fade in each menu link, adding a delay to the next link
	for (i = 0; i < nodes.length; i++) {
		const element = nodes[i];
		setTimeout(function() {
			element.style.animation = 'fadeIn .3s ease forwards';
		}, delay)
		delay += 60;
	}
}

function fadeOutMenuItems() {
	let i;
	const nodes = document.getElementById('menu').getElementsByTagName('p');

	for (i = 0; i < nodes.length; i++) {
		nodes[i].style.animation = 'fadeOut .1s ease forwards';
	}
}
