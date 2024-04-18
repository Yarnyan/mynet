import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import styles from './Modal.module.scss';

const CurrencyExchangeModal = ({ isOpen, toggle, minExchangeRate }) => {
    const [amountInCurrency, setAmountInCurrency] = useState(minExchangeRate);
    const [amountInRubles, setAmountInRubles] = useState('');

    const handleExchange = () => {
        const exchangeRate = 70;
        const rublesAmount = amountInCurrency * exchangeRate;
        setAmountInRubles(rublesAmount);
    };

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setAmountInCurrency(value);
        }
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />} 
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Обмен валюты</ModalHeader>
                <ModalBody>
                    <div className={styles.modalInput}>
                        <label>Аксы:</label>
                        <Input
                            type="text"
                            onChange={handleAmountChange}
                            placeholder="Введите сумму"
                        />
                    </div>
                    <div className={styles.modalInput}>
                        <label>Рубли:</label>
                        <Input type="text" value={amountInRubles} readOnly />
                    </div>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleExchange}>
                        Обменять валюту
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
            
        </>
    );
};

export default CurrencyExchangeModal;
