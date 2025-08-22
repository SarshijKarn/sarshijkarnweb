        // GSAP Animations and Interactions
        gsap.registerPlugin(ScrollTrigger);

        // Theme Management
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        let isDark = true;

        themeToggle.addEventListener('click', () => {
            isDark = !isDark;
            body.className = isDark ? 'dark' : 'light';
            themeToggle.classList.toggle('active');
            
            // Update particles color based on theme
            updateParticles();
        });

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scrolling for navigation links
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

        // Particle System
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            particle.style.opacity = Math.random();
            document.getElementById('particles').appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        function updateParticles() {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                particle.style.background = isDark ? '#8A2BE2' : '#00CED1';
            });
        }

        // Create particles periodically - reduced frequency for better performance
        setInterval(createParticle, 800);

        // Typing effect for hero tagline
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const text = typingText.textContent;
            typingText.textContent = '';
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    typingText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }

            setTimeout(typeWriter, 1000);
        }

        // GSAP Scroll Animations - optimized for performance
        gsap.from('.hero-photo-wrapper', {
            duration: 1.5,
            scale: 0,
            rotation: 360,
            opacity: 0,
            ease: 'back.out(1.7)'
        });

        gsap.from('.hero-title', {
            duration: 1.2,
            y: 80,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.3
        });

        gsap.from('.typing-text', {
            duration: 0.8,
            y: 40,
            opacity: 0,
            delay: 0.3,
            ease: 'power2.out'
        });

        gsap.from('.social-icon', {
            duration: 0.6,
            y: 20,
            opacity: 0,
            stagger: 0.08,
            delay: 0.8,
            ease: 'power2.out'
        });

        // Scroll-triggered animations - optimized for performance
        gsap.utils.toArray('.card').forEach(card => {
            gsap.fromTo(card, 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // About photo animation
        gsap.fromTo('.about-photo-wrapper',
            { scale: 0, rotation: -180, opacity: 0 },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.about-photo-wrapper',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Timeline animation - optimized for performance
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            gsap.fromTo(item,
                { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Circuit line animations - optimized for performance
        gsap.utils.toArray('.circuit-line').forEach(line => {
            gsap.fromTo(line,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Gallery lightbox functionality
        function openLightbox(imageSrc) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            lightboxImage.src = imageSrc;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
        }

        // Contact form handling
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your backend
            // For now, we'll just show a success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });

        // Navbar scroll effect - optimized with throttling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) return;
            
            scrollTimeout = setTimeout(() => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 100) {
                    navbar.style.backdropFilter = 'blur(20px)';
                } else {
                    navbar.style.backdropFilter = 'blur(10px)';
                }
                scrollTimeout = null;
            }, 16); // ~60fps
        });

        // Add hover effects to project cards - optimized for performance
        document.querySelectorAll('.card-3d').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.03,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });
        });

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Create initial particles - reduced count for better performance
            for (let i = 0; i < 5; i++) {
                setTimeout(createParticle, i * 200);
            }

            // Add loading animation
            gsap.from('body', {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        // Performance optimization: Throttle scroll events
        let ticking = false;

        function updateScrollEffects() {
            // Add any scroll-based effects here
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);

        // Add intersection observer for better performance
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all cards for animation
        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });
    // Name Jumble Effect for SARSHIJ KARN - optimized for performance
        (function() {
            const heroName = document.getElementById('hero-name');
            if (!heroName) return;
            const originalText = heroName.textContent;
            const chars = "!<>-_\\/[\]{}—=+*^?#________";
            let animating = false;

            function triggerJumble() {
                if (animating) return;
                animating = true;
                let counter = 0;
                const interval = setInterval(() => {
                    heroName.textContent = originalText.split("").map((char, index) => {
                        if (index < counter) return originalText[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("");
                    if (counter >= originalText.length) {
                        clearInterval(interval);
                        heroName.textContent = originalText;
                        animating = false;
                    }
                    counter += 1 / 3; // Slightly faster
                }, 40); // Slightly slower for better performance
            }

            heroName.addEventListener('mouseenter', triggerJumble);
            heroName.addEventListener('touchstart', triggerJumble, {passive: true});
        })();

// Gallery slider seamless loop auto-move - optimized for performance
(function gallerySlider() {
    const track = document.getElementById('gallery-track');
    const slider = document.getElementById('gallery-slider');
    if (!track || !slider) return;
    
    let items = Array.from(track.children);
    let isPaused = false;
    let offset = 0;
    const scrollSpeed = 0.5; // Reduced speed for better performance

    // Duplicate gallery items to ensure seamless infinite scroll
    const initialTrackWidth = track.scrollWidth;
    while (track.scrollWidth < slider.offsetWidth * 2 || track.scrollWidth < initialTrackWidth * 2) {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }
    // Update items list after cloning
    items = Array.from(track.children);

    function animate() {
        if (!isPaused) {
            offset -= scrollSpeed;
            const singleLoopWidth = initialTrackWidth;
            if (Math.abs(offset) >= singleLoopWidth) {
                offset += singleLoopWidth; // Reset offset to allow seamless loop
            }
            track.style.transform = `translateX(${offset}px)`;
        }
        requestAnimationFrame(animate);
    }
    
    function pauseScroll() { isPaused = true; }
    function resumeScroll() { isPaused = false; }
    
    // Add event listeners to all items (original and cloned)
    items.forEach(item => {
        item.addEventListener('mouseenter', pauseScroll);
        item.addEventListener('mouseleave', resumeScroll);
        item.addEventListener('touchstart', pauseScroll, {passive: true});
        item.addEventListener('touchend', resumeScroll);
    });
    
    animate();
})();
