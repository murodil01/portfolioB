import { Card, Button } from "antd";
import { motion } from "framer-motion";

const data = [
  {
    title: "Project One",
    desc: "React + API + Tailwind",
    link: "#",
    image:
      "https://i.pinimg.com/originals/cb/83/7f/cb837f093691cab1d711f1b851066d1c.jpg",
  },
  {
    title: "Project Two",
    desc: "Vite + Ant Design",
    link: "#",
    image:
      "https://avatars.mds.yandex.net/i?id=ceb871f17bf9e71bd185617b2d4197635b31ed6405018f90-13093511-images-thumbs&n=13",
  },
  {
    title: "Project Three",
    desc: "Portfolio Website",
    link: "#",
    image:
      "https://avatars.mds.yandex.net/i?id=f335380926a220c39e1298b00817651b8a9153cc-9148232-images-thumbs&n=13",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {proj.desc}
              </p>
              <a href={proj.link} target="_blank" rel="noreferrer">
                <Button
                  type="primary"
                  className="bg-blue-600 hover:bg-blue-700 transition duration-200 px-5"
                >
                  View Project
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
