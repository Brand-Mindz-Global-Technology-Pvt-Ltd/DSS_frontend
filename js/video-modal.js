function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalContent = document.getElementById('videoModalContent');
    const videoIframe = document.getElementById('promotionalVideo');
    
    // Set the video src when opening
    videoIframe.src = "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0";
    
    // Show modal
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalContent = document.getElementById('videoModalContent');
    const videoIframe = document.getElementById('promotionalVideo');
    
    // Hide modal
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    // Clear iframe src to stop video playback
    setTimeout(() => {
        videoIframe.src = "";
    }, 300);
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Close on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modal = document.getElementById('videoModal');
        if (!modal.classList.contains('opacity-0')) {
            closeVideoModal();
        }
    }
});
