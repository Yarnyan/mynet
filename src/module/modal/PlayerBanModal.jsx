import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, Label } from 'reactstrap';
import styles from './Modal.module.scss'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PlayerBanModal = ({ isOpen, toggle }) => {
    const [nickname, setNickname] = useState('');
    const [banReason, setBanReason] = useState('');
    const [banEndDate, setBanEndDate] = useState(null);
    const [isPermanentBan, setIsPermanentBan] = useState(false);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleBanReasonChange = (e) => {
        setBanReason(e.target.value);
    };

    const handleDateChange = (date) => {
        setBanEndDate(date);
    };

    const handlePermanentBanChange = (e) => {
        setIsPermanentBan(e.target.checked);
    };

    const handleBanPlayer = () => {
        // Здесь можно выполнить логику бана игрока с использованием введенных данных
        console.log('Забанить игрока:', { nickname, banReason, banEndDate, isPermanentBan });
        // Дополнительная логика бана...

        // Сброс полей и закрытие модального окна
        setNickname('');
        setBanReason('');
        setBanEndDate(null);
        setIsPermanentBan(false);
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Забанить игрока</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Label for="nicknameInput">Никнейм игрока:</Label>
                    <Input
                        id="nicknameInput"
                        type="text"
                        placeholder="Введите никнейм"
                        value={nickname}
                        onChange={handleNicknameChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Label for="banReasonInput">Причина бана:</Label>
                    <Input
                        id="banReasonInput"
                        type="text"
                        placeholder="Введите причину бана"
                        value={banReason}
                        onChange={handleBanReasonChange}
                        style={{ marginBottom: '10px' }}
                        className={styles.modalInput}
                    />
                    <Label for="banEndDatePicker">Дата окончания бана:</Label>
                    <DatePicker
                        id="banEndDatePicker"
                        selected={banEndDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Выберите дату окончания бана"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                        className="form-control"
                        style={{ marginBottom: '10px' }}
                        disabled={isPermanentBan}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="danger" onClick={handleBanPlayer}>
                        Забанить игрока
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PlayerBanModal;
