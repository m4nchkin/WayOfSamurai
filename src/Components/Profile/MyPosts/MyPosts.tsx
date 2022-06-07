import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionsTypes, addPostActionCreator, PostType, updateTextActionCreator} from "../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    const [post, setPost] = useState('')

    const postAdder = () => {
        props.dispatch(addPostActionCreator())
        setPost('')
    }

    const onChangeTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.currentTarget.value)
        props.dispatch(updateTextActionCreator(post))
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea value={post} onChange={onChangeTextHandler}></textarea>
            </div>
            <div>
                <button onClick={postAdder}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.posts.map((el) =>
                    <Post id={el.id} message={el.message} likes={el.likes}/>
                )
            }
        </div>
    </div>
}
export default MyPosts