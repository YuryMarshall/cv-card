import React from "react";

import CubeCanvas from "../molecules/CubeCanvas.jsx";
import ButtonNext from "../atoms/Button.jsx";
import aboutData from "../data/aboutData.js";

import styles from "./styles/about.module.css";

function About(props) {
  return (
    <section className={styles.about__section} id="About">
      <div className={styles.quote}>
        <blockquote cite="https://www.splashlearn.com/blog/powerful-education-quotes-for-kids-to-realize-the-importance-of-learning/">
          {props.language === "eng" ? aboutData[0].eng : aboutData[0].ru}
        </blockquote>
        <cite>
          {props.language === "eng" ? aboutData[1].eng : aboutData[1].ru}
        </cite>
      </div>
      <CubeCanvas />
      <div className={styles.text__container}>
        <p className={styles.text__name}>
          {props.language === "eng" ? aboutData[2].eng : aboutData[2].ru}
        </p>
        {props.language === "eng" ? aboutData[3].eng : aboutData[3].ru}
      </div>
      <ButtonNext
        link="#Skills"
        text="Let's check"
        textRu="Подробнее"
        language={props.language}
      />
    </section>
  );
}
export default About;
