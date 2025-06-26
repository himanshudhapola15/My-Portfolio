import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName, description, github, demo }) => {
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt={projectName} />
      <br />
      <b>{projectName}</b>
      <br/>
      <br />
      <p>{description}</p>
      <br />
      <br />
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <FaGithub />
            GitHub
          </button>
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <CgFileDocument />
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};


export default ProjectBox