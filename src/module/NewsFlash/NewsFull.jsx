import React, { useState, useEffect } from 'react'
import styles from '../home/Home.module.scss'
import News from '../../components/homeNews.jsx/News'
import Auth from '../../components/auth/Auth'
import Servers from '../../components/servers/Servers'
import Profile from '../../components/profile/Profile'
import NewsFlash from '../../components/newsFlash/NewsFlash'
export default function NewsFull() {
    const token = ''
    return (
        <div className={styles.home__container}>
            <div className={styles.home__container_news}>
                <NewsFlash />
                <NewsFlash />
            </div>
            <div className={styles.home__container_monitor}>
                <div className={styles.home__container_auth}>
                    {token ? <Profile /> : <Auth /> }
                </div>
                <div className={styles.home__container_servers}>
                    <div className={styles.home__servers_subtitle}>
                        <h1>Наши сервер</h1>
                    </div>
                    <div className={styles.home__servers_content}>
                        <Servers />
                    </div>
                </div>
            </div>
        </div>
    )
}
