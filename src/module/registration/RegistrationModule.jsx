import React from 'react'
import styles from './Registration.module.scss'
import Auth from '../../components/auth/Auth'
import ServersBar from '../../components/serversBar/ServersBar'
import { Checkbox } from '@mui/material'
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom'
export default function RegistrationModule() {
    return (
        <div className='home__container'>
            <div className='home__container_news' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.RegistrationModule}>
                    <div className={styles.Auth__container_subtitle}>
                        <h1>Регистрация</h1>
                    </div>
                    <div className={styles.Auth__container_form}>
                        <form className={styles.Auth__form}>
                            <input required placeholder='Логин' className={styles.Login__auth} />
                            <input required placeholder='E-mail' className={styles.Password__auth} />
                            <input required placeholder='Пароль' className={styles.Password__auth} />
                            <input required placeholder='Повторить пароль' className={styles.Password__auth} />
                            <div className={styles.Radio__auth}>
                                <ReCAPTCHA
                                    sitekey="6LdfE7MpAAAAAEwfwFdtwEwiPUlnOtsEB9AXSbOF"
                                    onChange={(value) => {
                                        console.log("CAPTCHA value:", value);
                                    }}
                                    className={styles.ReCAPTCHA}
                                />
                            </div>
                            <input type="submit" className={styles.Auth__btn} value={'Зарегистрироваться'} />
                            <div className={styles.Radio__auth}>
                                <Checkbox defaultChecked color="secondary" className={styles.Checkbox__input} />
                                <Link to={'/404'}>Я полностью ознакомлен и принимаю правила и лицензионное соглашение, а также даю своё согласие на обработку персональных данных</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='home__container_monitor'>
                <div className='home__container_auth'>
                    <Auth />
                </div>
                <div className='home__container_servers'>
                    <div className='home__servers_subtitle'>
                        <h1>Наши сервер</h1>
                    </div>
                    <div className='home__servers_content'>
                        <ServersBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
