import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {state} from "../redux/state";



const NavBar = () => {
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
                {state.sideBar.map((el,key)=>
                    <img src={el.img}/>
                )}
                {state.sideBar.map((el,key)=>
                <div className={s.smallNames} >{el.name}</div>)}
            </span>
        </div>
    </nav>
}
export default NavBar