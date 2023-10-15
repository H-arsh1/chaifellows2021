$(document).ready(function(){
    // ... (your other code)

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Smooth scroll to sections when clicking on menu items
    $('.navbar .menu li a').click(function(e){
        e.preventDefault(); // Prevent the default behavior of the link
        var target = $(this).attr("href"); // Get the target section from href
        $('html, body').animate({
            scrollTop: $(target).offset().top // Scroll smoothly to the target section
        }, 1000); // Adjust the scroll speed as needed
    });
});







    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    //var typed = new Typed(".typing", {
      //  strings: ["Give life more flavours"],
        //typeSpeed: 120,
       // backSpeed: 120,
       // loop: true
    //});

    var typed = new Typed(".typing-2", {
        strings: ["Trusted Platform", "Franchise model", "Genuine Services"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 2,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
   // var typed = new Typed(".typing", {
     //   strings: ["Give life more flavours"],
       // typeSpeed: 200,
       // backSpeed: 200,
        //loop: true
    //});

    var typed = new Typed(".typing-2", {
        strings: ["Trusted Platform", "Franchise model", "Genuine Services"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 2,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
    

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscribe-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        const emailInput = document.getElementById("email-input");
        const email = emailInput.value;

        // You can replace this with your actual code to send the email to your server or email service.
        // Here, we'll just log the email for demonstration purposes.
        console.log("Subscribed with email:", email);

        // Clear the email input
        emailInput.value = "";

        // Optionally, display a success message to the user
        alert("Thank you for subscribing!");
    });
});

var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].classList.remove('active');
    }

    currentImg = n;

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].classList.add('active');
}

// Initial slide
changeSlide(currentImg);

// Event listeners for dots
dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        changeSlide(index);
    });
});

// Function to show the next image
function nextSlide() {
    currentImg = (currentImg + 1) % imgs.length;
    changeSlide(currentImg);
}

// Function to show the previous image
function prevSlide() {
    currentImg = (currentImg - 1 + imgs.length) % imgs.length;
    changeSlide(currentImg);
}

// Event listeners for navigation buttons
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = 'translateX(-' + n * 100 + '%)';
    dots[i].classList.remove('active');
  }

  currentImg = n;

  dots[currentImg].classList.add('active');
}
