// // ============ INTERSECTION OBSERVER FOR FADE-IN ============
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: '0px 0px -100px 0px',
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// // Observe all sections with fade-in-section class
// document.querySelectorAll('.fade-in-section').forEach((el) => {
//   observer.observe(el);
// });

// // Observe all cards
// document.querySelectorAll('.card').forEach((el) => {
//   observer.observe(el);
// });

// // ============ PARALLAX EFFECT ON SCROLL ============
// window.addEventListener('scroll', () => {
//   const parallaxElements = document.querySelectorAll('.parallax-bg');

//   parallaxElements.forEach((el) => {
//     let scrollPosition = window.pageYOffset;
//     let sectionTop = el.closest('.hero').offsetTop;
//     let distance = scrollPosition - sectionTop;

//     // Adjust speed: 0.3 = slow, 0.6 = faster
//     el.style.transform = `translateY(${distance * 0.3}px)`;
//   });
// });
// // ============ PARALLAX SCROLL EFFECT ============
// window.addEventListener('scroll', () => {
//   const parallaxElements = document.querySelectorAll('.parallax-bg');

//   parallaxElements.forEach((el) => {
//     let scrollPosition = window.pageYOffset;
//     let sectionTop = el.closest('.hero').offsetTop; // Find parent .hero
//     let distance = scrollPosition - sectionTop;

//     // Adjust speed: 0.3 = slow, 0.6 = faster
//     el.style.transform = `translateY(${distance * 0.3}px)`;
//   });
// });
