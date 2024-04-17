import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, FormGroup, Label } from 'reactstrap';
import styles from './Modal.module.scss'
const AddStaffModal = ({ isOpen, toggle }) => {
    const [priority, setPriority] = useState('');
    const [playerNickname, setPlayerNickname] = useState('');
    const [position, setPosition] = useState('');
    const [selectedServer, setSelectedServer] = useState('');

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handlePlayerNicknameChange = (e) => {
        setPlayerNickname(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleServerChange = (e) => {
        setSelectedServer(e.target.value);
    };

    const handleAddStaff = () => {
        // Здесь можно выполнить логику добавления персонала
        console.log('Добавить персонал:', {
            priority,
            playerNickname,
            position,
            selectedServer
        });
        // Дополнительная логика добавления персонала...

        // Сброс полей и закрытие модального окна
        setPriority('');
        setPlayerNickname('');
        setPosition('');
        setSelectedServer('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Добавить персонал</ModalHeader>
                <ModalBody>
                    <FormGroup className={styles.modalInput}>
                        <Label for="priority">Приоритет</Label>
                        <Input
                            type="number"
                            id="priority"
                            value={priority}
                            onChange={handlePriorityChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="playerNickname">Ник игрока</Label>
                        <Input
                            type="text"
                            id="playerNickname"
                            value={playerNickname}
                            onChange={handlePlayerNicknameChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="position">Должность</Label>
                        <Input
                            type="text"
                            id="position"
                            value={position}
                            onChange={handlePositionChange}
                        />
                    </FormGroup>
                    <FormGroup style={{marginTop: '15px'}}>
                        <Label for="serverSelect">Выбор сервера</Label>
                        <Input
                            type="select"
                            name="serverSelect"
                            id="serverSelect"
                            onChange={handleServerChange}
                            style={{ marginLeft: '10px', backgroundColor: 'transparent', color: 'gray' }}
                        >
                            <option value="">Выбрать cервер</option>
                            <option value="server1">Server 1</option>
                            <option value="server2">Server 2</option>
                        </Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleAddStaff}>
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

export default AddStaffModal;
