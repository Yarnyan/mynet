import React from 'react'
import styles from './ServersComponent.module.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function ServersComponent() {
  const navigate = useNavigate()
  function handleServerClick() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 500) {
      navigate('/servers/123');
    }
  }
  return (
    <div className={styles.Servers} onClick={handleServerClick}>
      <div className={styles.Servers__about}>
        <img src="/image/skin.png" alt="" />
        <div className={styles.Servers__about_name}>
          <p className={styles.Servers__about_h1}>HiTech<span>1.12.2</span></p>
          <div style={{marginTop: '16px'}} className={styles.Servers__about_desc}>
            <p className={styles.Servers__p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam nisi accusantium assumenda voluptas, consequuntur aspernatur distinctio debitis architecto molestiae corporis dignissimos facilis quibusdam reprehenderit omnis sapiente magni exercitationem consectetur.</p>
          </div>
        </div>
      </div>
      <div className={styles.Servers__version}>
        <Link to="/Servers/HiTech">Посетить</Link>
      </div>
    </div>
  )
}
