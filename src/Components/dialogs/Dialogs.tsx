import React from "react";
import s from './dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    text: string
}

const DialogItem = (props: DialogPropsType) => {
    let path = '/Dialogs/' + props.id
    return <div className={s.names + s.current}><NavLink to={path}>{props.name}</NavLink></div>
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.text}</div>
}

export const Dialogs = () => {
    return <div className={s.chat}>
        <div className={s.contacts}>
            <DialogItem name='Oleg' id='1'/>
            <DialogItem name='Daniil' id='2'/>
            <DialogItem name='Yanis' id='3'/>
            <DialogItem name='Viktor' id='4'/>
            <DialogItem name='Zahar' id='5'/>
            <DialogItem name='Maxim' id='6'/>
        </div>
        <div className={s.dialogs}>
            <Message text='Hi'/>
            <Message text='How are you?'/>
            <Message text='Good luck, Happy Coding'/>
        </div>
    </div>
}