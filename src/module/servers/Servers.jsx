import React from 'react'
import styles from './Servers.module.scss'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import ServersComponent from '../../components/servers/ServersComponent'
export default function Servers() {
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.servers__container}>
                    <ServersComponent />
                    <ServersComponent />
                    <ServersComponent />
                    <ServersComponent />
                    <ServersComponent />
                </div>
            </div>
            <div className='home__container_monitor'>
                <div className='home__container_auth'>
                    <Profile />
                </div>
                <div className='home__container_servers'>
                    <div className='home__servers_subtitle'>
                        <h1>Наши сервер</h1>
                    </div>
                    <div className='home__servers_content'>
                        <ServersBar />
                    </div>
                </div>
            </div>
        </div>
    )       
}
