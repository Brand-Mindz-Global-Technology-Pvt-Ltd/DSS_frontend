
/**
 * Animation for the Reach Out button in Contact Page
 * Balanced expansion with left-to-right movement feel
 */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('reach-out-btn');
    const text = document.getElementById('reach-out-text');
    const iconContainer = document.getElementById('reach-out-icon-container');

    if (!btn || !text || !iconContainer) return;

    // Trigger animation with a clean delay
    setTimeout(() => {
        // Expand the background seamlessly
        btn.style.maxWidth = '500px';
        text.style.maxWidth = '300px';
        text.style.opacity = '1';

        // Animate the icon from a slightly left-shifted position to the leading edge (right)
        iconContainer.classList.remove('opacity-0', '-translate-x-6');
        iconContainer.classList.add('opacity-100', 'translate-x-0');

        // Re-introduce gap smoothly
        setTimeout(() => {
            btn.classList.add('space-x-3', 'sm:space-x-4');
        }, 100);

    }, 500);
});
