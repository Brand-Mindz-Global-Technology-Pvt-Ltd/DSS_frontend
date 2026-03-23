
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            name: 'Priya',
            text: 'Using Hyperlocal Marketing Helped My Business Reach Nearby Customers Quickly. I Started Getting Genuine Local Inquiries Within Days, And My Walk-in Traffic Improved A Lot.',
            avatar: 'images/avatar_2.png'
        },
        {
            name: 'John Anderson',
            text: 'Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. Highly recommended!',
            avatar: 'images/avatar_1.png'
        },
        {
            name: 'Mike Davis',
            text: 'Outstanding service! From start to finish, the entire delivery process was flawless. The new app makes tracking orders incredibly simple and fast.',
            avatar: 'images/avatar_2.png'
        }
    ];

    const container = document.getElementById('testimonial-slider-container');
    if (!container) return;

    let currentIndex = 0;

    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];
        
        // Add a fade-out effect
        container.classList.add('opacity-0', 'translate-y-2');
        
        setTimeout(() => {
            const avatarImg = container.querySelector('.testimonial-avatar');
            const contentText = container.querySelector('.testimonial-text');
            const nameText = container.querySelector('.testimonial-name');

            if (avatarImg) avatarImg.src = testimonial.avatar;
            if (contentText) contentText.textContent = testimonial.text;
            if (nameText) nameText.textContent = testimonial.name;

            // Fade-in and slide back up
            container.classList.remove('opacity-0', 'translate-y-2');
        }, 300);

        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    // Auto cycle every 2 seconds
    setInterval(updateTestimonial, 2000);
});
