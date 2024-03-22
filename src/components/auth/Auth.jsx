import React from 'react'
import styles from './Auth.module.scss'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Auth() {
    const handleLogin = (event) => {
        event.preventDefault();
        const token = Math.random().toString(36).substring(2, 12);
        localStorage.setItem('token', token);
    };
    return (
        <div className={styles.Auth__container}>
            <div className={styles.Auth__container_subtitle}>
                <h1>Авторизация</h1>
            </div>
            <div className={styles.Auth__container_form}>
                <form className={styles.Auth__form} onSubmit={handleLogin}>
                    <input required placeholder='Логин' className={styles.Login__auth} />
                    <input required placeholder='Пароль' className={styles.Password__auth} />
                    <div className={styles.Radio__auth}>
                        <Checkbox defaultChecked color="secondary" className={styles.Checkbox__input}/>
                        <label htmlFor="savePassword">Сохранить пароль</label>
                    </div>
                    <input type="submit" className={styles.Auth__btn} value={'Войти'}/>
                </form>
            </div>
            <div className={styles.Auth__tools}>
                <Link>Забыл пароль</Link>
                <Link>Зарегистироваться</Link>
            </div>
        </div>
    )
}
