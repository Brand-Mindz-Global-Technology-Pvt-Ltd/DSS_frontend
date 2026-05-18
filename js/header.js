
document.addEventListener('DOMContentLoaded', () => {
    const currentPagePath = window.location.pathname;
    const currentPage = currentPagePath.split('/').pop() || 'index.html';

    const headerHTML = `
        <header class="absolute top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 md:py-8 flex items-center justify-between font-manjari">
            <!-- Header Top Shadow (White Gradient) -->
            <div class="absolute top-0 left-0 w-full h-[120px] md:h-[250px] bg-gradient-to-b from-white/90 via-white/50 to-transparent -z-10 pointer-events-none"></div>

            <!-- Brand -->
            <div class="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900 cursor-pointer select-none z-[110]" onclick="window.location.href='index.html'">
                DSS
            </div>
            
            <!-- Desktop Navigation Links (Centered) -->
            <nav class="hidden md:flex items-center space-x-2 lg:space-x-4">
                <a href="index.html" class="px-7 py-2.5 rounded-full transition-all duration-300 ${currentPage === 'index.html' ? 'bg-[#009444] text-white font-bold shadow-md' : 'text-gray-800 hover:bg-gray-100 font-semibold'}">
                    Home
                </a>
                <a href="about.html" class="px-7 py-2.5 rounded-full transition-all duration-300 ${currentPage === 'about.html' ? 'bg-[#009444] text-white font-bold shadow-md' : 'text-gray-800 hover:bg-gray-100 font-semibold'}">
                    About Us
                </a>
                <a href="contact.html" class="px-7 py-2.5 rounded-full transition-all duration-300 ${currentPage === 'contact.html' ? 'bg-[#009444] text-white font-bold shadow-md' : 'text-gray-800 hover:bg-gray-100 font-semibold'}">
                    Contact Us
                </a>
            </nav>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3 md:gap-4">
                <button class="coming-soon-trigger hidden md:block bg-[#009444] text-white px-5 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-lg font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95">
                    Get Started
                </button>
                
                <!-- Hamburger Menu Button -->
                <button id="mobile-menu-toggle" class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[110]" aria-label="Toggle Menu">
                    <span class="block w-6 h-0.5 bg-gray-900 transition-all duration-300" id="line1"></span>
                    <span class="block w-6 h-0.5 bg-gray-900 transition-all duration-300" id="line2"></span>
                    <span class="block w-4 h-0.5 bg-gray-900 transition-all duration-300 ml-auto" id="line3"></span>
                </button>
            </div>

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu" class="fixed inset-0 bg-white z-[105] translate-x-full transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8">
                
                <nav class="flex flex-col items-center space-y-6">
                    <a href="index.html" class="text-2xl font-bold ${currentPage === 'index.html' ? 'text-[#009444]' : 'text-gray-800'} transition-colors">Home</a>
                    <a href="about.html" class="text-2xl font-bold ${currentPage === 'about.html' ? 'text-[#009444]' : 'text-gray-800'} transition-colors">About Us</a>
                    <a href="contact.html" class="text-2xl font-bold ${currentPage === 'contact.html' ? 'text-[#009444]' : 'text-gray-800'} transition-colors">Contact Us</a>
                </nav>
                
                <button class="coming-soon-trigger bg-[#009444] text-white px-10 py-3 rounded-full text-xl font-bold shadow-xl active:scale-95">
                    Get Started
                </button>

                <!-- Decorative elements for mobile menu -->
                <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-6 grayscale opacity-40">
                   <!-- Add social icons or small logo if needed -->
                </div>
            </div>
        </header>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;

        // Fade in the header shadow after a short delay
        const topShadow = headerPlaceholder.querySelector('.bg-gradient-to-b');
        if (topShadow) {
            topShadow.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
            setTimeout(() => {
                topShadow.classList.replace('opacity-0', 'opacity-100');
            }, 100);
        }

        // Initialize Menu Logic
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                line1.style.transform = 'translateY(7px) rotate(45deg)';
                line2.style.opacity = '0';
                line3.style.width = '24px';
                line3.style.transform = 'translateY(-7px) rotate(-45deg)';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                line1.style.transform = 'none';
                line2.style.opacity = '1';
                line3.style.width = '16px';
                line3.style.transform = 'none';
                document.body.style.overflow = '';
            }
        });

        // Close menu on link or button click
        const mobileInteractiveElements = mobileMenu.querySelectorAll('a, button');
        mobileInteractiveElements.forEach(element => {
            element.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('translate-x-full');
                line1.style.transform = 'none';
                line2.style.opacity = '1';
                line3.style.width = '16px';
                line3.style.transform = 'none';
                document.body.style.overflow = '';
            });
        });
    }
});
