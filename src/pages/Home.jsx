import { HiArrowRight } from "react-icons/hi";
import FloatingBackground from "../components/FloatingBackground";

function Home() {
  return (
    <section
      id="home"
      className="relative scroll-mt-15 flex flex-col items-center justify-center py-12 sm:py-16"
    >
      <FloatingBackground />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4 sm:px-6">
        <img
          src="assets/Profile.png"
          alt="profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
        />

        <h1 className="text-2xl sm:text-3xl font-bold text-black mt-4 sm:mt-6">
          Mahfudz Alfanani Syaviqi
        </h1>

        <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
          Sarjana Teknik Informatika Universitas Muhammadiyah Gresik tahun 2025.
          Saya memiliki keahlian dalam pengembangan dan pengelolaan website,
          mulai dari perancangan hingga implementasi sistem, serta terbiasa
          mengembangkan solusi digital yang efektif dan fungsional. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center w-full sm:w-auto">
          <a
            href="#contact"
            className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-3xl inline-block"
          >
            <div
              className="flex items-center justify-center gap-2 
             bg-black text-white 
             font-semibold px-6 h-10 sm:h-12 rounded-3xl
             text-sm sm:text-base
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400
             hover:shadow-md active:scale-[0.98]"
            >
              <span>Contact me here</span>
              <HiArrowRight className="w-5 h-5" />
            </div>
          </a>

          <a
            href="assets/CV.pdf"
            download
            className="p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] rounded-3xl inline-block"
          >
            <div
              className="flex items-center justify-center gap-2 
             bg-white text-black 
             font-semibold px-6 h-10 sm:h-12 rounded-3xl
             text-sm sm:text-base
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-purple-200 hover:via-pink-200 hover:to-yellow-100
             hover:shadow-md active:scale-[0.98]"
            >
              <span>Download CV</span>
              <span className="text-lg sm:text-xl">⬇️</span>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
          {[
            {
              href: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/",
              icon: "assets/icon/LinkedIn.svg",
              alt: "LinkedIn",
            },
            {
              href: "https://wa.me/6282140363716",
              icon: "assets/icon/WhatsApp.svg",
              alt: "WhatsApp",
            },
            {
              href: "https://github.com/MahfudzWorks",
              icon: "assets/icon/GitHub.svg",
              alt: "GitHub",
            },
            {
              href: "https://www.instagram.com/mahfudzalfa_/",
              icon: "assets/icon/Instagram.svg",
              alt: "Instagram",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)]
                 hover:shadow-lg transition duration-300"
            >
              <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="h-20 sm:h-32" />
    </section>
  );
}

export default Home;
