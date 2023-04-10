import React from "react";

import html5logo from "../../img/html5.png";
import tailwindlogo from "../../img/tailwindlogo.png";
import jslogo from "../../img/jslogo.png";
import css3logo from "../../img/css3.png";
import reactlogo from "../../img/react.png";

import styles from "./styles/atoms.module.css";

function LogoSkills(props) {
  switch (props.state) {
    case "HTML5":
      return (
        <div className="absolute">
          <img src={html5logo} className={styles.html__logo} alt="HTML5 logo" />
        </div>
      );
    case "CSS3":
      return (
        <div className="absolute">
          <img src={css3logo} className={styles.css3__logo} alt="CSS3 logo" />
        </div>
      );
    case "TailwindCSS":
      return (
        <div className="absolute">
          <img
            src={tailwindlogo}
            className={styles.tw__logo}
            alt="TailwindCSS logo"
          />
        </div>
      );
    case "JavaScript":
      return (
        <div className="absolute">
          <img src={jslogo} className={styles.js__logo} alt="JavaScript logo" />
        </div>
      );
    case "React":
      return (
        <div className="absolute">
          <img
            src={reactlogo}
            className={styles.react__logo}
            alt="React logo"
          />
        </div>
      );
    default:
      return <div></div>;
  }
}
export default LogoSkills;
