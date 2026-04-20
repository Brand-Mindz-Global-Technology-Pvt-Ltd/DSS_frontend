/**
 * Coming Soon Modal Utility
 * Handles the display of a premium "Coming Soon" popup.
 */

(function() {
    // 1. Inject Styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modal-fade-in {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
            animation: modal-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
    `;
    document.head.appendChild(style);

    // 2. Inject Modal HTML
    const modalHTML = `
        <div id="comingSoonModal" class="fixed inset-0 z-[1000] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeComingSoonModal()"></div>
            
            <!-- Modal Content -->
            <div id="comingSoonContent" class="relative bg-white rounded-[2rem] p-8 md:p-12 max-w-md w-11/12 shadow-2xl text-center transform transition-all duration-300 translate-y-4">
                <!-- Close Button -->
                <button onclick="closeComingSoonModal()" class="absolute top-6 right-6 text-gray-400 hover:text-brand-green transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <!-- Icon/Illustration -->
                <div class="w-20 h-20 bg-brand-lightGreen rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src="assets/icons/delivery.svg" alt="Coming Soon" class="w-10 h-10 filter brightness-0 text-brand-green" style="filter: invert(34%) sepia(91%) saturate(1514%) hue-rotate(124deg) brightness(93%) contrast(101%);">
                </div>

                <!-- Text -->
                <h2 class="font-fashion text-3xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
                <p class="font-manjari text-gray-600 text-lg leading-relaxed mb-8">
                    We're working hard to bring this feature to you. Stay tuned for an even better delivery experience in Tenkasi!
                </p>

                <!-- Button -->
                <button onclick="closeComingSoonModal()" class="w-full bg-brand-green text-white py-4 rounded-xl font-bold font-manjari hover:bg-green-700 transition-all hover:shadow-lg active:scale-95">
                    Got it, thanks!
                </button>
            </div>
        </div>
    `;

    // Inject to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    // 3. Functions
    window.showComingSoonModal = function() {
        const modal = document.getElementById('comingSoonModal');
        const content = document.getElementById('comingSoonContent');
        
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('translate-y-4');
        content.classList.add('animate-modal-in');
        
        document.body.style.overflow = 'hidden';
    };

    window.closeComingSoonModal = function() {
        const modal = document.getElementById('comingSoonModal');
        const content = document.getElementById('comingSoonContent');
        
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.add('translate-y-4');
        content.classList.remove('animate-modal-in');
        
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    };

    // 4. Global Click Listener for Triggers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.coming-soon-trigger')) {
            e.preventDefault();
            showComingSoonModal();
        }
    });

    // 5. Escape Key listener
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeComingSoonModal();
        }
    });
})();
