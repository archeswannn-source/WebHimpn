// Fungsi untuk galeri
document.addEventListener('DOMContentLoaded', function() {
    // Filter galeri
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected filter
            const filter = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.3s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.close-btn');
    const viewBtns = document.querySelectorAll('.view-btn');
    const galleryImages = document.querySelectorAll('.gallery-image img');
    
    // Array untuk menyimpan informasi gambar
    const galleryData = [
        { title: "Kitkat", desc: "Foto bersama dengan pihak perusahaan." },
        { title: "MUBES", desc: "Musyawarah Besar Sebagai Event Tahunan IMTEK" },
        { title: "Studi Banding", desc: "Studi banding IMTEK STMI dan HIMATEK Univ. Bhayangkara guna berbagi pengalaman dan pengetahuan tentang dunia industri." },
        { title: "Wisuda Angkatan 2020", desc: "Wisuda TKP Angkatan 2020" },
        
    ];
    
    // Open lightbox
    viewBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const galleryItem = this.closest('.gallery-item');
            const imgSrc = galleryItem.querySelector('img').src;
            const title = galleryItem.querySelector('h3').textContent;
            const desc = galleryItem.querySelector('p').textContent;
            
            lightboxImg.src = imgSrc;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Navigation buttons (prev/next)
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightbox(currentIndex);
    });
    
    function updateLightbox(index) {
        const imgSrc = galleryImages[index].src;
        const title = galleryImages[index].alt;
        lightboxImg.src = imgSrc;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = galleryData[index].desc;
    }
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-sync-alt"></i> Muat Lebih Banyak';
                alert('Fitur ini akan segera tersedia dengan lebih banyak foto!');
            }, 1500);
        });
    }
    
    // Hover effects untuk navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Hover effects untuk gallery items
    const galleryItemsHover = document.querySelectorAll('.gallery-item');
    galleryItemsHover.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scrolling untuk anchor links
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
    
    // Animasi untuk section saat di-scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);
    
    // Terapkan observer ke semua section
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(section);
    });
});