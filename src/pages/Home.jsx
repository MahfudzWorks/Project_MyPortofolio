import { HiArrowRight } from "react-icons/hi";
import FloatingBackground from "../components/FloatingBackground";

function Home() {
  return (
    <section
      id="home"
      className="relative scroll-mt-15 flex flex-col items-center justify-center py-16"
    >
      <FloatingBackground />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <img
          src="/src/assets/Profile.png"
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
        />

        <h1 className="text-3xl font-bold text-black mt-6">
          Mahfudz Alfanani Syaviqi
        </h1>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quod assumenda voluptas ad optio aut blanditiis sapiente veritatis,
          quibusdam sequi eveniet dignissimos suscipit omnis molestiae maxime
          tempore doloremque numquam obcaecati. ✨
        </p>

        <div className="flex gap-4 mt-6 justify-center">
          <a
            href="#contact"
            className="bg-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-yellow-500 text-white text-l px-6 py-3 rounded-3xl flex items-center gap-2 font-semibold transition duration-300 shadow-md"
          >
            Contact me here <HiArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/src/assets/CV.pdf"
            download
            className="bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-200 text-black text-l py-3 px-6 rounded-3xl flex items-center gap-2 font-semibold transition duration-300 shadow-md"
          >
            Download CV <span>⬇️</span>
          </a>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {[
            {
              href: "https://www.linkedin.com/in/mahfudz-alfanani-syaviqi-572258321/",
              icon: "/src/assets/icon/LinkedIn.svg",
              alt: "LinkedIn",
            },
            {
              href: "https://wa.me/6282140363716",
              icon: "/src/assets/icon/WhatsApp.svg",
              alt: "WhatsApp",
            },
            {
              href: "https://github.com/MahfudzWorks",
              icon: "/src/assets/icon/GitHub.svg",
              alt: "GitHub",
            },
            {
              href: "https://www.instagram.com/mahfudzalfa_/",
              icon: "/src/assets/icon/Instagram.svg",
              alt: "Instagram",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow hover:shadow-lg transition duration-300"
            >
              <img src={social.icon} alt={social.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>

      <div className="h-32" />
    </section>
  );
}

export default Home;
