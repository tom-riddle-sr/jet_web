import React, { useState } from "react";
import Arrow_up from "../../asset/arrow_up.png";
import Arrow_down from "../../asset/arrow_down.png";
import Cat from "../../asset/cat.png";
import clsx from "clsx";
import styles from "../NestedList/NestedList.module.scss";


const NestedList2 = (props) => {
  const { navigate} = props;
  const [div2, setDiv2] = useState(true);
  const arrow_up_function = () => {
    setDiv2(false);
  };
  const arrow_down_function = () => {
    setDiv2(true);
  };

  return (
    <div className="nestlist1 ">
      <div>
      <div className={styles.nestlist_title_box}>
        <p className={styles.title}>Hooks</p>
          {div2 ? (
            <img className={styles.arrow}
              onClick={() => {
                arrow_up_function();
              }}
              src={Arrow_up}
              alt="arrow_up"
            ></img>
          ) : (
            <img className={styles.arrow}
              onClick={() => {
                arrow_down_function();
              }}
              src={Arrow_down}
              alt="arrow_up"
            ></img>
          )}
        </div>
        <div className={clsx(div2 && styles.disappear)}>
          <div  onClick={() => {
            navigate("/Hooks/UseState");
          }} className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useState</p>
          </div>
          <div onClick={() => {
              navigate("/Hooks/UseEffect");
            }} className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useEffect</p>
          </div>
          <div onClick={() => {
              navigate("/Hooks/UseRef");
            }} className={styles.li_box}>
            <img  className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useRef</p>
          </div>
          <div onClick={() => {
              navigate("/Hooks/UseContext");
            }} className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useContext</p>
          </div>
          <div onClick={() => {
              navigate("/Hooks/UseCallback");
            }} className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useCallback</p>
          </div>
          <div onClick={() => {
              navigate("/Hooks/UseMemo");
            }} className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useMemo</p>
          </div>
          <div onClick={() => {
              navigate("/Hooks/UseReducer");
            }} className={styles.li_box}>
            <img className={styles.cat_icon} src={Cat} alt="cat"></img>
            <p className={styles.li_text}>useReducer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedList2;
