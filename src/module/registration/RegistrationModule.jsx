import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap';
import { Checkbox } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import styles from '../modal/Modal.module.scss';

const RegistrationModule = ({ isOpen, toggle }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toggle();
    };

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Регистрация</ModalHeader>
                <ModalBody style={{width: '500px'}}>
                    <form onSubmit={handleSubmit}>
                        <Input required type="text" placeholder="Логин" className={styles.modalInput} style={{width: '500px'}}/>
                        <Input required type="email" placeholder="E-mail" className={styles.modalInput} style={{width: '500px'}}/>
                        <Input required type="password" placeholder="Пароль" className={styles.modalInput} style={{width: '500px'}}/>
                        <Input required type="password" placeholder="Повторить пароль" className={styles.modalInput} style={{width: '500px'}}/>

                        <div className={styles.modalInput}>
                            <ReCAPTCHA
                                sitekey="your-site-key"
                                onChange={(value) => {
                                    console.log('CAPTCHA value:', value);
                                }}
                                className={styles.ReCAPTCHA}
                                style={{width: '500px'}}
                            />
                        </div>

                        <Button type="submit" color="primary" className={styles.generator__btn} style={{width: '500px', marginTop: '15px'}}>
                            Зарегистрироваться
                        </Button>

                        <div style={{marginTop: '15px', display: 'flex', alignItems: 'start', justifyContent: 'center'}} className={styles.Radio__auth}>
                            <Checkbox defaultChecked color="secondary" style={{marginTop: '0xp'}} />
                            <Link to="/licence" style={{marginLeft: '5px'}}>
                                Я полностью ознакомлен и принимаю правила и лицензионное соглашение, а также даю своё
                                согласие на обработку персональных данных
                            </Link>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}> 
                    <Button color="secondary" onClick={toggle}>
                        Закрыть
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default RegistrationModule;
