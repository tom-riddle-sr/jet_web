import React from "react";
import Codebox from "../../component /Codebox/Codebox";
import styles from "./React_intro.module.scss";
import app_styles from "../../app.module.scss";
const React_intro = () => {
  return (
    <div className={styles.react_intro}>
      <h1 className={app_styles.h1}>安裝:</h1>
      <h2 className={app_styles.h2}>npm</h2>
      <Codebox text="npx create-react-app my-app" />
      <h2 className={app_styles.h2}>yarn</h2>
      <Codebox text="yarn create react-app my-app" />
      <h1 className={app_styles.h1}>React 工作原理:</h1>
      <p className={app_styles.p}>
        React 是基於JavaScript用於建構用戶界面的前端函式庫
        透過建立Component搭配不同儲存的State
        Diff算法比對虛擬DOM&真實DOM的差別做更新渲染
      </p>

      <h1 className={app_styles.h1}>React 特色:</h1>
      <h2 className={app_styles.h2}>組建化</h2>
      <p className={app_styles.p}>
        在小的東西都能分割成Component 自由度、可重複使用性更高
      </p>
      <h2 className={app_styles.h2}>虛擬DOM</h2>
      <p className={app_styles.p}>透過比對虛實DOM只更新需變化的地方 提高效率</p>
      <h2 className={app_styles.h2}>JSX語法</h2>
      <p className={app_styles.p}>用類似於HTML的擴展語法 方便、好上手</p>
      <h2 className={app_styles.h2}>狀態管理</h2>
      <p className={app_styles.p}>
        使用者可透過狀態、上下文、管理庫等改變更新組件、數據 
        有多種不同的Hooks幫助簡化程式，提升效率，執行副作用等
       
      </p>

      <h2 className={app_styles.h2}>SSR&SSG</h2>
      <h3 className={app_styles.h3}>--服務器端渲染 SSR</h3>
      <p className={app_styles.p}>
        傳統SPA中，要等瀏覽器下載JS完成才會顯示頁面，
        但SSR讓網頁在服務器端就完成含有JS的HTML檔案的渲染 再傳給瀏覽器端，
        使用者可以先看到網頁架構再慢慢看到加載完成的JS功能
      </p>

      <h3 className={app_styles.h3}>--靜態網站生成 SSG</h3>
      <p className={app_styles.p}>
        生成靜態HTML檔案直接提供給瀏覽器，不依賴服務器端渲染
      </p>
    </div>
  );
};

export default React_intro;
