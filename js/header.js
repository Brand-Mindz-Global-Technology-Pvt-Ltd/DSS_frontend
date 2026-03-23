
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const headerHTML = `
        <header class="absolute top-0 left-0 w-full z-[100] px-4 md:px-12 py-8 flex items-center justify-between font-manjari">
            <!-- Header Top Shadow (White Gradient) -->
            <div class="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-white via-white/50 to-transparent -z-10 pointer-events-none"></div>

            <!-- Brand -->
            <div class="text-4xl font-extrabold tracking-tighter text-gray-900 cursor-pointer select-none">DSS</div>
            
            <!-- Navigation Links (Centered) -->
            <nav class="hidden md:flex items-center space-x-1 lg:space-x-4">
                <a href="index.html" class="px-7 py-2.5 rounded-full transition-all ${currentPage === 'index.html' ? 'bg-[#009444] text-white font-bold shadow-md' : 'text-gray-800 hover:bg-gray-100 font-semibold'}">
                    Home
                </a>
                <a href="about.html" class="px-7 py-2.5 rounded-full transition-all ${currentPage === 'about.html' ? 'bg-[#009444] text-white font-bold shadow-md' : 'text-gray-800 hover:bg-gray-100 font-semibold'}">
                    About Us
                </a>
                <a href="contact.html" class="px-7 py-2.5 rounded-full transition-all ${currentPage === 'contact.html' ? 'bg-[#009444] text-white font-bold shadow-md' : 'text-gray-800 hover:bg-gray-100 font-semibold'}">
                    Contact Us
                </a>
            </nav>

            <!-- Action Button -->
            <div class="flex items-center">
                <button class="bg-[#009444] text-white pt-4 px-10 py-2 rounded-full text-lg font-bold hover:bg-green-700 transition-all">
                    Get Started
                </button>
            </div>
        </header>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
});
