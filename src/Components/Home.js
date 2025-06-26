import Typed from "./Typed.js";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import avatar from "../images/avatar.png";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>HIMANSHU DHAPOLA</b>
          </h1>
          <Typed />
        </div>
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>Introduction</b>
          </h1>
          <p>
            I'm a final-year B.Tech CSE student at Graphic Era Hill University,
            Dehradun, and a passionate <b>full-stack developer</b> specializing
            in the <b>MERN</b> stack. I focus on building responsive,
            user-friendly web applications using technologies like <b>React</b>,
            <b> Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>. <br />
            <br /> I’m deeply enthusiastic about turning raw ideas into
            functional, impactful products. I thrive on work that challenges me,
            pushes my limits as a developer. I'm fluent in <b>C++</b>, have
            working knowledge of
            <b> Python</b>, and <b>Java</b>. Up next on my learning path: diving
            into <b>Next.js</b> and <b>TypeScript</b> to expand my toolkit and
            explore new possibilities.
          </p>
        </div>

        <div className="illustration-container">
          <Lottie className="illustration" animationData={Coder} />
          <img className="Avatar" src={avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
