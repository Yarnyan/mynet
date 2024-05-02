import React, { useState } from 'react';
import styles from './StartComponent.module.scss';
import { Button } from 'reactstrap';
import RegistrationModule from '../../module/registration/RegistrationModule';
import LauncherDownloadModal from '../../module/modal/LauncherDownloadModal';
import { useNavigate } from 'react-router-dom';

export default function StartPlayingComponent({ id, subtitle, title, buttonTitle }) {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [showLauncherModal, setShowLauncherModal] = useState(false);
    const navigate = useNavigate()

    const openRegistrationModal = () => {
        setShowRegistrationModal(true);
        setTimeout(() => {
            resetScroll();
          }, 1);
    };

    const closeRegistrationModal = () => {
        setShowRegistrationModal(false);
        setTimeout(() => {
            resetScroll();
          }, 1);
    };

    const openLauncherModal = () => {
        setShowLauncherModal(true);
        setTimeout(() => {
            resetScroll();
          }, 1);
    };

    const closeLauncherModal = () => {
        setShowLauncherModal(false);
        setTimeout(() => {
            resetScroll();
          }, 1);
    };

    const resetScroll = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; 
      };
    return (
        <div className={styles.StartPlayingComponent}>
            <div className={styles.content}>
                <h1>Шаг {id}</h1>
                <p>{subtitle}</p>
                <p>{title}</p>
            </div>
            {buttonTitle === 'Регистрация' ? (
                <button className={styles.button} onClick={openRegistrationModal}>
                    {buttonTitle}
                </button>
            ) : buttonTitle === 'Скачать лаунчер' ? (
                <button className={styles.button} onClick={openLauncherModal}>
                    {buttonTitle}
                </button>
            ) : (
                <button className={styles.button} onClick={() => navigate('/servers')}>
                    {buttonTitle}
                </button>
            )}
            {showRegistrationModal && (
                <RegistrationModule isOpen={showRegistrationModal} toggle={closeRegistrationModal} />
            )}
            {showLauncherModal && (
                <LauncherDownloadModal isOpen={showLauncherModal} toggle={closeLauncherModal} />
            )}
        </div>
    );
}
