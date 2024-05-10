import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss'
const AddTagModal = ({ isOpen, toggle, onAddTag }) => {
    const [tagName, setTagName] = useState('');

    const handleTagNameChange = (e) => {
        setTagName(e.target.value);
    };

    const handleAddTag = () => {
        // Проверка на пустое значение тега
        if (!tagName.trim()) {
            alert('Пожалуйста, введите название тега.');
            return;
        }

        // Вызов колбэка для добавления тега
        onAddTag(tagName);

        // Сброс поля и закрытие модального окна
        setTagName('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Добавить тег новости</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Название тега"
                        value={tagName}
                        onChange={handleTagNameChange}
                        autoFocus
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleAddTag}>
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

export default AddTagModal;
