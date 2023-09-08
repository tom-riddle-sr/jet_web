import React from "react";
import Codebox from "../../../component /Codebox/Codebox";
import styles from "./Clsx.module.scss";
import app_styles from "../../../app.module.scss";
import ReactEmbedGist from "react-embed-gist";


const Clsx = () => {
  return (
    <div className={styles.codebox}>
      <h1 className={app_styles.h1}>Clsx 安裝</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npm install --save clsx" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn add clsx" />

      <h1 className={app_styles.h1}>Clsx 引入</h1>
      <Codebox text='import clsx from "clsx"' />
      <h1 className={app_styles.h1}>工作原理</h1>
      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/4695901f03b52b7154c5e24fb5ac79c1"
      />
      <h1 className={app_styles.h1}>範例</h1>

      <h2 className={app_styles.h2}>用法1:控制不同狀態className的顯示</h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/0a5a42a3dad827034afef1693e91f9be"
      />
      <h2 className={app_styles.h2}>用法2:直接寫判斷在className </h2>

      <ReactEmbedGist
        wrapperClass={app_styles.gist}
        gist="tom-riddle-sr/5494c818ea19715988758d335c42e6c3"
      />
    </div>
  );
};

export default Clsx;
