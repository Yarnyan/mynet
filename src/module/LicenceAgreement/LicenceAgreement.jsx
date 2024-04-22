import React from 'react'
import styles from './LicenceAgreement.module.scss'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import { terms } from '../../data/data'
export default function LicenceAgreement() {
  return (
    <div className='home__container'>
      <div className='home__container_news'>
        <div className={styles.Licence}>
          {terms.map((item) => {
            return (
              <div className={styles.Licence__container}>
                <h1>{item.subtitle}</h1>
                <p>{item.term}</p>
              </div>
            )
          })}
        </div>
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
