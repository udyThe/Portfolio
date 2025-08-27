import React from "react";
import "./Introduction.css";
import { Type } from "../Type/Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Uday_Resume from "../../assets/resume/Uday_Resume.pdf";

export const Introduction = () => {
  return (
    <div className="introduction center">
      <h1 data-aos="fade-right" className="mobileHead">
        Hello, I am <span className="introduction__name">Uday Surothiya</span>
      </h1>
      <Type />
      <p className="introduction__desc" data-aos="fade-right">
        Final-year Computer Science student specializing in Cloud Computing and
        Virtualization Technologies. Hands-on experience in building and deploying
        scalable applications using <strong>AWS, Docker, Kubernetes, and Terraform</strong>.
        Skilled in <strong>React, Node.js, Python, SQL</strong>, and experienced with
        <strong>CI/CD pipelines, monitoring (Prometheus, Grafana)</strong>, and
        cloud-native architectures. Passionate about solving real-world problems
        through distributed systems, DevOps practices, and modern web development.
      </p>
      <div className="introduction__contact center">
        <a
          href="https://github.com/udyThe"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:udaysurothiya@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="mail"
          className="link link--icon"
        >
          <EmailIcon />
        </a>
        <a
          href="tel:+918824162016"
          target="_blank"
          rel="noreferrer"
          aria-label="phone"
          className="link link--icon"
        >
          <PhoneIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/uday-surothiya-3048a5247/"
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
          window.open(Uday_Resume);
        }}
      >
        Resume
      </button>
    </div>
  );
};
