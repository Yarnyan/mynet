import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_logo}>
          <img src="/logo.png" alt="" />
          <h1><span>My</span>Net</h1>
        </div>
        <div className={styles.footer__container_information}>
          <p>Полезная информация</p>
          <Link className={styles.firstLink} to={'/22'}>Начать играть</Link>
          <Link to={'/22'}>Скачать лаунчер</Link>
          <Link to={'/22'}>Регистрация</Link>
          <Link to={'/22'}>Правила проекта</Link>
          <Link to={'/22'}>Форум</Link>
        </div>
        <div className={styles.footer__container_forUser}>
          <p>Для пользователей</p>
          <Link className={styles.firstLink} to={'/22'}>Лицензионное соглашение</Link>
          <Link to={'/22'}>Политика обработки персональных данных</Link>
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
    </div>
  )
}
