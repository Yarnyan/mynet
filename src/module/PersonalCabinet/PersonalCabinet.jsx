import React, {useState} from 'react'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import Information from '../../components/cabinet/Information'
import Setting from '../../components/cabinet/Setting'
import styles from './PersonalCabinet.module.scss'
export default function PersonalCabinet() {
    const [activeComponent, setActiveComponent] = useState('information');
    const renderComponentById = (id) => {
        console.log(id)
        switch (id) {
            case 'information':
                return <Information />;
            case 'settings':
                return <Setting />;
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
                    <button onClick={() => setActiveComponent('settings')} className={activeComponent === 'settings' ? 'active' : ''}>Настройки</button>
                    {/* <button>Магазин</button>
                    <button>История</button>
                    <button>Корзина</button> */}
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
                        <ServersBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
