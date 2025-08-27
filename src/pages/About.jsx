import { motion } from "framer-motion";
import { FaCode, FaMusic, FaBook, FaRunning } from "react-icons/fa";
import img from "../assets/Picture of Ringku.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <img
                src={img}
                alt="Profile"
                className="rounded-2xl shadow-2xl w-80 lg:w-96 border-4 border-blue-500 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full shadow-md font-medium text-sm">
                MERN Developer
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-500">Ringku Sutradhar</span> 👋  
              A passionate <span className="font-semibold">Front-End Developer</span> from Bangladesh.  
              My journey began with <span className="font-medium">HTML & CSS</span>, and now I build modern, responsive, and user-friendly web applications using <span className="font-medium">React.js</span> and <span className="font-medium">TailwindCSS</span>.
            </p>

            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I love crafting beautiful designs, exploring new technologies, and turning ideas into reality.  
              Outside coding, I enjoy music, reading, and fitness which keep me balanced and motivated.
            </p>

            {/* Hobbies Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6">
              {[
                { icon: <FaCode className="text-3xl text-blue-500" />, label: "Coding" },
                { icon: <FaMusic className="text-3xl text-green-500" />, label: "Music" },
                { icon: <FaBook className="text-3xl text-purple-500" />, label: "Reading" },
                { icon: <FaRunning className="text-3xl text-red-500" />, label: "Fitness" },
              ].map((hobby, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-white dark:bg-gray-700 transition-transform duration-300"
                >
                  {hobby.icon}
                  <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">{hobby.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
