import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: () => void
    addNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
                 addNewPostText={props.addNewPostText}
                 />
    </div>
}
export default Profile