/* eslint-disable */
import {React, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import About from './pages/About';
import profile from './img/profile.jpeg';
import background from './img/background.mp4';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMobile} from "@fortawesome/free-solid-svg-icons";


function App() {
  let [modal, setModal] = useState(false);
  return(
    <top>
        <header>
          <div class='inner'>
            <h1><a href=''>Na_0</a></h1>
            <ul id="gnb">
              <li><a className="nav" onClick={() => {
                setModal(!modal);
              }}>About me</a></li>

              <li><a className="nav" onClick={() => {
                
              }}>my skill</a></li>

              <li><a className="nav" onClick={() => {
                
              }}>my project</a></li>
            </ul>
          </div>
          <div className="modalPage">
            {
              modal === true ? <About /> : null
            }
          </div>
        </header>

        <figure>
          <video src={background}></video>
          <div className='inner'>
            <h1>
                <p>안녕하세요.</p>
                <p>함께 성장하고 싶은</p>
                <p>개발자 김나영입니다.</p>
            </h1>
            <div className='profile'>
              <img src={profile}></img>
            </div>
          </div>
        </figure>
        <footer>
          <div className='inner'>
            <ul>
              <li>
                <span><FontAwesomeIcon icon={faEnvelope}/></span>
                <p>
                  na0920kim@gmail.com
                </p>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faMobile}/></span>
                <p>010-7433-8551</p>
              </li>
              <li>
                <span>github</span>
                <p>kimna0920</p>
              </li>
            </ul>
          </div>
        </footer>
    </top>
  );
}

export default App;