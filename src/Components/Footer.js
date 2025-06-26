import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Himanshu Dhapola</h4>
      <h4>Copyright &copy; 2025</h4>
      <div className="footerLinks">
        <a href="https://github.com/himanshudhapola15" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-dhapola-3b0a95218/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:himanshudhapola15@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/himanshudhapola15/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
