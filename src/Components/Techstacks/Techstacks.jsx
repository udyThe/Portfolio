import React from "react";
import "./Techstacks.css";

// React Icons
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJenkins, FaLinux } from "react-icons/fa";
import { 
  SiTailwindcss, SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, 
  SiSonarqube, SiMysql, SiMongodb, SiFirebase, SiRedhat, SiCplusplus, 
  SiPython, SiShell, SiJavascript, SiPostman, SiGithubactions, SiGit, SiC 
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

// grouped skills by category
const categories = [
  {
    title: "Languages",
    skills: [
      { icon: <SiC />, name: "C" },
      { icon: <TbBrandCpp />, name: "C++" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiMysql />, name: "SQL" },
      { icon: <SiShell />, name: "Shell / Bash" },
    ],
  },
  {
    title: "Development",
    skills: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiRedhat />, name: "OpenShift (Learning)" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiGit />, name: "Git" },
      { icon: <VscGithub />, name: "GitHub" },
      { icon: <SiGithubactions />, name: "GitHub Actions" },
      { icon: <SiTerraform />, name: "Terraform (Learning)" },
      { icon: <SiSonarqube />, name: "SonarQube" },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      { icon: <SiPrometheus />, name: "Prometheus" },
      { icon: <SiGrafana />, name: "Grafana" },
      { icon: <FaAws />, name: "CloudWatch" },
      { icon: <SiRedhat />, name: "ELK Stack (Learning)" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaJenkins />, name: "Jenkins" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <DiMysql />, name: "MySQL" },
      { icon: <FaLinux />, name: "Linux CLI" },
    ],
  },
];

export const Techstacks = () => {
  return (
    <div className="section" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      {categories.map((category, i) => (
        <div key={i} className="tech-category">
          <h3 className="section__title different category-title ">{category.title}</h3>
          <div className="techsection">
            {category.skills.map((skill, index) => (
              <div key={index}>
                {skill.icon}
                <h5>{skill.name}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
