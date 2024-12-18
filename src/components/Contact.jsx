import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";

const Contact = () => {
  return (
    <div className="m-3">
        <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] lg:min-h-[200px] p-2"
        className=""
      >
      <div className=" w-auto flex-wrap h-auto mx-auto my-4 p-6 border bg-gray-200 dark:bg-black border-gray-300 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2 hover:translate-y-2">
        <p className="mb-2 p-1">
          <strong>Email:</strong>{" "}
          <a href="mailto:shekharsumit65@gmail.com">shekharsumit65@gmail.com</a>
        </p>
        <p className="mb-2 p-1">
          <strong>Phone:</strong> <a href="tel:+919142845094">+91 9142845094</a>
        </p>
        <p className="mb-2 p-1">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/sumit-shekhar72/"
            className="hover:bg-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/sumit-shekhar72/
          </a>
        </p>
        <p className="mb-2 p-1">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Sumit-72"
            className="hover:bg-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Sumit-72
          </a>
        </p>
      </div>
      </WobbleCard>
    </div>
  );
};

export default Contact;
