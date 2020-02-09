import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';


const Footer = () => {
	return (
    <footer className='footer-div'>
      <ul className='footer-ul'>
          <li className='footer-li'>
            <a className='footer-link' href="https://github.com/obayomi96">
              GitHub
            </a>
          </li>
          <li>
            <a className='footer-link' href="https://www.linkedin.com/in/martins-obayomi-998202162/">LinkedIn
            </a>
          </li>
          <li>
            <a className='footer-link' href="https://stackoverflow.com/users/9985506/martins">StackOverflow
            </a>
          </li>
          <li>
            <a className='footer-link' href="https://twitter.com/martinsobayomi"> Twitter
            </a>
          </li>
          <li>
            <a className='footer-link' href="https://www.instagram.com/obayomimartins_/?hl=en">Instagram
            </a>
          </li>
        </ul>
    </footer>
	);
}

export default Footer;
