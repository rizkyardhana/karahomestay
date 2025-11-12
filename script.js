// Data gambar untuk setiap kamar (6 gambar pertama saja)
const roomImages = {
    paviliun1: [
        "image/1. paviliun/1.jpeg",
        "image/1. paviliun/2.jpeg",
        "image/1. paviliun/3.jpeg",
        "image/1. paviliun/4.jpeg",
        "image/1. paviliun/5.jpeg",
        "image/1. paviliun/6.jpeg",
        "image/1. paviliun/7.jpeg"
    ],
    paviliun2: [
        "image/2. paviliun/1.jpeg",
        "image/2. paviliun/2.jpeg",
        "image/2. paviliun/3.jpeg",
        "image/2. paviliun/4.jpeg",
        "image/2. paviliun/5.jpeg",
        "image/2. paviliun/6.jpeg",
        "image/2. paviliun/7.jpeg"
    ],
    paviliun3: [
        "image/3. paviliun/1.jpeg",
        "image/3. paviliun/2.jpeg",
        "image/3. paviliun/3.jpeg",
        "image/3. paviliun/4.jpeg",
        "image/3. paviliun/6.jpeg",
        "image/3. paviliun/7.jpeg"
    ],
    paviliun4: [
        "image/4. paviliun/1.jpeg",
        "image/4. paviliun/2.jpeg",
        "image/4. paviliun/3.jpeg",
        "image/4. paviliun/4.jpeg",
        "image/4. paviliun/6.jpeg",
        "image/4. paviliun/7.jpeg"
    ],
    paviliun5: [
        "image/5. paviliun/1.jpeg",
        "image/5. paviliun/2.jpeg",
        "image/5. paviliun/3.jpeg",
        "image/5. paviliun/4.jpeg",
        "image/5. paviliun/5.jpeg",
        "image/5. paviliun/6.jpeg",
    ],
    paviliun6: [
        "image/6. paviliun/1.jpeg",
        "image/6. paviliun/2.jpeg",
        "image/6. paviliun/3.jpeg",
        "image/6. paviliun/4.jpeg",
        "image/6. paviliun/5.jpeg",
        "image/6. paviliun/6.jpeg",
    ],
    fasilitas: [
        "image/fasilitas/1.jpeg",
        "image/fasilitas/2.jpeg",
        "image/fasilitas/3.jpeg",
    ]
};

// Data untuk galeri utama
const galleryData = [
    // Paviliun 1
    { src: "image/1. paviliun/1.jpeg", category: "paviliun1", title: "Paviliun 1 - Korea Modern" },
    { src: "image/1. paviliun/2.jpeg", category: "paviliun1", title: "Paviliun 1 - Teras" },
    { src: "image/1. paviliun/3.jpeg", category: "paviliun1", title: "Paviliun 1 - Kamar Tidur Utama" },
    { src: "image/1. paviliun/4.jpeg", category: "paviliun1", title: "Paviliun 1 - Kamar Tidur" },
    { src: "image/1. paviliun/5.jpeg", category: "paviliun1", title: "Paviliun 1 - Kamar Tidur" },
    { src: "image/1. paviliun/6.jpeg", category: "paviliun1", title: "Paviliun 1 - Dapur" },
    { src: "image/1. paviliun/7.jpeg", category: "paviliun1", title: "Paviliun 1 - Kamar mandi" },
    
    // Paviliun 2
    { src: "image/2. paviliun/1.jpeg", category: "paviliun2", title: "Paviliun 2 - Amerika Klasik" },
    { src: "image/2. paviliun/2.jpeg", category: "paviliun2", title: "Paviliun 2 - Teras" },
    { src: "image/2. paviliun/3.jpeg", category: "paviliun2", title: "Paviliun 2 - Ruang Tamu" },
    { src: "image/2. paviliun/4.jpeg", category: "paviliun2", title: "Paviliun 2 - Ruang Tamu" },
    { src: "image/2. paviliun/6.jpeg", category: "paviliun2", title: "Paviliun 2 - Kamar Tidur Utama" },
    { src: "image/2. paviliun/7.jpeg", category: "paviliun2", title: "Paviliun 2 - Kamar Tidur" },
    { src: "image/2. paviliun/8.jpeg", category: "paviliun2", title: "Paviliun 2 - Dapur" },
    
    // Paviliun 3
    { src: "image/3. paviliun/1.jpeg", category: "paviliun3", title: "Paviliun 3 - Eropa Modern" },
    { src: "image/3. paviliun/2.jpeg", category: "paviliun3", title: "Paviliun 3 - Teras" },
    { src: "image/3. paviliun/3.jpeg", category: "paviliun3", title: "Paviliun 3 - Ruang Tamu" },
    { src: "image/3. paviliun/4.jpeg", category: "paviliun3", title: "Paviliun 3 - Ruang Tamu" },
    { src: "image/3. paviliun/6.jpeg", category: "paviliun3", title: "Paviliun 3 - Kamar Tidur Utama" }, 
    { src: "image/3. paviliun/7.jpeg", category: "paviliun3", title: "Paviliun 3 - Kamar Tidur" },
    { src: "image/3. paviliun/8.jpeg", category: "paviliun3", title: "Paviliun 3 - Kamar Mandi" },

    // Paviliun 4
    { src: "image/4. paviliun/1.jpeg", category: "paviliun4", title: "Paviliun 4 - Amerika Klasik" },
    { src: "image/4. paviliun/2.jpeg", category: "paviliun4", title: "Paviliun 4 - Kamar Tidur Utama" },
    { src: "image/4. paviliun/3.jpeg", category: "paviliun4", title: "Paviliun 4 - Kamar Tidur" },
    { src: "image/4. paviliun/4.jpeg", category: "paviliun4", title: "Paviliun 4 - Ruang TV" },
    { src: "image/4. paviliun/6.jpeg", category: "paviliun4", title: "Paviliun 4 - Dapur" },
    { src: "image/4. paviliun/7.jpeg", category: "paviliun4", title: "Paviliun 4 - Dapur" },
    { src: "image/4. paviliun/8.jpeg", category: "paviliun4", title: "Paviliun 4 - Kamar Mandi" },

    // Paviliun 5
    { src: "image/5. paviliun/1.jpeg", category: "paviliun5", title: "Paviliun 5 - Amerika Klasik" },
    { src: "image/5. paviliun/2.jpeg", category: "paviliun5", title: "Paviliun 5 - Kamar Tidur" },
    { src: "image/5. paviliun/3.jpeg", category: "paviliun5", title: "Paviliun 5 - Ruang Tamu" },
    { src: "image/5. paviliun/4.jpeg", category: "paviliun5", title: "Paviliun 5 - Kamar Tidur" },
    { src: "image/5. paviliun/5.jpeg", category: "paviliun5", title: "Paviliun 5 - Kamar Mandi" },
    
    // Paviliun 6
    { src: "image/6. paviliun/1.jpeg", category: "paviliun6", title: "Paviliun 6 - Korea Modern" },
    { src: "image/6. paviliun/2.jpeg", category: "paviliun6", title: "Paviliun 6 - Ruang TV" },
    { src: "image/6. paviliun/3.jpeg", category: "paviliun6", title: "Paviliun 6 - Kamar Tidur" },
    { src: "image/6. paviliun/4.jpeg", category: "paviliun6", title: "Paviliun 6 - Dapur" },
    { src: "image/6. paviliun/6.jpeg", category: "paviliun6", title: "Paviliun 6 - Kamar Mandi" },
    
    // Fasilitas
    { src: "image/fasilitas/3.jpeg", category: "fasilitas", title: "Area Bersantai" },
    { src: "image/fasilitas/2.jpeg", category: "fasilitas", title: "Parkir motor" },
    { src: "image/fasilitas/1.jpeg", category: "fasilitas", title: "Parkir mobil" },
];

// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Elemen DOM
const modal = document.getElementById('galleryModal');
const modalTitle = document.getElementById('modalTitle');
const modalGallery = document.getElementById('modalGallery');
const closeBtn = document.querySelector('.modal__close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');
const galleryGrid = document.querySelector('.gallery__grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Variabel state
let currentImages = [];
let currentIndex = 0;
let currentFilter = 'all';

// Fungsi untuk inisialisasi galeri
function initGallery() {
    renderGallery();
    setupEventListeners();
    setupMobileNavigation();
}

// Render galeri berdasarkan filter
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    const filteredData = currentFilter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentFilter);
    
    filteredData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-aos', 'fade-up');
        galleryItem.setAttribute('data-aos-delay', (index % 6) * 100);
        
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" data-category="${item.category}">
            <div class="gallery-item__overlay">
                <span>${item.title}</span>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openGallery(item.category));
        galleryGrid.appendChild(galleryItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Tombol galeri di kartu kamar
    document.querySelectorAll('.room-gallery-btn').forEach(button => {
        button.addEventListener('click', function() {
            const roomId = this.getAttribute('data-room');
            openGallery(roomId);
        });
    });
    
    // Filter galeri
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter dan render ulang
            currentFilter = filter;
            renderGallery();
        });
    });
    
    // Modal controls
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Klik di luar modal untuk menutup
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Form submission
    const contactForm = document.querySelector('.contact__form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// Setup mobile navigation
function setupMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Handle header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Buka modal galeri
function openGallery(roomId) {
    currentImages = roomImages[roomId] || [];
    currentIndex = 0;
    
    // Set judul modal
    const roomNames = {
        paviliun1: "Paviliun 1 - Korea Modern",
        paviliun2: "Paviliun 2 - Amerika Klasik", 
        paviliun3: "Paviliun 3 - Eropa Modern",
        paviliun4: "Paviliun 4 - Amerika Klasik",
        paviliun5: "Paviliun 5 - Amerika Klasik",
        paviliun6: "Paviliun 6 - Korea Modern",
        fasilitas: "Fasilitas Homestay"
    };
    
    modalTitle.textContent = `Galeri ${roomNames[roomId]}`;
    
    // Render gambar di modal
    renderModalGallery();
    
    // Tampilkan modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Update navigasi
    updateNavigation();
}

// Render gambar di modal
function renderModalGallery() {
    modalGallery.innerHTML = '';
    
    currentImages.forEach((src, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'modal-gallery__item';
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gambar ${index + 1}`;
        img.loading = 'lazy';
        
        imgContainer.appendChild(img);
        modalGallery.appendChild(imgContainer);
    });
}

// Update navigasi modal
function updateNavigation() {
    imageCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentImages.length - 1;
    
    // Scroll ke gambar aktif
    if (modalGallery.children.length > 0) {
        const itemWidth = modalGallery.children[0].offsetWidth;
        modalGallery.scrollLeft = currentIndex * itemWidth;
    }
}

// Navigasi gambar
function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateNavigation();
    }
}

function showNextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        updateNavigation();
    }
}

// Tutup modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    if (modal.style.display === 'flex') {
        switch(e.key) {
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'Escape':
                closeModal();
                break;
        }
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formElements = e.target.elements;
    
    // Validasi sederhana
    let isValid = true;
    for (let element of formElements) {
        if (element.required && !element.value.trim()) {
            isValid = false;
            element.style.borderColor = '#ff4444';
        } else {
            element.style.borderColor = '';
        }
    }
    
    if (isValid) {
        // Simulasi pengiriman data
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
            e.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    } else {
        alert('Harap lengkapi semua field yang wajib diisi.');
    }
}

// Preload images untuk performa lebih baik
function preloadImages() {
    const allImages = [
        ...roomImages.paviliun1,
        ...roomImages.paviliun2,
        ...roomImages.paviliun3,
        ...roomImages.paviliun4,
        ...roomImages.paviliun5,
        ...roomImages.paviliun6,
        ...roomImages.fasilitas
    ];
    
    allImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Smooth scroll untuk navigasi
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Swiper untuk testimonials
function initTestimonialsSwiper() {
    const testimonialsSwiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
}

// Initialize everything ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader setelah semua konten dimuat
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    initGallery();
    initSmoothScroll();
    initTestimonialsSwiper();
    preloadImages();

    console.log('Kara Homestay Website loaded successfully! 🏡');
});

// Handle window resize
window.addEventListener('resize', function() {
    // Update modal gallery layout on resize
    if (modal.style.display === 'flex') {
        updateNavigation();
    }
});

// Error handling untuk gambar
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Gambar gagal dimuat:', e.target.src);
        e.target.style.display = 'none';
        
        // Fallback image
        const fallbackSrc = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop';
        if (e.target.src !== fallbackSrc) {
            e.target.src = fallbackSrc;
            e.target.style.display = 'block';
        }
    }
}, true);

// Fungsi untuk format tanggal
function formatTanggal(tanggal) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(tanggal).toLocaleDateString('id-ID', options);
}

// Fungsi untuk kirim ke WhatsApp
function kirimKeWhatsApp(formData) {
    const phoneNumber = '6282199125033';

    // Format pesan yang rapi
    const message = `🟢 *BOOKING KARA HOMESTAY* 🟢

📋 *DATA PEMESAN*
Nama: ${formData.namaBooking}
Email: ${formData.email}
Telepon: ${formData.nomorTelepon}

📅 *DETAIL BOOKING*
Check-in: ${formatTanggal(formData.checkin)}
Check-out: ${formatTanggal(formData.checkout)}
Jumlah Tamu: ${formData.guests} orang

🏠 *PILIHAN PAVILIUN*
${formData.paviliun1 ? `Paviliun Utama: ${formData.paviliun1}` : 'Belum memilih paviliun utama'}
${formData.paviliun2 ? `Paviliun Alternatif: ${formData.paviliun2}` : 'Belum memilih paviliun alternatif'}

_Saya tertarik booking di Kara Homestay. Mohon info ketersediaan kamar dan detail pembayaran. Terima kasih!_`;

    // Encode message untuk URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
}

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const formData = {
        namaBooking: document.getElementById('namaLengkap').value,
        nomorTelepon: document.getElementById('nomorTelepon').value,
        email: document.getElementById('email').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        guests: document.getElementById('jumlahOrang').value,
        paviliun1: document.getElementById('paviliun').value,
        paviliun2: document.getElementById('paviliunAlternatif').value
    };

    // Validasi form
    if (!formData.namaBooking || !formData.nomorTelepon || !formData.checkin || !formData.checkout || !formData.guests) {
        alert('Harap lengkapi semua field yang wajib diisi!');
        return;
    }

    // Validasi tanggal
    if (new Date(formData.checkin) >= new Date(formData.checkout)) {
        alert('Tanggal check-out harus setelah tanggal check-in!');
        return;
    }

    // Tampilkan loading
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;

    // Kirim ke WhatsApp setelah delay kecil
    setTimeout(() => {
        kirimKeWhatsApp(formData);

        // Reset button setelah 2 detik
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Opsional: Reset form
            // this.reset();
        }, 2000);

    }, 1000);
});

// Set tanggal minimum untuk check-in (hari ini)
document.getElementById('checkin').min = new Date().toISOString().split('T')[0];

// Update tanggal minimum untuk check-out berdasarkan check-in
document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').min = this.value;
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero__content');
    
    if (hero && heroContent) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add click effect for About section image - open in gallery modal
document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.querySelector('.about__image img');

    if (aboutImage) {
        aboutImage.addEventListener('click', function() {
            // Open modal with the About image
            currentImages = [this.src];
            currentIndex = 0;

            modalTitle.textContent = "Tentang Kara Homestay";

            // Render single image in modal
            renderModalGallery();

            // Show modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Update navigation
            updateNavigation();
        });
    }
});

// Add click effect for scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add click effect for video review section - open Instagram link
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');

    if (videoContainer) {
        videoContainer.addEventListener('click', function(e) {
            // Prevent default if clicking on iframe
            if (e.target.tagName === 'IFRAME') return;

            // Open Instagram link in new tab
            window.open('https://www.instagram.com/p/DPYSR0BjxLS/', '_blank');
        });
    }
});


// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Add loading class for fade-in effect
        img.classList.add('loading');

        img.addEventListener('load', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
    });
});
