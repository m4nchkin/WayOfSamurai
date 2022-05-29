import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    addNewPostText: (newPostText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    // const post = props.newPostText
    const [post, setPost] = useState('')
    // let textRef = React.createRef<HTMLTextAreaElement>()

    const postAdder = () => {
        props.addPost()
        setPost('')
    }

    const onChangeTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.currentTarget.value)
        props.addNewPostText(post)
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
                props.posts.map((el,key) =>
                    <Post id={el.id} message={el.message} likes={el.likes}/>
                )
            }
        </div>
    </div>
}
export default MyPosts