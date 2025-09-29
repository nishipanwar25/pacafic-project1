
  document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-carousel .slide');
  const nextBtn = document.querySelector('.hero-carousel .next');
  const prevBtn = document.querySelector('.hero-carousel .prev');
  const dots = document.querySelectorAll('.hero-carousel .dot');
  let idx = 0;
  let autoTimer = null;
  const change = (n) => {
    slides.forEach((s,i)=> s.classList.toggle('active', i===n));
    dots.forEach((d,i)=> d.classList.toggle('active', i===n));
    idx = n;
  };
  nextBtn.addEventListener('click', ()=> change((idx+1) % slides.length));
  prevBtn.addEventListener('click', ()=> change((idx-1+slides.length) % slides.length));
  dots.forEach((dot,i)=> dot.addEventListener('click', ()=> change(i)));

  // auto-slide (like reference site). Pause on hover.
  const startAuto = ()=> autoTimer = setInterval(()=> change((idx+1)%slides.length), 6000);
  const stopAuto = ()=> { if(autoTimer){ clearInterval(autoTimer); autoTimer = null; } };
  startAuto();
  const hero = document.querySelector('.hero-carousel');
  hero.addEventListener('mouseenter', stopAuto);
  hero.addEventListener('mouseleave', startAuto);
});
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) { // you can adjust this threshold
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

 const words = ["CAREER", "SUCCESS"];
  let index = 0;
  const wordElement = document.querySelector(".word-animate");

  setInterval(() => {
    index = (index + 1) % words.length;
    wordElement.textContent = words[index];
  }, 2000); // changes every 2 seconds

    const slides = document.querySelectorAll(".testimonial-slide");
  const images = document.querySelectorAll(".testimonial-img");
  let current = 0;
  let autoSlide;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Auto Slide
  startAutoSlide();

  // Image Click Event (Manual Control)
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      stopAutoSlide(); // stop auto sliding when user clicks
      showSlide(index);
      startAutoSlide(); // restart auto slide after selection
    });
  });

  const track = document.querySelector(".clients-track");
  const leftArrow = document.querySelector(".client-arrow.left");
  const rightArrow = document.querySelector(".client-arrow.right");

  let position = 0; // track translateX value
  const slideWidth = 200; // logo + gap width, adjust to your logo size
  const totalSlides = document.querySelectorAll(".client-logo").length;
  const visibleSlides = 5; // number of logos visible at a time

  function updateSlide() {
    track.style.transform = `translateX(${position}px)`;
  }

  rightArrow.addEventListener("click", () => {
    if (Math.abs(position) < (totalSlides - visibleSlides) * slideWidth) {
      position -= slideWidth;
      updateSlide();
    }
  });

  leftArrow.addEventListener("click", () => {
    if (position < 0) {
      position += slideWidth;
      updateSlide();
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const toggle = dropdown.querySelector(".dropdown-toggle");

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});
  


document.querySelectorAll('.custom-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('open');
  });
});


