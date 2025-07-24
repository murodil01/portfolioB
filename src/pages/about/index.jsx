import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-8 mb-6 text-justify">
        Hello! I'm{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Bahrom
        </span>
        , a frontend developer who turns ideas into clean, interactive, and
        user-friendly websites. I enjoy building things that live on the web,
        whether it's websites, applications, or anything in between.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            🚀 Experience
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-7 text-justify">
            Over the past year, I have worked on diverse projects including
            portfolios, dashboards, e-commerce platforms, and UI libraries using
            React.js, Tailwind, and Ant Design. My focus is on creating
            responsive and accessible interfaces that provide a seamless user
            experience.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            🎯 Vision
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-7 text-justify">
            I'm passionate about clean code, reusable components, and continuous
            learning. My long-term goal is to become a full-stack developer and
            contribute to impactful tech products that help people solve
            real-world problems.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          💬 Personal Traits
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Curious and fast learner</li>
          <li>Detail-oriented and organized</li>
          <li>Effective team player and communicator</li>
          <li>Loves clean UI and UX thinking</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
