import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseMemo.module.scss"
import app_styles from "../../../app.module.scss"
import ReactEmbedGist from "react-embed-gist";

const UseMemo = () => {
  return (
    <div className={styles.codebox}>
    <h1 className={app_styles.h1}>UseMemo 引入</h1>
    <Codebox text='import { useMemo } from "react";' />
    <h1 className={app_styles.h1}>工作原理</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/a9632d5bfbf51edacc388b05cea12dae"
    />
    <h1 className={app_styles.h1}>範例</h1>
    <ReactEmbedGist
      wrapperClass={app_styles.gist}
      gist="tom-riddle-sr/62443d8cf62904832b95ac13a4c41e73"
    />
  </div>
  );
};

export default UseMemo;
