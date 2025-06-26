import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Himanshu Dhapola</b> and I am from Haldwani
            Nainital, Uttarakhand, India. I'm a <b>MERN stack developer</b> and
            a final year college student pursuing <b>BTech in CSE</b>. <br />
            <br />I love to create projects with beautiful designs, you
            can check out some of my work in the projects section. I am{" "}
            <b>open</b> to new collaborations or work where I can contribute and
            grow. Feel free to connect with me, links are in the footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="ill"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Python" />
        <Skills skill="Tailwind" />
      </div>
    </>
  );
}

export default About