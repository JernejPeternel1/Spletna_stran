document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Pokaži prvo sliko ob nalaganju
});


function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
        content.className = 'show-content';
    } else {
        content.style.display = 'none';
    }
}

function toggleReview(reviewId) {
    var content = document.getElementById(reviewId);
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        content.classList.add('show-content');
    } else {
        content.style.display = 'none';
        content.classList.remove('show-content');
    }
}
