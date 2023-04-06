import React from "react";
import styles from "../organisms/styles/skills.module.css";
import skillsData from "../data/skillsData";

function SkillText(props) {
  const LangCheck = () => (props.language ? props.language : "eng");
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
