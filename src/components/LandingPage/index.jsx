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
						My objectives are to create meaningful and useful products, and be a valuable member of my stakeholders. <br/>
						I enjoy algorithms, mentoring, writing, gaming, and meeting new people.
					</p>
					<div className="image">
						<img src={imgSrc} className="img" alt="Martins Obayomi profile" />
					</div>
        </div>
					<h3 className="skills-section-head" >Skills / Languages / Frameworks</h3>
				<div className="skills-section">
					<div className="skills left-skills">
						<ul>
							<li>React/Redux/Redux-saga</li>
							<li>Next.JS</li>
							<li>Vue/Vuex</li>
							<li>Nuxt.JS</li>
							<li>PostgreSQL/Sequelize</li>
							<li>NodeJS/Express</li>
							<li>MongoDB/Mongoose/MongoJS</li>
							<li>DevOps</li>
						</ul>
					</div>
					<div className="skills right-skills">
						<ul>
							<li>HTML</li>
							<li>CSS/SCSS/SASS</li>
							<li>JavaScript</li>
							<li>Material-UI</li>
							<li>Bootstrap</li>
							<li>Unit test</li>
							<li>Integration test</li>
							<li>e2e test</li>
						</ul>
					</div>
				</div>
				<h3 className="skills-section-head" >TOOLS</h3>
				<div className="skills-section sec2">
					<div className="skills left-skills">
						<ul>
							<li>Version Control – Git</li>
							<li>CI/CD - Travis CI</li>
							<li>Heroku</li>
							<li>Webpack</li>
							<li>Mocha/Chai</li>
							<li>Jest</li>
						</ul>
					</div>
					<div className="skills right-skills">
						<ul>
							<li>Zoom/Slack</li>
							<li>Pivotal Tracker/Trello/Jira</li>
							<li>Figma</li>
							<li>VScode</li>
							<li>Cypress/Selenium</li>
							<li>Nightswatch</li>
						</ul>
					</div>
				</div>
    </div>
		<Footer />
		</div>
	);
}

export default LandingPage;
