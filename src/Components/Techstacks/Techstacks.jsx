import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaBitbucket, FaJira } from "react-icons/fa";
import { DiCss3, DiMongodb } from "react-icons/di";
import {
  SiMui,
  SiEslint,
  SiRedux,
  SiExpress,
  SiJavascript,
  SiHeroku,
  SiPostman,
  SiPrettier,
  SiHtml5,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";

export const Techstacks = () => {
  return (
    <div className="section" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        <div>
          <FaReact />
          <h5>React</h5>
        </div>
        <div>
          <SiRedux />
          <h5>Redux</h5>
        </div>
        <div>
          <SiJavascript />
          <h5>Javascript</h5>
        </div>
        <div>
          <SiHtml5 />
          <h5>HTML</h5>
        </div>
        <div>
          <DiCss3 />
          <h5>CSS</h5>
        </div>
        <div>
          <VscGithub />
          <h5>Github</h5>
        </div>
        <div>
          <FaBitbucket />
          <h5>Bitbucket</h5>
        </div>
        <div>
          <FaJira />
          <h5>Jira</h5>
        </div>
        <div>
          <SiMui />
          <h5>MaterialUi</h5>
        </div>
        <div>
          <BsBootstrap />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <BiLogoNetlify />
          <h5>Netlify</h5>
        </div>
        <div>
          <SiEslint />
          <h5>ESLint</h5>
        </div>
        <div>
          <SiPrettier />
          <h5>Prettier</h5>
        </div>
        <div>
          <FaNodeJs />
          <h5>Nodejs</h5>
        </div>
        <div>
          <DiMongodb />
          <h5>MongoDb</h5>
        </div>
        <div>
          <SiExpress />
          <h5>Express</h5>
        </div>
        <div>
          <SiPostman />
          <h5>Postman</h5>
        </div>
        <div>
          <SiHeroku />
          <h5>Heroku</h5>
        </div>
      </div>
    </div>
  );
};
