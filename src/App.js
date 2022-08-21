import React from 'react';
import {Header, Footer, Quote} from './containers/contIndex';
import {BackToTopButton} from './components/index';

import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App;
