import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {storeType} from "../redux/state";

type NavBarType = {
    store:storeType
}

const NavBar = (props:NavBarType) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile*/' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Dialogs*/' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div className={s.friends}>
            <div>Friends</div>
            <span>
                {props.store.getState().sideBar.map((el)=>
                    <img src={el.img}/>
                )}
                {props.store.getState().sideBar.map((el)=>
                <div className={s.smallNames} >{el.name}</div>)}
            </span>
        </div>
    </nav>
}
export default NavBar