import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  {getTotalPrice, updateTotalPrice} from "./redux/State";
import { createRoot } from 'react-dom/client';


export let renderEntireTree = () => {
    createRoot(document.getElementById('root')).render( // Используем createRoot вместо ReactDOM.render
        <React.StrictMode>
            <BrowserRouter>
                <App  getTotalPrice={getTotalPrice} updateTotalPrice = {updateTotalPrice} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

