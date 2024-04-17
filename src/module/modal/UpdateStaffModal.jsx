import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, FormGroup, Label } from 'reactstrap';
import styles from './Modal.module.scss'
const UpdateStaffModal = ({ isOpen, toggle }) => {
    const [selectedServer, setSelectedServer] = useState('');
    const [priority, setPriority] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [position, setPosition] = useState('');

    const handleServerChange = (e) => {
        setSelectedServer(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handlePlayerChange = (e) => {
        setSelectedPlayer(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleUpdateStaff = () => {
        // Здесь можно выполнить логику обновления персонала
        console.log('Обновить персонал:', {
            server: selectedServer,
            priority,
            player: selectedPlayer,
            position
        });
        // Дополнительная логика обновления персонала...

        // Сброс полей и закрытие модального окна
        setSelectedServer('');
        setPriority('');
        setSelectedPlayer('');
        setPosition('');
        toggle();
    };

    const handleDeleteStaff = () => {
        // Здесь можно выполнить логику удаления персонала
        console.log('Удалить персонал:', {
            server: selectedServer,
            player: selectedPlayer
        });
        // Дополнительная логика удаления персонала...

        // Сброс полей и закрытие модального окна
        setSelectedServer('');
        setSelectedPlayer('');
        setPosition('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Обновить персонал</ModalHeader>
                <ModalBody>
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
                    <FormGroup className={styles.modalInput}>
                        <Label for="priority">Приоритет</Label>
                        <Input
                            type="number"
                            id="priority"
                            value={priority}
                            onChange={handlePriorityChange}
                        />
                    </FormGroup>
                    <FormGroup style={{marginTop: '15px'}}>
                        <Label for="playerSelect">Выбор игрока</Label>                       
                        <Input
                            type="select"
                            name="serverSelect"
                            id="serverSelect"
                            onChange={handlePlayerChange}
                            style={{ marginLeft: '10px', backgroundColor: 'transparent', color: 'gray' }}
                        >
                            <option value="">Выбрать cервер</option>
                            <option value="server1">Server 1</option>
                            <option value="server2">Server 2</option>
                        </Input>
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
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleUpdateStaff}>
                        Обновить
                    </Button>
                    <Button color="danger" onClick={handleDeleteStaff}>
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

export default UpdateStaffModal;
