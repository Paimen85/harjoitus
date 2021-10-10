
function currentSlide(n){
    showSlides(n);
}
let activeDot = 0;
let activeSlide = 0;
let blackDot = document.querySelector('.black');
const slides = document.querySelectorAll('.features__content');
const dots = document.querySelectorAll('.dot');
function showSlides(n){
    slides[activeSlide].classList.remove('active');
    slides[n-1].classList.add('active');
    dots[activeDot].classList.remove('black');
    dots[n-1].classList.add('black');
    activeSlide = n - 1;
    activeDot = n - 1;
}