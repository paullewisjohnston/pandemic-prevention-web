import React from 'react';
import logo from './logo.svg';
import './App.css';
import hero from './pp_hero.mov';

function App() {
  return (
    <div className="App" height='100vh' width='100vw'>
      <header className="App-header">
        <div style={{overflow:'hidden', height:'100%', width:'100%', zIndex:99, position: 'absolute'}}>
          <video maxHeight='100%' maxWidth='100%' style={{ position: 'absolute', transform:'translate(-50%, -50%)', left:'50%', top:'50%'}} autoPlay loop>
            <source src={hero} type="video/mp4"/>
          </video>
          <div style={{overflow:'hidden', backgroundColor:'black', opacity:'0.9', height:'100%', width:'100%', zIndex:1, position: 'absolute'}}/>
          <div style={{overflow:'hidden', height:'100%', width:'90%', zIndex:98, position: 'absolute', transform:'translate(-50%, -50%)', left:'50%', top:'70%'}}>
              <img src={logo} className="App-logo" alt="logo" />
                <h1>Pandemic Prevention</h1>
                <p>Coming Soon- IOS & Android</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;