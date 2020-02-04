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
          <Card imgLink="https://i.ibb.co/kXDpf91/html5-640x960.jpg" title = "HTML" text="estes es un texto que van en la card y que se usa de muestra" url="https://www.google.com" link="GOOGLE"/> 
          <Card imgLink="https://i.ibb.co/FhQjL8G/CSS.jpg" title = "CSS STYLE" text="estes es un texto que van en la card y que se usa de muestra" url="https://www.google.com" link="GOOGLE"/>
          <Card imgLink="https://i.ibb.co/72FRzmT/js-icon-26.png" title = "JAVASCRIPT" text="estes es un texto que van en la card y que se usa de muestra" url="https://www.google.com" link="GOOGLE"/>
          <Card imgLink="https://i.ibb.co/my3LKgx/react-2.png" title = "REACT" text="estes es un texto que van en la card y que se usa de muestra" url="https://www.google.com" link="GOOGLE"/>       
        </div>
        <div id ="divFooter">
          <Footer></Footer>
       </div>
    </div>
  );
}

export default App;
