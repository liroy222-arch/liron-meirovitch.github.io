/* ==========================================
   Liron Meirovitch Portfolio
   Final Production Version
========================================== */

/* Smooth scroll offset for sticky navigation */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });

    });

});


/* Header shadow on scroll */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            '0 10px 30px rgba(0,0,0,0.25)';

    } else {

        header.style.boxShadow = 'none';

    }

});


/* Footer year */

const footerYear = document.getElementById('year');

if (footerYear) {
    footerYear.textContent =
        new Date().getFullYear();
}
