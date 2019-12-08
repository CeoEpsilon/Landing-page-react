import React from 'react';
import './App.css';
import Card from './card';
import Footer from './footer';

function App() {
  return (
    <div className="App container-fluid p-0">
        <div className="row Andres">
           <h1>AQUI VA EL NAV BAR</h1>
        </div>
        <div className="row Andres">
          <h1>AQUI VA EL JOMBOTRON</h1>
        </div>
        <div>         
            <Card></Card>           
        </div>
        <div id ="divFooter">
          <Footer></Footer>
       </div>
    </div>
  );
}

export default App;
