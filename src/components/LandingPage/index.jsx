import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import imgSrc from '../../assets/images/myphoto.jpeg';
import './LandingPage.scss';

const LandingPage = () => {
	return (
		<div style={{padding: '1em'}}>
		<Header />
		<div className="">
				<div className="column">
					<p className="about">
						I'm a Fullstack Software Engineer and a technology enthusiast who is passionate about problem solving and adapts well to change.
						I'm a diverse individual who loves to integrate and contribute meaningfully to the progress of any team I'm opportune to work with.
						My objectives are to create meaningful and useful products, and be a valuable member among my stakeholders.
					</p>
					<div className="image">
						<img src={imgSrc} className="img" alt="Martins Obayomi profile" />
					</div>
        </div>
					<h3 className="skills-section-head" >Skills / Languages / Frameworks</h3>
				<div className="skills-section">
					<div className="skills left-skills">
						<ul>
							<li>React / Redux / Redux-saga</li>
							<li>Next</li>
							<li>Vue / Vuex</li>
							<li>Nuxt</li>
							<li>PostgreSQL</li>
							<li>NodeJS / Express</li>
							<li>MongoDB</li>
							<li>Vanilla JS</li>
						</ul>
					</div>
					<div className="skills right-skills">
						<ul>
							<li>HTML</li>
							<li>CSS / SCSS / SASS</li>
							<li>Material-UI</li>
							<li>Bootstrap</li>
							<li>Unit Testing</li>
							<li>Integration Testing</li>
							<li>End-To-End Testing</li>
						</ul>
					</div>
				</div>
				<h3 className="skills-section-head" >TOOLS</h3>
				<div className="skills-section sec2">
					<div className="skills left-skills">
						<ul>
							<li>Version Control – Git</li>
							<li>CI / CD - Travis</li>
							<li>Heroku</li>
							<li>Babel / Webpack</li>
						</ul>
					</div>
					<div className="skills right-skills">
						<ul>
							<li>Zoom / Slack</li>
							<li>Pivotal Tracker / Trello</li>
							<li>Figma</li>
							<li>VScode</li>
						</ul>
					</div>
				</div>
    </div>
		<Footer />
		</div>
	);
}

export default LandingPage;
