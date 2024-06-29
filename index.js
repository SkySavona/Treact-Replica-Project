document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
      burgerMenu.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Testimonial Carousel
  const carousel = document.querySelector(".testimonial__cards");
  const testimonials = carousel.querySelectorAll(".testimonial__card");
  const prevButton = document.querySelector(".testimonials__nav-button--prev");
  const nextButton = document.querySelector(".testimonials__nav-button--next");
  let currentIndex = 0;
  const testimonialCount = testimonials.length;

  function updateCarousel() {
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialCount;
    updateCarousel();
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
    updateCarousel();
  }

  nextButton.addEventListener("click", nextTestimonial);
  prevButton.addEventListener("click", prevTestimonial);
  updateCarousel();

  // FAQ Functionality
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all answers
      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq__answer").style.maxHeight = null;
      });

      // Toggle current answer
      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

