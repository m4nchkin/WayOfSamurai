import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

type postsDataProps = {
    postsData:Array<ArrayPropsType>
}

type ArrayPropsType = {
    id:number,
    message:string,
    likes:number
}

const MyPosts = (props:postsDataProps) => {


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.postsData.map(el=>
                    <Post id={el.id} message={el.message} likeCounter={el.likes}/>
                )
            }
            {/*<Post id={messageData[0].id} message={messageData[0].message} likeCounter={messageData[0].likes}/>*/}
            {/*<Post id={messageData[1].id} message={messageData[1].message} likeCounter={messageData[1].likes}/>*/}
        </div>
    </div>
}
export default MyPosts