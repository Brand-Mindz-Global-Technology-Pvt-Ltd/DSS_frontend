
document.addEventListener('DOMContentLoaded', () => {
    const tabs = {
        about: {
            text: `<p class="text-gray-600 text-[18px] leading-[1.8] font-normal">
                  Tenkasi DSS Delivery Service is built with a simple mission — to make local delivery faster, easier, and more reliable for everyone. We understand the everyday challenges people and businesses face when transporting goods, from groceries and parcels to shop stock movement. Our service is designed to handle all local delivery needs with speed, safety, and consistency, ensuring a smooth experience every time.
                    <br><br>
                    We offer a wide range of services including food and grocery delivery, same-day parcel delivery, scheduled transportation, doorstep pickup, wholesale-to-retail distribution, and porter support for loading and unloading. With strong local expertise in Tenkasi and nearby areas, we focus on punctuality, transparent operations, and complete customer satisfaction, delivering every package with care and reliability.
                  </p>`,
            img1: 'images/Deilvery-dss-2.webp',
            img2: 'images/dss-delivery.webp'
        },
        vision: {
            text: `<p class="text-gray-600 text-[18px] leading-[1.8] font-normal">
                    To revolutionize the local delivery landscape by becoming the most trusted one-stop platform, empowering the Tenkasi community through seamless connectivity and a relentless commitment to service excellence.
                    <br><br>
                    We strive to set new benchmarks for hyperlocal logistics, making every delivery a standard for speed, safety, and unwavering trust in our local economy.
                  </p>`,
            img1: 'images/Deilvery-dss-2.webp',
            img2: 'images/dss-delivery.webp'
        },
        mission: {
            text: `<p class="text-gray-600 text-[18px] leading-[1.8] font-normal">
                    DSS Delivery Service is dedicated to simplifying daily life and boosting local businesses by providing a comprehensive, safe, and lightning-fast delivery ecosystem for groceries, food, parcels, and transport.
                    <br><br>
                    We are committed to absolute safety and reliability in every mile, ensuring precision and care in everything we do for our Tenkasi community.
                  </p>`,
            img1: 'images/Deilvery-dss-2.webp',
            img2: 'images/dss-delivery.webp'
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
