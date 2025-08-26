import React from "react";
import "./Introduction.css";
import { Type } from "../Type/Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Viraj_Resume from "../../assets/resume/Viraj_Resume.pdf";

export const Introduction = () => {
  return (
    <div className="introduction center">
      <h1 data-aos="fade-right" className="mobileHead">
        Hello, I am <span className="introduction__name">Uday Surothiya</span>
      </h1>
      <Type />
      <p className="introduction__desc" data-aos="fade-right">
        Experienced Software Developer with 3+ years of experience in MERN &
        have a strong understanding of Data structures and Alogrithms. Skilled
        in React, Redux, Redux-Toolkit, HTML, CSS, JavaScript, Node, Express,
        and MongoDB. Also had Implemented tools like ESLint, Prettier,
        LintStaged, Husky, Vite, Pnpm, etc in place for maintaining code quality
        and standards in projects.
      </p>
      <div className="introduction__contact center">
        <a
          href="https://github.com/rkvirajgupta"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:rkvirajgupta@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="mail"
          className="link link--icon"
        >
          <EmailIcon />
        </a>
        <a
          href="tel:+919669222448"
          target="_blank"
          rel="noreferrer"
          aria-label="phone"
          className="link link--icon"
        >
          <PhoneIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/rkvirajgupta/"
          aria-label="linkedin"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <button
        className="btnResume"
        onClick={() => {
          window.open(Viraj_Resume);
        }}
      >
        Resume
      </button>
    </div>
  );
};
