import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./React_Router.module.scss";
import app_styles from "../../../app.module.scss";
const React_Router = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>React_Router 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save React_Router" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add React_Router" />
      <h2 className={app_styles.h2}>React_Router import</h2>
      <Codebox text='import React_Router from "React_Router"' />
    </div>
  );
};

export default React_Router;
