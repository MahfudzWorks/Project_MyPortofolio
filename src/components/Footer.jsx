import React from "react";

const Footer = () => {
  const sosialMedia = [
    {
      name: "Linkkedin",
      icons: <img src="icon/Linkedin.svg" alt="Linkedin" className="w-6 h-6" />,
    },
    {
      name: "instagram",
      icons: (
        <img src="icon/Instagram.svg" alt="Instagram" className="w-6 h-6" />
      ),
    },
    {
      name: "GitHub",
      icons: <img src="icon/GitHub.svg" alt="GitHub" className="w-6 h-6" />,
    },
    {
      name: "WhatsApp",
      icons: <img src="icon/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">MyPortofolio</h1>
          <p className="mt-3 text-sm leading-relaxed">
            Menciptakan ide kreatif dengan sentuhan modern dan penuh warna.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigasi</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Tentang
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Proyek
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Ikuti Saya</h2>
          <div className="flex gap-4">
            {sosialMedia.map((sosial, index) => (
              <a
                key={index}
                href={sosial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition"
              >
                {sosial.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 pt-6 text-center text-sm bg-black/20 rounded-lg mx-6">
        © {new Date().getFullYear()} MyPortofolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
