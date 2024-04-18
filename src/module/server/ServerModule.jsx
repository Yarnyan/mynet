import React, {useState} from 'react'
import styles from './Server.module.scss'
import LinearProgress from '@mui/material/LinearProgress';
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import ServerDescription from '../../components/server/ServerDescription';
import ServerCommands from '../../components/server/ServerCommands';
import ServerPersonnel from '../../components/server/ServerPersonnel';
import ServerRules from '../../components/server/ServerRules';
export default function ServerModule() {
    const [activeComponent, setActiveComponent] = useState('information');
    const renderComponentById = (id) => {
        switch (id) {
            case 'information':
                let result = [];
                for (let i = 0; i < 5; i++) {
                    result.push(<ServerDescription key={i} />);
                }
                return result;
    
            case 'commands':
                let resultCommands = [];
                for (let i = 0; i < 5; i++) {
                    resultCommands.push(<ServerCommands key={i} />);
                }
                return resultCommands;
            case 'personnel':
                let resultPersonnel = [];
                for (let i = 0; i < 20; i++) {
                    resultPersonnel.push(<ServerPersonnel key={i} />);
                }
                return resultPersonnel;
            case 'rules':
                return <ServerRules />;
            default:
                return null; 
        }
    };
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.Server__container_header}>
                    <div className={styles.Server__header_online}>
                        <img src="/image/serverLogo.png" alt="" />
                        <div className={styles.about__progress}>
                            <div className={styles.version}>
                                Magic 1.12.2
                            </div>
                            <div className={styles.progress__bar}>
                                <LinearProgress variant="determinate" value={100} className={styles.bar}/>
                            </div>
                            <div className={styles.online}>
                                100/100
                            </div>
                        </div>
                    </div>
                    <div className={styles.modeInformation}>
                        <p className={styles.modeInformation__subtitle}>Информация о режиме</p>
                        <p className={styles.modeInformation__title}><span>Версия: </span>1.12.2</p>
                        <p className={styles.modeInformation__title}><span>PVP: </span>Разрешено</p>
                        <p className={styles.modeInformation__title}><span>Дата вайпа: </span>17.03.2024</p>
                        <p className={styles.modeInformation__title}><span>Размер карты: </span>1024x1024</p>
                        <p className={styles.modeInformation__title}><span>Сложность: </span>Сложная</p>
                    </div>
                </div>
                <div className={styles.PersonalCabinet__btn}>
                    <button onClick={() => setActiveComponent('information')} className={activeComponent === 'information' ? 'active' : ''}>Описание</button>
                    <button onClick={() => setActiveComponent('commands')} className={activeComponent === 'commands' ? 'active' : ''}>Команды</button>
                    <button onClick={() => setActiveComponent('personnel')} className={activeComponent === 'personnel' ? 'active' : ''}>Персонал</button>
                    <button onClick={() => setActiveComponent('rules')} className={activeComponent === 'rules' ? 'active' : ''}>Правила</button>
                </div>
                <div className={`${styles.server__content} ${activeComponent === 'personnel' ? styles.server__content_personnel : ''}`}>
                    {renderComponentById(activeComponent)}
                </div>
            </div>
            <div className='home__container_monitor'>
                <div className='home__container_auth'>
                    <Profile />
                </div>
                <div className='home__container_servers'>
                    <div className='home__servers_subtitle'>
                        <h1>Наши сервера</h1>
                    </div>
                    <div className='home__servers_content'>
                        <ServersBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
