import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import imgSrc from '../assets/images/myphoto.jpeg';

const LandingPage = () => {
	return (
		<>
		<Header />
		<div className="flex">
				<div className="column">
					<p className="about">
						I'm a Fullstack Software Engineer and a technology enthusiast who is passionate about problem solving and adapts well to change.<br/>
						I'm a diverse individual who loves to integrate and contribute meaningfully to the progress of any team I'm opportune to work with.<br/>
						My objectives are to create meaningful and useful products, and be a valuable member among my stakeholders.<br/>
					</p>
					<div className="image">
						<img src={imgSrc} style={{border: '3px grey solid', borderRadius: '4px'}} className="img" alt="Martins Obayomi profile photo" height="250px" width="60px" />
					</div>
        </div>
    </div>
		</>
	);
}

export default LandingPage;
