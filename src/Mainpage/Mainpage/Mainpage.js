import React, { useState } from "react";
import clsx from "clsx";
import styles from "../Mainpage/Mainpage.module.scss";
import Wallcat_green from "../../asset/wallcat3.png";
import Wallcat_white from "../../asset/wallcat1.png";
import { Outlet } from "react-router-dom";
import emailjs from "emailjs-com";
//https://dashboard.emailjs.com/admin

const Mainpage = () => {
  const [open_switch, setOpen_switch] = useState(true);
  const [button_text, setButton_Text] = useState("送出");
  const change_text = () => {
    setButton_Text("👍");
    setTimeout(() => {
      setButton_Text("送出");
    }, 200);
  };

  const [email_data, setEmail_data] = useState({
    name: "",
    mail: "",
    message: "",
  });
  const openbox = () => {
    setOpen_switch(false);
  };
  const closebox = () => {
    setOpen_switch(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail_data({
      ...email_data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("sdsds");
    const SERVICE_ID = "service_vmk2kwt";
    const TEMPLATE_ID = "template_yaidsz2";
    const PUBLIC_KEY = "BvwNMZ_MU4P26nC9G";

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: email_data.name,
        to_name: "Loti",
        from_email: email_data.mail,
        to_email: "smile9532023@gmail.com",
        message: email_data.message,
      },
      PUBLIC_KEY
    );
  };
  // service_vmk2kwt #service id
  // template_yaidsz2 #template id
  // BvwNMZ_MU4P26nC9G #public key

  console.log(email_data);
  return (
    <div className={styles.mainpage}>
      <div className={clsx(styles.intro_box, styles.disappear)}>
        <p className={styles.p1}>Welcome to 婐ㄉ酷酷筆記本</p>
        <p className={styles.p2}>泥可以在這裡得到......</p>
        <p className={styles.p2}>React相關知識、套件、Git相關知識</p>
        <p className={styles.p2}>喜歡的話還可以寄信給我 ⌓‿⌓</p>
      </div>
      <Outlet />
      <form onSubmit={handleSubmit}>
        <div className={styles.mailbox}>
          <img
            className={clsx(styles.wallcat, open_switch && styles.disappear)}
            src={Wallcat_green}
            onClick={() => {
              closebox();
            }}
            alt="wallcat"
          ></img>
          <img
            className={clsx(
              styles.wallcat2,
              open_switch ? "" : styles.disappear
            )}
            src={Wallcat_white}
            onClick={() => {
              openbox();
            }}
            alt="wallcat"
          ></img>
          <div className={clsx(styles.square, open_switch && styles.disappear)}>
            <label className={styles.mailname}>姓名:</label>
            <input
              className={styles.mailname_input}
              name="name"
              value={email_data.name}
              onChange={handleChange}
            ></input>
            <label className={styles.mailmail}>聯絡信箱:</label>
            <input
              className={styles.mailmail_input}
              name="mail"
              value={email_data.mail}
              onChange={handleChange}
            ></input>
            <label className={styles.mailquestion}>有什麼問題?</label>
            <textarea
              className={styles.mailquestion_input}
              name="message"
              value={email_data.message}
              onChange={handleChange}
            ></textarea>
            <button onClick={change_text} className={styles.mailbutton}>
              {button_text}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mainpage;
