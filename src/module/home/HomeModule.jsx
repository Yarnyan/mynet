import React from 'react'
import styles from './Home.module.scss'
import News from '../../components/homeNews.jsx/News'
import Auth from '../../components/auth/Auth'
import ServersBar from '../../components/serversBar/ServersBar'
import Profile from '../../components/profile/Profile'
export default function HomeModule() {

  return (
    <div className={styles.home__container}>
      <div className={styles.home__container_news}>
        <News />
        {/* <News /> */}
      </div>
      <div className='home__container_monitor'>
        <div className='home__container_auth'>
          <Profile />
        </div>
        <div className='home__container_servers'>
          <div className='home__servers_subtitle'>
            <h1>Наши сервера</h1>
          </div>
          <div className='home__servers_content'>
            <ServersBar />
          </div>
        </div>
      </div>
    </div>
  )
}
