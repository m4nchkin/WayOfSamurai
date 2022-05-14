import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import {Dialogs} from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/Dialogs*' element={<Dialogs/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
}


export default App;
