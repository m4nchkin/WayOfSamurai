import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ActionsTypes, store, storeType} from './Components/redux/state'

type AppPropsType = {
    store: storeType
    dispatch: (action: ActionsTypes) => void
    // addNewPostText: (newPostText: string) => void
}

const App = (props: AppPropsType) => {

    const state = props.store.getState()

    const posts = state.profilePage.posts
    const messages = state.dialogsPage.messages
    const dialogs = state.dialogsPage.dialogs


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar store={props.store}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/Profile*/'
                               element={<Profile
                                   posts={posts}
                                   dispatch={props.dispatch.bind(state)}
                               />}/>
                        <Route path='/Dialogs*/'
                               element={<Dialogs
                                   messages={messages}
                                   dialogs={dialogs}
                                   dispatch={props.dispatch.bind(state)}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
