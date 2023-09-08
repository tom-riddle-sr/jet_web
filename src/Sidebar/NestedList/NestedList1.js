import React, { useState } from "react";
import Arrow_up from "../../asset/arrow_up.png";
import Arrow_down from "../../asset/arrow_down.png";
import Cat from "../../asset/cat.png";
import clsx from "clsx";
import styles from "../NestedList/NestedList.module.scss";

const NestedList1 = (props) => {
  const { navigate, change_color, setChange_color } = props;
  const [div1, setDiv1] = useState(false);
  const [introduce_switch, setIntroduce_switch] = useState(false);
  const arrow_up_function = () => {
    setDiv1(false);
  };
  const arrow_down_function = () => {
    setDiv1(true);
  };

  return (
    <div className="nestlist1 ">
      <div>
        <div className={styles.nestlist_title_box}>
          <p className={styles.title}>React</p>
          {div1 ? (
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
        <div className={clsx(div1 && styles.disappear)}>
          <div
            onClick={(e) => {
              navigate("/React/introduce");
              setIntroduce_switch(true);
              console.log(e)
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={clsx(styles.li_text)}>介紹</p>
          </div>
          <div className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>特別用法</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedList1;
