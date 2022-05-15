import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const postsData = [
    {id:1,message:'Hi, how are you?',likes:10},
    {id:2,message:'I started learning React',likes:15}
]


const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPosts postsData={postsData}/>
    </div>
}
export default Profile