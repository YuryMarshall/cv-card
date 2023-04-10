import { React, useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

import images from "../data/imagesData";

import styles from "./styles/projects.module.css";

function Projects(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useLayoutEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section className={styles.projects__section} id="Projects">
      <h1 className={styles.projects__title}>
        {props.language === "eng" ? "My projects" : "Мои проекты:"}
      </h1>
      <motion.div ref={carousel} className={styles.projects__carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className={styles.projects__inner__carousel}
        >
          {images.map((image) => {
            return (
              <motion.div key={image.id} className={styles.project__container}>
                <img
                  src={image.link}
                  alt="Project image"
                  className={styles.project__image}
                />
                <a href={image.src} className={styles.project__link}>
                  {image.tag}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Projects;
