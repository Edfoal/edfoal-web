import React from 'react';
import {
  Header,Footer,Quote,IndustryPartners,
  CollegePartners, Team, Service, AboutUs
} from './containers/contIndex';
import {BackToTopButton} from './components/index';
import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Service/>
      <Quote/>
      <Team/>
      <IndustryPartners/>
      <CollegePartners/>
      <Footer/>
      <BackToTopButton/>
    </div>
  );
}

export default App;
