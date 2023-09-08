import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Copy_button.module.scss";

const Copy_button = (props) => {
  const { position, text } = props;
  const [name, setName] = useState("copy");



  const copy_function = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("複製到剪貼簿");
        setName("👍");
        setTimeout(() => {
          setName("copy");
        }, 200);
      })
      .catch((error) => {
        console.error("複製失敗原因", error);
      });
  };

  return (
    <div
      onClick={() => {
        copy_function();
      }}
      className={clsx(styles.copy_button, styles[position])}
      >
      {name}
    </div>
  );
};

export default Copy_button;
