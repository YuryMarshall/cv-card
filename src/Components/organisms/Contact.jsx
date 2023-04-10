import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Map from "../atoms/Map.jsx";
import LoadingSVG from "../atoms/LoadingSvg.jsx";
import SuccsessMessage from "../atoms/SuccsessMessage.jsx";

import styles from "./styles/contact.module.css";

function Contact(props) {
  const form = useRef();
  const [succsess, setSuccsess] = useState(null);
  const [click, setClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true);
    emailjs
      .sendForm(
        "service_dfligth",
        "template_5dw2z2t",
        form.current,
        "isIV_BsU4AS3m_gth"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccsess(true);
          setClick(false);
        },
        (error) => {
          console.log(error.text);
          setSuccsess(false);
          setClick(false);
        }
      );
  };
  return (
    <section className={styles.contact__section} id="Contact">
      <div className={styles.form__container}>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.form__title}>
            {props.language === "eng" ? "Contact me" : "Обратная связь"}
          </h1>
          <input
            type="text"
            required
            placeholder={props.language === "eng" ? "Name" : "Имя"}
            name="name"
            className={styles.form__contact__info__input}
          />
          <input
            type="email"
            required
            placeholder="email@kyoto.jp"
            name="email"
            className={styles.form__contact__info__input}
          />
          <textarea
            required
            cols="10"
            rows="4"
            placeholder={
              props.language === "eng" ? "Write your message" : "Ваше сообщение"
            }
            name="message"
            className={styles.form__contact__info__input}
          ></textarea>
          <button type="submit" className={styles.form__button}>
            {props.language === "eng" ? "Send" : "Отправить"}
          </button>
          <SuccsessMessage
            status={succsess}
            language={props.language}
            clickStatus={click}
          />
        </form>
      </div>
      <div className={styles.map__container}>
        <Map />
      </div>
    </section>
  );
}
export default Contact;
