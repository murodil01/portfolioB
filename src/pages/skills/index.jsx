import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiAntdesign, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center bg-white dark:bg-[#1e293b] p-4 rounded-lg shadow-md transition-all"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-md font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
