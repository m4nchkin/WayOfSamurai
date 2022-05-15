import React from "react";
import s from './dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    const personData = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Daniil'},
        {id: 3, name: 'Yanis'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Zahar'},
        {id: 6, name: 'Maxim'}
    ]
    const messagesData = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Good luck, Happy Coding'}
    ]

    return <div className={s.chat}>
        <div className={s.contacts}>
            {
                personData.map(el =>
                    <DialogItem name={el.name} id={el.id}/>
                )
            }
        </div>
        <div className={s.dialogs}>
            {
                messagesData.map(el =>
                    <Message id={el.id} text={el.text}/>
                )
            }
        </div>
    </div>
}