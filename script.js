const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.12 });

slides.forEach((s) => observer.observe(s));
