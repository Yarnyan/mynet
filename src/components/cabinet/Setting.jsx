import React, { useState } from 'react'
import styles from './Cabinet.module.scss'
import CurrencyExchangeModal from '../../module/modal/CurrencyExchangeModal'
import CurrencyConverterModal from '../../module/modal/CurrencyConverterModal'
import PromoCodeActivationModal from '../../module/modal/PromoCodeActivationModal'
import PromoCodeManagerModal from '../../module/modal/PromoCodeHistoryModal'
import PlayerAddModal from '../../module/modal/PlayerAddModal'
import PlayerDeleteModal from '../../module/modal/PlayerDeleteModal'
import PlayerBanModal from '../../module/modal/PlayerBanModal'
import PlayerUnbanModal from '../../module/modal/PlayerUnbanModal'
import PlayerBroadcastModal from '../../module/modal/PlayerBroadcastModal'
import ChangePasswordModal from '../../module/modal/ChangePasswordModal'
import ChangeNicknameModal from '../../module/modal/ChangeNicknameModal'
import AddNewsModal from '../../module/modal/AddNewsModal'
import AddTagModal from '../../module/modal/AddTagModal'
import AddPrivilegeModal from '../../module/modal/AddPrivilegeModal'
import AddServerModal from '../../module/modal/AddServerModal'
import CreatePromoCodeModal from '../../module/modal/CreatePromoCodeModal'
import AddStaffModal from '../../module/modal/AddStaffModal'
import UpdateStaffModal from '../../module/modal/UpdateStaffModal'
export default function Setting() {

  const [modalType, setModalType] = useState(null);

  const toggleModal = (type) => {
    if (modalType === type) {
      setModalType(null); 
      resetScroll();
    } else {
      setModalType(type);
      setTimeout(() => {
        resetScroll();
      }, 1);
    }
  };

  const resetScroll = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 
  };

  const renderModal = () => {
    switch (modalType) {
      case 'exchange':
        return <CurrencyExchangeModal isOpen={true} toggle={() => toggleModal('exchange')} minExchangeRate={0} />;
      case 'converter':
        return <CurrencyConverterModal isOpen={true} toggle={() => toggleModal('converter')} />;
      case 'promo':
        return <PromoCodeActivationModal isOpen={true} toggle={() => toggleModal('promo')} />
      case 'promoHistory':
        return <PromoCodeManagerModal isOpen={true} toggle={() => toggleModal('promoHistory')}/>
      case 'playerAdd':
        return <PlayerAddModal isOpen={true} toggle={() => toggleModal('playerAdd')}/>
      case 'playerDelete':
        return <PlayerDeleteModal isOpen={true} toggle={() => toggleModal('playerDelete')}/>
      case 'playerBan':
        return <PlayerBanModal isOpen={true} toggle={() => toggleModal('playerBan')}/>
      case 'playerUnban':
        return <PlayerUnbanModal isOpen={true} toggle={() => toggleModal('playerUnban')}/>
      case 'playerBroadcast':
        return <PlayerBroadcastModal isOpen={true} toggle={() => toggleModal('playerBroadcast')}/>
      case 'changePassword':
        return <ChangePasswordModal isOpen={true} toggle={() => toggleModal('changePassword')}/>
      case 'changeNickname':
        return <ChangeNicknameModal isOpen={true} toggle={() => toggleModal('changeNickname')}/>
      case 'addNews':
        return <AddNewsModal isOpen={true} toggle={() => toggleModal('addNews')}/>
      case 'addTag':
        return <AddTagModal isOpen={true} toggle={() => toggleModal('addTag')}/>
      case 'addPrivilege':
        return <AddPrivilegeModal isOpen={true} toggle={() => toggleModal('addPrivilege')}/>
      case 'addServer':
        return <AddServerModal isOpen={true} toggle={() => toggleModal('addServer')}/>
      case 'createPromoCode':
        return <CreatePromoCodeModal isOpen={true} toggle={() => toggleModal('createPromoCode')}/>
      case 'addStaff':
        return <AddStaffModal isOpen={true} toggle={() => toggleModal('addStaff')}/>
      case 'updateStaff':
        return <UpdateStaffModal isOpen={true} toggle={() => toggleModal('updateStaff')}/>
      default:
        return null;
    }
  };

  return (
    <div className={styles.Cabinet__container}>
      <div className={styles.Cabinet__container_items}>
        <div className={styles.Cabinet__container_password}>
          <div className={styles.Cabinet__modalWindow}>
            {renderModal()}
          </div>
          <p className={styles.prev__password_p}>Старый пароль</p>
          <input type="password" placeholder='Пароль от аккаунта' required />
          <p className={styles.new__password_p}>Новый пароль</p>
          <input type="password" placeholder='От 5 до 16 символов' minLength={'5'} maxLength={'16'} required />
          <button>Сменить пароль</button>
        </div>
        <div className={styles.Cabinet__container_opportunities}>
          <div className={styles.Cabinet__opportunities_user}>
            <p>Возможности</p>
            <button onClick={() => toggleModal('exchange')}>Обмен валюты</button>
            <button onClick={() => toggleModal('converter')}>Перевод валюты</button>
            <button onClick={() => toggleModal('promo')}>Активация промокода</button>
            <button onClick={() => toggleModal('promoHistory')}>Список промокодов</button>
          </div>
          <div className={styles.Cabinet__opportunities_admin}>
            <p>Возможности</p>
            <button onClick={() => toggleModal('addNews')}>Добавить новость</button>
            <button onClick={() => toggleModal('addTag')}>Добавить тег новости</button>
            <button onClick={() => toggleModal('addPrivilege')}>Добавить привилегию</button>
            <button>Добавить сервер</button>
            <button onClick={() => toggleModal('createPromoCode')}>Создать промокод</button>
            <button onClick={() => toggleModal('addStaff')}>Добавить персонал</button>
            <button onClick={() => toggleModal('updateStaff')}>Изменить персонал</button>
          </div>
        </div>
        <div className={styles.Cabinet__container_panel}>
          <p>Настройки админ-панели</p>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('playerAdd')}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Добавить игрока</h1>
              <p>Вы можете добавлять игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('playerDelete')}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Удалить игрока</h1>
              <p>Вы можете удалить игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('playerBan')}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Забанить игрока</h1>
              <p>Вы можете забанить игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('playerUnban')}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Разбанить игрока</h1>
              <p>Вы можете разбанить игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('playerBroadcast')}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Рассылка игрокам</h1>
              <p>Вы можете выслать письмо на почту</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('changePassword')}>
            <img src="/image/skin.png" alt="" />
            <div className={styles.Cabinet__actions_text}>
              <h1>Изменить пароль игрока</h1>
              <p>Вы можете изменить пароли игроков</p>
            </div>
          </div>
          <div className={styles.Cabinet__panel_actions} onClick={() => toggleModal('changeNickname')}>
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
