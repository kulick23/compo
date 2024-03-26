import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

