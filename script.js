// Fungsi untuk smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fungsi untuk animasi angka statistik
document.addEventListener('DOMContentLoaded', function() {
    // Animasi angka statistik
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Observer untuk memicu animasi saat elemen masuk ke viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const endValue = parseInt(statNumber.getAttribute('data-count'));
                animateValue(statNumber, 0, endValue, 2000);
                observer.unobserve(statNumber); // Hentikan observer setelah animasi
            }
        });
    }, { threshold: 0.5 });

    // Terapkan observer ke semua stat numbers
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
    
    // Animasi untuk section saat di-scroll
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    // Terapkan observer ke semua section
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        sectionObserver.observe(section);
    });
    
    // Fungsi untuk menangani hover efek pada navigation
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Fungsi untuk menangani scroll untuk header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
    
    // Fungsi untuk tombol hero section
    const heroButtons = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
    heroButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Fungsi untuk tombol lihat semua kegiatan
    const semuaKegiatanBtn = document.querySelector('#kegiatan .btn-primary');
    if (semuaKegiatanBtn) {
        semuaKegiatanBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Anda akan diarahkan ke halaman kegiatan lengkap.');
            window.location.href = 'kegiatan.html';
        });
    });
    
    // Fungsi untuk quick link cards
    const quickLinks = document.querySelectorAll('.quick-link-card');
    quickLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Fungsi untuk activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Fungsi untuk social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
;

// Fungsi untuk menambahkan efek parallax pada hero section (opsional)
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (hero) {
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    }
});

// Fungsi untuk menangani tombol back to top (jika diperlukan)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Tambahkan tombol back to top jika halaman panjang
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        // Bisa ditambahkan tombol back to top di sini jika diperlukan
    }
});

// Fungsi untuk video popup
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen popup
    const popup = document.getElementById('video-popup');
    const closeBtn = document.querySelector('.close-btn');
    const closePopupBtn = document.querySelector('.close-popup');
    
    // Fungsi untuk menampilkan popup
    function showPopup() {
        // Cek apakah pengguna sudah melihat popup sebelumnya (dalam 24 jam)
        const lastShown = localStorage.getItem('videoPopupLastShown');
        const now = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik
        
        // Jika belum pernah ditampilkan atau sudah lebih dari 24 jam
        if (!lastShown || (now - parseInt(lastShown)) > oneDay) {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Mencegah scroll saat popup aktif
            
            // Simpan waktu terakhir popup ditampilkan
            localStorage.setItem('videoPopupLastShown', now.toString());
        }
    }
    
    // Tampilkan popup setelah halaman dimuat (dengan delay kecil)
    setTimeout(showPopup, 1000);
    
    // Fungsi untuk menutup popup
    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Pause video jika sedang berjalan
        const video = document.querySelector('.video-container video');
        if (video) {
            video.pause();
        }
    }
    
    // Event listeners untuk tombol close
    closeBtn.addEventListener('click', closePopup);
    closePopupBtn.addEventListener('click', closePopup);
    
    // Tutup popup saat klik luar dari konten
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // Tutup popup dengan tombol ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.style.display === 'block') {
            closePopup();
        }
    });
    
    // Auto play video saat popup muncul
    popup.addEventListener('DOMNodeInserted', function() {
        const video = document.querySelector('.video-container video');
        if (video) {
            video.play().catch(function(error) {
                console.log('Auto-play prevented:', error);
            });
        }
    });
});