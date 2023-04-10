import React from "react";
import skillsData from "../data/skillsData";

import styles from "../organisms/styles/skills.module.css";

function SkillText(props) {
  const LangCheck = () => (props.language ? props.language : "ru");
  return (
    <p className={styles.skill__text}>
      {props.skill
        ? skillsData[props.skill][LangCheck()]
        : props.language === "eng"
        ? "Please select skill of developer upper."
        : "Пожалуйста, выберете навык разработчика."}
    </p>
  );
}
export default SkillText;
