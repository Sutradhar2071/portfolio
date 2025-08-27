import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Sonargaon University, Dhaka",
    session: "2023 - Present",
    description:
      "Currently pursuing my Bachelor's with a focus on software development, data structures, and web technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Govt. Bangabandhu College, Dhaka",
    session: "Passed in 2021",
    description:
      "Completed my HSC with a science background, laying the foundation for my tech journey.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Aftab Uddin School and College",
    session: "Passed in 2019",
    description:
      "Completed SSC with a strong academic background in science, which sparked my interest in technology.",
  },
];

const Education = () => {
  return (
    <section className="bg-base-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-14 underline underline-offset-8">
          Educational Qualification
        </h2>

        <div className="relative border-l-2 border-primary pl-6 sm:pl-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="mb-12 relative group lg:flex lg:items-start">
              {/* Icon */}
              <div className="absolute -left-[30px] sm:-left-[35px] top-2 bg-primary text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shadow-md group-hover:bg-secondary transition">
                <FaGraduationCap className="text-sm sm:text-base" />
              </div>

              {/* Content */}
              <div className="lg:ml-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-secondary group-hover:text-primary transition">
                  {edu.degree}
                </h3>
                <p className="text-base-content mt-1 font-medium">
                  {edu.institute}
                  <span className="text-sm text-gray-500 ml-2 block sm:inline">
                    ({edu.session})
                  </span>
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
