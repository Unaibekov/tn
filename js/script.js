$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
        windowTop > 250 ? $('.header').addClass('header-shadow') : $('.header').removeClass('header-shadow');
		windowTop > 250 ? $('.logo').addClass('logo-scroll') : $('.logo').removeClass('logo-scroll');
        
  
    // windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#top').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});	

});

const authButton = document.querySelector('#auth');
const mailButton = document.querySelector('#mail');

const modal = document.querySelector('#modalAuth');
const modalMail = document.querySelector('#modalMail');

const closeAuth = document.querySelector('#closeModalAuth');
const closeMail = document.querySelector('#closeModalMail');


authButton.addEventListener('click', function (event) {
    modal.classList.add("modal-open");
});
closeAuth.addEventListener('click', function (event) {
    modal.classList.remove("modal-open");
});

mailButton.addEventListener('click', function (event) {
    modalMail.classList.add("modal-open");
});
closeMail.addEventListener('click', function (event) {
    modalMail.classList.remove("modal-open");
});









new WOW().init();