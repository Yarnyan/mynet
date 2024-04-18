import React, { useState } from 'react';
import Select from 'react-select';
import styles from './Donate.module.scss'
import Profile from '../../components/profile/Profile'
import ServersBar from '../../components/serversBar/ServersBar'
import DonateComponent from '../../components/donate/DonateComponent';
export default function Donate() {
    const [selectedServer, setSelectedServer] = useState(null);

    const serverOptions = [
        {
            label: '1.12.2',
            options: [
                { value: 'magic_1.12.2', label: 'Magic' },

            ]
        },
        {
            label: '1.7.10',
            options: [
                { value: 'magic_1.7.10', label: 'Magic' },
                { value: 'HiTech_1.7.10', label: 'HiTech' },
            ]
        }

    ];

    const handleServerChange = selectedOption => {
        setSelectedServer(selectedOption);
    };
    return (
        <div className='home__container'>
            <div className='home__container_news'>
                <div className={styles.donate__container}>
                    <div className={styles.select__server}>
                        <Select
                            className={styles.custom__select}
                            value={selectedServer}
                            onChange={handleServerChange}
                            options={serverOptions}
                            placeholder="Выбрать сервер"
                            isSearchable={false}
                        />
                    </div>
                    <div className={styles.donate__container_items}>
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                        <DonateComponent />
                    </div>
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
