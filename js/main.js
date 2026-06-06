// ===== PRELOADER (logo shows immediately, hides fast) =====
const preloader = document.querySelector('.preloader');
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => preloader.classList.add('hidden'), 800);
    });
    // Failsafe: hide preloader after 4s no matter what
    setTimeout(() => { if (preloader) preloader.classList.add('hidden'); }, 4000);
}

// ===== LAZY LOADING IMAGES =====
document.querySelectorAll('img:not(.preloader-logo):not(.logo-img)').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// ===== DETECT MOBILE =====
const isMobile = window.innerWidth <= 768;

// ===== DARK MODE =====
const darkToggle = document.querySelector('.dark-toggle');
if (darkToggle) {
    if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark-mode');
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

// ===== COOKIE CONSENT =====
const cookieBanner = document.querySelector('.cookie-banner');
const cookieAccept = document.querySelector('.cookie-accept');
if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookieBanner.classList.add('show'), 3000);
}
if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
        cookieBanner.classList.remove('show');
        localStorage.setItem('cookiesAccepted', 'true');
    });
}

// ===== AOS INIT (lighter on mobile) =====
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: isMobile ? 600 : 1000, once: true, offset: isMobile ? 30 : 80, easing: 'ease-out-cubic' });
}

// ===== SMOOTH SCROLL REVEAL ON LOAD =====
window.addEventListener('load', () => { document.body.classList.add('loaded'); });

// ===== ANIMATED COUNTER =====
function animateValue(el, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            hamburger.classList.remove('active');
        });
    }
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });
}

// ===== HERO SLIDER (only play active video) =====
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.querySelector('.hero-dots');
let currentSlide = 0;
let slideInterval;

if (slides.length) {
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    // Pause all non-active videos
    function manageVideos() {
        slides.forEach((slide, i) => {
            const video = slide.querySelector('video');
            if (!video) return;
            if (i === currentSlide) { video.play().catch(() => {}); }
            else { video.pause(); }
        });
    }

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dotsContainer.children[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dotsContainer.children[currentSlide].classList.add('active');
        manageVideos();
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    document.querySelector('.hero-next')?.addEventListener('click', () => { nextSlide(); resetInterval(); });
    document.querySelector('.hero-prev')?.addEventListener('click', () => { prevSlide(); resetInterval(); });

    function resetInterval() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 6000); }
    slideInterval = setInterval(nextSlide, 6000);
    manageVideos();
}

// ===== TESTIMONIALS SLIDER =====
const testiCards = document.querySelectorAll('.testi-card');
const testiDotsContainer = document.querySelector('.testi-dots');
let currentTesti = 0;

if (testiCards.length) {
    testiCards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTesti(i));
        testiDotsContainer.appendChild(dot);
    });

    function goToTesti(n) {
        testiCards[currentTesti].classList.remove('active');
        testiDotsContainer.children[currentTesti].classList.remove('active');
        currentTesti = (n + testiCards.length) % testiCards.length;
        testiCards[currentTesti].classList.add('active');
        testiDotsContainer.children[currentTesti].classList.add('active');
    }

    setInterval(() => goToTesti(currentTesti + 1), 5000);
}

// ===== STATS COUNTER =====
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            animateValue(el, 0, parseInt(el.dataset.target), 2000);
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(el => statsObserver.observe(el));

// ===== BACK TO TOP =====
const backTop = document.querySelector('.back-top');
if (backTop) {
    window.addEventListener('scroll', () => { backTop.classList.toggle('show', window.scrollY > 500); });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== HEADER SCROLL =====
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
    });
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// ===== VIDEO SHOWCASE PLAY/PAUSE =====
document.querySelectorAll('.video-card').forEach(card => {
    const video = card.querySelector('video');
    const playBtn = card.querySelector('.video-play-btn');
    if (!video || !playBtn) return;
    card.addEventListener('click', () => {
        if (video.paused) {
            document.querySelectorAll('.video-card video').forEach(v => { v.pause(); v.closest('.video-card').querySelector('.video-play-btn').innerHTML = '<i class="fas fa-play"></i>'; });
            video.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});

// ===== LIGHTBOX GALLERY =====
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbClose = lightbox.querySelector('.lightbox-close');
    const lbPrev = lightbox.querySelector('.lightbox-prev');
    const lbNext = lightbox.querySelector('.lightbox-next');
    const lbCounter = lightbox.querySelector('.lightbox-counter');
    let lbImages = [];
    let lbIndex = 0;

    document.querySelectorAll('.portfolio-item img').forEach((img, i) => {
        lbImages.push(img.src);
        img.parentElement.addEventListener('click', () => { lbIndex = i; openLightbox(); });
    });

    function openLightbox() {
        lbImg.src = lbImages[lbIndex];
        lbCounter.textContent = (lbIndex + 1) + ' / ' + lbImages.length;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    }

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    lbNext.addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbImages.length; openLightbox(); });
    lbPrev.addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; openLightbox(); });
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('show')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbImages.length; openLightbox(); }
        if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; openLightbox(); }
    });
}

// ===== BEFORE/AFTER SLIDER =====
const baSlider = document.querySelector('.ba-slider');
if (baSlider) {
    const baBefore = baSlider.querySelector('.ba-before');
    const baHandle = baSlider.querySelector('.ba-handle');
    let isDragging = false;

    function updateBA(x) {
        const rect = baSlider.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(5, Math.min(95, pos));
        baBefore.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        baHandle.style.left = pos + '%';
    }

    baSlider.addEventListener('mousedown', (e) => { isDragging = true; updateBA(e.clientX); });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => { if (isDragging) updateBA(e.clientX); });
    baSlider.addEventListener('touchstart', (e) => { isDragging = true; updateBA(e.touches[0].clientX); });
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => { if (isDragging) updateBA(e.touches[0].clientX); });
}

// ===== SMOOTH PAGE TRANSITION =====
document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('https') && href.endsWith('.html')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('page-exit');
            setTimeout(() => { window.location.href = href; }, 300);
        });
    }
});

// ===== SCROLL PROGRESS BAR =====
const progressBar = document.createElement('div');
progressBar.classList.add('scroll-progress');
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// ===== WHATSAPP WOBBLE =====
const waFloat = document.querySelector('.wa-float');
if (waFloat) {
    setInterval(() => {
        waFloat.classList.add('wobble');
        setTimeout(() => waFloat.classList.remove('wobble'), 1000);
    }, 5000);
}

// ===== DESKTOP-ONLY EFFECTS =====
if (!isMobile) {
    // Tilt on service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-8px) perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // Magnetic buttons
    document.querySelectorAll('.btn, .header-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
            btn.style.transform = `translate(${x}px, ${y}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    // Cursor trail
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cursor-trail');
    document.body.appendChild(cursorTrail);
    let trailTimeout;
    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
        cursorTrail.style.opacity = '1';
        clearTimeout(trailTimeout);
        trailTimeout = setTimeout(() => { cursorTrail.style.opacity = '0'; }, 300);
    });

    // Portfolio glow
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            item.style.setProperty('--glow-x', (e.clientX - rect.left) + 'px');
            item.style.setProperty('--glow-y', (e.clientY - rect.top) + 'px');
        });
    });

    // Floating particles (reduced count)
    const hero = document.querySelector('.hero');
    if (hero) {
        const particleContainer = document.createElement('div');
        particleContainer.classList.add('particles');
        hero.appendChild(particleContainer);
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('span');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
            particle.style.width = particle.style.height = (Math.random() * 5 + 2) + 'px';
            particleContainer.appendChild(particle);
        }
    }
}

// ===== RIPPLE EFFECT ON BUTTONS =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
