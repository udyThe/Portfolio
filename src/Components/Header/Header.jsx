import React, { useContext } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/Theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <header className={"header center " + themename}>
      <h3>
        <a href="#home" className="link mylast">
          <span className="myv">𝕦</span>
          𝕕𝕒𝕪
          {/* 𝕌 */}
        </a>
      </h3>
      <Navbar />
    </header>
  );
};
