import React from 'react';

export const MessageSender = () => {

    let text = React.createRef<HTMLTextAreaElement>()

    const Sender = () => {
        alert(text.current?.value)
    }

    return (
        <>
            <div><textarea ref={text}></textarea></div>
            <div><button onClick={Sender}>Send</button></div>
        </>
    );
};

