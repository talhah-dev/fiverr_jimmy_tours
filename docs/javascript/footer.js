const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="footer md:pt-20 pt-10 p-5">

        <div class="md:max-w-[80%] w-full mx-auto">

            <div class="flex md:flex-row flex-col sm:items-center md:gap-24 gap-7 justify-between">
                <div class="" data-aos="fade-up">
                    <a data-aos="fade-up" href="/index.html" class="flex items-center text-zinc-100 font-semibold italic text-2xl justify-center lg:justify-start">
                    <!-- <img src="/docs/assets/images/logo.png" class="lg:h-24 h-20" alt="logo"> -->
                    Jimmy Tours
                </a>
                    <p class="text-[#F3F3F5] md:w-[347px] mt-4">Join us and explore
                the world with passion, comfort, and the best itineraries tailored just for you.
                    </p>
                </div>

                <ul data-aos="fade-up" data-aos-delay="100" class="flex sm:items-center text-[#EAECF0] md:gap-10 gap-5 sm:flex-row flex-wrap flex-col">
                    <li><a href="/index.html" class="transition-all duration-500 hover:opacity-60">Home</a></li>
                    <li><a href="/tours.html" class="transition-all duration-500 hover:opacity-60">Our Tours</a></li>
                    <li><a href="/contact.html" class="transition-all duration-500 hover:opacity-60">Contact Us</a></li>
                    <li><a href="/book.html" class="transition-all duration-500 hover:opacity-60">Book Now</a></li>
                </ul>
            </div>
            <div class="w-full h-[1px] my-10 bg-[#C6C8D0]"></div>
            <div class="flex items-center justify-between gap-5 md:flex-row flex-col">
                <p class="text-[#F3F3F5]">© 2025 JIMMY'S TOURS. All rights reserved.</p>
                <div class="flex items-center gap-6">
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-instagram"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-facebook"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-linkedin"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

    </footer>
`