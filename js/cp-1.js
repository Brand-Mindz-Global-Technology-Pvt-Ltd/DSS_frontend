
/**
 * Animation for the Reach Out button in Contact Page
 * Balanced expansion with left-to-right movement feel
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reach Out Button Animation
    const btn = document.getElementById('reach-out-btn');
    const text = document.getElementById('reach-out-text');
    const iconContainer = document.getElementById('reach-out-icon-container');

    if (btn && text && iconContainer) {
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
    }

    // 2. Contact Form Submission Logic (via FormSubmit AJAX)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Show Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Sending...
            `;

            try {
                const formData = new FormData(form);
                
                const response = await fetch('https://formsubmit.co/ajax/dssdeliverypartner@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const result = await response.json();

                if (response.ok && result.success === "true") {
                    showToast('Message sent successfully! We will get back to you shortly.', 'success');
                    form.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                showToast('Failed to send message. Please check your connection and try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // 3. Premium Glassmorphic Toast Notifications
    function showToast(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'fixed bottom-5 right-5 z-[2000] flex flex-col gap-3 max-w-sm w-full px-4';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `p-4 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-500 transform translate-y-10 opacity-0 flex items-center gap-3 border ${
            type === 'success' 
                ? 'bg-emerald-500/90 border-emerald-400 text-white' 
                : 'bg-rose-500/90 border-rose-400 text-white'
        }`;

        const icon = type === 'success' 
            ? `<svg class="w-6 h-6 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
            : `<svg class="w-6 h-6 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

        toast.innerHTML = `
            ${icon}
            <div class="font-manjari text-base font-bold">${message}</div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        }, 10);

        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-2');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 4000);
    }
});
