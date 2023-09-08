import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Material_UI.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";

const Material_UI = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Material_UI 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install @mui/material @emotion/react @emotion/styled" />
      <h2 className={app_styles.h2}>styled-component npm</h2>
      <Codebox text="npm install @mui/material @emotion/react @emotion/styled" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="npm install @mui/material @mui/styled-engine-sc styled-components" />
      <h2 className={app_styles.h2}>styled-component yarn</h2>
      <Codebox text="yarn add @mui/material @mui/styled-engine-sc styled-components" />
      <h1 className={app_styles.h1}>工作原理</h1>
      <p className={app_styles.p}>
      已經寫好的component，透過引入快速架構出網頁
      </p>
      <h1 className={app_styles.h1}>範例</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/bf8681e02174b9845e524244d267a873"
      />
     
    </div>
  );
};

export default Material_UI;
