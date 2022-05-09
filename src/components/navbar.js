import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.css';
const img = require('../imgs/logo/logo.PNG');

export function Navbar (props){

    return(
        <nav className='div-navbar'>
            <div className='img-div '>
                <img src={img} alt='logo'/>
            </div>
            <ul>
                <li><span onClick={() => {props.setDisplay(1)}}>Homepage</span></li>
                <li><span onClick={() => {props.setDisplay(2)}}>T-shirts</span></li>
                <li><span onClick={() => {props.setDisplay(3)}}>Hoodies</span></li>
                <li><span onClick={() => {props.setDisplay(4)}}>Prints</span></li>
                <li><span onClick={() => {props.setDisplay(5)}}>Others</span></li>
                <li><span onClick={() => {props.setDisplay(6)}}>About</span></li>
            </ul>
            <div className='socials'>
                <a href='https://www.instagram.com'><FontAwesomeIcon className='socials-icon' icon={faInstagram} /></a>
                <a href='https://www.twitter.com'><FontAwesomeIcon className='socials-icon' icon={faTwitter}/></a>
                <a href='https://www.facebook.com'><FontAwesomeIcon className='socials-icon' icon={faFacebookF} /></a>
            </div>

        </nav>
    )
}
