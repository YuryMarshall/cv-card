import React from "react";
import linksData from "../data/linksData";
import styles from "./styles/atoms.module.css";

function BurgerLinks(props) {
  return linksData.map((item) => {
    return (
      <li className={styles.header__links} key={item.id}>
        <a href={item.anchor}>
          {props.language === "eng" ? item.name : item.nameRu}
        </a>
      </li>
    );
  });
}
export default BurgerLinks;
