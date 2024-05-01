import React, { useState, useRef } from 'react';
import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import LauncherDownloadModal from '../modal/LauncherDownloadModal';
import Auth from '../../components/auth/Auth';
import Profile from '../../components/profile/Profile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
  const [showLauncherModal, setShowLauncherModal] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const scrollRef = useRef(0);

  const openLauncherModal = () => {
    scrollRef.current = window.pageYOffset;
    setShowLauncherModal(true);
    setTimeout(() => {
      restoreScroll();
    }, 1);
  };

  const closeLauncherModal = () => {
    setShowLauncherModal(false);
  };

  const restoreScroll = () => {
    window.scrollTo(0, scrollRef.current);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowOverlay(!showOverlay);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.header__container_logo} to={'/'}>
          <img src="/logo.png" alt="" />
          <h1><span>My</span>Net</h1>
        </Link>
        <button className={`${styles.header__container_burger} ${showNav ? styles.active : ''}`} onClick={toggleNav}>
          {showNav ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`${styles.header__container_nav}`}>
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
      <div className={`${styles.header__container_overlay} ${showOverlay ? 'show' : ''}`}>
        <div className={styles.header__burger_nav}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/donate'}>Донат</Link>
        </div>
        <div className={styles.header__burger_nav2}>
          <Link to={'/servers'}>Сервера</Link>
          <Link to={'/rules'}>Правила</Link>
        </div>
        {/* <Auth /> */}
        <Profile />
      </div>
      {showLauncherModal && (
        <LauncherDownloadModal isOpen={showLauncherModal} toggle={closeLauncherModal} />
      )}
    </div>
  );
}