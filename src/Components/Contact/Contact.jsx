import React, { useContext } from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/Theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <div className="section">
      <h2 className="section__title" data-aos="fade-right">
        Get in <span className="different">Touch</span>
      </h2>
      <div className="contactMain">
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/uday-surothiya-3048a5247/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/udyThe"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:udaysurothiya@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a href="tel:+918824162016" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
        <div className="mailNumber" data-aos="fade-right">
          <div>
            <span>
              <CgMail className="email" />
            </span>
            <span>
              <p>udaysurothiya@gmail.com</p>
            </span>
          </div>
          <div className="iconsCont">
            <span>
              <BsFillTelephoneFill className="phone" />
            </span>
            <span>
              <p>+91 8824162016</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
