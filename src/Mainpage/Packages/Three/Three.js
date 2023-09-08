import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Three.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const Three = () => {
  return (
    <div className={styles.codebox}>
      <p className={app_styles.p}>*非React寫法</p>
      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>建立3D網頁</p>
      <h1 className={app_styles.h1}>範例</h1>
      <h2 className={app_styles.h2}>步驟1:index.js引入{`<script>`}</h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/4ab1286cfcc39442a859968078ddccc1"
      />

      <h2 className={app_styles.h2}>步驟2:使用在網頁上</h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/87dd0fb4342b649a47ddad6d8601c679"
      />
    </div>
  );
};

export default Three;
