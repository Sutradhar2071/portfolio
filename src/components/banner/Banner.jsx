import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import img from "../../assets/Picture of Ringku.jpg";
import resume from "../../assets/Resume of Ringku Sutradhar .pdf";

const Banner = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6 lg:px-16">
      
      {/* Card Container */}
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* Left Side - Text */}
        <motion.div className="max-w-xl space-y-5">
          
          {/* Name */}
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold leading-tight text-black dark:text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I’m Ringku Sutradhar
          </motion.h1>

          {/* Designation Button with Infinite Animation */}
          <motion.div
            className="inline-block px-6 py-2  text-primary rounded-full font-semibold cursor-pointer shadow-lg select-none"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            🚀 MERN Stack Developer | Frontend Specialist
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build modern, responsive, and user-friendly web applications with{" "}
            <span className="font-medium text-primary">React, TailwindCSS</span>{" "}
            and the MERN stack. My passion lies in creating seamless digital
            experiences with clean code and intuitive design.
          </motion.p>

          {/* Social Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap items-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://github.com/Sutradhar2071"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2 hover:bg-black hover:text-white transition"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ringku-sutradhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2 text-[#0A66C2] border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            href={resume}
            download
            className="btn btn-success gap-2 group hover:scale-105 transition duration-300 shadow-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Gradient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 animate-pulse"></div>

          <div className="relative group">
            <img
              src={img}
              className="w-72 lg:w-96 rounded-full shadow-2xl border-4 border-primary transform transition duration-500 group-hover:scale-105"
              alt="Ringku"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full shadow-md text-sm font-medium">
              MERN Developer
            </div>
          </div>

          {/* React Logo Infinite Spin */}
          <motion.div
            className="absolute -top-6 -right-6 text-5xl text-cyan-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <FaReact />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
