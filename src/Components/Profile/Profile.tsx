import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../redux/state";

type ProfilePropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 dispatch={props.dispatch}
                 />
    </div>
}
export default Profile