import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message:string
    likeCounter:string
}

const Post = (props:PostPropsType) => {
    return <div>
        <div className={s.item}>
            <img src='https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg'/>
            {props.message}
            <div>
                {props.likeCounter}
            </div>
        </div>
    </div>
}
export default Post