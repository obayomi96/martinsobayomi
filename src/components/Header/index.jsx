import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
	return (
		<header>
			<div className="header-div">
					<Link className="active logo" to="/"><b style={{color: "grey"}}>Martins</b> <span style={{color: "violet"}}>Obayomi</span></Link>
				<div className="links">
				  <ul>
						<li className="other-links">
							<Link id="other-links" to="/projects">
								Projects
							</Link>
						</li>
						<li className="other-links"><Link id="other-links" to="/about"> About</Link></li>
						<li className="other-links">
							<Link id="other-links" to="/contact">Contact
							</Link>
						</li>
					</ul>
				</div>
      </div>
    </header>
	);
}

export default Header;
