import React from 'react'
import styles from './StartPlaying.module.scss'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import StartPlayingComponent from '../../components/startPlaying/StartPlayingComponent'
import { startToPlay } from '../../data/data'
export default function StartPlaying() {
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.StartPlaying__content}>
                    {startToPlay.map((item) => {
                        return (
                            <StartPlayingComponent id={item.id} subtitle={item.subtitle} title={item.title} buttonTitle={item.buttonTitle} path={item.pathButton}/>
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
