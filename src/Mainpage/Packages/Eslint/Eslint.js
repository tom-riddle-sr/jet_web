import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Eslint.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const Eslint = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Eslint 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save Eslint" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add Eslint" />
      <h2 className={app_styles.h2}>初始化</h2>
      <Codebox text="eslint --init" />
      <h2 className={app_styles.h2}>查看是否安裝</h2>
      <Codebox text="eslint --version" />
      <h1 className={app_styles.h1}>Eslint 工作原理</h1>
      <p className={app_styles.p}>
        格式整理工具，可以在設定黨設定格式(rules)，有錯會提醒
      </p>
      <h1 className={app_styles.h1}>各種規則</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/b20b2debf45b564ef3429f53b7c3ffc4"
      />
    </div>
  );
};

export default Eslint;
