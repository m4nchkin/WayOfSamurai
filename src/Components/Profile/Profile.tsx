import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (innerText:string) => void
}

const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
}
export default Profile