import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, Table } from 'reactstrap';
import styles from './Modal.module.scss';

const PromoCodeManagerModal = ({ isOpen, toggle }) => {
    const [promoCode, setPromoCode] = useState('');
    const [promotions, setPromotions] = useState([]);

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleActivatePromoCode = () => {
        console.log('Активация промокода:', promoCode);

        const newPromotion = {
            promoCode,
            date: new Date().toLocaleDateString(),
            currency: 'USD',
            quantity: 1, 
        };
        setPromotions([...promotions, newPromotion]);

        setPromoCode('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Список промокодов</ModalHeader>
                <ModalBody className={styles.modalInput}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Промокод</th>
                                <th>Дата активации</th>
                                <th>Валюта</th>
                                <th>Количество</th>
                            </tr>
                        </thead>
                        <tbody>
                            {promotions.map((promo, index) => (
                                <tr key={index}>
                                    <td>{promo.promoCode}</td>
                                    <td>{promo.date}</td>
                                    <td>{promo.currency}</td>
                                    <td>{promo.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ModalBody>
            </Modal>
        </>
    );
};

export default PromoCodeManagerModal;
