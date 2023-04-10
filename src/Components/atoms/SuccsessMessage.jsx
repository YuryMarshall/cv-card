import React from "react";
import LoadingSVG from "./LoadingSvg.jsx";

function SuccsessMessage(props) {
  if (props.status && props.language === "eng") {
    return (
      <p className="text-base">
        Your message has been sent. Developer will revert as soon as possible
      </p>
    );
  } else if (props.status && props.language === "ru") {
    return (
      <p className="text-base">
        Ваше сообщение отправлено. Разработчик свяжется c Вами в ближайшее время
      </p>
    );
  } else if (!props.status && props.clickStatus) {
    return <LoadingSVG />;
  }
}
export default SuccsessMessage;
