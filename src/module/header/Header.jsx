import React from 'react'
import styles from './Header.module.scss'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__container_logo}>
          <img src="/logo.png" alt="" />
          <h1><span>My</span>Net</h1>
        </div>
        <div className={styles.header__container_nav}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/'}>Донат</Link>
          <Link to={'/'}>Сервера</Link>
          <Link to={'/'}>Правила</Link>
        </div>
        <div className={styles.header__container_btn}>
          <button>
            <p>Скачать лаунчер</p>
          </button>
        </div>
      </div>
    </div>
  )
}
