/**
 * Optimized Portfolio Logic - Tayyaba Kousar
 * Time Complexity: 
 * - Component Loading: O(N) where N is number of files.
 * - Intersection Observers: O(1) [Event-driven, highly efficient].
 */

// Global Function to load HTML components
async function loadComponent(id, file) {
    const container = document.getElementById(id);
    if (!container) return; 

    try {
        const response = await fetch(file);
        if (response.ok) {
            container.innerHTML = await response.text();
        } else {
            console.error(`Error loading ${file}`);
        }
    } catch (error) {
        console.error(`Network error: ${file}`, error);
    }
}

// Initialization function
async function init() {
    // 1. Parallel Loading (Speed optimize karne ke liye)
    const components = [
        { id: 'hero-container', file: 'components/hero.html' },
        { id: 'about-container', file: 'components/about.html' },
        { id: 'stats-container', file: 'components/stats.html' },
        { id: 'skills-container', file: 'components/skills.html' },
        { id: 'projects-container', file: 'components/projects.html' },
        { id: 'certificates-container', file: 'components/certificates.html' },
        { id: 'footer-container', file: 'components/footer.html' }
    ];

    // Sab components ko ek saath load karein (O(1) network wait time)
    await Promise.all(components.map(c => loadComponent(c.id, c.file)));

    // 2. Initialize Observers after components are in DOM
    setupRevealObserver();
    setupStatsCounter();
}

/**
 * Reveal Observer: Sections ko scroll par smoothly dikhane ke liye
 */
function setupRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Performance boost: Ek baar reveal ho jaye to observation rok dein
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Stats Counter: Numbers ko count karne ke liye (O(1) memory usage)
 */
function setupStatsCounter() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 1500; // 1.5 Seconds for count up
                const start = 0;
                
                let startTime = null;

                // Smooth Animation using requestAnimationFrame (Best for performance)
                const step = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const currentVal = Math.floor(progress * (target - start) + start);
                    
                    // Special case for 300+ coding hours
                    if (target === 300 && progress === 1) {
                        counter.innerText = "300+";
                    } else {
                        counter.innerText = currentVal;
                    }

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };

                window.requestAnimationFrame(step);
                observer.unobserve(counter); // Count complete hone ke baad observation khatam
            }
        });
    }, { threshold: 0.8 }); // Jab 80% section nazar aaye tab count shuru ho

    counters.forEach(c => counterObserver.observe(c));
}

// Run everything when DOM is ready
document.addEventListener('DOMContentLoaded', init);