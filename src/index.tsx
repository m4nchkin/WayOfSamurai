import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./Components/redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const render = () => {
    root.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>
    );
}

render()
store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
