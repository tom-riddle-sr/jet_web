import React, { useState } from "react";
import Logo from "../../asset/wallcat1.png";
import styles from "./Sidebar.module.scss";
import NestedList1 from "../NestedList/NestedList1";
import NestedList2 from "../NestedList/NestedList2";
import NestedList3 from "../NestedList/NestedList3";
import NestedList4 from "../NestedList/NestedList4";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const [change_color, setChange_color] = useState("");

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_div1}>
        <img className={styles.logo} src={Logo} alt="logo"></img>
        <p className={styles.title}>西西の筆記</p>
      </div>
      <NestedList1
        navigate={navigate}
        change_color={change_color}
        setChange_color={setChange_color}
      />
      <NestedList2
        navigate={navigate}
        change_color={change_color}
        setChange_color={setChange_color}
      />
      <NestedList3
        navigate={navigate}
        change_color={change_color}
        setChange_color={setChange_color}
      />
      <NestedList4
        navigate={navigate}
        change_color={change_color}
        setChange_color={setChange_color}
      />

    </div>
  );
};

export default Sidebar;
// React介紹 流程 安裝
// Hooks
// 套件
// Git(git pages
// 補充email box
