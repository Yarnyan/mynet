import React from 'react'
import styles from './ServersComponent.module.scss'
import { Link } from 'react-router-dom'
export default function ServersComponent() {
  return (
    <div className={styles.Servers}>
      <div className={styles.Servers__about}>
        <img src="/image/skin.png" alt="" />
        <div className={styles.Servers__about_name}>
          <p>HiTech</p>
          <p>1.12.2</p>
        </div>
      </div>
      <div className={styles.Servers__version}>
        <Link>Посетить</Link>
      </div>
    </div>
  )
}
