import React, { useState } from "react";
import Arrow_up from "../../asset/arrow_up.png";
import Arrow_down from "../../asset/arrow_down.png";
import Cat from "../../asset/cat.png";
import clsx from "clsx";
import styles from "../NestedList/NestedList.module.scss";

const NestedList3 = (props) => {
  const { navigate } = props;

  const [div3, setDiv3] = useState(true);
  const arrow_up_function = () => {
    setDiv3(false);
  };
  const arrow_down_function = () => {
    setDiv3(true);
  };

  return (
    <div className="nestlist1 ">
      <div>
        <div className={styles.nestlist_title_box}>
          <p className={styles.title}>Package</p>
          {div3 ? (
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
        <div className={clsx(div3 && styles.disappear)}>
          <div
            onClick={() => {
              navigate("/Package/Eslint");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>Eslint</p>
          </div>
          <div
            onClick={() => {
              navigate("/Package/Sass");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>SASS/SCSS</p>
          </div>
          <div
            onClick={() => {
              navigate("/Package/Clsx");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>clsx</p>
          </div>
          <div
            onClick={() => {
              navigate("/Package/Material_UI");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>Material-UI</p>
          </div>
          <div
            onClick={() => {
              navigate("/Package/Mock");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>Mock.js</p>
          </div>
          <div
            onClick={() => {
              navigate("/Package/I18n");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>i18n</p>
          </div>
          <div
            onClick={() => {
              navigate("/Package/Three");
            }}
            className={styles.li_box}
          >
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>three.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedList3;
