const projectsData = [
    {
        id: 'Terra',
        title: 'Terra Network',
        description: 'A fully custom MMORPG-style Minecraft network with unique classes, skill trees, custom dungeons, and a player-driven economy serving 70+ concurrent players.',
        category: 'server',
        tags: ['Server', 'MMORPG', 'Custom'],
        stats: ['70+ Players', '90+ Plugins'],
        serverIp: 'play.terranetwork.net'
    },
    {
        id: 'Spigot',
        title: 'Spigot',
        description: 'An advanced machine-learning powered anti-cheat system with 99.2% detection accuracy and minimal false positives. Supports 1.8-1.20.x.',
        category: 'plugin',
        tags: ['Plugin', 'Open Source'],
        stats: ['1000+ Servers', '8.9 Rating'],
        downloadUrl: '#'
    },
    {
        id: 'autoscale',
        title: 'AutoScale Manager',
        description: 'An intelligent server autoscaling system that dynamically adjusts server resources based on player count, reducing hosting costs by 40% while maintaining 19.5+ TPS.',
        category: 'system',
        tags: ['System', 'Infrastructure'],
        stats: ['40% Cost Save', '19.5+ TPS'],
        githubUrl: 'https://github.com/NexusForgeDev/autoscale'
    },
    {
        id: 'Custom',
        title: 'Custom',
        description: 'A fully-featured Bedwars plugin with custom maps support, AI NPCs, spectator mode, stats tracking, and leaderboards. Supports parties and matchmaking.',
        category: 'plugin',
        tags: ['Plugin', 'Server'],
        stats: ['1000+ Downloads', 'Active Support'],
        downloadUrl: '#'
    },
    {
        id: 'Voxen',
        title: 'Voxen SMP',
        description: 'A custom survival server with procedurally generated structures, custom biomes, unique crafting system, and a thriving community of 100+ active players.',
        category: 'server',
        tags: ['Server', 'Survival', 'Custom', 'RPG'],
        stats: ['100+ Active', '8 Season Running'],
        serverIp: 'play.voxensmp.net'
    },
    {
        id: 'shield',
        title: 'ShieldGuard DDoS',
        description: 'A comprehensive DDoS mitigation system with real-time threat analysis, automatic IP blocking, and detailed attack logging. Reduces attack impact by 95%.',
        category: 'system',
        tags: ['System', 'Security'],
        stats: ['95% Mitigation', 'Real-time'],
        githubUrl: 'https://github.com/NexusForgeDev/shield'
    }
];

window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1500);
});

const typewriterTexts = [
    'Crafting immersive gameplay experiences',
    'Building high-performance server networks',
    'Creating custom plugins & mechanics',
    'Optimizing for 19.5+ TPS',
    'Serving 500,000+ players worldwide'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const typewriterElement = document.getElementById('typewriterText');
    if (!typewriterElement) return;
    
    const currentText = typewriterTexts[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
    }

    setTimeout(typeWriter, isDeleting ? 30 : 80);
}

function animateStats() {
    const targets = [20, 100, 150, 3];
    const elements = [
        document.getElementById('stat1'),
        document.getElementById('stat2'),
        document.getElementById('stat3'),
        document.getElementById('stat4')
    ];
    
    if (!elements[0]) return;
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        
        elements.forEach((el, i) => {
            if (el) {
                el.textContent = Math.floor(targets[i] * eased);
            }
        });

        if (step >= steps) clearInterval(timer);
    }, interval);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMobileMenu(false);
}

function toggleMobileMenu(forceState) {
    const navLinks = document.getElementById('navLinks');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    
    if (!navLinks || !mobileBtn) return;
    
    if (forceState === false) {
        navLinks.classList.remove('active');
        mobileBtn.classList.remove('active');
    } else {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    }
}

function updateActiveNavLink() {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
                break;
            }
        }
    }
}

function handleScroll() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const navbar = document.getElementById('navbar');
    
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    updateActiveNavLink();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    const filtered = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <div class="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${project.category === 'server' 
                            ? '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>'
                            : project.category === 'plugin'
                            ? '<polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline>'
                            : '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09"></path>'
                        }
                    </svg>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    ${project.stats.map(stat => `
                        <div class="project-stat">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            ${stat}
                        </div>
                    `).join('')}
                </div>
                <div class="project-links">
                    <button class="project-link primary" onclick="openProjectModal('${project.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        View Details
                    </button>
                    <button class="project-link secondary" onclick="copyToClipboard('${project.serverIp || 'play.' + project.id.toLowerCase() + '.net'}')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy IP
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProjects(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });

    renderProjects(category);
}

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalTags = document.getElementById('modalTags');
    const modalButtons = document.getElementById('modalButtons');
    
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalContent) modalContent.innerHTML = `<p>${project.description}</p>`;
    if (modalTags) modalTags.innerHTML = project.tags.map(tag => 
        `<span class="modal-tag">${tag}</span>`
    ).join('');
    if (modalButtons) {
        modalButtons.innerHTML = `
            <button class="project-link primary" onclick="copyToClipboard('${project.serverIp || 'play.' + project.id.toLowerCase() + '.net'}'); closeModalBtn();">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy Server IP
            </button>
            <button class="project-link secondary" onclick="closeModalBtn()">
                Close
            </button>
        `;
    }

    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(event) {
    if (event && event.target === document.getElementById('modalOverlay')) {
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

function closeModalBtn() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

let toastCounter = 0;

function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const id = ++toastCounter;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = `toast-${id}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                ${type === 'success' 
                    ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
                    : '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
                }
            </svg>
        </div>
        <div class="toast-message">
            <div class="toast-title">${title}</div>
            <div class="toast-text">${message}</div>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('success', 'Copied!', text);
    }).catch(() => {
        showToast('error', 'Failed', 'Could not copy to clipboard');
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.style.display = 'none';
    }
    if (formSuccess) {
        formSuccess.classList.add('show');
    }
    showToast('success', 'Message Sent!', 'Thank you for reaching out.');
    
    setTimeout(() => {
        if (contactForm) {
            contactForm.reset();
            contactForm.style.display = 'block';
        }
        if (formSuccess) {
            formSuccess.classList.remove('show');
        }
    }, 5000);
}

function downloadCV() {
    showToast('success', 'Download Started', 'Your CV is being downloaded...');
}

function animateSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        const rect = category.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const skills = category.querySelectorAll('.skill-item');
            skills.forEach((skill, index) => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateX(0)';
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 1000);
    
    setTimeout(animateStats, 2000);
    
    renderProjects();
    
    window.addEventListener('scroll', handleScroll);
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    window.addEventListener('scroll', animateSkillBars);
    setTimeout(animateSkillBars, 2500);
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const navLinks = document.getElementById('navLinks');
            const mobileBtn = document.getElementById('mobileMenuBtn');
            if (navLinks && mobileBtn) {
                navLinks.classList.remove('active');
                mobileBtn.classList.remove('active');
            }
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

document.addEventListener('mousemove', function(e) {
    const planets = document.querySelectorAll('.planet');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    planets.forEach((planet, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        planet.style.transform = `translate(${x}px, ${y}px)`;
    });
});

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isMobile) {
    document.body.classList.add('is-mobile');
    
    if (isIOS) {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
        setVH();
    }
}

if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    const elements = document.querySelectorAll('.project-card, .skill-category, .btn, .badge');
    elements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        el.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
        
        if (window.innerWidth < 768) {
            document.querySelectorAll('.stat-number').forEach(stat => {
                stat.style.fontSize = '2rem';
            });
        }
    }, 100);
});

window.addEventListener('online', function() {
    showToast('success', 'Connected', 'You are back online!');
});

window.addEventListener('offline', function() {
    showToast('error', 'Offline', 'You are currently offline');
});

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    handleScroll();
    animateSkillBars();
}, 10));

window.addEventListener('beforeunload', function() {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', animateSkillBars);
    window.removeEventListener('resize', handleScroll);
});

document.querySelectorAll('.btn, .nav-link, .project-link, .social-link').forEach(el => {
    if (!el.getAttribute('aria-label')) {
        const text = el.textContent || el.getAttribute('aria-label');
        if (text) el.setAttribute('aria-label', text.trim());
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-user');
});

window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
        }
    }, 2000);
});

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        if (!document.getElementById('typewriterText').textContent) {
            typeWriter();
        }
    }
});