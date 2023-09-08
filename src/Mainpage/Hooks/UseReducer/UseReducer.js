import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseReducer.module.scss"
import app_styles from "../../../app.module.scss"
import ReactEmbedGist from "react-embed-gist";

const UseReducer = () => {
  return (
    <div className={styles.codebox}>
    <h1 className={app_styles.h1}>UseReducer 引入</h1>
    <Codebox text='import { useReducer } from "react";' />
    <h1 className={app_styles.h1}>工作原理</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/a9632d5bfbf51edacc388b05cea12dae"
    />
    <h1 className={app_styles.h1}>範例</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/60f189764d4b9e40837c3ba2fc3e8eff"
    />
  </div>
  );
};

export default UseReducer;
