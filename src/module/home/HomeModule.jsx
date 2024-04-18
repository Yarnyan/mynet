import React from 'react'
import styles from './Home.module.scss'
import News from '../../components/homeNews.jsx/News'
import Auth from '../../components/auth/Auth'
import ServersBar from '../../components/serversBar/ServersBar'
import Profile from '../../components/profile/Profile'
export default function HomeModule() {

  const token = '11'
  return (
    <div className={styles.home__container}>
      <div className={styles.home__container_news}>
        <News />
        <News />
      </div>
      <div className={styles.home__container_monitor}>
        <div className={styles.home__container_auth}>
          {token ? <Profile /> : <Auth /> }
        </div>
        <div className={styles.home__container_servers}>
          <div className={styles.home__servers_subtitle}>
            <h1>Наши сервера</h1>
          </div>
          <div className={styles.home__servers_content}>
            <ServersBar />
          </div>
        </div>
      </div>
    </div>
  )
}
