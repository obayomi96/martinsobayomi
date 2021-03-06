import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './Projects.scss';

import authorsHaven from '../../assets/images/authorshaven.png';
import banka from '../../assets/images/banka.png';
import blinkalert from '../../assets/images/blinkalert.png';
import foodcafe from '../../assets/images/foodcafe.png';
import passport from '../../assets/images/passport.png';
import surepsyce from '../../assets/images/surepsyce.jpg';
import covid from '../../assets/images/covid.png';
import githubfinder from '../../assets/images/githubfinder.png';

const Projects = () => {
  const projectsArray = [
    {
      id: 1,
      name: "Authors' Haven",
      imageUrl: authorsHaven,
      githubUrl: "https://github.com/andela/ah-commando-frontend",
      deployment: "https://ah-commando-react.herokuapp.com",
    },
    {
      id: 2,
      name: "BlinkAlert Extension",
      imageUrl: blinkalert,
      githubUrl: "https://github.com/obayomi96/blinkalert",
      deployment: "https://chrome.google.com/webstore/detail/blink-alert/ecdcckdocbdegecfpmdgblfaiaplggob?hl=en-US",
    },
    {
      id: 3,
      name: "Covid-19 Tracker",
      imageUrl: covid,
      githubUrl: "https://github.com/obayomi96/covid19",
      deployment: "http://obayomi-covid19-update.netlify.com/",
    },
    {
      id: 4,
      name: "Github Finder",
      imageUrl: githubfinder,
      githubUrl: "https://github.com/obayomi96/github_react",
      deployment: "https://obayomi-github.netlify.com",
    },
    { id: 5,
      name: "Banka React",
      imageUrl: banka,
      githubUrl: "https://github.com/obayomi96/Banka-React",
      deployment: "https://reactbanka.herokuapp.com",
    },
    {
      id: 6,
      name: "Passport",
      imageUrl: passport,
      githubUrl: "https://github.com/obayomi96/passport-js-app",
      deployment: "https://obayomipassport.herokuapp.com/users/login",
    },
    {
      id: 7,
      name: "Food Cafe",
      imageUrl: foodcafe,
      githubUrl: "https://github.com/obayomi96/foodcafe",
      deployment: "https://foodcafe.herokuapp.com",
    },
    {
      id: 8,
      name: "Surepsyche",
      imageUrl: surepsyce,
      githubUrl: "https://github.com/Team-Techpsyche/naijahacks-surepsyche",
      deployment: "http://surepsyche.herokuapp.com/",
    },
  ];

  const projs = projectsArray.map(proj => {
    return (
      <div className="cards" key={proj.id}>
        <div className="img-content">
          <img className="worker-img" src={proj.imageUrl} alt="project url" />
          <div style={{display: "block", marginRight: "0", marginLeft: "50px"}}>
            <h2 style={{color: 'grey', fontWeight: "bolder", paddingTop: '20px'}}>{proj.name}</h2>
          </div>
        </div>
          <div>
            <a id="other-links" href={proj.githubUrl}>
              <h3>Github</h3>
						</a>
            <a id="other-links" href={proj.deployment}>
              <h3>View site</h3>
						</a>
          </div>
      </div>
    );
  })

  return (
    <>
      <Link id="other-links" to="/">
        <h2>Go back</h2>
			</Link>
      <div className="workers-cards">
        {projs}
      </div>
      <Footer />
    </>
  )
}

export default Projects;
