import React from "react";
import "./Projects.css";
import { VscGithub } from "react-icons/vsc";
import convergehubHome from "../../assets/convergehub-home.png";
import devopsPipeline from "../../assets/devopsPipeline.png";
import project6 from "../../assets/simonsays.png";
import { DiCss3 } from "react-icons/di";
import {SiHtml5} from "react-icons/si";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJenkins, FaLinux } from "react-icons/fa";
import {
  SiTailwindcss, SiTerraform, SiPrometheus, SiGrafana,
   SiMongodb, SiFirebase, 
  SiPython,  SiJavascript, SiPostman,  SiGit 
} from "react-icons/si";

export const Projects = () => {
  return (
    <div className="section">
      <h2 className="section__title different">Projects</h2>
      <div className="client_allProjects">
        <div className="projects_container" data-aos="fade-right">
                  <div className="project">
                    <div className="project_videocontainer">
                      <div id="newset">
                        <img id="newsetimg" src={convergehubHome} alt="Translator" />
                      </div>
                    </div>
                    <div className="project_information">
                      <h2>ConvergeHub</h2>
                      <p>
                        ConvergeHub is a cloud-native collaborative platform tailored for modern remote teams. It integrates real-time messaging, live document editing, Kanban boards, task management, and secure user authentication. Built on the MERN stack with WebSockets and Firebase, it ensures seamless communication, scalability, and data security. 
                      </p>
                      <div>
                        <FaReact />
                  <SiJavascript />
                  <SiTailwindcss />
                  <FaNodeJs />
                  <SiMongodb />
                  <SiFirebase />
                  <SiPostman />
                  <VscGithub />
                  <SiGit />
                      </div>
                      <div>
                        <a
                          href="https://convergehub.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span type="button" className="btns onbt onbt">
                            See this Live
                          </span>
                        </a>
                        <a
                          href="https://github.com/udyThe/converge-hub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span type="button" className="btns onbt">
                            View Code
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>





                <div className="projects_container" data-aos="fade-right">
                  <div className="project">
                    <div className="project_videocontainer">
                      <div id="newset">
                        <img id="newsetimg" src={devopsPipeline} alt="Translator" />
                      </div>
                    </div>
                    <div className="project_information">
                      <h2>AWS DevOps Pipeline </h2>
                      <p>
                        This project showcases a full DevOps pipeline on AWS using Infrastructure as Code and CI/CD automation. A Dockerized Flask app was deployed on EC2 via Terraform, with Jenkins handling automated deployments from GitHub. CloudWatch monitored system metrics with alarms for CPU and memory. Prometheus and Grafana provided advanced observability through real-time dashboards and issue detection.
                      </p>
                      <div>
                        <SiPython />
                  <SiTerraform />
                  <FaJenkins />
                  <VscGithub />
                  <FaAws />
                  <FaDocker />
                  <FaLinux /> 
                  <SiPrometheus />
                  <SiGrafana />
                      </div>
                      <div>
                        <a
                          href=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span type="button" className="btns onbt">
                            View Code
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

       
      </div>
    </div>
  );
};
