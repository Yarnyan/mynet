import React from 'react'
import styles from './ServerComponent.module.scss'
export default function ServerDescription() {
    return (
        <div className={styles.ServerDescription}>
            <div className={styles.ServerDescription__content}>
                <img src="/image/modeLogo.png" alt="" />
                <div className={styles.ServerDescription__about}>
                    <p>MrCrayfish’s Furniture</p>
                    <p>Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода Описание мода </p>
                </div>
            </div>
        </div>
    )
}
