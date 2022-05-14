import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = () => {
    return <div  className={s.postsBlock}>
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
            <Post message='Hi, how are you?' likeCounter='8'/>
            <Post message='I started to study React' likeCounter='15'/>
        </div>
    </div>
}
export default MyPosts