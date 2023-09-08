import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Sass.module.scss";
import app_styles from "../../../app.module.scss";
const Sass = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Sass 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save Sass" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add Sass" />
      <h1 className={app_styles.h1}>Sass 引入</h1>
      <Codebox text='import Sass from "Sass"' />
    </div>
  );
};

export default Sass;
