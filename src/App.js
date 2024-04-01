import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer";





const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header getTotalPrice = {props.getTotalPrice} />
      <div className='app-wrapper-content'>
          <Main updateTotalPrice = {props.updateTotalPrice} />
      </div>
        <Footer />
    </div>

  );
}


export default App;
