import React from "react";
import { useState } from "react";
import logo from "../../img/logo.PNG";
import BurgerLinks from "../atoms/BurgerLinks.jsx";
import HeaderLinks from "../atoms/HeaderLinks.jsx";
import LangButton from "../atoms/LangButton.jsx";

import styles from "./styles/navbar.module.css";

function Navbar(props) {
  const [status, setStatus] = useState(false);
  const menuHandler = () => (status ? setStatus(false) : setStatus(true));
  const langHandler = () => {
    if (props.language === "eng") {
      props.langHandler("ru");
      localStorage.setItem("lang", "ru");
    } else {
      props.langHandler("eng");
      localStorage.setItem("lang", "eng");
    }
  };
  return (
    <nav className={styles.nav__container}>
      <a href="https://github.com/YuryMarshall">
        <img src={logo} className={styles.nav__logo__img} />
      </a>
      <LangButton handler={langHandler} width="sm" />

      <button className={styles.nav__burger} onClick={menuHandler}></button>
      <ul className={styles.nav__menu}>
        <HeaderLinks language={props.language} />
        <LangButton handler={langHandler} width="lg" />
      </ul>
      <ul className={status ? styles.nav__burger__menu : "hidden"}>
        <BurgerLinks handler={menuHandler} language={props.language} />
      </ul>
    </nav>
  );
}
export default Navbar;
