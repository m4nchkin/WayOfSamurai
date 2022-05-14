import React from "react";
import styles from './profileInfo.module.css'

export const ProfileInfo = () => {
    return <>
        <div>
            <img src='https://html5css.ru/css/img_lights.jpg'/>
        </div>
        <div className={styles.description}>
            avatar + description
        </div>
    </>
}