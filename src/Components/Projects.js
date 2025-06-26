import easby from "../images/easby.png";
import ambulance from "../images/ambulance.png";
import simulator from "../images/simulator.png";
import weatherApp from "../images/weatherApp.png";
import passowrd from "../images/password.png";
import compiler from "../images/compiler.png";
import ProjectBox from "./ProjectBox";

const projectList = [
  {
    name: "EasBy",
    description:
      "Developed a scalable e-commerce platform with secure authentication, product browsing, and content-based recommendation system to enhance user experience through personalized product suggestions and seamless shopping.",
    image: easby,
    github: "https://github.com/himanshudhapola15/EasBy",
    demo: "https://himanshu-dhapola-easby.vercel.app/",
  },
  {
    name: "Ambulance Booking Service",
    description:
      "Developed an intuitive ambulance booking frontend, enabling online requests, automated admin emails, improved accessibility, and achieved 95 performance and 91 SEO scores, enhancing digital presence.",
    image: ambulance,
    github: "https://github.com/himanshudhapola15/Ambulance_Booking_Service",
    demo: "https://travels-umber.vercel.app/",
  },
  {
    name: "Scheduling Algorithms",
    description:
      "A web-based interactive simulator for classic CPU and Disk scheduling algorithms. Visualize Gantt charts, seek sequences, and performance metrics using real-time input values and file-based tasks.",
    image: simulator,
    github: "https://github.com/himanshudhapola15/EasBy",
    demo: "https://himanshu-dhapola-easby.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Weather App shows real-time temperature, conditions, humidity, and wind using a weather API. Built with modern web tech, it features a clean, responsive, user-friendly, and intuitive interface.",
    image: weatherApp,
    github: "https://github.com/himanshudhapola15/Weather-App",
    demo: "https://himanshu-dhapola-weather-app.netlify.app/",
  },
  {
    name: "Password Generator",
    description:
      "Password Generator creates secure, random passwords based on user-selected length and character types, ensuring strong protection. User-friendly design and prioritizes security.",
    image: passowrd,
    github: "https://github.com/himanshudhapola15/Password-Generator",
    demo: "https://himanshu-dhapola-password-generator.netlify.app/",
  },
  {
    name: "C Subset Compiler",
    description:
      "Custom compiler for a C language subset using Flex and Bison. Performs lexical, syntax, semantic analysis, generates TAC, symbol table, type checks, and assembly code.",
    image: compiler,
    github: "https://github.com/himanshudhapola15/C-Subset-Compiler",
    demo: "",
  },
];

const Projects = () => {
  return (
    <div className="h">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {projectList.map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.image}
            projectName={project.name}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
