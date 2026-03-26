
document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <footer class="bg-[#E4FFF1] py-12 font-manjari text-[#515151]">
            <div class="container mx-auto px-6 max-w-7xl">
                <!-- Main Footer Content -->
                <div class="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1.2fr] gap-12 lg:gap-24 mb-12 items-start">
                    
                    <!-- Column 1: About & Socials (Wide) -->
                    <div class="space-y-6">
                        <p class="text-sm sm:text-[15px] leading-relaxed font-medium">
                            Tenkasi DSS Delivery Service is built with a simple mission — to make local delivery faster, easier, and more reliable for everyone. We understand the everyday challenges people and businesses face when it comes to transporting goods, whether it’s groceries for a home, parcels for a customer, or stock movement for a shop. 
                        </p>
                        <!-- Social Icons (Square/Green filled style) -->
                        <div class="flex items-center space-x-4">
                            <a href="#" class="text-[#006D32] transition-opacity hover:opacity-80">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/></svg>
                            </a>
                            <a href="#" class="text-[#006D32] transition-opacity hover:opacity-80">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="#" class="text-[#006D32] transition-opacity hover:opacity-80">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <a href="#" class="text-[#006D32] transition-opacity hover:opacity-80">
                                <img src="assets/icons/instagram.svg" alt="Instagram" class="w-8 h-8" loading="lazy" />
                            </a>
                        </div>
                    </div>

                    <!-- Column 2: Quick Links -->
                    <div class="flex flex-col space-y-3 pt-2">
                        <a href="index.html" class="text-[17px] font-bold hover:text-[#009444] transition-colors">Home</a>
                        <a href="about.html" class="text-[17px] font-bold hover:text-[#009444] transition-colors">About Us</a>
                        <a href="contact.html" class="text-[17px] font-bold hover:text-[#009444] transition-colors">Contact Us</a>
                    </div>

                    <!-- Column 3: Contact Info -->
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="text-[#009444] shrink-0 mt-1">
                                <img src="assets/icons/address.svg" class="w-5 h-5" alt="Location Icon" loading="lazy" />
                            </div>
                            <p class="text-[13px] font-bold leading-tight">
                                4074 Ebert Summit Suite 375<br>
                                Tenkasi
                            </p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="text-[#009444] shrink-0">
                                <img src="assets/icons/phone.svg" class="w-5 h-5" alt="Phone Icon" loading="lazy" />
                            </div>
                            <p class="text-[14px] font-bold">+91 87569 78235</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="text-[#009444] shrink-0">
                                <img src="assets/icons/mail.svg" class="w-5 h-5" alt="Mail Icon" loading="lazy" />
                            </div>
                            <p class="text-[14px] font-bold uppercase">DSS@gmail.com</p>
                        </div>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="pt-6 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[#515151]">
                    <p class="text-[14px] font-bold">© 2026 <span class="text-[#009444]">DSS</span> All Rights Reserved.</p>
                    <div class="flex flex-wrap justify-center gap-6 text-[13px] font-bold">
                        <a href="#" class="hover:text-[#009444] transition-colors">Terms & Conditions</a>
                        <a href="#" class="hover:text-[#009444] transition-colors">Privacy Policy</a>
                        <a href="#" class="hover:text-[#009444] transition-colors">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
