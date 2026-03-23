document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('testimonialContainer');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if(container && prevBtn && nextBtn) {
        // Amount to scroll when arrows are clicked (roughly the width of one card)
        const scrollAmount = 340;

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});
