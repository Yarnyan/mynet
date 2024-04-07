import React from 'react';
import styles from './StartComponent.module.scss';
import { Link } from 'react-router-dom';
export default function StartPlayingComponent({ id, subtitle, title, buttonTitle, path }) {
    return (
        <div className={styles.StartPlayingComponent}>
            <div className={styles.content}>
                <h1>Шаг {id}</h1>
                <p>{subtitle}</p>
                <p>{title}</p>
            </div>
            <Link className={styles.button} to={`${path}`}>{buttonTitle}</Link>
        </div>
    );
}
