document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-item');
    const contents = document.querySelectorAll('.tab-content');
    const slides = document.querySelectorAll('.app-slide');
    const dots = document.querySelectorAll('.dot');
    
    function updateActiveState(index) {
        const target = tabs[index].getAttribute('data-tab');

        // 1. Update active tab styling
        tabs.forEach((t, i) => {
            t.classList.toggle('active', i === index);
        });

        // 2. Synchronize the center image
        slides.forEach((slide, i) => {
            slide.classList.toggle('opacity-100', i === index);
            slide.classList.toggle('opacity-0', i !== index);
            slide.classList.toggle('z-10', i === index);
            slide.classList.toggle('z-0', i !== index);
        });

        // 3. Synchronize the dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-gray-800', i === index);
            dot.classList.toggle('bg-gray-300', i !== index);
            dot.classList.toggle('active', i === index);
        });

        // 4. Synchronize the right-side content
        contents.forEach(content => {
            if (content.id === `content-${target}`) {
                content.classList.remove('hidden');
                setTimeout(() => {
                    content.classList.add('opacity-100', 'translate-x-0');
                    content.classList.remove('opacity-0', 'translate-x-12');
                }, 20);
            } else {
                content.classList.add('opacity-0', 'translate-x-12');
                setTimeout(() => {
                    content.classList.add('hidden');
                }, 500);
            }
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => updateActiveState(index));
    });

    dots.forEach((dot, index) => {
        dot.style.cursor = 'pointer'; // Ensure dots look clickable
        dot.addEventListener('click', () => updateActiveState(index));
    });
});
