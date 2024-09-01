document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 500,
    once: true,
    offset: 100,
  });

  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  function closeMobileMenu() {
    burgerMenu.classList.remove("open");
    mobileMenu.classList.remove("open");
  }

  burgerMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

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

  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq__answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
