import React from 'react'
import styles from './Servers.module.scss'
export default function ServersBar() {
    const magicPlayersCount = 1228;
    const magicPlayersCountOff = 'offline';
    return (
        <div className={styles.Servers__container}>
            <div className={styles.Servers__container_title}>
                <div className={styles.Servers__container_version}>
                    <p>1.12.2</p>
                </div>
                <div className={styles.Servers__container_online}>
                    <p>1254</p>
                    <img src="/icons/people.svg" alt="" />
                </div>
            </div>
            <div className={styles.Servers__container_item}>
                <div className={styles.Servers__container_server}>
                    <div className={styles.server__span}>
                        <p>Magic</p>
                        {magicPlayersCount !== 0 && <div className={styles.NoZeroPlayers}></div>}
                    </div>
                    <p>1228</p>
                </div>
                <div className={styles.Servers__container_server}>
                    <div className={styles.server__span}>
                        <p>Magic</p>
                        {magicPlayersCountOff === 'offline' && <div className={styles.ZeroPlayers}></div>}
                    </div>
                    <p>offline</p>
                </div>
                <div className={styles.Servers__container_server}>
                    <div className={styles.server__span}>
                        <p>Magic</p>
                        {magicPlayersCount !== 0 && <div className={styles.NoZeroPlayers}></div>}
                    </div>
                    <p>18</p>
                </div>
                <div className={styles.Servers__container_server}>
                    <div className={styles.server__span}>
                        <p>Magic</p>
                        {magicPlayersCountOff === 'offline' && <div className={styles.ZeroPlayers}></div>}
                    </div>
                    <p>offline</p>
                </div>
            </div>
        </div>
    )
}
