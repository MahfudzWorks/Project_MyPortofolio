import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

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
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    activeSection === id
      ? "text-blue-600 font-semibold text-sm"
      : "text-black hover:font-semibold text-sm";

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "license", label: "License" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="w-160 mx-auto rounded-4xl p-3 m-2 shadow-lg sticky top-2 z-50">
      {" "}
      <nav className="flex justify-center bg-white text-black gap-4 rounded-3xl">
        <ul className="hidden md:flex list-none space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-white rounded-xl p-4 shadow">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={linkClass(link.id)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
