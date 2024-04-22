import React, { useRef, useState } from 'react'
import styles from './DonateComponent.module.scss'
import BuyDonateModal from '../../module/modal/BuyDonateModal';
export default function DonateComponent() {
  const scrollRef = useRef(0);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const openRegistrationModal = () => {
    scrollRef.current = window.pageYOffset
    setShowRegistrationModal(true);
    setTimeout(() => {
      restoreScroll();
    }, 1);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  const restoreScroll = () => {
    window.scrollTo(0, scrollRef.current);
  };
  return (
    <div className={styles.donate}>
      <div className={styles.donate__container}>
        <img src="/image/donateImage.png" alt="" />
        <h5>Привелегия</h5>
        <div className={styles.donate__container_btn}>
          <p>999 рублей</p>
          <button onClick={openRegistrationModal}>Подробнее</button>
        </div>
      </div>
      {showRegistrationModal && (
        <BuyDonateModal isOpen={showRegistrationModal} toggle={closeRegistrationModal} />
      )}
    </div>
  )
}
