
document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <footer class="bg-[#E4FFF1] py-12 font-manjari text-[#515151]">
            <div class="container mx-auto px-6 max-w-7xl">
                <!-- Main Footer Content -->
                <div class="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1.2fr] gap-12 lg:gap-24 mb-12 items-start">
                    
                    <!-- Column 1: About & Socials (Wide) -->
                    <div class="space-y-6">
                        <!-- Logo -->
                        <div class="flex items-center cursor-pointer select-none" onclick="window.location.href='index.html'">
                            <img src="images/Dss-logo.png" alt="DSS Logo" class="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105 duration-300 brightness-0">
                        </div>
                        <p class="text-sm sm:text-[15px] leading-relaxed font-medium">
                            Tenkasi DSS Delivery Service is built with a simple mission — to make local delivery faster, easier, and more reliable for everyone in Tenkasi and nearby areas.
                        </p>
                    </div>

                    <!-- Column 2: Quick Links -->
                    <div class="space-y-4 pt-2">
                        <h4 class="text-[18px] font-fashion font-bold text-[#009444] uppercase tracking-wider">Quick Links</h4>
                        <div class="flex flex-col space-y-3">
                            <a href="index.html" class="text-[15px] font-bold hover:text-[#009444] transition-colors">Home</a>
                            <a href="about.html" class="text-[15px] font-bold hover:text-[#009444] transition-colors">About Us</a>
                            <a href="contact.html" class="text-[15px] font-bold hover:text-[#009444] transition-colors">Contact Us</a>
                        </div>
                    </div>

                    <!-- Column 3: Contact Info -->
                    <div class="space-y-4">
                        <h4 class="text-[18px] font-fashion font-bold text-[#009444] uppercase tracking-wider">Contact Info</h4>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <div class="text-[#009444] shrink-0 mt-1">
                                    <img src="./assets/icons/address.svg" class="w-5 h-5" alt="Location Icon" loading="lazy" />
                                </div>
                                <p class="text-[13px] font-bold leading-tight">
                                    No.6/118h Tenkasi Main Road,<br>
                                    Kadayam
                                </p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="text-[#009444] shrink-0">
                                    <img src="./assets/icons/Phone.svg" class="w-5 h-5" alt="Phone Icon" loading="lazy" />
                                </div>
                                <p class="text-[14px] font-bold">
                                    <a href="tel:8098113142" class="hover:text-[#009444] transition-colors">+91 80981 13142</a>
                                </p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="text-[#009444] shrink-0">
                                    <img src="./assets/icons/mail.svg" class="w-5 h-5" alt="Mail Icon" loading="lazy" />
                                </div>
                                <p class="text-[14px] font-bold">
                                    <a href="mailto:dssdeliverypartner@gmail.com" class="hover:text-[#009444] transition-colors">dssdeliverypartner@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="pt-6 border-t border-gray-400 flex justify-center items-center text-[#515151]">
                    <p class="text-[14px] font-bold text-center">Copyright © 2026 <span class="text-[#009444]">Dss</span>, All rights reserved. Made with ❤ by <a href="http://brandmindz.com/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition-colors">Brand Mindz</a>.</p>
                </div>
            </div>
        </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
