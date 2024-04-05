import React from 'react'
import styles from './Servers.module.scss'
export default function ServersBar() {
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
                <p>Magic</p>
                <p>1228</p>
            </div>
            <div className={styles.Servers__container_server}>
                <p>Pixelmon</p>
                <p>0</p>
            </div>
            <div className={styles.Servers__container_server}>
                <p>Create</p>
                <p>18</p>
            </div>
            <div className={styles.Servers__container_server}>
                <p>Tech</p>
                <p>8</p>
            </div>
        </div>
    </div>
  )
}
