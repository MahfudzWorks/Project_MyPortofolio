import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    activeSection === id
      ? "text-blue-600 font-semibold text-sm"
      : "text-black hover:font-semibold text-sm";

  return (
    <div className="w-160 mx-auto rounded-4xl p-3 m-2 shadow-lg sticky top-2 z-50">
      <nav className="flex justify-center bg-white text-black gap-4 rounded-3xl">
        <ul className="flex list-none space-x-8 items-center">
          <li>
            <a href="#home" className={linkClass("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={linkClass("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className={linkClass("experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#license" className={linkClass("license")}>
              License
            </a>
          </li>
          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
