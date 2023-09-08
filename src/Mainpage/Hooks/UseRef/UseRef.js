import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseRef.module.scss"
import app_styles from "../../../app.module.scss"
import ReactEmbedGist from "react-embed-gist";

const UseRef = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>UseRef 引入</h1>
      <Codebox text='import { useRef } from "react";' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/83d51d3760d05c74f2adff25b76296de"
      />
      <h1 className={app_styles.h1}>範例</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/1a4d62b9c7c36d1bbaaf87578f7393c3"
      />
    </div>
  );
};

export default UseRef;
