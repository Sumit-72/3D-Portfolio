import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import Doc from "../components/Dock";
import Contact from "../components/Contact";

const Projects = () => {
  return (
    <div className="dark:bg-black">
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          Discover a selection of my favorite projects, showcasing my work and
          creativity. Each project reflects my passion for innovation and
          problem-solving. Many are open-source and include guides to help you
          get started. Feel free to explore the codebases, suggest new ideas, or
          contribute enhancements, your input and collaboration are always
          appreciated!
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project,i) => (
            <div key={i} className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 hover:max-w-md transition-all duration-300 ease-in-out relative">
              <img
                src={project.iconUrl}
                alt="Card Image"
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>

                <ul className="text-gray-600 mt-2 transition-[line-clamp] duration-300 group-hover:line-clamp-none line-clamp-3 list-disc list-inside">
                  {project.description.map((d, i) => (
                    <li key={i} className="mb-2 text-justify">
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-blue-500 p-3 hover:text-white font-medium transition-colors duration-300 hover:bg-slate-700"
                  >
                    {project.linktext}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <p className="cta-text  dark:text-white mt-4">
          Have a project in mind? <br className="sm:block hidden" />
          Let’s connect and build something together!
        </p>
        <Contact />
        <Doc />
      </section>
    </div>
  );
};

export default Projects;
