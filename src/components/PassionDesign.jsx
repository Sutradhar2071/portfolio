import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaPenNib, FaMobileAlt, FaBezierCurve, FaBullhorn } from "react-icons/fa";

const passions = [
  { id: 1, title: "Creative Design", icon: <FaPaintBrush />, color: "bg-pink-100" },
  { id: 2, title: "Web Development", icon: <FaCode />, color: "bg-blue-100" },
  { id: 3, title: "Graphic Design", icon: <FaPenNib />, color: "bg-green-100" },
  { id: 4, title: "UI/UX Design", icon: <FaBezierCurve />, color: "bg-purple-100" },
  { id: 5, title: "App Development", icon: <FaMobileAlt />, color: "bg-orange-100" },
  { id: 6, title: "Digital Marketing", icon: <FaBullhorn />, color: "bg-yellow-100" },
];

const PassionDesign = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">My Passions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {passions.map((item) => (
            <motion.div
              key={item.id}
              className={`p-6 rounded-2xl shadow-md ${item.color} flex flex-col items-center justify-center hover:shadow-xl transition`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-gray-700 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionDesign;
