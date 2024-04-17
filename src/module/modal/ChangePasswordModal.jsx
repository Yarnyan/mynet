import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss'
const ChangePasswordModal = ({ isOpen, toggle }) => {
    const [nickname, setNickname] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleChangePassword = () => {
        // Здесь можно выполнить логику изменения пароля игрока
        console.log('Изменить пароль для игрока:', { nickname, newPassword });
        // Дополнительная логика изменения пароля...

        // Сброс полей и закрытие модального окна
        setNickname('');
        setNewPassword('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Изменить пароль игрока</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Никнейм игрока"
                        value={nickname}
                        onChange={handleNicknameChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        type="password"
                        placeholder="Новый пароль"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        className={styles.modalInput}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleChangePassword}>
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

export default ChangePasswordModal;
