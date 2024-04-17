import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import styles from './Modal.module.scss';

const LauncherDownloadModal = ({ isOpen, toggle }) => {
    const [os, setOS] = useState(''); // Состояние для выбора операционной системы

    const handleOSChange = (selectedOS) => {
        setOS(selectedOS);
    };

    const handleDownloadLauncher = () => {
        // Здесь можно добавить логику для скачивания лаунчера в зависимости от выбранной ОС
        console.log('Скачивание лаунчера для ОС:', os);
        // Возможно, здесь будет происходить скачивание лаунчера
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Выберите вашу операционную систему</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <div className={styles.osButtons}>
                        <Button
                            color={os === 'windows' ? 'primary' : 'secondary'}
                            onClick={() => handleOSChange('windows')}
                            className={styles.osButton}
                        >
                            Windows
                        </Button>
                        <Button
                            color={os === 'linux-mac' ? 'primary' : 'secondary'}
                            onClick={() => handleOSChange('linux-mac')}
                            className={styles.osButton}
                        >
                            Linux/Mac
                        </Button>
                    </div>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default LauncherDownloadModal;
