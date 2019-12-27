 import React from 'react';
import './App.css';
import Card from './card';
import Footer from './footer';
import Navbar from './navbar';
import Jumbo from './jumbo';

function App() {
  return (
    <div className="App container-fluid p-0">
        <Navbar/>
        <div className='container'>
          <Jumbo/>
        </div>
        <div className='container'>         
          <Card/>           
        </div>
        <div id ="divFooter">
          <Footer></Footer>
       </div>
    </div>
  );
}

export default App;
