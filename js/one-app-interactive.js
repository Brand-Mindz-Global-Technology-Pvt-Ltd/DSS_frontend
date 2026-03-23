document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-item');
    const contents = document.querySelectorAll('.tab-content');
    const slides = document.querySelectorAll('.app-slide');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            // 1. Update active tab styling
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 2. Synchronize the center image
            slides.forEach((slide, i) => {
                slide.classList.toggle('opacity-100', i === index);
                slide.classList.toggle('opacity-0', i !== index);
                slide.classList.toggle('z-10', i === index);
                slide.classList.toggle('z-0', i !== index);
            });

            // 3. Synchronize the right-side content
            contents.forEach(content => {
                if (content.id === `content-${target}`) {
                    content.classList.remove('hidden');
                    // Small delay to allow 'hidden' to be removed before transition starts
                    setTimeout(() => {
                        content.classList.remove('translate-x-12', 'opacity-0');
                        content.classList.add('translate-x-0', 'opacity-100');
                    }, 20);
                } else {
                    content.classList.add('translate-x-12', 'opacity-0');
                    setTimeout(() => {
                        content.classList.add('hidden');
                    }, 500);
                }
            });
        });
    });
});
