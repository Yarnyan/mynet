import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import LauncherDownloadModal from '../modal/LauncherDownloadModal';
export default function Header() {
  const [showLauncherModal, setShowLauncherModal] = useState(false);
  const openLauncherModal = () => {
    setShowLauncherModal(true);
    setTimeout(() => {
      resetScroll();
    }, 1);
  };

  const closeLauncherModal = () => {
    setShowLauncherModal(false);
    setTimeout(() => {
      resetScroll();
    }, 1);
  };
  const resetScroll = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 
  };
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
          <button onClick={openLauncherModal}>
            <p>Скачать лаунчер</p>
          </button>
        </div>
      </div>
      {showLauncherModal && (
        <LauncherDownloadModal isOpen={showLauncherModal} toggle={closeLauncherModal} />
      )}
    </div>
  )
}
