import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss'
const PlayerUnbanModal = ({ isOpen, toggle }) => {
    const [nickname, setNickname] = useState('');

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleUnbanPlayer = () => {
        // Здесь можно выполнить логику разбана игрока по никнейму
        console.log('Разбанить игрока:', nickname);
        // Дополнительная логика разбана...

        // Сброс поля и закрытие модального окна
        setNickname('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Разбанить игрока</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Никнейм игрока"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="success" onClick={handleUnbanPlayer}>
                        Разбанить
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PlayerUnbanModal;
