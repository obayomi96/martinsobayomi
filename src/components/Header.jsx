import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<header>
			<div className="header-div">
				<ul>
					<li><Link className="active logo" to="">SUREP<span style={{color: "green"}}>SYCHE</span></Link></li>
					<li><Link className="other-links" to="">About us</Link></li>
					<li><Link className="other-links" to="/social-workers">Contact Specialists</Link></li>
				</ul>
				<div className="auth">
					<p><Link className="sign-in" to="">Sign in</Link></p>
					<button>Get Started</button>
				</div>
      </div>
    </header>
	);
}

export default Header;
