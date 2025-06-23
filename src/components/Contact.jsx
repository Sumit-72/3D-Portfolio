import React, { useRef, useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setMessage("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="mt-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 bg-gray-100 dark:bg-[#1f2833] text-black dark:text-white p-8 md:p-12 rounded-2xl shadow-2xl"
    >
      {/* LEFT SIDE */}
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl font-bold mb-4">
          Contact <span className="text-cyan-500">Me</span>
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Interested in working together or have a question? I'd love to hear
          from you!
        </p>
        <motion.a
          href="mailto:shekharsumit65@gmail.com"
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4 flex items-center space-x-3 cursor-pointer text-black dark:text-white"
        >
          <FaEnvelope className="text-cyan-500" />
          <span className="hover:text-cyan-500 transition">
            shekharsumit65@gmail.com
          </span>
        </motion.a>

        <motion.a
          href="tel:+919142845094"
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-6 flex items-center space-x-3 cursor-pointer text-black dark:text-white"
        >
          <FaPhone className="text-cyan-500" />
          <span className="hover:text-cyan-500 transition">+91 9142845094</span>
        </motion.a>
        <div className="flex space-x-4 text-3xl text-cyan-500">
          {/* <motion.a
            href="https://twitter.com/"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </motion.a>

          <motion.a
            href="https://instagram.com/"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </motion.a> */}

          <motion.a
            href="https://www.linkedin.com/in/sumit-shekhar72/"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/Sumit-72"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4"
        variants={fadeInUp}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Enter Your Name"
          required
          className="p-3 rounded-md bg-white dark:bg-[#c5c6c7] text-black focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter Your Email"
          required
          className="p-3 rounded-md bg-white dark:bg-[#c5c6c7] text-black focus:outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Your Subject"
          required
          className="p-3 rounded-md bg-white dark:bg-[#c5c6c7] text-black focus:outline-none"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Enter Your Message"
          required
          className="p-3 rounded-md bg-white dark:bg-[#c5c6c7] text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white font-semibold py-3 rounded-md hover:bg-cyan-400 transition duration-300 shadow-md hover:shadow-cyan-500/50"
        >
          Submit
        </button>
        {message && (
          <p className="text-sm text-green-500 dark:text-green-400 mt-2">
            {message}
          </p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
