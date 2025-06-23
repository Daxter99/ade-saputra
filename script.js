document.addEventListener('DOMContentLoaded', () => {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // Mengamati viewport
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat, picu animasi
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika elemen masuk viewport
                entry.target.classList.add('is-visible');
                // Hentikan pengamatan setelah elemen terlihat untuk mencegah animasi berulang
                observer.unobserve(entry.target);
            }
            // Jika Anda ingin animasi dimainkan setiap kali elemen masuk/keluar, hapus baris di atas
            // else {
            //     entry.target.classList.remove('is-visible'); // Untuk animasi berulang
            // }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Opsional: Smooth scroll untuk navigasi header
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});