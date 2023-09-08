import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseCallback.module.scss"
import app_styles from "../../../app.module.scss"
import ReactEmbedGist from "react-embed-gist";

const UseCallback = () => {
  return (
    <div className={styles.codebox}>
    <h1 className={app_styles.h1}>UseCallback 引入</h1>
    <Codebox text='import { useCallback } from "react";' />
    <h1 className={app_styles.h1}>工作原理</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/8f947777af9c7ba2eb94d458c753cce0"
    />
    <h1 className={app_styles.h1}>範例</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/74187b6b6e2bbb4d00c66ac9579f4cd1"
    />
  </div>
  );
};

export default UseCallback;
