import React from "react";
import "./Pocs.css";
import {
  SiHtml5, SiPython, SiGit, SiFlutter, SiMongodb, SiDart, SiJson,
  SiReact, SiMysql, SiTerraform, SiGithubactions, SiKubernetes, SiRedis, SiRabbitmq, SiJavascript
} from "react-icons/si";
import { FaAws, FaLinux, FaDocker, FaNodeJs } from 'react-icons/fa';
import { VscGithub } from "react-icons/vsc";
import { DiCss3 } from "react-icons/di";

// Databases & Storage
import project1 from "../../assets/aws3tier.png";
import project2 from "../../assets/converhegubfuture.png";
import project3 from "../../assets/ibm.png";
import project4 from "../../assets/digimind.png";
import project5 from "../../assets/spotify.png";
import project6 from "../../assets/simonsays.png";

export const Pocs = () => {
  return (
    <div className="section">
      {/* <h2 className="section__title different">POC's</h2> */}
      <div className="allProjects">
        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={project1} alt="StoryBook" />
              </div>
            </div>
            <div className="project_information">
              <h2>Scalable 3-Tier Web Platform on AWS</h2>
              <p>
                Deployed a scalable 3-tier web platform on AWS using EC2 Auto Scaling, RDS read replicas, and S3 for static assets. Secured traffic with ALB and AWS WAF. Automated infrastructure via Terraform and CI/CD with GitHub Actions. Monitored with CloudWatch, achieving 99.9% uptime under simulated 5,000-user load with auto-scaling at 60% CPU.
              </p>
              <div>
                <FaAws />
                <FaLinux />
                <SiMysql />
                <SiTerraform />
                <SiGithubactions />
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

        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={project2} alt="Chappan" />
              </div>
            </div>
            <div className="project_information">
              <h2>ConvergeHub - Extending the Collaboration Platform (Upcoming)</h2>
              <p>
                This project transforms ConvergeHub from a monolithic app into a scalable, containerized microservices platform. Services are orchestrated via Kubernetes (EKS) for high availability and auto-scaling. Redis and RabbitMQ enable low-latency, event-driven communication (~40% faster, projected). Real-time notifications support instant updates, with CI/CD pipelines and container testing ensuring quality in a distributed team.
              </p>
              <div>
                <FaDocker />
                <SiKubernetes />
                <FaNodeJs />
                <SiMongodb />
                <SiRedis />
                <SiRabbitmq />
                <SiJavascript /> 
                <SiReact />
                <FaAws />
              </div>
              <div>
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
                <img id="newsetimg" src={project3} alt="Sephora" />
              </div>
            </div>
            <div className="project_information">
              <h2>Cloud Based NLP</h2>
              <p>
                Built a sentiment analysis web app using AWS Comprehend and SageMaker, integrated with a Flask backend on EC2. Automated CI deployments via GitHub and systemd on boot for seamless updates. Secured AWS access with IAM roles, Boto3, startup scripts, and environment-based credentials. Delivered a cloud-native app.
              </p>
              <div>
                <SiPython />
                <FaAws />
                <FaLinux />
                <VscGithub />
                <SiGit />
              </div>
              <div>
                <a
                  href="https://github.com/udyThe/IBM-sentiment"
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
                <img id="newsetimg" src={project4} alt="Weather" />
              </div>
            </div>
            <div className="project_information">
              <h2>Role-Based Flutter App with Clean Architecture</h2>
              <p>
                Working on the development of a role-based Flutter application using Clean Architecture and hybrid state management with Provider and GetX. Key features include secure login, role-based dashboards, CRUD operations, and media uploads via REST APIs. The app follows a modular folder structure, ensuring scalability and maintainability, with secure API integration through Dio and token-based authentication.
              </p>
              <div>
                <SiFlutter />
                <SiDart />
                <SiJson />
                <VscGithub />
                <SiGit />
              </div>
              <div>
                <a
                  href="https://github.com/udyThe/digimind_android"
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
                <img id="newsetimg" src={project5} alt="Pluralsight" />
              </div>
            </div>
            <div className="project_information">
              <h2>Spotify Clone</h2>
              <p>
                Developed a front-end clone of the popular Spotify music player, built with
                HTML, CSS, and JavaScript. Implemented core audio functionalities including
                play, pause, and seek controls for an interactive music experience.
                A curated selection of songs was hardcoded to demonstrate multimedia
                management and player capabilities within the app.
              </p>

              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://udythe.github.io/Spotify-clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/udyThe/Spotify-clone"
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
                <img id="newsetimg" src={project6} alt="Translator" />
              </div>
            </div>
            <div className="project_information">
              <h2>Simon Says Game</h2>
              <p>
                Built an interactive memory-based game where players must repeat a growing
                sequence of colors. Implemented using JavaScript to generate and validate
                sequences, providing engaging gameplay that tests focus and recall skills.
                Styled with HTML and CSS for a vibrant user interface.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://udythe.github.io/SimonSayss/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/udyThe/SimonSayss"
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
