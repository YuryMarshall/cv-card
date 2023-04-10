import React from "react";
import { useRef } from "react";

import neko from "../../img/neko.png";
import nekoSecret from "../../img/neko-secret.PNG";

import Sphere3D from "../atoms/Sphere.jsx";
import ButtonNext from "../atoms/Button.jsx";

import styles from "./styles/intro.module.css";

function Introduce(props) {
  const catRef = useRef(null);
  const catImgRef = useRef(null);

  const catHandler = () => {
    if (!catRef.current.textContent) {
      catRef.current.textContent = "Meow";
      catRef.current.classList.remove("hidden");
    } else if (catRef.current.textContent === "Meow") {
      catRef.current.textContent = "Мяу";
    } else if (catRef.current.textContent === "Мяу") {
      catRef.current.textContent = "ニャー";
      catRef.current.classList.add("text-2xl");
      catImgRef.current.src = nekoSecret;
    } else if (catRef.current.textContent === "ニャー") {
      catRef.current.textContent = "";
      catRef.current.classList.remove("text-2xl");
      catRef.current.classList.add("hidden");
      catImgRef.current.src = neko;
    }
  };
  return (
    <section className={styles.intro__section} id="Introduce">
      <div className={styles.intro__section__container}>
        <div className={styles.inrto__section__left}>
          <div>
            <h1 className={styles.left__title}>
              const yourDeveloper =<br /> &ldquo; Kalashnik Yury &rdquo;{" "}
            </h1>
            <p className={styles.left__subtitle}>
              {props.language === "eng"
                ? "-How it's possible?"
                : "-Как это возможно?"}
            </p>
            <ButtonNext
              link="#About"
              text="Learn more"
              textRu="Узнать"
              language={props.language}
            />
          </div>
        </div>
        <div className={styles.inrto__section__right}>
          <div className={styles.right__cat__container}>
            <Sphere3D color="#8736AF" scale={2.5} />
            <img
              ref={catImgRef}
              src={neko}
              className={styles.right__cat__img}
              id="neko"
              onClick={catHandler}
              alt="Cat image"
            />
          </div>
        </div>
        <div className={styles.right__cat__text__container}>
          <p
            ref={catRef}
            className="hidden w-[150px] text-2xl p-3 pr-4 rounded-3xl bg-white text-black relative  after:content-[''] after:w-5 after:h-5  after:bg-white after:absolute after:rotate-45 after:top-6 after:-right-1 little:after:top-10 little:after:right-3 lg:pr-0 lg:pl-10 lg:after:-left-1 lg:after:top-6"
          ></p>
        </div>
      </div>
    </section>
  );
}
export default Introduce;
