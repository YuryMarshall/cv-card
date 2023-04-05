import { React, useState } from "react";
import HTML5 from "../atoms/Html5.jsx";
import CSS3 from "../atoms/Css3.jsx";
import Sphere3D from "../atoms/Sphere.jsx";
import ReactLogo from "../atoms/Reactlogo.jsx";
import skillsData from "../data/skillsData.js";

import jslogo from "../../img/jslogo.png";
import tailwindlogo from "../../img/tailwindlogo.png";

import styles from "./styles/skills.module.css";

function Skills(props) {
  const skills = ["HTML5", "CSS3", "TailwindCSS", "JavaScript", "React.js"];
  const [skillState, setSkillState] = useState("");

  const skillHandler = function (e) {
    switch (e.target.textContent) {
      case "HTML5":
        setSkillState("HTML5");
        break;
      case "CSS3":
        setSkillState("CSS3");
        break;
      case "TailwindCSS":
        setSkillState("TailwindCSS");
        break;
      case "JavaScript":
        setSkillState("JavaScript");
        break;
      case "React.js":
        setSkillState("React");
        break;
      default:
        setSkillState("");
    }
  };

  const SkillLogo = function () {
    if (skillState === "HTML5") {
      return <HTML5 />;
    } else if (skillState === "CSS3") {
      return <CSS3 />;
    } else if (skillState === "TailwindCSS") {
      return <Sphere3D color="#00FFC4" scale={1.8} />;
    } else if (skillState === "JavaScript") {
      return <Sphere3D color="#F5FFBD" scale={2} />;
    } else if (skillState === "React") {
      return <ReactLogo />;
    } else {
      return <div></div>;
    }
  };

  return (
    <section className={styles.skills__section} id="Skills">
      <h1 className={styles.skills__title}>
        {props.language === "eng" ? "Skills:" : "Навыки:"}
      </h1>
      <ul className={styles.skills__map}>
        {skills.map((item) => (
          <li
            key={item}
            className={styles.skills__map__li}
            id="Stroke"
            onClick={skillHandler}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.skill__logo__container}>
        <SkillLogo />
        <div className="absolute">
          <img
            src={jslogo}
            className={skillState === "JavaScript" ? styles.js__logo : "hidden"}
          />
          <img
            src={tailwindlogo}
            className={
              skillState === "TailwindCSS" ? styles.tw__logo : "hidden"
            }
          />
        </div>
      </div>
      <p className={styles.skill__text}>
        {skillState
          ? skillsData[skillState][props.language]
          : props.language === "eng"
          ? "Please select skill of developer upper."
          : "Пожалуйста, выберете навык разработчика."}
      </p>
    </section>
  );
}
export default Skills;
