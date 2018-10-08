// Initialize event listeners for menu button and menu links
document.addEventListener('DOMContentLoaded', function(event) {	
	let i;
	let menuOpen = false;
	let screenWidth = window.screen.availWidth;
	const menu = document.getElementById('menu');
	const menuLinks = menu.getElementsByTagName('a');

	initScrolling();

	if (screenWidth < 768) {
		initModal();
	}

	document.getElementById('menubutton').addEventListener('click', function() {
		if (!menuOpen) {
			openMenu();
		} else {
			closeMenu();
		}
	});

	// Close menu when any menu link is clicked
	if (window.screen.availWidth < 768) {
		for (i = 0; i < menuLinks.length; i++) {
			const element = menuLinks[i];
			element.addEventListener('click', closeMenu);
		}
	}

	function openMenu() {
		menuOpen = true;
		fadeInMenuItems();
		document.getElementById('menu').style.animation = 'menuIn .2s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeOut .2s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopOpen .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomOpen .3s ease forwards';
	}

	function closeMenu() {
		menuOpen = false;
		fadeOutMenuItems();
		document.getElementById('menu').style.animation = 'menuOut .2s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeIn .4s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopClose .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomClose .3s ease forwards';
	}

	// Fade in menu links from left to right
	function fadeInMenuItems() {
		let j;
		let delay = 80;
		const nodes = document.querySelectorAll('#menu > a > p');

		// Fade in each menu link, adding a delay to the next link
		for (j = 0; j < nodes.length; j++) {
			const element = nodes[j];
			setTimeout(function() {
				element.style.animation = 'fadeIn .3s ease forwards';
			}, delay)
			delay += 35;
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

function initScrolling() {
	const mainScroller = zenscroll.createScroller(document.getElementById('maincontainer'));
	const contentScroller = zenscroll.createScroller(document.getElementById('contentcontainer'));

	function scrollToTop() {
		mainScroller.to(document.getElementById('homephoto'));
	}

	function scrollToAbout() {
		contentScroller.to(document.getElementById('about'));
	}

	document.getElementById('headerlink').addEventListener('click', scrollToTop);
	document.getElementById('aboutlink').addEventListener('click', scrollToAbout);
}

function initModal() {
	let i;
	let viewHeight = window.innerHeight - 97;
	const elements = document.querySelectorAll('.modalimage');
	const modal = document.getElementById('modal');

	for (i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', function() {
			document.getElementById('modalimage').src = this.src;
			document.getElementById('modalimage').style.height = viewHeight + 'px';
			modal.style.display = 'flex';
			modal.style.animation = 'fadeIn .3s ease forwards';
		});
	}

	document.getElementById('closemodal').addEventListener('click', function() {
		modal.style.animation = 'fadeOut .3s ease forwards';
		setTimeout(function() {
			modal.style.display = 'none';
		}, 300)
	});
}
