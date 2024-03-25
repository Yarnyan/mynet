import React from 'react'
import styles from './Profile.module.scss'
import {Link} from 'react-router-dom'
export default function Profile() {
    const handleLogout = () => {
        console.log('a')
        localStorage.removeItem('token');
      };
  return (
    <div className={styles.Profile__container}>
        <div className={styles.Profile__container_information}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Profile__container_balance}>
                <h1>rus037</h1>
                <div className={styles.balance}>
                    <p>999 рублей</p>
                    <p className={styles.apex}>1999 apex</p>
                </div>
            </div>
        </div>
        <div className={styles.Profile__container_tools}>
            <Link to={'/PersonalCabinet'}>Личный кабинет</Link>
            <Link className={styles.Profile__tools_ref}>Реферальная система</Link>
        </div>
        <div className={styles.Profile__btn}>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    </div>
  )
}
