import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Modal.module.scss'

const PlayerBroadcastModal = ({ isOpen, toggle }) => {
    const [message, setMessage] = useState('');
    const [sendDate, setSendDate] = useState(null);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleDateChange = (date) => {
        setSendDate(date);
    };

    const handleSendBroadcast = () => {
        // Здесь можно выполнить логику отправки сообщения игрокам
        console.log('Отправка сообщения:', { message, sendDate });
        // Дополнительная логика отправки сообщения...

        // Сброс полей и закрытие модального окна
        setMessage('');
        setSendDate(null);
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Рассылка игрокам</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Введите сообщение"
                        value={message}
                        onChange={handleMessageChange}
                        rows={5}
                        style={{ marginBottom: '10px' }}
                    />
                    <DatePicker
                        selected={sendDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Выберите дату отправления"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        className="form-control"
                        style={{ marginBottom: '10px' }}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleSendBroadcast}>
                        Отправить
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PlayerBroadcastModal;
