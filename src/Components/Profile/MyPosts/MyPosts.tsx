import React, {useState} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType, ProfilePageType} from "../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (innerText:string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const [one,setOne] = useState('')
    // let textRef = React.createRef<HTMLTextAreaElement>()

    const postAdder = () => {
        props.addPost(one)
        alert(one)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea value={one} onChange={e=>setOne(e.currentTarget.value)}></textarea>
            </div>
            <div>
                <button onClick={postAdder}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.posts.map(el =>
                    <Post id={el.id} message={el.message} likes={el.likes}/>
                )
            }
            {/*<Post id={messageData[0].id} message={messageData[0].message} likeCounter={messageData[0].likes}/>*/}
            {/*<Post id={messageData[1].id} message={messageData[1].message} likeCounter={messageData[1].likes}/>*/}
        </div>
    </div>
}
export default MyPosts