import React, { useState, useRef } from 'react';
import styles from './Cabinet.module.scss';
import ReactSkinview3d from "react-skinview3d"
export default function Information() {
    const fileInputRef = useRef(null);
    const capeFileInputRef = useRef(null);
    const [skinUrl, setSkinUrl] = useState("/image/Белогвардеец.png");
    const [capeUrl, setCapeUrl] = useState("/image/E-Sound.png");
    const handleSkinChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSkinUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleCapeChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCapeUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleCapeClick = () => {
        capeFileInputRef.current.click();
    };
    return (
        <div className={styles.Cabinet__container}>
            <input
                type="file"
                accept=".png, .jpg, .jpeg"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleSkinChange}
            />
            <input
                type="file"
                accept=".png, .jpg, .jpeg"
                ref={capeFileInputRef}
                style={{ display: 'none' }}
                onChange={handleCapeChange}
            />
            <div className={styles.Cabinet__container_items}>
                <div className={styles.Cabinet__skin}>
                    <div className={styles.skin}>
                        <ReactSkinview3d
                            skinUrl={skinUrl}
                            capeUrl={capeUrl}
                            height="250"
                            width="208"
                        />
                    </div>
                    <div className={styles.Cabinet__skin_btn}>
                        <button onClick={handleClick}>Сменить скин</button>
                        <button onClick={handleCapeClick}>Сменить плащ</button>
                    </div>
                </div>
                <div className={styles.Cabinet__information_user}>
                    <div className={styles.user__information}>
                        <p>Никнейм</p>
                        <p>rus_037</p>
                    </div>
                    <div className={styles.user__information}>
                        <p>Почта</p>
                        <p>user@test.ru</p>
                    </div>
                    <div className={styles.user__information}>
                        <p>Дата регистрации</p>
                        <p>10.03.2024 в 17:53</p>
                    </div>
                    <div className={styles.user__information}>
                        <p>Последний вход</p>
                        <p>10.03.2024 в 17:53</p>
                    </div>
                    <div className={styles.user__information}>
                        <p>Проведено на проекте</p>
                        <p>2 часа</p>
                    </div>
                    <div className={`${styles.user__information} ${styles.user__information_block}`}>
                        <p>Блокировка</p>
                        <p>На неопределённый срок</p>
                    </div>
                </div>
                <div className={styles.Cabinet__balance}>
                    <div className={styles.Cabinet__balance_rub}>
                        <img src="/icons/wallet.svg" alt="" />
                        <div className={styles.Cabinet__rub}>
                            <p>Реальный баланс</p>
                            <p className={styles.rub}>999 рублей</p>
                        </div>
                    </div>
                    <div className={styles.Cabinet__balance_apex}>
                        <img src="/icons/wallet.svg" alt="" />
                        <div className={styles.Cabinet__apex}>
                            <p>Игровая валюта</p>
                            <p className={styles.apex}>1999 apex</p>
                        </div>
                    </div>
                    <div className={styles.Cabinet__balance_btn}>
                        <button>Пополнить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
