import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Form } from 'reactstrap';
import styles from './Modal.module.scss';

const CurrencyConverterModal = ({ isOpen, toggle }) => {
    const [selectedServer, setSelectedServer] = useState('');
    const [amountInCurrency, setAmountInCurrency] = useState('');
    const [amountInRubles, setAmountInRubles] = useState('');

    const handleServerChange = (e) => {
        setSelectedServer(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmountInCurrency(e.target.value);
    };

    const handleExchange = () => {
        // Perform currency conversion here using selectedServer and amountInCurrency
        // Example: Call an API to get the exchange rate based on selectedServer
        // Calculate amountInRubles based on the exchange rate and amountInCurrency
        // For demonstration purposes, let's assume a simple conversion
        const exchangeRate = 70; // Example exchange rate for demonstration
        const rubles = amountInCurrency * exchangeRate;
        setAmountInRubles(rubles.toFixed(2)); // Assuming 2 decimal places for rubles
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Перевод  валюты</ModalHeader>
                <ModalBody style={{marginTop: '15px'}}>
                    <Form>
                        <FormGroup>
                            <Label for="serverSelect">Выберите сервер:</Label>
                            <Input
                                type="select"
                                name="serverSelect"
                                id="serverSelect"
                                value={selectedServer}
                                onChange={handleServerChange}
                                style={{marginLeft: '10px', backgroundColor: 'transparent', color: 'gray'}}
                            >
                                <option value="">Выбрать сервер</option>
                                <option value="server1">Server 1</option>
                                <option value="server2">Server 2</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className={styles.modalInput}>
                            <Label for="amountInput">Введите количество аксов:</Label>
                            <Input
                                type="number"
                                id="amountInput"
                                value={amountInCurrency}
                                onChange={handleAmountChange}
                                placeholder="Enter amount"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleExchange}>
                        Конвертировать
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default CurrencyConverterModal;
