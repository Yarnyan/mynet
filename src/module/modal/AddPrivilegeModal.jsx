import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, FormGroup, Label } from 'reactstrap';
import styles from './Modal.module.scss'
const AddPrivilegeModal = ({ isOpen, toggle }) => {
    const [selectedServer, setSelectedServer] = useState('');
    const [privilegeName, setPrivilegeName] = useState('');
    const [privilegeDescription, setPrivilegeDescription] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [price, setPrice] = useState('');

    const handleServerChange = (e) => {
        setSelectedServer(e.target.value);
    };

    const handlePrivilegeNameChange = (e) => {
        setPrivilegeName(e.target.value);
    };

    const handlePrivilegeDescriptionChange = (e) => {
        setPrivilegeDescription(e.target.value);
    };

    const handleDurationChange = (e) => {
        setSelectedDuration(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleAddPrivilege = () => {
        // Здесь можно выполнить логику добавления привилегии
        console.log('Добавить привилегию:', {
            selectedServer,
            privilegeName,
            privilegeDescription,
            selectedDuration,
            price
        });
        // Дополнительная логика добавления привилегии...

        // Сброс полей и закрытие модального окна
        setSelectedServer('');
        setPrivilegeName('');
        setPrivilegeDescription('');
        setSelectedDuration('');
        setPrice('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Добавить привилегию</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <FormGroup style={{marginTop: '10px'}}>
                        <Label for="serverSelect">Выбор сервера</Label>
                        <Input
                            type="select"
                            name="serverSelect"
                            id="serverSelect"
                            onChange={handleServerChange}
                            style={{ marginLeft: '10px', backgroundColor: 'transparent', color: 'gray' }}
                        >
                            <option value="">Выбрать сервер</option>
                            <option value="server1">Server 1</option>
                            <option value="server2">Server 2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="privilegeName">Название привилегии</Label>
                        <Input
                            type="text"
                            id="privilegeName"
                            value={privilegeName}
                            onChange={handlePrivilegeNameChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="privilegeDescription">Описание возможностей</Label>
                        <Input
                            type="text"
                            id="privilegeDescription"
                            value={privilegeDescription}
                            onChange={handlePrivilegeDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup style={{marginTop: '10px'}}>
                        <Label for="durationSelect">Выбор срока действия</Label>
                        <Input
                            type="select"
                            name="serverSelect"
                            id="serverSelect"
                            onChange={handleDurationChange}
                            style={{ marginLeft: '10px', backgroundColor: 'transparent', color: 'gray' }}
                        >
                            <option value="">Выбрать cрок</option>
                            <option value="server1">Server 1</option>
                            <option value="server2">Server 2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="price">Цена</Label>
                        <Input
                            type="number"
                            id="price"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleAddPrivilege}>
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

export default AddPrivilegeModal;
