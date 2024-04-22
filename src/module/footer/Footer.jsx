import React, { useState, useRef } from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import LauncherDownloadModal from '../modal/LauncherDownloadModal';
import RegistrationModule from '../registration/RegistrationModule';
export default function Footer() {
  const [showLauncherModal, setShowLauncherModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const scrollRef = useRef(0);
  const openLauncherModal = () => {
    scrollRef.current = window.pageYOffset
    setShowLauncherModal(true);
    setTimeout(() => {
      restoreScroll();
    }, 1);
  };

  const openRegistrationModal = () => {
    scrollRef.current = window.pageYOffset
    setShowRegistrationModal(true);
    setTimeout(() => {
      restoreScroll();
    }, 1);
  };


  const closeLauncherModal = () => {
    setShowLauncherModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  const restoreScroll = () => {
    window.scrollTo(0, scrollRef.current);
  };
  
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_logo}>
          <img src="/logo.png" alt="" />
          <h1><span>My</span>Net</h1>
        </div>
        <div className={styles.footer__container_information}>
          <p>Полезная информация</p>
          <Link className={styles.firstLink} to={'/Start'}>Начать играть</Link>
          <button onClick={openLauncherModal}>Скачать лаунчер</button>
          <button onClick={openRegistrationModal}>Регистрация</button>
          <Link to={'/rules'}>Правила проекта</Link>
          <Link to={'/22'}>Форум</Link>
        </div>
        <div className={styles.footer__container_forUser}>
          <p>Для пользователей</p>
          <Link className={styles.firstLink} to={'/licence'}>Лицензионное соглашение</Link>
          <Link to={'/processing'}>Политика обработки персональных данных</Link>
          <Link to={'/22'}>Наша команда</Link>
        </div>
        <div className={styles.footer__conteint_social}>
          <Link target='_blank' to={'https://vk.com/MyNetMinecraft'}><img src="/icons/vk.svg" alt="" /></Link>
          <Link target='_blank' to={'https://discord.gg/3puE4ybRCG'}><img src="/icons/discord.svg" alt="" /></Link>
          <Link target='_blank' to={'https://t.me/MyNetMinecraft'}><img src="/icons/telegram.svg" alt="" /></Link>
          <Link target='_blank' to={'https://discord.gg/3puE4ybRCG'}><img src="/icons/YouTube.svg" alt="" /></Link>
          <Link target='_blank' to={'https://discord.gg/3puE4ybRCG'}><img src="/icons/tiktok.svg" alt="" /></Link>
        </div>
      </div>
      {showLauncherModal && (
        <LauncherDownloadModal isOpen={showLauncherModal} toggle={closeLauncherModal} />
      )}
      {showRegistrationModal && (
        <RegistrationModule isOpen={showRegistrationModal} toggle={closeRegistrationModal} />
      )}
    </div>
  )
}
