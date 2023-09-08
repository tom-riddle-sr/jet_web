import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Pug.module.scss";
import app_styles from "../../../app.module.scss";
const Pug = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Pug 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save Pug" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add Pug" />
      <h2 className={app_styles.h2}>Pug import</h2>
      <Codebox text='import Pug from "Pug"' />
    </div>
  );
};

export default Pug;
