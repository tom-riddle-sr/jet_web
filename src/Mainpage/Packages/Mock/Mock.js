import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Mock.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const Mock = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Mock.js 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install mockjs --save-dev" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add mockjs --dev" />
      <h1 className={app_styles.h1}>Mock.js 引入</h1>
      <Codebox text='import Mock from "mockjs";' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>
        幫助生成假資料，用於協助任何測試 ex:API test
      </p>
      <h1 className={app_styles.h1}>範例</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/0f8479ab116bed25bf71a763ef87cc97"
      />
    </div>
  );
};

export default Mock;
