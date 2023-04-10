import React from "react";

import styles from "./styles/atoms.module.css";

function ButtonNext(props) {
  return (
    <button className={styles.button__next}>
      <a href={props.link}>
        {props.language === "eng" ? props.text : props.textRu}
      </a>
    </button>
  );
}
export default ButtonNext;
