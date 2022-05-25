import React, {useState} from 'react';

export const MessageSender = () => {
    const [message,setMessage] = useState('')

    const Sender = () => {
        setMessage(message)
        alert(message)
    }

    return (
        <>
            <div><textarea value={message} onChange={e=>setMessage(e.currentTarget.value)}></textarea></div>
            <div><button onClick={Sender}>Send</button></div>
        </>
    );
};

