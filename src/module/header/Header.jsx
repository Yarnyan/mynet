import React from 'react'
import styles from './Header.module.scss'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.header__container_logo} to={'/'}>
          <img src="/logo.png" alt="" />
          <h1><span>My</span>Net</h1>
        </Link>
        <div className={styles.header__container_nav}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/Donate'}>Донат</Link>
          <Link to={'/Servers'}>Сервера</Link>
          <Link to={'/Rules'}>Правила</Link>
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
