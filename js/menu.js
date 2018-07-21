document.addEventListener('DOMContentLoaded', function(event) {	
	let menuOpen = false;

	document.getElementById('menubutton').addEventListener('click', function() {
		if (!menuOpen) {
			menuOpen = true;
			fadeInMenuItems();
			document.getElementById('menu').style.animation = 'menuIn .3s ease forwards';
			document.getElementById('menumiddle').style.animation = 'fadeOut .2s ease forwards';
			document.getElementById('menushade').style.animation = 'fadeIn .3s ease forwards';
			document.getElementById('menutop').style.animation = 'menuTopOpen .3s ease forwards';
			document.getElementById('menubottom').style.animation = 'menuBottomOpen .3s ease forwards';
		} else {
			menuOpen = false;
			fadeOutMenuItems();
			document.getElementById('menu').style.animation = 'menuOut .3s ease forwards';
			document.getElementById('menumiddle').style.animation = 'fadeIn .2s ease forwards';
			document.getElementById('menushade').style.animation = 'fadeOut .3s ease forwards';
			document.getElementById('menutop').style.animation = 'menuTopClose .3s ease forwards';
			document.getElementById('menubottom').style.animation = 'menuBottomClose .3s ease forwards';
		}
	});
});

function fadeInMenuItems() {
	let i;
	const nodes = document.getElementById('menu').getElementsByTagName('p');

	for (i = 0; i < nodes.length; i++) {
		nodes[i].style.animation = 'fadeIn .2s ease .2s forwards';
	}
}

function fadeOutMenuItems() {
	let i;
	const nodes = document.getElementById('menu').getElementsByTagName('p');

	for (i = 0; i < nodes.length; i++) {
		nodes[i].style.animation = 'fadeOut .1s ease forwards';
	}
}