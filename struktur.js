// Fungsi untuk struktur organisasi
document.addEventListener('DOMContentLoaded', function() {
    // Data anggota departemen
    const departmentMembers = {
        psdm: [
            { name: "Andi Prasetyo", nim: "1234567001", photo: "images/pengurus/psdm-1.jpg" },
            { name: "Budi Santoso", nim: "1234567002", photo: "images/pengurus/psdm-2.jpg" },
            { name: "Citra Dewi", nim: "1234567003", photo: "images/pengurus/psdm-3.jpg" },
            { name: "Dedi Hermawan", nim: "1234567004", photo: "images/pengurus/psdm-4.jpg" },
            { name: "Eka Putri", nim: "1234567005", photo: "images/pengurus/psdm-5.jpg" },
            { name: "Fajar Nugroho", nim: "1234567006", photo: "images/pengurus/psdm-6.jpg" },
            { name: "Gita Sari", nim: "1234567007", photo: "images/pengurus/psdm-7.jpg" },
            { name: "Hendra Prasetya", nim: "1234567008", photo: "images/pengurus/psdm-8.jpg" },
            { name: "Indah Permata", nim: "1234567009", photo: "images/pengurus/psdm-9.jpg" },
            { name: "Joko Widodo", nim: "1234567010", photo: "images/pengurus/psdm-10.jpg" }
        ],
        p3m: [
            { name: "Kartika Sari", nim: "1234567101", photo: "images/pengurus/p3m-1.jpg" },
            { name: "Lukman Hakim", nim: "1234567102", photo: "images/pengurus/p3m-2.jpg" },
            { name: "Mira Kartika", nim: "1234567103", photo: "images/pengurus/p3m-3.jpg" },
            { name: "Nanda Putra", nim: "1234567104", photo: "images/pengurus/p3m-4.jpg" },
            { name: "Oka Surya", nim: "1234567105", photo: "images/pengurus/p3m-5.jpg" },
            { name: "Putri Ayu", nim: "1234567106", photo: "images/pengurus/p3m-6.jpg" },
            { name: "Rendi Pratama", nim: "1234567107", photo: "images/pengurus/p3m-7.jpg" },
            { name: "Sari Dewi", nim: "1234567108", photo: "images/pengurus/p3m-8.jpg" },
            { name: "Taufik Hidayat", nim: "1234567109", photo: "images/pengurus/p3m-9.jpg" },
            { name: "Umi Kalsum", nim: "1234567110", photo: "images/pengurus/p3m-10.jpg" }
        ],
        kwo: [
            { name: "Vina Anggraini", nim: "1234567201", photo: "images/pengurus/kwo-1.jpg" },
            { name: "Wawan Setiawan", nim: "1234567202", photo: "images/pengurus/kwo-2.jpg" },
            { name: "Xenia Putri", nim: "1234567203", photo: "images/pengurus/kwo-3.jpg" },
            { name: "Yudi Prasetyo", nim: "1234567204", photo: "images/pengurus/kwo-4.jpg" },
            { name: "Zahra Amalia", nim: "1234567205", photo: "images/pengurus/kwo-5.jpg" },
            { name: "Adi Nugroho", nim: "1234567206", photo: "images/pengurus/kwo-6.jpg" },
            { name: "Bella Sari", nim: "1234567207", photo: "images/pengurus/kwo-7.jpg" },
            { name: "Candra Wijaya", nim: "1234567208", photo: "images/pengurus/kwo-8.jpg" }
        ],
        infokom: [
            { name: "Dina Kartika", nim: "1234567301", photo: "images/pengurus/infokom-1.jpg" },
            { name: "Eko Prasetyo", nim: "1234567302", photo: "images/pengurus/infokom-2.jpg" },
            { name: "Fina Putri", nim: "1234567303", photo: "images/pengurus/infokom-3.jpg" },
            { name: "Gani Hermawan", nim: "1234567304", photo: "images/pengurus/infokom-4.jpg" },
            { name: "Hilda Sari", nim: "1234567305", photo: "images/pengurus/infokom-5.jpg" },
            { name: "Irfan Nugroho", nim: "1234567306", photo: "images/pengurus/infokom-6.jpg" },
            { name: "Juli Astuti", nim: "1234567307", photo: "images/pengurus/infokom-7.jpg" },
            { name: "Krisna Wijaya", nim: "1234567308", photo: "images/pengurus/infokom-8.jpg" },
            { name: "Lia Permata", nim: "1234567309", photo: "images/pengurus/infokom-9.jpg" }
        ],
        hal: [
            { name: "Mega Sari", nim: "1234567401", photo: "images/pengurus/hal-1.jpg" },
            { name: "Niko Pratama", nim: "1234567402", photo: "images/pengurus/hal-2.jpg" },
            { name: "Oktavia Putri", nim: "1234567403", photo: "images/pengurus/hal-3.jpg" },
            { name: "Prasetya Nugroho", nim: "1234567404", photo: "images/pengurus/hal-4.jpg" },
            { name: "Queen Amalia", nim: "1234567405", photo: "images/pengurus/hal-5.jpg" },
            { name: "Rico Hermawan", nim: "1234567406", photo: "images/pengurus/hal-6.jpg" },
            { name: "Sinta Kartika", nim: "1234567407", photo: "images/pengurus/hal-7.jpg" },
            { name: "Tono Wijaya", nim: "1234567408", photo: "images/pengurus/hal-8.jpg" },
            { name: "Ulfa Astuti", nim: "1234567409", photo: "images/pengurus/hal-9.jpg" },
            { name: "Vicky Prasetyo", nim: "1234567410", photo: "images/pengurus/hal-10.jpg" }
        ]
    };

    // Modal functionality
    const modal = document.getElementById('members-modal');
    const modalTitle = document.getElementById('modal-title');
    const membersContainer = document.getElementById('members-container');
    const closeModal = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.view-members-btn');

    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dept = this.getAttribute('data-dept');
            const deptName = this.closest('.department-card').querySelector('h3').textContent;
            
            // Set modal title
            modalTitle.textContent = `Anggota Departemen ${deptName}`;
            
            // Clear previous members
            membersContainer.innerHTML = '';
            
            // Add members to modal
            if (departmentMembers[dept]) {
                departmentMembers[dept].forEach(member => {
                    const memberElement = document.createElement('div');
                    memberElement.className = 'member-item';
                    memberElement.innerHTML = `
                        <img src="${member.photo}" alt="${member.name}">
                        <h4>${member.name}</h4>
                        <p>${member.nim}</p>
                    `;
                    membersContainer.appendChild(memberElement);
                });
            }
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

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

    // Hover effects untuk cards
    const departmentCards = document.querySelectorAll('.department-card');
    departmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
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

    // Statistik animasi
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

    // Observer untuk animasi statistik
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const endValue = parseInt(statNumber.textContent);
                animateValue(statNumber, 0, endValue, 2000);
                statObserver.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });
});