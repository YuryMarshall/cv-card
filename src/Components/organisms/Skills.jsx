import { React, useState } from "react";

import Sphere3D from "../atoms/Sphere.jsx";

import skillsData from "../data/skillsData.js";
import LogoSkills from "../atoms/LogoSkills.jsx";

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
      return <Sphere3D color="#F99B20" scale={2} />;
    } else if (skillState === "CSS3") {
      return <Sphere3D color="#1694F5" scale={2} />;
    } else if (skillState === "TailwindCSS") {
      return <Sphere3D color="#00FFC4" scale={1.8} />;
    } else if (skillState === "JavaScript") {
      return <Sphere3D color="#F5FFBD" scale={2} />;
    } else if (skillState === "React") {
      return <Sphere3D color="#17466B" scale={1.8} />;
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
        <LogoSkills state={skillState} />
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
