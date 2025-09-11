const targetDate = new Date("Dec 31, 2025 23:59:59").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Hitung waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update ke HTML
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Jika waktu habis
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>🎉 Waktu Habis!</h2>";
    }
}, 1000);


const nav = document.querySelector('.nav-container');

     window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
     });
        
      const navbar = document.querySelector('.nav-container');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navLink = document.querySelector('.nav-link');
        
        hamburger.addEventListener('click', () => {
            navLink.classList.toggle('active');
        });

        document.addEventListener("scroll", function() {
    const aboutSection = document.querySelector(".about-container");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(sectionPosition < screenPosition) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
    }
});
        