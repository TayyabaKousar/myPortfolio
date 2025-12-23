// Function to load external HTML files into divs
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(id).innerHTML = content;
        } else {
            console.error(`Error loading ${file}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// Main initialization function
async function init() {
    // 1. Load all components
    await Promise.all([
        loadComponent('hero-container', 'components/hero.html'),
        loadComponent('about-container', 'components/about.html'),
        loadComponent('skills-container', 'components/skills.html'),
        loadComponent('projects-container', 'components/projects.html'),
        loadComponent('footer-container', 'components/footer.html')
    ]);

    // 2. Initialize Scroll Animations (Intersection Observer)
    setupObserver();
}

function setupObserver() {
    // Select all elements with class 'reveal' (added dynamically)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
}

// Run the script when DOM is ready
document.addEventListener('DOMContentLoaded', init);