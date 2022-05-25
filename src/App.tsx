import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RootStateType} from './Components/redux/state'

type AppPropsType = {
    state: RootStateType
    addPost: (innerText: string) => void
}

const App = (props: AppPropsType) => {

    const posts = props.state.profilePage.posts
    const messages = props.state.dialogsPage.messages
    const dialogs = props.state.dialogsPage.dialogs
    const addPost = props.addPost

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/Profile*/' element={<Profile posts={posts} addPost={addPost}/>}/>
                        <Route path='/Dialogs*/' element={<Dialogs messages={messages} dialogs={dialogs}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
