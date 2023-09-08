import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseEffect.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const UseEffect = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>UseEffect 引入</h1>
      <Codebox text='import { useEffect } from "react";' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/5c6a94a0dac6786e53ba6eae92831f84"
      />
      <h1 className={app_styles.h1}>範例</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/e326b68c7249e54e17e655a94e95872e"
      />
    </div>
  );
};

export default UseEffect;
