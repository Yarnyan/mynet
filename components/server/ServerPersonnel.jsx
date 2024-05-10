import React from 'react'
import styles from './ServerComponent.module.scss'
export default function ServerPersonnel() {
  return (
    <div className={styles.ServerPersonnel}>
        <img src="/image/skin.png" alt="" />
        <div className={styles.ServerPersonnel__about}>
            <p>Steve</p>
            <p>Главный админ или другая должность</p>
        </div>
    </div>
  )
}
