import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from './pages/About';
import profile from './img/profile.jpeg';
import background from './img/background.mp4';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

function Main(){
    return(
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
      );
}

export default Header;