import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer";


const App = () => {

  return (

    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'>
          <Main />
      </div>
        <Footer />
    </div>

  );
}


export default App;
