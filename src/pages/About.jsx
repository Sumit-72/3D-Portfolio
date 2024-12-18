import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills, certificates } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import "react-vertical-timeline-component/style.min.css";
import { SparklesCore } from "../components/ui/sparkles";
import Marquee from "@/components/ui/marquee";
import Doc from "../components/Dock";
import Contact from '../components/Contact'
``;
const About = () => {
  return (
    <div className="dark:bg-black">
      <section className="max-container">
        <SparklesCore
          id="tsparticlesfullpage"
          background="black"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full fixed top-0 left-0 z-0"
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
              // Same substring at the start will only be typed out once, initially
              "Tech Enthusiast",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Full Stack Web Developer",
              1000,
              "ML enthusiast",
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

        <div className="mt-10 relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <p className="text-center p-3">
            I am a passionate and versatile Tech Enthusiast committed to
            advancing in the field of computer science and beyond. With
            expertise in C++ and Python programming, I specialize in Web
            development while also exploring the dynamic worlds of Android
            development, Machine Learning and Artificial Intelligence.
            Constantly striving for excellence, I embrace challenges and
            innovate with a multidimensional approach to problem-solving and
            technology.
          </p>
          <BorderBeam size={450} duration={12} delay={9} borderWidth={2} />
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>

          <div className="mt-12 flex">
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
                        className="text-black-500/50 font-normal pl-1 text-sm"
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
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {certificates.map((c,i) => (
              <div key={i} className="card-container">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 p-2 w-45 mx-auto">
                  <div className="relative group">
                    <img
                      src={c.img}
                      alt="img"
                      className="rounded-lg w-full h-[300px] "
                    />
                    <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
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
        
        <hr className="border-slate-200" />
        
        <h3 className="subhead-text mt-10">Contacts</h3>
        <Contact />

        <Doc />
      </section>
    </div>
  );
};

export default About;
