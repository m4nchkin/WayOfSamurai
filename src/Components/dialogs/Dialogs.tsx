import React from "react";
import s from './dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../redux/state";


export const Dialogs = (props:DialogsPageType) => {

    return <div className={s.chat}>
        <div className={s.contacts}>
            {
                props.dialogs.map(el =>
                    <DialogItem name={el.name} id={el.id}/>
                )
            }
        </div>
        <div className={s.dialogs}>
            {
                props.messages.map(el =>
                    <Message id={el.id} text={el.text}/>
                )
            }
        </div>
    </div>
}