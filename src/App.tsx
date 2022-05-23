import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {state} from './Components/redux/state'


const App = () => {

    const posts = state.profilePage.posts
    const messages = state.dialogsPage.messages
    const dialogs = state.dialogsPage.dialogs


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar />
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/Profile*/' element={<Profile posts={posts}/>}/>
                        <Route path='/Dialogs*/' element={<Dialogs messages={messages} dialogs={dialogs}/>}/>
                    </Routes>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
}


export default App;
