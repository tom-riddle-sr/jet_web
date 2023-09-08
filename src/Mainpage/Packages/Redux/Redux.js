import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Redux.module.scss";
import app_styles from "../../../app.module.scss";
const Redux = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Redux 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save Redux" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add Redux" />
      <h2 className={app_styles.h2}>Redux import</h2>
      <Codebox text='import Redux from "Redux"' />
    </div>
  );
};

export default Redux;
