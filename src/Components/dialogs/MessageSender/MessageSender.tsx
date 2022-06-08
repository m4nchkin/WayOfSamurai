import React, {ChangeEvent, useState} from 'react';
import {ActionsTypes, addMessageActionCreator, addMessageTextActionCreator} from "../../redux/state";

type MessageSenderPropsType = {
    dispatch: (action: ActionsTypes) => void
}

export const MessageSender = (props: MessageSenderPropsType) => {
    const [message, setMessage] = useState('')

    const Sender = () => {
        props.dispatch(addMessageActionCreator())
        setMessage('')
    }

    const onChangeButtonHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        console.log(message)
        props.dispatch(addMessageTextActionCreator(message))
    }

    return (
        <>
            <div><textarea value={message} placeholder='Enter your message' onChange={onChangeButtonHandler}></textarea></div>
            <div>
                <button onClick={Sender}>Send</button>
            </div>
        </>
    );
};

