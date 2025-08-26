import React from "react";
import "./Projects.css";
import { SiHtml5, SiReact, SiMui, SiPrettier } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBitbucket, FaJira } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import berthmaps from "../../assets/berthmaps.png";
import sarma from "../../assets/sarma.png";

export const Projects = () => {
  return (
    <div className="section">
      <h2 className="section__title different">Projects</h2>
      <div className="client_allProjects">
        <div className="client_projects_container" data-aos="fade-right">
          <div className="client_project">
            <div className="client_project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={berthmaps} alt="Berth Maps" />
              </div>
            </div>
            <div className="client_project_information">
              <h2>Berth Maps</h2>
              <p>
                Client is leading private sector provider of public transport.
                Berth Maps is a schematic view of real-time railway berth
                movements by GPS, TD and TRUST. Berthmaps provides a platform to
                manage trains, berths, crew, stations, etc. Using Berthmaps, you
                can view running trains in real-time and replay mode.
              </p>
              <div>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiReact />
                  <FaBitbucket />
                  <GrGraphQl />
                  <SiMui />
                  <SiPrettier />
                  <VscGithub />
                  <FaJira />
                  <BsFiletypeScss />
                </div>
                {/* <a
                  href="https://www.mistral-data.com/product/berth-maps-tbc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Description
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="client_projects_container" data-aos="fade-right">
          <div className="client_project">
            <div className="client_project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={sarma} alt="Sarma" />
              </div>
            </div>
            <div className="client_project_information">
              <h2>Sarma</h2>
              <p>
                Client is leading private sector provider of public transport.
                Sarma is the stock resource allocation system. Using Sarma,
                allocations can be updated quickly via the web-based user
                interface with changes validated and immediately pushed out in
                real- time to control centers, staff, and other systems.
              </p>
              <div>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiReact />
                  <FaBitbucket />
                  <GrGraphQl />
                  <SiMui />
                  <SiPrettier />
                  <VscGithub />
                  <FaJira />
                  <BsFiletypeScss />
                </div>
                {/* <a
                  href="https://www.mistral-data.com/product/sarma/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Description
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
