import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Command.module.scss"
import app_styles from "../../../app.module.scss"
import ReactEmbedGist from "react-embed-gist";

const UseCallback = () => {
  return (
    <div className={styles.codebox}>
    <h1 className={app_styles.h1}>工作原理</h1>
    <p className={app_styles.p}>
        實現版本管理
      </p>
    <h1 className={app_styles.h1}>範例</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/31735d04d9ef32d949d655ea70dfebc3"
    />
  </div>
  );
};

export default UseCallback;
