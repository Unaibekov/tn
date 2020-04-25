$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 250 ? $('.header').addClass('header-shadow') : $('.header').removeClass('header-shadow');
		windowTop > 250 ? $('.logoName').addClass('logoName-scroll') : $('.logoName').removeClass('logoName-scroll');
        windowTop > 250 ? $('.nav-link').addClass('nav-link-scroll') : $('.nav-link').removeClass('nav-link-scroll');
        windowTop > 250 ? $('.auth').addClass('auth-scroll') : $('.auth').removeClass('auth-scroll');
        windowTop > 250 ? $('.contacts').addClass('contacts-scroll') : $('.contacts').removeClass('contacts-scroll');
        windowTop > 250 ? $('.nav').addClass('nav-scroll') : $('.nav').removeClass('nav-scroll');
		
	});
	
	//Click Logo To Scroll To Top
	$('#top').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		},100);
		e.preventDefault();
	});	

});

// const authButton = document.querySelector('#auth');
// const mailButton = document.querySelector('#mail');

// const modal = document.querySelector('#modalAuth');
// const modalMail = document.querySelector('#modalMail');

// const closeAuth = document.querySelector('#closeModalAuth');
// const closeMail = document.querySelector('#closeModalMail');


// authButton.addEventListener('click', function (event) {
//     modal.classList.add("modal-open");
// });
// closeAuth.addEventListener('click', function (event) {
//     modal.classList.remove("modal-open");
// });

// mailButton.addEventListener('click', function (event) {
//     modalMail.classList.add("modal-open");
// });
// closeMail.addEventListener('click', function (event) {
//     modalMail.classList.remove("modal-open");
// });

// mail modal
$('#mail').click(function(e){
	e.preventDefault();
	$('#modalMail').addClass('modal-open');
});
$('#closeModalMail').click(function(e){
	e.preventDefault();
	$('#modalMail').removeClass('modal-open');
});

// auth modal
$('#auth').click(function(e){
	e.preventDefault();
	$('#modalAuth').addClass('modal-open');
});
$('#close').click(function(e){
	e.preventDefault();
	$('#modalAuth').removeClass('modal-open');
});

// auth modal
$('#authHeading').click(function(e){
	e.preventDefault();
	$('#modalAuth').addClass('modal-open');
});
$('#close').click(function(e){
	e.preventDefault();
	$('#modalAuth').removeClass('modal-open');
});

// registration
$('#registration-open').click(function(e){
	e.preventDefault();
	$('#registration').addClass('modal-open');
});
$('#close-registration').click(function(e){
	e.preventDefault();
	$('#registration').removeClass('modal-open');
});
$('#close-registration-second').click(function(e){
	e.preventDefault();
	$('#registration').removeClass('modal-open');
});

// forgot password
$('#login').click(function(e){
	e.preventDefault();
	$('#forgot-password').addClass('modal-open');
});
$('#close-forgot-password').click(function(e){
	e.preventDefault();
	$('#forgot-password').removeClass('modal-open');
});
$('#close-forgot-password-second').click(function(e){
	e.preventDefault();
	$('#forgot-password').removeClass('modal-open');
});

// auth mobile modal
$('#authMobile').click(function(e){
	e.preventDefault();
	$('#modalAuth').addClass('modal-open');
});
$('#closeModalAuth').click(function(e){
	e.preventDefault();
	$('#modalAuth').removeClass('modal-open');
});

// open mobile menu
$('.menu-btn').click(function(e){
	e.preventDefault();
	$('.mobile-menu').slideToggle();
	$(this).toggleClass('mobile-menu-open');
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


new WOW().init();