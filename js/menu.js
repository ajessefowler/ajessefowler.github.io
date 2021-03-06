// Initialize event listeners for menu button and menu links
document.addEventListener('DOMContentLoaded', initEventListeners);

function initEventListeners() {
	const screenWidth = window.screen.availWidth;
	const menu = document.getElementById('menu');
	const menuLinks = menu.getElementsByTagName('a');
	let menuOpen = false;
	let navOpen = false;

	initScrolling();
	initModal();
	initForm();

	document.getElementById('menubutton').addEventListener('click', toggleMenu);
	document.getElementById('maincontainer').addEventListener('scroll', toggleMenuVisibility);

	if (screenWidth < 768) {
		for (let i = 0; i < menuLinks.length; i++) {
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
		if (document.getElementById('contentcontainer').getBoundingClientRect().top < 56) {
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

		menu.style.animation = 'menuIn .4s ease forwards';
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

		menu.style.animation = 'menuOut .3s ease forwards';
		document.getElementById('menumiddle').style.animation = 'fadeIn .4s ease forwards';
		document.getElementById('menutop').style.animation = 'menuTopClose .3s ease forwards';
		document.getElementById('menubottom').style.animation = 'menuBottomClose .3s ease forwards';
	}
}

// Fade in menu links from left to right
function fadeInMenuItems() {
	let delay = 190;
	const nodes = document.querySelectorAll('#menu > a > h3');

	// Fade in each menu link, adding an additional delay to the next link
	for (let i = 0; i < nodes.length; i++) {
		const element = nodes[i];
		setTimeout(function() {
			element.style.animation = 'fadeIn .3s ease forwards';
		}, delay);
		delay += 50;
	}
}

// Fade out menu links
function fadeOutMenuItems() {
	const nodes = document.getElementById('menu').getElementsByTagName('h3');

	for (let i = 0; i < nodes.length; i++) {
		nodes[i].style.animation = 'fadeOut .1s ease forwards';
	}
}

// Display header and allow hover and click events on name
function displayNav() {
	document.querySelector('#navbg').style.opacity = '1.0';
	document.querySelector('nav > a > h2').style.opacity = '1.0';
	document.querySelector('nav > a > h2').style.pointerEvents = 'auto';
	document.querySelector('nav > a > h2').classList.remove('disablehover');
}

// Hide header and remove hover and click events on name
function hideNav() {
	document.querySelector('#navbg').style.opacity = '0.0';
	document.querySelector('nav > a > h2').style.opacity = '0.0';
	document.querySelector('nav > a > h2').style.pointerEvents = 'none';
	document.querySelector('nav > a > h2').classList.add('disablehover');
}

// Create smooth scrolling when clicking menu links
function initScrolling() {
	const contentTop = document.getElementById('contentcontainer').offsetTop;
	const scroller = zenscroll.createScroller(document.getElementById('maincontainer'), 500, 0);

	function scrollToTop() {
		scroller.to(document.getElementById('homephoto'));
	}

	// Add tiny delay to event listeners to prevent inaccurate scroll targets
	function addDelayedListener(link, element) {
		setTimeout(addListener, 100);

		function addListener() {
			document.getElementById(link).addEventListener('click', function() {
				scrollToElement(element);
			});
		}

		// Offset the top by 55 to account for header
		function scrollToElement() {
			const elementTop = contentTop + document.getElementById(element).offsetTop - 55;
			scroller.toY(elementTop);
		}
	}

	document.getElementById('headerlink').addEventListener('click', scrollToTop);

	addDelayedListener('aboutlink', 'about');
	addDelayedListener('skillslink', 'skills');
	addDelayedListener('projectslink', 'projects');
	addDelayedListener('contactlink', 'contact');
}

// Displays larger version image in modal when image is clicked
function initModal() {
	const viewHeight = window.innerHeight - 70;
	const image = document.getElementById('modalimage');
	const elements = document.querySelectorAll('.modalimage');
	const modal = document.getElementById('modal');

	document.getElementById('modalbg').addEventListener('click', closeModal);

	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', openModal);
	}

	function openModal() {
		image.src = this.src;
		image.style.height = viewHeight + 'px';
		image.style.width = 'auto';
		modal.style.display = 'flex';

		// If the image can fit in the viewport, increase the height, else fit image to width of viewport
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

// Prevent user from hitting return key on single-line text areas
// Text areas used because inputs cause scrolling issues with parallax on iOS Safari
function initForm() {
	const elements = document.querySelectorAll('textarea');

	// Do not restrict return key on the final text area for message
	for (let i = 0; i < elements.length - 1; i++) {
		element = elements[i];

		element.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();
			}
		});
	}
}
