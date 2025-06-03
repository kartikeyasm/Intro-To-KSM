import { Typewriter } from "react-simple-typewriter";
import Navigation from "./components/navigation";
import KSM from "./assets/ksm.jpg";
import Portfolio from "./assets/PortfolioWebpage.png"
import Gmail from "./assets/Gmail.png";
import YT from "./assets/YT.png";
import CavityCatcher from "./assets/CavityCatcher.png";
import Cartify from "./assets/Cartify.png";
import ExpenseTracker from "./assets/ExpenseTracker.png";
import WeatherApp from "./assets/WeatherApp.png";
import BMI from "./assets/BMI.png";


const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

const languages = [
  {
    name: "C/C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML/CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "R",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
];

const tools = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "NodeJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "ExpressJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Git/GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const projects = [
  {
    name: "Portfolio Webpage",
    description:"A personal portfolio to showcase my projects, skills, and resume.",
    link: "#",
    image: Portfolio,
  },
  {
    name: "Cavity Catcher",
    description:
      "A full-stack application that examines the dental X-ray of user and detects cavities using Roboflow and Google Gemini.",
    link: "https://cavity-catcher.vercel.app/",
    image: CavityCatcher,
  },
  {
    name: "G-Mail Clone",
    description:
      "A clone of Gmail with basic email functionalities using MERN technologies.",
    link: "https://github.com/kartikeyasm/Gmail-Clone",
    image: Gmail,
  },
  {
    name: "YT Backend",
    description:
      "A backend that handles YouTube functionalites using Node.js and Express.",
    link: "https://github.com/kartikeyasm/YT-Clone",
    image: YT,
  },
];
const miniProjects = [
  {
    name: "Cartify",
    description:
      "A frontend application that handles cart feature of a e-commerce platform.",
    link: "https://cartify-shopping-cart.vercel.app/",
    image: Cartify,
  },
  {
    name: "Expense Tracker",
    description: "A simple React app to track daily expenses.",
    link: "https://expense-tracker-steel-three-12.vercel.app/",
    image: ExpenseTracker,
  },
  {
    name: "Weather App",
    description:
      "A simple weather application that fetches weather data from an API and displays it.",
    link: "https://weather-eight-amber.vercel.app/",
    image: WeatherApp,
  },
  {
    name: "BMI Calculator",
    description:
      "A simple web app to calculate Body Mass Index (BMI) based on user input.",
    link: "https://bmi-calc-teal.vercel.app/",
    image: BMI,
  },
];

const contacts = [
  {
    name: "Email",
    url: "mailto:kartikeyasm16@email.com",
    logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/email.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kartikeya-shankar-mishra-903350141/",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/kartikeyasm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-100 font-mono">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur z-10 border-b border-neutral-800 h-16 px-6">
        <nav className="flex items-center h-16 w-full">
          {/* Logo on the left */}
          <a href="#">
            <span className="text-lg font-bold tracking-tight text-blue-400">
              KSM
            </span>
          </a>
          {/* Nav links on the right */}
          <ul className="flex gap-6 ml-auto">
            {sections.map((section) => (
              <li key={section.id}>
                {section.id === "resume" ? (
                  <a
                    href="https://docs.google.com/document/d/1epc_l-zD4iWI0XO1UKNnhajUA2RRjv4q/edit?usp=drive_link&ouid=114719648823290388716&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    {section.label}
                  </a>
                ) : (
                  <a
                    href={`#${section.id}`}
                    className="hover:text-blue-400 transition"
                  >
                    {section.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Dot Navigation */}
      <Navigation sections={sections} />

      {/* Sections Wrapper */}
      <div>
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center px-0 pt-16"
        >
          <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
            {/* About Text */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold text-blue-400 mb-6">About</h2>
                <p className="text-neutral-300 text-xl md:text-2xl font-medium leading-relaxed text-justify">
                  <span className="text-2xl md:text-3xl font-medium ">
                    Hi, I'm{" "}
                    <span className="text-blue-300 text-3xl md:text-4xl font-bold">
                      <Typewriter
                        words={[
                          "Kartikeya Shankar Mishra",
                          "a Developer",
                          "a CS Student",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                      />
                    </span>
                  </span>
                  <br />— a Computer Science Engineering student at Netaji
                  Subhas University of Technology, passionate about building
                  clean, efficient, and impactful web applications. I enjoy
                  exploring new technologies and solving problems with code.
                </p>
              </div>
            </div>
            {/* Profile Photo */}
            <div className="w-full md:w-1/2 h-80 md:h-full flex items-center justify-center">
              <img
                src={KSM}
                alt="Profile"
                className="object-cover rounded-full shadow-lg"
                style={{
                  width: "480px",
                  height: "480px",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              />
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center px-6 pt-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
            Skills
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 text-justify max-w-2xl mx-auto mb-10">
            I excel in dissecting complex problems into manageable tasks,
            essential for crafting robust, maintainable code in large-scale
            projects. I'm driven by challenges, always seeking opportunities to
            enhance my skills. My self-directed learning approach empowers me to
            quickly grasp and adapt to new technologies autonomously.
          </p>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto w-full">
            {/* Languages Column */}
            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-5 text-center">
                Languages
              </h3>
              <div className="flex flex-col gap-4">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-4 bg-neutral-800 rounded-xl px-4 py-3 shadow transition
            hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:border-blue-400 border border-transparent group"
                  >
                    <img
                      src={lang.logo}
                      alt={lang.name}
                      className="w-8 h-8 object-contain transition group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="text-blue-300 font-semibold text-lg transition group-hover:text-blue-400">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Libraries Column */}
            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-5 text-center">
                Tools &amp; Libraries
              </h3>
              <div className="flex flex-col gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-4 bg-neutral-800 rounded-xl px-4 py-3 shadow transition
            hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:border-blue-400 border border-transparent group"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-8 h-8 object-contain transition group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="text-blue-300 font-semibold text-lg transition group-hover:text-blue-400">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center px-6 pt-16"
        >
          <h2 className="text-4xl font-semibold text-blue-400 mb-6 text-center">
            Projects
          </h2>

          <h3 className="text-xl font-semibold text-blue-300 mb-4">
            Main Projects
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-neutral-800 rounded-xl shadow-lg hover:bg-blue-500/20 hover:scale-105 hover:shadow-xl transition transform duration-200 p-0 overflow-hidden group h-full"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-blue-300 text-center pt-4 px-4 group-hover:underline">
                      {project.name}
                    </h3>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-cover mt-4 mb-4"
                    />
                    <p className="text-neutral-300 text-sm px-4 pb-6">
                      {project.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-blue-300 mb-4">
            Mini Projects
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {miniProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-neutral-800 rounded-xl shadow-lg hover:bg-blue-500/20 hover:scale-105 hover:shadow-xl transition transform duration-200 p-0 overflow-hidden group h-full"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-blue-300 text-center pt-4 px-4 group-hover:underline">
                      {project.name}
                    </h3>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-cover mt-4 mb-4"
                    />
                    <p className="text-neutral-300 text-sm px-4 pb-6">
                      {project.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
            Contact
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                target={contact.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-56 h-56 bg-neutral-800 rounded-full shadow-lg hover:bg-blue-500/20 transition group"
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-white flex items-center justify-center shadow group-hover:scale-110 transition">
                  <img
                    src={contact.logo}
                    alt={contact.name}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-lg font-semibold text-blue-300 group-hover:text-blue-400 mb-1">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-neutral-600 py-10 text-sm">
        &copy; 2025 Kartikeya Shankar Mishra
      </footer>
    </div>
  );
}
