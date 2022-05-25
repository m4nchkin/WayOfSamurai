import React from 'react';
import s from './Post.module.css'

type postPropsType = {
    id: number,
    message: string,
    likes: number
}

const Post = (props: postPropsType) => {
    return <div>
        <div className={s.item}>
            <img src='https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg'/>
            <>{props.message}</>
            <div>
                likes {props.likes}
            </div>
        </div>
    </div>
}
export default Post