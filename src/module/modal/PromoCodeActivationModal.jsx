import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import styles from './Modal.module.scss';
const PromoCodeActivationModal = ({ isOpen, toggle }) => {
    const [promoCode, setPromoCode] = useState('');

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleActivatePromoCode = () => {
        console.log('Активация промокода:', promoCode);
        setPromoCode('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Активация промокода</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Input
                        type="text"
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                    />
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleActivatePromoCode}>
                        Активировать
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PromoCodeActivationModal;
