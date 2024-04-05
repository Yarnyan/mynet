import React from 'react'
import styles from './Cabinet.module.scss'
export default function Setting() {
  return (
    <div className={styles.Cabinet__container}>
      <div className={styles.Cabinet__container_items}>
        <div className={styles.Cabinet__container_password}>
          <p className={styles.prev__password_p}>Старый пароль</p>
          <input type="password" placeholder='Пароль от аккаунта' required />
          <p className={styles.new__password_p}>Новый пароль</p>
          <input type="password" placeholder='От 5 до 16 символов' minLength={'5'} maxLength={'16'} required />
          <button>Сменить пароль</button>
        </div>
        <div className={styles.Cabinet__container_opportunities}>
          <div className={styles.Cabinet__opportunities_user}>
            <p>Возможности</p>
            <button>Обмен валюты</button>
            <button>Перевод валюты</button>
            <button>Активация промокода</button>
            <button>Список промокодов</button>
          </div>
          <div className={styles.Cabinet__opportunities_admin}>
            <p>Возможности</p>
            <button>Добавить новость</button>
            <button>Добавить тег новости</button>
            <button>Добавить привилегию</button>
            <button>Добавить сервер</button>
            <button>Создать промокод</button>
          </div>
        </div>
        <div className={styles.Cabinet__container_panel}>
          <p>Настройки админ-панели</p>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Добавить игрока</h1>
              <p>Вы можете добавлять игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Удалить игрока</h1>
              <p>Вы можете удалить игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Забанить игрока</h1>
              <p>Вы можете забанить игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Разбанить игрока</h1>
              <p>Вы можете разбанить игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Рассылка игрокам</h1>
              <p>Вы можете выслать письмо на почту</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Изменить пароль игрока</h1>
              <p>Вы можете изменить пароли игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Изменить ник игрока</h1>
              <p>Вы можете изменять ники игроков</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
