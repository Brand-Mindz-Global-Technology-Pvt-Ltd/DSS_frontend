
/**
 * Hero Pill Animation for Home Page
 * Developed by Antigravity
 */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hp-pill-btn');
    const text = document.getElementById('hp-pill-text');
    const iconContainer = document.getElementById('hp-pill-icon');

    if (!btn || !text || !iconContainer) return;

    // Delayed start after Shadow (1.5s) and Heading (1.5s)
    setTimeout(() => {
        // Expand the background seamlessly
        btn.style.maxWidth = '500px'; 
        text.style.maxWidth = '300px'; 
        text.style.opacity = '1';

        // Re-introduce gap smoothly
        setTimeout(() => {
            btn.classList.add('gap-2', 'md:gap-3');
        }, 300);

    }, 800);

});
