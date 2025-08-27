import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_bmm93at",
        "template_h9dxise",
        e.target,
        "cMCQWfLkEsCn_fgpQ"
      )
      .then(() => {
        Swal.fire({
          title: "✅ Message Sent!",
          text: "Thanks for contacting me.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        e.target.reset();
      })
      .catch(() => {
        Swal.fire({
          title: "❌ Failed!",
          text: "Please try again later.",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sutradharringku@gmail.com",
      link: "mailto:sutradharringku@gmail.com",
      color: "bg-blue-600 text-white",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+880 1911-041674",
      link: "tel:+8801911041674",
      color: "bg-teal-600 text-white",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      link: "https://wa.me/8801911041674",
      color: "bg-green-600 text-white",
      badge: "Quick Contact",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mugda, Dhaka, Bangladesh",
      link: null,
      color: "bg-red-600 text-white",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-5 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 backdrop-blur-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl ${item.color}`}
                  aria-label={item.title}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:underline break-words"
                      aria-label={`${item.title}: ${item.value}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">{item.value}</span>
                  )}
                  {item.badge && (
                    <span className="ml-2 text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            className="card bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-8 space-y-5 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {["Name", "Email", "Country"].map((label, i) => (
              <motion.div
                key={i}
                className="form-control relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * i }}
              >
                <label className="label font-semibold text-gray-800 dark:text-gray-200">
                  {label}
                </label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  name={label.toLowerCase()}
                  placeholder={`Your ${label}`}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                  required
                  aria-label={label}
                />
              </motion.div>
            ))}

            <motion.div
              className="form-control"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <label className="label font-semibold text-gray-800 dark:text-gray-200">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                rows="5"
                required
                aria-label="Message"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="btn bg-blue-600 dark:bg-blue-500 text-white w-full hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg transition-all duration-300 hover:scale-105 flex justify-center items-center gap-2 disabled:opacity-50"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "📩 Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
