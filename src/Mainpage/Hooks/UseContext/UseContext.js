import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseContext.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const UseContext = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>UseContext 引入</h1>
      <Codebox text='import { useContext } from "react";' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>
        useContext能夠不論父子層關係 ，互相傳遞值或function等各種數據的方式
      </p>
      <h2 className={app_styles.h2}>步驟1:</h2>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/e721093b2182d74b073585b3b875c5e0"
      />
         <h2 className={app_styles.h2}>步驟2:</h2>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/bbb9ebf2fdb1feaf84da93acbce64f1d"
      />
    </div>
  );
};

export default UseContext;
