import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1e293b] py-12 px-4">
      <div className="max-w-[1255px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-16">

        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            BAHROM
          </Link>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Passionate Frontend Developer crafting modern and responsive web experiences.
          </p>

          <div className="flex gap-4 text-xl pt-2">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white p-2 rounded-full transition shadow-md">
              <FaTelegramPlane />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:text-white p-2 rounded-full transition shadow-md">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white p-2 rounded-full transition shadow-md">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:bg-blue-700 hover:text-white p-2 rounded-full transition shadow-md">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-blue-500 transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-blue-500 transition">Skills</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Contact Info</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-blue-500" /> +998 90 123 45 67
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-red-500" /> bahrom.dev@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-green-500" />
              <a
                href="https://www.google.com/maps/place/Tashkent,+Uzbekistan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                Tashkent, Uzbekistan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <p className="text-xs mt-1">Made with 💙 by <span className="font-semibold">Bahrom</span></p>
      </div>
    </footer>
  );
};

export default Footer;
