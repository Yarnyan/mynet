import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, FormGroup, Label } from 'reactstrap';
import styles from './Modal.module.scss'
const CreatePromoCodeModal = ({ isOpen, toggle }) => {
    const [promoCode, setPromoCode] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [amount, setAmount] = useState('');
    const [activationCount, setActivationCount] = useState(1);
    const [expiryDate, setExpiryDate] = useState('');

    const generateRandomPromoCode = () => {
        const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        setPromoCode(randomCode);
    };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleActivationCountChange = (e) => {
        setActivationCount(parseInt(e.target.value));
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCreatePromoCode = () => {
        // Здесь можно выполнить логику создания промокода
        console.log('Создать промокод:', {
            promoCode,
            currency,
            amount,
            activationCount,
            expiryDate
        });
        // Дополнительная логика создания промокода...

        // Сброс полей и закрытие модального окна
        setPromoCode('');
        setCurrency('USD');
        setAmount('');
        setActivationCount(1);
        setExpiryDate('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Создать промокод</ModalHeader>
                <ModalBody>
                    <FormGroup className={styles.modalInput}>
                        <Label for="promoCode">Промокод</Label>
                        <Input
                            type="text"
                            id="promoCode"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button color="primary" onClick={generateRandomPromoCode} style={{marginTop: '10px'}} className={styles.generator__btn}>
                            Сгенерировать
                        </Button>
                    </FormGroup>
                    <FormGroup style={{marginTop: '15px'}}>
                        <Label for="currency">Валюта</Label>
                        <Input
                            type="select"
                            name="serverSelect"
                            id="serverSelect"
                            onChange={handleCurrencyChange}
                            style={{ marginLeft: '10px', backgroundColor: 'transparent', color: 'gray' }}
                        >
                            <option value="">Выбрать валюту</option>
                            <option value="server1">Server 1</option>
                            <option value="server2">Server 2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="amount">Сумма</Label>
                        <Input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="activationCount">Количество активаций</Label>
                        <Input
                            type="number"
                            id="activationCount"
                            value={activationCount}
                            onChange={handleActivationCountChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="expiryDate">Дата окончания (оставьте пустым для бессрочности)</Label>
                        <Input
                            type="date"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleCreatePromoCode}>
                        Создать
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default CreatePromoCodeModal;
