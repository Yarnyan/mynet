import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss'
const PlayerAddModal = ({ isOpen, toggle }) => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [playerAdded, setPlayerAdded] = useState(false);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAddPlayer = () => {
        // Здесь можно выполнить логику добавления игрока с использованием введенных данных
        console.log('Добавление игрока:', { nickname, email, password });
        setPlayerAdded(true);
    };

    const resetForm = () => {
        setNickname('');
        setEmail('');
        setPassword('');
        setPlayerAdded(false);
        toggle();
    };

    return (
        <>
        {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Добавить игрока</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Никнейм"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ marginTop: '10px' }}
                        className={styles.modalInput}
                    />
                    <Input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ marginTop: '10px' }}
                        className={styles.modalInput}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleAddPlayer}>
                        Добавить
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </> 
    );
};

export default PlayerAddModal;
