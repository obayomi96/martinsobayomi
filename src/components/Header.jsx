import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<header>
			<div className="header-div">
				<ul>
					<li><Link className="active logo" to="/"><b style={{color: "grey"}}>Martins</b> <span style={{color: "violet"}}>Obayomi</span></Link></li>
				</ul>
				<div className="auth">
				  <ul>
						<li><Link className="other-links" to="/projects"> Projects</Link></li>
						<li><Link className="other-links" to="/about"> About</Link></li>
						<li><Link className="other-links" to="/contact"> Contact</Link></li>
					</ul>
				</div>
      </div>
    </header>
	);
}

export default Header;
