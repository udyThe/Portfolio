import React, { useContext, useState } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../Context/Theme";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Viraj_Resume from "../../assets/resume/Viraj_Resume.pdf";
export const Navbar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a
            href="#home"
            onClick={() => toggleNavList("#home")}
            className="link link--nav"
          >
            Home
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#about"
            onClick={() => toggleNavList("#about")}
            className="link link--nav"
          >
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#timeline"
            onClick={() => toggleNavList("#timeline")}
            className="link link--nav"
          >
            Timeline
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#skills"
            onClick={() => toggleNavList("#skills")}
            className="link link--nav"
          >
            Skills
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#projects"
            onClick={() => toggleNavList("#projects")}
            className="link link--nav"
          >
            Projects
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#pocs"
            onClick={() => toggleNavList("#pocs")}
            className="link link--nav"
          >
            POC's
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#contact"
            onClick={() => toggleNavList("#contact")}
            className="link link--nav"
          >
            Contact
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href={Viraj_Resume}
            onClick={toggleNavList}
            className="link link--nav"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <button
        type="button"
        onClick={toggeltheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}
      >
        {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};
