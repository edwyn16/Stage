let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrowLeft"),
    arrowRight = document.querySelector("#arrowRight"),
    current =0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Prev slide
function slideLeft() {
    reset();
    if(current === 0) {
        current = sliderImages.length;
    }
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Next slide
function slideRight() {
    reset();
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Rigt arrow click
arrowRight.addEventListener("click", function() {
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})

// Automatic Slideshow
startSlide();
setInterval(function(){
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
}, 3015);
// Pause/Play Knoppen
var currentSlide = 0;
var slideInterval = setInterval(slideRight,8000);

function nextSlide() {
    sliderImages[currentSlide].className = 'control';
    currentSlide = (currentSlide + 1) % sliderImages.length;
    sliderImages[currentSlide].className = '';
}

// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
//     pauseButton.innerHTML = 'Play';
//     playing = false;
//     clearInterval(slideInterval);
// }

// function playSlideshow() {
//     pauseButton.innerHTML = 'pause';
//     playing = true;
//     slideInterval - setInterval(slideRight, 3015);
// }

// pauseButton.onclick = function() {
//     if (playing) {
//         pauseSlideshow();
//     }
//     else {
//         playSlideshow();
//     }
// }