import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


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
					</ul>
					<h5 style={{color: 'grey', fontSize: '18px', paddingLeft: '30px'}}>
						obayomimartins96@gmail.com
					</h5>
				</div>
      </div>
    </header>
	);
}

export default Header;
