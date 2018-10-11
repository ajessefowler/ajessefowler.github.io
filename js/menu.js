// Initialize event listeners for menu button and menu links
document.addEventListener('DOMContentLoaded', initEventListeners);

function initEventListeners() {
	let i;
	let menuOpen = false;
	let navOpen = false;
	let screenWidth = window.screen.availWidth;
	const menu = document.getElementById('menu');
	const menuLinks = menu.getElementsByTagName('a');

	initScrolling();

	document.getElementById('menubutton').addEventListener('click', toggleMenu);
	document.getElementById('maincontainer').addEventListener('scroll', toggleMenuVisibility);

	if (screenWidth < 768) {
		initModal();

		for (i = 0; i < menuLinks.length; i++) {
			const element = menuLinks[i];
			element.addEventListener('click', closeMenu);
		}
	}

	function toggleMenu() {
		if (!menuOpen) {
			openMenu();
		} else {
			closeMenu();
		}
	}

	function toggleMenuVisibility() {
		if (document.getElementById('contentcontainer').getBoundingClientRect().top < 55) {
			navOpen = true;

			if (!menuOpen) {
				displayNav();
			}
		} else {
			navOpen = false;
			
			if (!menuOpen) {
				hideNav();
			}
		}
	}

	function openMenu() {
		menuOpen = true;
		fadeInMenuItems();

		if (!navOpen) {
			displayNav();
		}

		document.getElementById('menu').style.animation = 'menuIn .3s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeOut .2s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopOpen .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomOpen .3s ease forwards';
	}

	function closeMenu() {
		menuOpen = false;
		fadeOutMenuItems();

		if (!navOpen) {
			hideNav();
		}

		document.getElementById('menu').style.animation = 'menuOut .3s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeIn .4s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopClose .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomClose .3s ease forwards';
	}
}

// Fade in menu links from left to right
function fadeInMenuItems() {
	let i;
	let delay = 140;
	const nodes = document.querySelectorAll('#menu > a > h3');

	// Fade in each menu link, adding a delay to the next link
	for (i = 0; i < nodes.length; i++) {
		const element = nodes[i];
		setTimeout(function() {
			element.style.animation = 'fadeIn .3s ease forwards';
		}, delay)
		delay += 50;
	}
}

// Fade out menu links
function fadeOutMenuItems() {
	let i;
	const nodes = document.getElementById('menu').getElementsByTagName('h3');

	for (i = 0; i < nodes.length; i++) {
		nodes[i].style.animation = 'fadeOut .1s ease forwards';
	}
}

function displayNav() {
	document.querySelector('nav').style.backgroundColor = 'rgba(20, 20, 20, 0.9)';
	document.querySelector('nav > a > h2').style.opacity = '1.0';
}

function hideNav() {
	document.querySelector('nav').style.backgroundColor = 'transparent';
	document.querySelector('nav > a > h2').style.opacity = '0.0';
}

// Create smooth scrolling when clicking menu links
function initScrolling() {
	const contentTop = document.getElementById('contentcontainer').offsetTop;
	const mainScroller = zenscroll.createScroller(document.getElementById('maincontainer'), 500, 0);

	function scrollToTop() {
		mainScroller.to(document.getElementById('homephoto'));
	}

	function scrollToElement(element) {
		const elementTop = contentTop + document.getElementById(element).offsetTop - 55;
		mainScroller.toY(elementTop);
	}

	document.getElementById('headerlink').addEventListener('click', scrollToTop);
	document.getElementById('aboutlink').addEventListener('click', function() {
		scrollToElement('about');
	});
	document.getElementById('skillslink').addEventListener('click', function() {
		scrollToElement('skills');
	});
	document.getElementById('projectslink').addEventListener('click', function() {
		scrollToElement('projects');
	});
	document.getElementById('contactlink').addEventListener('click', function() {
		scrollToElement('contact');
	});
}

// Displays larger version image in modal when image is clicked
function initModal() {
	let i;
	let viewHeight = window.innerHeight - 70;
	const image = document.getElementById('modalimage');
	const elements = document.querySelectorAll('.modalimage');
	const modal = document.getElementById('modal');

	document.getElementById('modalbg').addEventListener('click', closeModal);

	for (i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', openModal);
	}

	function openModal() {
		image.src = this.src;
		image.style.height = viewHeight + 'px';
		image.style.width = 'auto';
		modal.style.display = 'flex';

		if (image.offsetWidth < window.innerWidth) {
			image.style.width = 'auto';
			image.style.height = viewHeight + 'px';
		} else {
			image.style.height = 'auto';
			image.style.width = (window.innerWidth - 20) + 'px';
		}

		modal.style.animation = 'fadeIn .3s ease forwards';
	}

	function closeModal() {
		modal.style.animation = 'fadeOut .3s ease forwards';
		setTimeout(function() {
			modal.style.display = 'none';
		}, 300);
	}
}
