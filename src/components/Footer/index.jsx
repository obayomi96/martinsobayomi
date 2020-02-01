import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';


const Footer = () => {
	return (
    <footer className='footer-div'>
      <ul className='footer-ul'>
          <li className='footer-li'>
            <Link className='footer-link' to="https://github.com/obayomi96">
              GitHub
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="https://www.linkedin.com/in/martins-obayomi-998202162/">LinkedIn
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="https://stackoverflow.com/users/9985506/martins">StackOverflow
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="https://twitter.com/martinsobayomi"> Twitter
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="https://www.instagram.com/obayomimartins_/?hl=en">Instagram
            </Link>
          </li>
        </ul>
    </footer>
	);
}

export default Footer;
