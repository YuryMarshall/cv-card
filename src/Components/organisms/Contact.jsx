import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "../atoms/Map.jsx";

import styles from "./styles/contact.module.css";

function Contact(props) {
  const form = useRef();
  const [succsess, setSuccsess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        },
        (error) => {
          console.log(error.text);
          setSuccsess(false);
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
            placeholder={props.language === "eng" ? "Name" : "Имя"}
            name="name"
            className={styles.form__contact__info__input}
          />
          <input
            type="email"
            placeholder="Email@kyoto.jp"
            name="email"
            className={styles.form__contact__info__input}
          />
          <textarea
            id=""
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
          <p className="text-base">
            {(succsess &&
              props.language === "eng" &&
              "Your message has been sent. Developer will revert as soon as possible :)") ||
              (succsess &&
                props.language === "ru" &&
                "Ваше сообщение отправлено. Разработчик свяжется с Вами в ближайшее время :)")}
          </p>
        </form>
      </div>
      <div className={styles.map__container}>
        <Map />
      </div>
    </section>
  );
}
export default Contact;
