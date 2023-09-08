import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Page.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const UseCallback = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>pages 部署工具安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save gh-pages" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add gh-pages" />
      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>在Github上用pages發布靜態網站</p>
      <h1 className={app_styles.h1}>範例</h1>
      <h2 className={app_styles.h2}>步驟1:安裝pages 部署工具</h2>
      <h2 className={app_styles.h2}>步驟2:更改package.json</h2>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/2dc52dc20cdcd5866b2b48557cb700a7"
      />
      <h2 className={app_styles.h2}>步驟3:建立一個GitHub repo</h2>
      <h2 className={app_styles.h2}>步驟4:發布網站</h2>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm run deploy" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn deploy" />
      <h2 className={app_styles.h2}>步驟5:查看結果</h2>
    </div>
  );
};

export default UseCallback;
