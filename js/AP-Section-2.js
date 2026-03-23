
document.addEventListener('DOMContentLoaded', () => {
    const tabs = {
        about: {
            text: `<p class="text-gray-600 text-[18px] leading-[1.8] font-normal">
                  Tenkasi DSS Delivery Service is built with a simple mission — to make local delivery faster, easier, and more reliable for everyone. We understand the everyday challenges people and businesses face when transporting goods, from groceries and parcels to shop stock movement. Our service is designed to handle all local delivery needs with speed, safety, and consistency, ensuring a smooth experience every time.
                    <br><br>
                    We offer a wide range of services including food and grocery delivery, same-day parcel delivery, scheduled transportation, doorstep pickup, wholesale-to-retail distribution, and porter support for loading and unloading. With strong local expertise in Tenkasi and nearby areas, we focus on punctuality, transparent operations, and complete customer satisfaction, delivering every package with care and reliability.
                  </p>`,
            img1: 'images/about_delivery_scene.png',
            img2: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=600'
        },
        vision: {
            text: `<p class="text-gray-600 text-[18px] leading-[1.8] font-normal">
                    Our Vision is to become Tenkasi's most trusted hyperlocal partner, empowering local merchants and providing seamless accessibility to every citizen. We strive to redefine urban logistics with sustainability and innovation at our core.
                    <br><br>
                    We envision a future where technology bridges every gap between local supply and consumer demand, fostering a thriving, connected local economy that benefits everyone in our community.
                  </p>`,
            img1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
            img2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600'
        },
        mission: {
            text: `<p class="text-gray-600 text-[18px] leading-[1.8] font-normal">
                    Our Mission is to deliver excellence through a customer-centric hyperlocal ecosystem. We are committed to supporting local entrepreneurs by providing them with the digital tools needed to reach every doorstep in Tenkasi efficiently.
                    <br><br>
                    By prioritizing transparency, speed, and reliability, we ensure that our users enjoy unparalleled convenience while our local business partners experience sustainable growth in the digital marketplace.
                  </p>`,
            img1: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=600',
            img2: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600'
        }
    };

    const tabElements = document.querySelectorAll('[data-tab]');
    const contentText = document.getElementById('tab-content-text');
    const primaryImg = document.getElementById('primary-tab-img');
    const secondaryImg = document.getElementById('secondary-tab-img');

    tabElements.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // 1. Update Active State Classes on Side Tabs
            tabElements.forEach(t => {
                if (t.getAttribute('data-tab') === target) {
                    t.classList.add('active');
                    t.querySelector('.tab-box').classList.remove('hidden');
                    t.querySelector('.tab-box').classList.add('flex');
                    t.querySelector('.tab-label').classList.add('hidden');
                } else {
                    t.classList.remove('active');
                    t.querySelector('.tab-box').classList.add('hidden');
                    t.querySelector('.tab-box').classList.remove('flex');
                    t.querySelector('.tab-label').classList.remove('hidden');
                }
            });

            // 2. Update Content Text with Fade
            if (contentText) {
                contentText.classList.add('opacity-0');
                setTimeout(() => {
                    contentText.innerHTML = tabs[target].text;
                    contentText.classList.remove('opacity-0');
                }, 300);
            }

            // 3. Update Images with Fade
            if (primaryImg && secondaryImg) {
                primaryImg.classList.add('opacity-0');
                secondaryImg.classList.add('opacity-0');

                setTimeout(() => {
                    primaryImg.src = tabs[target].img1;
                    secondaryImg.src = tabs[target].img2;
                    primaryImg.classList.remove('opacity-0');
                    secondaryImg.classList.remove('opacity-0');
                }, 300);
            }
        });
    });
});
