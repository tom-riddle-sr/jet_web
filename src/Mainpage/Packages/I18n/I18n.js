import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./I18n.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const I18n = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>I18n 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install react-i18next i18next --save" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add react-i18next i18next" />
      <h1 className={app_styles.h1}>I18n 引入</h1>
      <Codebox text='import i18n from "i18next";' />

      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>幫助切換不同語言的工具</p>
      <h1 className={app_styles.h1}>範例</h1>
      <h2 className={app_styles.h2}>步驟1:建立設定檔＆語言檔</h2>
      <h3 className={app_styles.h3}>設定檔</h3>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/0d78d14e63217e5b95efee550e39de80"
      />
      <h3 className={app_styles.h3}>語言檔(json)</h3>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/d9de899c19810cee3dac2f06f46a2b8b"
      />
      <h2 className={app_styles.h2}>步驟2:使用在網頁上</h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/e5de5d55cbab5552769780543f50b607"
      />
    </div>
  );
};

export default I18n;
