import React from 'react'
import styles from './DonateComponent.module.scss'
export default function DonateComponent() {
  return (
    <div className={styles.donate}>
      <div className={styles.donate__container}>
        <img src="/image/donateImage.png" alt="" />
        <h5>Привелегия</h5>
        <div className={styles.donate__container_btn}>
          <p>999 рублей</p>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  )
}
