import React, {useState} from 'react'
import Profile from '../../components/profile/Profile'
import Servers from '../../components/servers/Servers'
import Information from '../../components/cabinet/Information'
import styles from './PersonalCabinet.module.scss'
export default function PersonalCabinet() {
    const [activeComponent, setActiveComponent] = useState('information');
    const renderComponentById = (id) => {
        console.log(id)
        switch (id) {
            case 'information':
                return <Information />;
            case 'profile':
                return <Profile />;
            case 'servers':
                return <Servers />;
            case 'other':
                return <OtherComponent />;
            default:
                return null; 
        }
    };
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.PersonalCabinet__btn}>
                    <button onClick={() => setActiveComponent('information')} className={activeComponent === 'information' ? 'active' : ''}>Информация</button>
                    <button onClick={() => setActiveComponent('servers')}>Настройки</button>
                    <button>Магазин</button>
                    <button>История</button>
                    <button>Корзина</button>
                </div>
                {renderComponentById(activeComponent)}
            </div>
            <div className='home__container_monitor'>
                <div className='home__container_auth'>
                    <Profile />
                </div>
                <div className='home__container_servers'>
                    <div className='home__servers_subtitle'>
                        <h1>Наши сервер</h1>
                    </div>
                    <div className='home__servers_content'>
                        <Servers />
                    </div>
                </div>
            </div>
        </div>
    )
}
