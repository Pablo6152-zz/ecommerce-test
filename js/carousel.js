const prevBtn = document.getElementById("prev-slide")
const nextBtn = document.getElementById("next-slide")
const slides = document.getElementsByClassName("item")
let currentSlide = 0

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

function hideCurrentSlide(){
    for (let slide of slides){
        slide.classList.add("item-hidden")
        slide.classList.remove("item-shown")
    }
}
function prevSlide(){
    hideCurrentSlide()
    
    if(currentSlide === 0){
        currentSlide = 2
    } else {
        currentSlide--
    }
    
    slides[currentSlide].classList.add("item-shown")
    slides[currentSlide].classList.remove("item-hidden")
}
function nextSlide(){
    hideCurrentSlide()

    if(currentSlide === slides.length - 1){
        currentSlide = 0
    } else {
        currentSlide++
    }

    slides[currentSlide].classList.add("item-shown")
    slides[currentSlide].classList.remove("item-hidden")
}
