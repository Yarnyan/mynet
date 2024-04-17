import React, { useState } from 'react';
import styles from './StartComponent.module.scss';
import { Button } from 'reactstrap';
import RegistrationModule from '../../module/registration/RegistrationModule';
import LauncherDownloadModal from '../../module/modal/LauncherDownloadModal';

export default function StartPlayingComponent({ id, subtitle, title, buttonTitle }) {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [showLauncherModal, setShowLauncherModal] = useState(false);

    const openRegistrationModal = () => {
        setShowRegistrationModal(true);
    };

    const closeRegistrationModal = () => {
        setShowRegistrationModal(false);
    };

    const openLauncherModal = () => {
        setShowLauncherModal(true);
    };

    const closeLauncherModal = () => {
        setShowLauncherModal(false);
    };

    return (
        <div className={styles.StartPlayingComponent}>
            <div className={styles.content}>
                <h1>Шаг {id}</h1>
                <p>{subtitle}</p>
                <p>{title}</p>
            </div>
            {/* Отображаем кнопку в зависимости от buttonTitle */}
            {buttonTitle === 'Регистрация' ? (
                <button className={styles.button} onClick={openRegistrationModal}>
                    {buttonTitle}
                </button>
            ) : buttonTitle === 'Скачать лаунчер' ? (
                <button className={styles.button} onClick={openLauncherModal}>
                    {buttonTitle}
                </button>
            ) : (
                <button className={styles.button}>
                    {buttonTitle}
                </button>
            )}
            {/* Отображаем модальные окна в зависимости от состояний */}
            {showRegistrationModal && (
                <RegistrationModule isOpen={showRegistrationModal} toggle={closeRegistrationModal} />
            )}
            {showLauncherModal && (
                <LauncherDownloadModal isOpen={showLauncherModal} toggle={closeLauncherModal} />
            )}
        </div>
    );
}
