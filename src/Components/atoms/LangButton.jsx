import React from "react";
import styles from "./styles/atoms.module.css";

function LangButton(props) {
  if (props.width === "lg")
    return (
      <button
        onClick={props.handler}
        className={styles.lang__button__lg}
      ></button>
    );
  else {
    return (
      <button onClick={props.handler} className={styles.lang__button}></button>
    );
  }
}
export default LangButton;
