document.addEventListener('DOMContentLoaded', function(event) {	
	let menuOpen = false;

	document.getElementById('menubutton').addEventListener('click', function() {
		if (!menuOpen) {
			menuOpen = true;
			document.getElementById('menumiddle').style.animation = 'fadeOut .3s ease forwards';
			document.getElementById('menutop').style.animation = 'menuTopOpen .3s ease forwards';
			document.getElementById('menubottom').style.animation = 'menuBottomOpen .3s ease forwards';
		} else {
			menuOpen = false;
			document.getElementById('menumiddle').style.animation = 'fadeIn .3s ease forwards';
			document.getElementById('menutop').style.animation = 'menuTopClose .3s ease forwards';
			document.getElementById('menubottom').style.animation = 'menuBottomClose .3s ease forwards';
		}
	});
});