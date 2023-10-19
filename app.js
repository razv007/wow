const hamburger1 = document.querySelector('.unu .header .nav-bar .nav-list .hamburger');
const mobile_menu1 = document.querySelector('.unu .header .nav-bar .nav-list ul');
const menu_item1 = document.querySelectorAll('.unu .header .nav-bar .nav-list ul li a');
const hamburger2 = document.querySelector('.doi .header .nav-bar .nav-list .hamburger');
const mobile_menu2 = document.querySelector('.doi .header .nav-bar .nav-list ul');
const menu_item2 = document.querySelectorAll('.doi .header .nav-bar .nav-list ul li a');
const hamburger3 = document.querySelector('.trei .header .nav-bar .nav-list .hamburger');
const mobile_menu3 = document.querySelector('.trei .header .nav-bar .nav-list ul');
const menu_item3 = document.querySelectorAll('.trei .header .nav-bar .nav-list ul li a');
const contacte = document.getElementsByClassName("contact-item");
const unu = document.getElementById('unu');
const doi = document.getElementById('doi');
const trei = document.getElementById('trei');

hamburger1.addEventListener('click', () => {
	hamburger1.classList.toggle('active');
	mobile_menu1.classList.toggle('active');
});
hamburger2.addEventListener('click', () => {
	hamburger2.classList.toggle('active');
	mobile_menu2.classList.toggle('active');
});
hamburger3.addEventListener('click', () => {
	hamburger3.classList.toggle('active');
	mobile_menu3.classList.toggle('active');
});
doi.style.backgroundColor = '#29323c';
trei.style.backgroundColor = '#29323c';
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		unu.style.backgroundColor = '#29323c';
	} else {
		unu.style.backgroundColor = 'transparent';
	}
});

menu_item1.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger1.classList.toggle('active');
		mobile_menu1.classList.toggle('active');
	});
});
menu_item2.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger2.classList.toggle('active');
		mobile_menu2.classList.toggle('active');
	});
});
menu_item3.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger3.classList.toggle('active');
		mobile_menu3.classList.toggle('active');
	});
});
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
			console.log("aixi");
            document.getElementById('buton1').classList.remove("active-btn");
			document.getElementById('buton2').classList.remove("active-btn");
			document.getElementById('buton3').classList.remove("active-btn");
            document.getElementById(button.dataset.buton).classList.add("active-btn");
            document.querySelector(".active-sectiune").classList.remove("active-sectiune");
			document.querySelector(".active-nav-bar").classList.remove("active-nav-bar");
            document.getElementById(button.dataset.id).classList.add("active-sectiune");
			document.getElementById(button.dataset.navbar).classList.add("active-nav-bar");
			document.querySelector(".produs_popup_shop").classList.remove("open");
        })
    });
})();

contacte[0].addEventListener('click', function () {
	navigator.clipboard.writeText("+40 770 169 188");
  }, false);
  contacte[1].addEventListener('click', function () {
	navigator.clipboard.writeText("medicoflashcards1@gmail.com");
  }, false);
  contacte[2].addEventListener('click', function () {
	navigator.clipboard.writeText("România Iași, Iași");
  }, false);