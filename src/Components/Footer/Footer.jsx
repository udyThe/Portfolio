import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/Theme";

export const Footer = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <div className={"section " + themename}>
      <a href="/" rel="noreferrer" target="_blank">
        <div className="footerBox">
          <h3 className="footer">Made By Uday</h3>
        </div>
      </a>
    </div>
  );
};
