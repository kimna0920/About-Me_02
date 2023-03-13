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
        <footer>
            <div className='inner'>
                <ul>
                    <li>
                    <a><span><FontAwesomeIcon icon={faEnvelope}/></span></a>
                    <p>
                        na0920kim@gmail.com
                    </p>
                    </li>
                    <li>
                    <a><span><FontAwesomeIcon icon={faMobile}/></span></a>
                    <p>010-7433-8551</p>
                    </li>
                    <li>
                    <a href='https://github.com/kimna0920'><span>github</span></a>
                    <p>kimna0920</p>
                    </li>
                </ul>
                <ul>
                    <li>
                    <a><span><FontAwesomeIcon icon={faSchool}/></span></a>
                    <p>
                        부산 소프트웨어 마이스터고 
                    </p>
                    </li>
                    <li>
                    <a><span><FontAwesomeIcon icon={faHouse}/></span></a>
                    <p>Ulsan</p>
                    </li>
                    <li>
                    <a href='https://github.com/kimna0920'><span>instagram</span></a>
                    <p>kimna0920</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;
