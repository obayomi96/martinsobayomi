import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = () => {
	return (
		<header>
			<div className="header-div">
					<Link className="active logo" to="/"><b style={{color: "grey"}}>Martins</b> <span style={{color: "violet"}}>Obayomi</span></Link>
				<div className="links">
					<h5 style={{color: '#ddd', fontSize: '18px'}}>
						obayomimartins96@gmail.com
					</h5>
				  {/* <ul>
						<li className="other-links">
							<Link id="other-links" to="/projects">
								Projects
							</Link>
						</li>
						<li className="other-links">
							<Link id="other-links" to="/">About</Link>
						</li>
						<li className="other-links">
							<Link id="other-links" to="/">Contact
							</Link>
						</li>
					</ul> */}
				</div>
      </div>
    </header>
	);
}

export default Header;
