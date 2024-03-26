import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';


const App = () => {

  return (

    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </div>

  );
}


export default App;
