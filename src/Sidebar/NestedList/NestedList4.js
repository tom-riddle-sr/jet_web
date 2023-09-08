import React, { useState } from "react";
import Arrow_up from "../../asset/arrow_up.png";
import Arrow_down from "../../asset/arrow_down.png";
import Cat from "../../asset/cat.png";
import clsx from "clsx";
import styles from "../NestedList/NestedList.module.scss";

const NestedList4 = (props) => {
  const { navigate } = props;

  const [div4, setDiv4] = useState(true);
  const arrow_up_function = () => {
    setDiv4(false);
  };
  const arrow_down_function = () => {
    setDiv4(true);
  };

  return (
    <div className="nestlist1 ">
      <div>
        <div className={styles.nestlist_title_box}>
          <p className={styles.title}>Git</p>
          {div4 ? (
            <img
              className={styles.arrow}
              onClick={() => {
                arrow_up_function();
              }}
              src={Arrow_up}
              alt="arrow_up"
            ></img>
          ) : (
            <img
              className={styles.arrow}
              onClick={() => {
                arrow_down_function();
              }}
              src={Arrow_down}
              alt="arrow_up"
            ></img>
          )}
        </div>
        <div className={clsx(div4 && styles.disappear)}>
          <div className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>觀念</p>
          </div>
          <div
            className={styles.li_box}
            onClick={() => {
              navigate("/Git/Command");
            }}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>指令</p>
          </div>
          <div
            className={styles.li_box}
            onClick={() => {
              navigate("/Git/Page");
            }}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>pages</p>
          </div>
          <div
            className={styles.li_box}
            onClick={() => {
              navigate("/Git/Gist");
            }}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>gist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedList4;
