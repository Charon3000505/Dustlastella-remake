// COUNTDOWN
const targetDate = new Date("Dec 31, 2025 23:59:59").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "<h2>🎉 Waktu Habis!</h2>";
  }
}, 1000);

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector('.nav-container');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// HAMBURGER MENU FUNCTIONALITY
const hamburger = document.getElementById('hamburger');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});
