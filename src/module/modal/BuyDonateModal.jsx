import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Form } from 'reactstrap';
import styles from './Modal.module.scss'
import RedeemIcon from '@mui/icons-material/Redeem';
const BuyDonateModal = ({ isOpen, toggle, onAddTag }) => {
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

        onAddTag(tagName);

        setTagName('');
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={`${styles.centeredModal} ${styles.centeredModalDonate}`}>
                <ModalHeader toggle={toggle}>Покупка привилегии</ModalHeader>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', width: '100%' }} className={styles.donatContainer}>
                    <ModalBody className={styles.modalInput} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ color: '#fff' }}>Pixelmon #2 1.12.2</p>
                        <img src="/image/modeLogo.png" alt="" style={{ marginTop: '20px' }} />
                        <p style={{ marginTop: '14px', color: '#fff' }}><span style={{ color: 'red', marginRight: '6px' }}>[Vip]</span>аккаунт</p>
                        <p style={{ color: '#fff', marginTop: '20px', fontSize: '14px' }}>Cрок покупки</p>
                        <Input
                            type="select"
                            name="serverSelect"
                            id="serverSelect"
                            style={{ marginTop: '20px', backgroundColor: 'transparent', color: 'gray' }}
                        >
                            <option value="">Выбрать сервер</option>
                            <option value="server1">Server 1</option>
                            <option value="server2">Server 2</option>
                        </Input>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                            <button style={{width: '140px', height: '40px', border: '2px solid #ED5D9A'}}>Купить</button>
                            <button style={{ width: '40px', height: '40px', borderRadius: '8px', marginLeft: '12px'}}>
                                <RedeemIcon />
                            </button>
                        </div>
                    </ModalBody>
                    <ModalBody className={styles.modalInput} style={{ marginLeft: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ color: '#fff' }}>Возможности привелегии</p>
                        <div style={{ marginTop: '20px', width: '400px' }} className={styles.donatePossibilities}>
                            <div style={{ background: '#454646', display: 'flex', alignItems: 'center', height: '30px', padding: '0 10px', borderRadius: '2px' }}>
                                <div style={{ background: '#ED5D9A', width: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}>Основное</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', padding: '0 10px', marginLeft: '20px', marginTop: '12px', background: '#242424' }}>
                                <div style={{ background: '#666767', minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}>Префикс <span style={{ color: 'red', marginRight: '6px' }}>[Vip]</span></p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', padding: '0 10px', marginLeft: '20px', marginTop: '12px', background: '#242424' }}>
                                <div style={{ background: '#666767', minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}>Возможность писать цветные сообщения в чат</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', padding: '0 10px', marginLeft: '20px', marginTop: '12px', background: '#242424' }}>
                                <div style={{ background: '#666767', minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}>Вход на заполненый сервер</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px', width: '400px' }} className={styles.donatePossibilities}>
                            <div style={{ background: '#454646', display: 'flex', alignItems: 'center', height: '30px', padding: '0 10px', borderRadius: '2px' }}>
                                <div style={{ background: '#ED5D9A', width: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}>Киты</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', padding: '0 10px', marginLeft: '20px', marginTop: '12px', background: '#242424' }}>
                                <div style={{ background: '#666767', minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}><span style={{ color: 'red', marginRight: '6px' }}>Важно!</span>Перед использованием кита не забудьте очистить инвентарь</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', padding: '0 10px', marginLeft: '20px', marginTop: '12px', background: '#242424' }}>
                                <div style={{ background: '#666767', minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <p style={{ color: '#fff', marginLeft: '8px' }}>/kit vip [1 раз в месяц]</p>
                            </div>
                        </div>
                    </ModalBody>
                </div>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default BuyDonateModal;
