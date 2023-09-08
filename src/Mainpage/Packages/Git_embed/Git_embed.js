import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Git_embed.module.scss";
import app_styles from "../../../app.module.scss";
const Git_embed = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Git_embed 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm i react-embed-gist" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add react-embed-gist" />
      <h2 className={app_styles.h2}>Git_embed import</h2>
      <Codebox text="import ReactEmbedGist from 'react-embed-gist'" />
      <h1 className={app_styles.h1}>步驟</h1>
      <h2 className={app_styles.h2}>step1.</h2>
      <p className={app_styles.p}>
        在GitHub Gist上，放上你要呈現在網頁上的code
      </p>
      <h2 className={app_styles.h2}>step2.</h2>
      <p className={app_styles.p}>複製embed上的url貼到自己的專案中</p>
    </div>
  );
};

export default Git_embed;
