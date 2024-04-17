import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss'
const ChangeNicknameModal = ({ isOpen, toggle }) => {
    const [currentNickname, setCurrentNickname] = useState('');
    const [newNickname, setNewNickname] = useState('');

    const handleCurrentNicknameChange = (e) => {
        setCurrentNickname(e.target.value);
    };

    const handleNewNicknameChange = (e) => {
        setNewNickname(e.target.value);
    };

    const handleChangeNickname = () => {
        // Здесь можно выполнить логику изменения никнейма игрока
        console.log('Изменить никнейм игрока:', { currentNickname, newNickname });
        // Дополнительная логика изменения никнейма...

        // Сброс полей и закрытие модального окна
        setCurrentNickname('');
        setNewNickname('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Изменить никнейм игрока</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Текущий никнейм игрока"
                        value={currentNickname}
                        onChange={handleCurrentNicknameChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        type="text"
                        placeholder="Новый никнейм игрока"
                        value={newNickname}
                        onChange={handleNewNicknameChange}
                        style={{ marginBottom: '10px' }}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleChangeNickname}>
                        Изменить
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ChangeNicknameModal;
