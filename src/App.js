import React from 'react';
import logo from './logo.svg';
import './App.css';
import hero from './pp_hero.mov';

function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <div className="video-container">
          <div className="video-overlay"/>
          <div className="video-overlay-content">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Pandemic Prevention</h1>
            <p>Coming Soon: IOS & Android</p>
          </div>
          <video className="video" src={hero} autoPlay loop muted/>
        </div>
      </div>


        {/* <div style={{ height:'100%', width:'100%', zIndex:99, position: 'absolute'}}>
          <video style={{ position: 'absolute', transform:'translate(-50%, -50%)', left:'50%', top:'50%'}} autoPlay loop muted>
            <source src={hero} type="video/mp4"/>
          </video>
          <div style={{backgroundColor:'black', opacity:'0.9', height:'100%', width:'100%', zIndex:1, position: 'absolute'}}/>
          <div style={{ height:'100%', width:'90%', zIndex:98, position: 'absolute', transform:'translate(-50%, -50%)', left:'50%', top:'70%'}}>
              <img src={logo} className="App-logo" alt="logo" />
                <h1>Pandemic Prevention</h1>
                <p>Coming Soon: IOS & Android</p>
          </div>
        </div> */}
    </div>
  );
}

export default App;