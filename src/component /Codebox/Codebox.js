import React, { useRef } from "react";
import Button from "../Copy_button/Copy_button";
import styles from "./Codebox.module.scss"
const Codebox = (props) => {
  const {text}=props


  return (
    <div className={styles.codebox}>
      <p className={styles.code} >{text}</p>
      <Button position="react_intro_position" text={text} />
    </div>
  );
};

export default Codebox;
