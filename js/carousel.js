const carouselImages = document.querySelectorAll(".carousel-item");
const imageCount = carouselImages.length;
let currentIndex = 0;
let timerId;

function initCarousel() {
    setupView();
    bindEvents();
    startAutoPlay();
}

initCarousel();

function setupView() {
    const halfLength = Math.floor(imageCount / 2);
    for (let i = 0; i < halfLength; i++) {
        let leftIndex = (currentIndex - i - 1 + imageCount) % imageCount;
        let rightIndex = (currentIndex + i + 1) % imageCount;

        carouselImages[leftIndex].style.transform = `translateX(${-150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(30deg)`;
        carouselImages[rightIndex].style.transform = `translateX(${150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`;
    }
    carouselImages[currentIndex].style.transform = `translateZ(300px)`;
}

function bindEvents() {
    for (let i = 0; i < imageCount; i++) {
        (function(index) {
            carouselImages[index].addEventListener('click', function () {
                currentIndex = index;
                setupView();
            });

            carouselImages[index].addEventListener('mouseenter', function () {
                clearInterval(timerId);
            });

            carouselImages[index].addEventListener('mouseout', function () {
                startAutoPlay();
            });
        })(i);
    }
}

function startAutoPlay() {
    timerId = setInterval(function () {
        currentIndex = (currentIndex + 1) % imageCount;
        setupView();
    }, 2000);
}