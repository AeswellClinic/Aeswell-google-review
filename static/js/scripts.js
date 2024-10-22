
const carousel = document.querySelector(".carousel"),
      arrowIcons = document.querySelectorAll(".navigation-buttons i"),
      slides = carousel.querySelectorAll(".slide");

let slideIndex = 0;
let autoSlideInterval; 

function showSlide(index) {
   
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    
    slides.forEach((slide) => {
        slide.classList.remove('active');
        const cards = slide.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('fade-in');
        });
    });

   
    slides[slideIndex].classList.add('active');

  
    const cards = slides[slideIndex].querySelectorAll('.card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, i * 400); 
    });
}

function autoSlide() {
   
    clearInterval(autoSlideInterval);
  
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 10000);
}


function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "left") {
            slideIndex--;
        } else {
            slideIndex++;
        }
        showSlide(slideIndex);
        resetAutoSlide(); 
    });
});


showSlide(slideIndex);
autoSlide();
