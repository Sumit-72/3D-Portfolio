import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills, certificates, fundamentals } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import "react-vertical-timeline-component/style.min.css";
import { SparklesCore } from "../components/ui/sparkles";
import Marquee from "@/components/ui/marquee";
import Doc from "../components/Dock";
import Contact from "../components/Contact";

const About = () => {
  const categoryOrder = ["Language", "Framework", "Library", "Cloud & DevOps", "Tool"];
  const categoryTitles = {
    "Language": "Programming Languages",
    "Framework": "Frameworks",
    "Library": "Libraries & AI Tools",
    "Cloud & DevOps": "Cloud & DevOps",
    "Tool": "Developer Tools"
  };

  const skillCategories = skills.reduce((acc, skill) => {
    const category = skill.type;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <div className="dark:bg-black">
      <section className="max-container">
        <SparklesCore
          id="tsparticlesfullpage"
          background="black"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full fixed top-0 left-0 z-0 pointer-events-none"
          particleColor="#ffffff"
        />

        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Sumit Shekhar
          </span>{" "}
          a
          <br />
          <TypeAnimation
            sequence={[
              "Tech Enthusiast",
              1000,
              "Full Stack Web Developer",
              1000,
              "ML Enthusiast",
              1000,
              "Competitive Programmer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
          👋
        </h1>

        <div className="mt-10 relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background/50 backdrop-blur-md shadow-xl transition-all hover:shadow-2xl">
          <p className="text-center p-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg z-10">
            I am a B.Tech Computer Science and Engineering student at <strong className="text-blue-600 dark:text-blue-400">Birla Institute of Technology, Mesra</strong> (CGPA 8.64) and a highly motivated software engineer. Recently, I worked as an <strong className="text-blue-600 dark:text-blue-400">SDE Intern at Axis Bank</strong>, where I optimized credit card automation pipelines, automated document OCR using Java/Spring Boot, and built custom AI agents using Copilot Studio. I specialize in full-stack development and machine learning, constantly solving complex algorithmic problems (350+ LeetCode solved) and building scalable, user-centric web applications.
          </p>
          <BorderBeam size={450} duration={12} delay={9} borderWidth={2} />
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-8 space-y-10 relative z-10">
            {categoryOrder.map((category) => {
              const categorySkills = skillCategories[category];
              if (!categorySkills || categorySkills.length === 0) return null;

              return (
                <div key={category} className="flex flex-col">
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 border-b pb-2 border-slate-200/50">
                    {categoryTitles[category]}
                  </h4>
                  <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
                    {categorySkills.map((skill) => (
                      <div className="block-container w-24 h-24" key={skill.name}>
                        <div className="btn-back rounded-xl bg-slate-200 dark:bg-slate-800" />
                        <div className="btn-front rounded-xl flex flex-col justify-center items-center p-2 text-center">
                          <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-10 h-10 object-contain mb-1"
                          />
                          <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate w-full px-1">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Core Fundamentals Section */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-md">
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Core Fundamentals & Concepts
              </h4>
              <div className="flex flex-wrap gap-3">
                {fundamentals.map((fundamental, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/40 dark:bg-white/5 border border-white/20 text-slate-800 dark:text-slate-200 shadow-sm transition-all hover:scale-105 hover:bg-white/60 hover:shadow-md cursor-default"
                  >
                    {fundamental}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-400">
            <p>
              My professional journey and internships, working with cross-functional teams to build automated enterprise workflows, AI assistants, and robotics prototypes:
            </p>
          </div>

          <div className="mt-12 flex relative z-10">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm text-justify"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <h3 className="subhead-text">Achievements & Certifications</h3>
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl relative z-10 mt-10">
          <Marquee pauseOnHover className="[--duration:20s]">
            {certificates.map((c, i) => (
              <div key={i} className="card-container">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 p-2 w-45 mx-auto">
                  <div className="relative group">
                    <img
                      src={c.img}
                      alt="img"
                      className="rounded-lg w-full h-[300px] object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-3 text-sm">
                      {c.detail}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-800 text-center">
                    {c.title}
                  </h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <hr className="border-slate-200 mt-20" />

        <div className="mt-20 relative z-10">
          <Contact />
        </div>

        <Doc />
      </section>
    </div>
  );
};

export default About;
