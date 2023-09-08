import React from 'react'
import styles from "./Footer.module.scss"
import cat from "../asset/wallcat.png"

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img className={styles.cat} src={cat}></img>
      @copyright by Tom.riddle.SR
    </div>
  )
}

export default Footer
