import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./UseState.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const UseState = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>UseState 引入</h1>
      <Codebox text='import { useState } from "react";' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/ec05d00cbb6dece7ad23fa3e9ad16e10"
      />
      <h1 className={app_styles.h1}>範例</h1>

      <h2 className={app_styles.h2}>用法1:簡單顯示</h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/71aa69df06ee2c841b86c2d704e85254"
      />
      <h2 className={app_styles.h2}>用法2:改變狀態變量 </h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/ffdbd6986a21035e08ec4f36c5ce2bd0"
      />
    </div>
  );
};

export default UseState;
