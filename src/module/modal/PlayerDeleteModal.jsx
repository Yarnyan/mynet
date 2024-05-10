import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss'
const PlayerDeleteModal = ({ isOpen, toggle }) => {
    const [nickname, setNickname] = useState('');

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleDeletePlayer = () => {
        // Здесь можно выполнить логику удаления игрока по никнейму
        console.log('Удаление игрока:', nickname);
        // Дополнительная логика удаления...

        // Сброс полей и закрытие модального окна
        setNickname('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Удалить игрока</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Никнейм игрока"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="danger" onClick={handleDeletePlayer}>
                        Удалить
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PlayerDeleteModal;
