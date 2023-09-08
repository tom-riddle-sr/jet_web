import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Gist.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const UseCallback = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>ReactEmbedGist 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install react-embed-gist --save" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add react-embed-gist" />
      <h1 className={app_styles.h1}>ReactEmbedGist 引入</h1>
      <Codebox text='import ReactEmbedGist from "react-embed-gist";' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>放程式碼在網站上</p>

      <h1 className={app_styles.h1}>範例</h1>
      <h2 className={app_styles.h2}>步驟1:安裝&引入</h2>
      <h2 className={app_styles.h2}>步驟2:開啟Github Gist</h2>
      <h2 className={app_styles.h2}>步驟3:寫要放在網站上的code</h2>
      <h2 className={app_styles.h2}>步驟3:複製完成網址貼到自己的網頁上</h2>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/799614ba159ecb8e081edfefee196052"
        // 完成的Gist網址
      />
    </div>
  );
};

export default UseCallback;
