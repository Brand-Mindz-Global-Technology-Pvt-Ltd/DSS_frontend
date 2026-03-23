
/**
 * Hero Button Animation for About Page
 * Developed by Antigravity
 */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('ap-hero-btn');
    const text = document.getElementById('ap-hero-text');
    const iconContainer = document.getElementById('ap-hero-icon');

    if (!btn || !text || !iconContainer) return;

    // Start centered with icon, then expand
    setTimeout(() => {
        // Expand the background seamlessly
        btn.style.maxWidth = '600px'; 
        text.style.maxWidth = '400px'; 
        text.style.opacity = '1';

        // Re-introduce gap smoothly
        setTimeout(() => {
            btn.classList.add('gap-4', 'md:gap-6');
        }, 300);

    }, 500);
});
