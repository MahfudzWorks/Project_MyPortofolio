// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";

import { SiMysql, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-5xl" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center px-6 py-12 relative scroll-mt-10"
    >
      <h1 className="text-3xl font-bold text-black mb-6">
        <span className="inline-block animate-bounce">🚀</span> Skills{" "}
        <span className="inline-block">💫</span>
      </h1>

      <p className="text-center max-w-2xl text-gray-600 mb-12">
        Berikut adalah beberapa skill utama yang saya kuasai dalam pengembangan
        web, mulai dari frontend, backend, hingga framework modern.
      </p>

      {/* Grid Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-48 h-48 p-[2px] rounded-2xl bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]"
          >
            <div className="flex flex-col items-center justify-center w-full h-full bg-white backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-32" />
    </div>
  );
}

export default Skills;
