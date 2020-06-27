;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-gtco-nav-toggle').addClass('gtco-nav-white');

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};

	var formTab = function() {

		$('.tab-menu a').on('click', function(event){
			var $this = $(this),
				data = $this.data('tab');

			$('.tab-menu li').removeClass('active');
			$this.closest('li').addClass('active')

			$('.tab .tab-content-inner').removeClass('active');
			$this.closest('.tab').find('.tab-content-inner[data-content="'+data+'"]').addClass('active');

			event.preventDefault();

		});

	};

	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 200, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){
		
		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});


		

	};

	

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};


	var dateForm = function() {
		$('#date-start').datepicker();
	};

	var parallax = function() {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false, 
			responsive: true

		});
	};
	
	$(function(){
		mobileMenuOutsideClick();
		formTab();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		goToTop();
		loaderPage();
		counterWayPoint();
		dateForm();
		parallax();
		//newgame(); //2048
		//prepareForMobile(); //2048
	});


}());

// this is the code for the main page animation
class TypeWriter {
	constructor(txtElement, words, wait = 200) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;
		// Get full text of current word
		const fullTxt = this.words[current];

		// Check if deleting
		if(this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		// Initial Type Speed
		let typeSpeed = 100;

		if(this.isDeleting) {
			typeSpeed /= 2;
		}

		// If word is complete
		if(!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = this.wait;
			// Set delete to true
			this.isDeleting = true;
		} else if(this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}



// This is the code for contact page
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

document.addEventListener("DOMContentLoaded", function() {
	fields.name = document.getElementById('Name');
	fields.email = document.getElementById('email');
	fields.subject = document.getElementById('subject');
	fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
	if (value == null || typeof value == 'undefined' ) return false;
	return (value.length > 0);
}

function isEmail(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
	if (field == null) return false;

	let isFieldValid = validationFunction(field.value)
	if (!isFieldValid) {
		field.className = 'placeholderRed';
	} else {
		field.className = '';
	}

	return isFieldValid;
}

function isValid() {
	var valid = true;

	valid &= fieldValidation(fields.name, isNotEmpty);
	valid &= fieldValidation(fields.email, isEmail);
	valid &= fieldValidation(fields.subject, isNotEmpty);
	valid &= fieldValidation(fields.message, isNotEmpty);
	return valid;
}

$(document).ready(function (){
	$('.submit').click(function (event){
		var statusElm = $('.status')
		statusElm.empty()
		statusElm.empty()
		if(isValid){
			console.log('sent')
			statusElm.append('<div>Thanks for your message </div>')
			statusElm.append('<div>I will be in touch shortly </div>')
		} else{
			statusElm.append('<div>Ops, Some of your input might not valid </div>')
			statusElm.append('<div>please try again </div>')
		}
	})
})

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}

/*
// Code for 2048
// add one line in the main function newgame
var gameBoard =  Array();

var score = 0;
var hasConflicted = new Array();
var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;

$(document).ready(function(){
	//prepareForMobile();
	newgame();
	//auto_play();
});

function prepareForMobile(){

	 if( documentWidth > 500 ){
	 		gridContainerWidth = 500;
	 		cellSpace = 20;
	 		cellSideLength = 100;
	 }

	 $('#grid-container').css('width',gridContainerWidth - 2*cellSpace);
	 $('#grid-container').css('height',gridContainerWidth - 2*cellSpace);
	 $('#grid-container').css('padding', cellSpace);
	 $('#grid-container').css('border-radius',0.02*gridContainerWidth);

	 $('.grid-cell').css('width',cellSideLength);
	 $('.grid-cell').css('height',cellSideLength);
	 $('.grid-cell').css('border-radius',0.02*cellSideLength);
}

function newgame(){
	gameInit();
	generateOneNum();
	generateOneNum();
}

function gameInit(){
	for(var i=0; i<4; i++){
		gameBoard[i] = new Array();
		hasConflicted[i] = new Array();
		for(var j=0; j<4; j++){
			gameBoard[i][j] = 0;
			hasConflicted[i][j] = false;
			var gridCell = $("#grid-"+i+"-"+j);
			gridCell.css("top", getPosTop(i,j));
			gridCell.css("left", getPosLeft(i,j));
		}

	}
	updateGameView();

	score = 0;
	$('#score').text( score );
}

function updateGameView(){
	$(".number-cell").remove();
	for(var i=0; i<4; i++) {
		for (var j = 0; j < 4; j++) {
			$("#grid-container").append( '<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>' );
			var numberCell = $("#number-cell-"+i+"-"+j);

			if(gameBoard[i][j] == 0){
				numberCell.css("width", "0px");
				numberCell.css("height", "0px");
				numberCell.css("top", getPosTop(i,j) +  50);
				numberCell.css("left", getPosLeft(i,j)+ 50);
			} else{
				numberCell.css("width", "100px");
				numberCell.css("height", "100px");
				numberCell.css("top", getPosTop(i,j));
				numberCell.css("left", getPosLeft(i,j));
				numberCell.css("background-color", getNumBGCol(gameBoard[i][j]));
				numberCell.css("color",getNumCol(gameBoard[i][j]));
				numberCell.text(gameBoard[i][j]);
			}

			hasConflicted[i][j] = false;
		}
	}

	$('.number-cell').css('line-height', 100+'px');
	$('.number-cell').css('font-size', 60+'px');
}

/*
function auto_play(){

	//console.log("into the auto_play");
	newgame();
	while(true){
		console.log(isGameOver());
		if( !isGameOver()){
			//movedirection(compute_direction(gameBoard));
			generateOneNum();
			console.log("after move left");

		} else{
			console.log("break");
			break;
		}
		//break;
	}
	console.log("end game");
}
*/