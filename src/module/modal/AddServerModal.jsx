import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, FormGroup, Label } from 'reactstrap';
import styles from './Modal.module.scss'
const AddServerModal = ({ isOpen, toggle }) => {
    const [priority, setPriority] = useState('');
    const [serverName, setServerName] = useState('');
    const [serverVersion, setServerVersion] = useState('');
    const [serverImage, setServerImage] = useState(null);
    const [serverAddress, setServerAddress] = useState('');
    const [serverDescription, setServerDescription] = useState('');
    const [pvpMode, setPvpMode] = useState('');
    const [wipeDate, setWipeDate] = useState('');
    const [mapSize, setMapSize] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [commandsTab, setCommandsTab] = useState('');
    const [rulesTab, setRulesTab] = useState('');

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleServerNameChange = (e) => {
        setServerName(e.target.value);
    };

    const handleServerVersionChange = (e) => {
        setServerVersion(e.target.value);
    };

    const handleServerImageChange = (e) => {
        const file = e.target.files[0];
        setServerImage(file);
    };

    const handleServerAddressChange = (e) => {
        setServerAddress(e.target.value);
    };

    const handleServerDescriptionChange = (e) => {
        setServerDescription(e.target.value);
    };

    const handlePvpModeChange = (e) => {
        setPvpMode(e.target.value);
    };

    const handleWipeDateChange = (e) => {
        setWipeDate(e.target.value);
    };

    const handleMapSizeChange = (e) => {
        setMapSize(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    };

    const handleCommandsTabChange = (e) => {
        setCommandsTab(e.target.value);
    };

    const handleRulesTabChange = (e) => {
        setRulesTab(e.target.value);
    };

    const handleAddServer = () => {
        // Здесь можно выполнить логику добавления сервера
        console.log('Добавить сервер:', {
            priority,
            serverName,
            serverVersion,
            serverImage,
            serverAddress,
            serverDescription,
            pvpMode,
            wipeDate,
            mapSize,
            difficulty,
            commandsTab,
            rulesTab
        });
        // Дополнительная логика добавления сервера...

        // Сброс полей и закрытие модального окна
        setPriority('');
        setServerName('');
        setServerVersion('');
        setServerImage(null);
        setServerAddress('');
        setServerDescription('');
        setPvpMode('');
        setWipeDate('');
        setMapSize('');
        setDifficulty('');
        setCommandsTab('');
        setRulesTab('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Добавить сервер</ModalHeader>
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
                        <Label for="serverName">Название сервера</Label>
                        <Input
                            type="text"
                            id="serverName"
                            value={serverName}
                            onChange={handleServerNameChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="serverVersion">Версия сервера</Label>
                        <Input
                            type="text"
                            id="serverVersion"
                            value={serverVersion}
                            onChange={handleServerVersionChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="serverImage">Изображение сервера</Label>
                        <Input
                            type="file"
                            id="serverImage"
                            onChange={handleServerImageChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="serverAddress">Адрес сервера</Label>
                        <Input
                            type="text"
                            id="serverAddress"
                            value={serverAddress}
                            onChange={handleServerAddressChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="serverDescription">Описание сервера</Label>
                        <Input
                            type="text"
                            id="serverDescription"
                            value={serverDescription}
                            onChange={handleServerDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="pvpMode">ПВП режим</Label>
                        <Input
                            type="text"
                            id="pvpMode"
                            value={pvpMode}
                            onChange={handlePvpModeChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="wipeDate">Дата вайпа</Label>
                        <Input
                            type="date"
                            id="wipeDate"
                            value={wipeDate}
                            onChange={handleWipeDateChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="mapSize">Размер карты</Label>
                        <Input
                            type="text"
                            id="mapSize"
                            value={mapSize}
                            onChange={handleMapSizeChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="difficulty">Сложность</Label>
                        <Input
                            type="text"
                            id="difficulty"
                            value={difficulty}
                            onChange={handleDifficultyChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="commandsTab">Вкладка команды</Label>
                        <Input
                            type="text"
                            id="commandsTab"
                            value={commandsTab}
                            onChange={handleCommandsTabChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="rulesTab">Вкладка правила</Label>
                        <Input
                            type="text"
                            id="rulesTab"
                            value={rulesTab}
                            onChange={handleRulesTabChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleAddServer}>
                        Добавить сервер
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default AddServerModal;
