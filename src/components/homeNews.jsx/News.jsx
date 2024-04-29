import React from 'react'
import styles from './News.module.scss'
import { Link } from 'react-router-dom'
export default function News() {
  return (
    <div className={styles.News__container}>
        <div className={styles.News__container_subtitle}>
            <h1>ВАЙП И ОБНОВЛЕНИЕ TECHNOMAGICRPG</h1>
        </div>
        <div className={styles.News__container_tags}>
          <div className={styles.tags}>Тег</div>
          <div className={styles.tags}>Тег</div>
          <div className={styles.tags}>Тест</div>
        </div>
        <div className={styles.News__container_image}>
          <img src="/image/newsImage.png" alt="" />
        </div>
        <div className={styles.News__container_description}>
          <p>Новости, краткое описание</p>
        </div>
        <div className={styles.News__container_infoDate}>
          <p>09.03.2024</p>
          <Link to={'/news'}>Посмотреть полностью</Link>
        </div>
    </div>
  )
}
