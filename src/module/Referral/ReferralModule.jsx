import React from 'react'
import styles from './Referral.module.scss'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
export default function ReferralModule() {
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.Referral}>
                    <div className={styles.Referral_Statistics}>
                        <div className={styles.Statistics}>
                            <h1>Статистика рефералов</h1>
                            <div className={styles.Statistics_invited}>
                                <p>Всего приглашено:</p>
                                <p>32 игрока</p>
                            </div>
                            <div className={styles.Statistics_earned}>
                                <p>Всего заработано:</p>
                                <p>1228 рублей</p>
                            </div>
                        </div>
                        <div className={styles.ReferralLink}>
                            <h1>Ваша реферальная ссылка</h1>
                            <div className={styles.ReferralLink_link}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.TopReferrals}>
                        <h1>Топ ваших рефералов</h1>
                        <div className={styles.TopReferrals_user}>
                            <p>Steve принес вам</p>
                            <p>834.9 рублей</p>
                        </div>
                    </div>
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
