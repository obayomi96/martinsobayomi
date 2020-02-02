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
    { id: 3,
      name: "Banka React",
      imageUrl: banka,
      githubUrl: "https://github.com/obayomi96/Banka-React",
      deployment: "https://reactbanka.herokuapp.com",
    },
    {
      id: 4,
      name: "Food Cafe",
      imageUrl: foodcafe,
      githubUrl: "https://github.com/obayomi96/foodcafe",
      deployment: "https://foodcafe.herokuapp.com",
    },
    {
      id: 5,
      name: "Passport",
      imageUrl: passport,
      githubUrl: "https://github.com/obayomi96/passport-js-app",
      deployment: "https://obayomipassport.herokuapp.com/users/login",
    },
    {
      id: 6,
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
          <img className="worker-img" src={proj.imageUrl} alt="social worker url" />
          <div style={{display: "block", marginRight: "0", marginLeft: "50px"}}>
            <h2 style={{color: 'grey', fontWeight: "bolder", paddingTop: '20px'}}>{proj.name}</h2>
          </div>
        </div>
          <div>
            <Link id="other-links" to={proj.githubUrl}>
              <h3>Github</h3>
						</Link>
            <Link id="other-links" to={proj.deployment}>
              <h3>View site</h3>
						</Link>
          </div>
      </div>
    );
  })

  return (
    <>
      <Link id="other-links" to="/">
        <h2>Go back</h2>
			</Link>
      <h3 style={{width: "100%", color: '#ddd'}}></h3>
      <div className="workers-cards">
        {projs}
      </div>
      <Footer />
    </>
  )
}

export default Projects;
