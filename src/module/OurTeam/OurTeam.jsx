import React from 'react'
import ServerPersonnel from '../../components/server/ServerPersonnel'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import styles from './OurTeam.module.scss'
export default function OurTeam() {
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.ourTeam__container}>
                    <div className={styles.ourTeam__container_content}>
                        <p style={{ marginBottom: '16px' }}>Pixelmon <span>1.12.2</span></p>
                        <ServerPersonnel />
                    </div>
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
