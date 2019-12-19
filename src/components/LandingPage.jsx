import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import imgSrc from '../assets/images/mental-health.png';

const LandingPage = () => {
	return (
		<>
		<Header />
		<div className="flex">
		    <div className="social">
					<div>
						<Link to="https://m.facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
					</div>
					<div>
						<Link to="http://twitter.com"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
					</div>
					<div>
						<Link to="https://www.linkedin.com"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
					</div>
        </div>
				<div className="column">
					<p className="about">
						<b><span >Surepsyches is a mental health application that helps bridge <br></br>the great lapse in mental health awareness in Nigeria.</span></b>
						<br></br>
						<small>It provides readily-accessible individual counselling/psychological <br></br>
						therapy and structured group sessions (where necessary) for <br></br>anyone with,
						or at the risk of developing a mental illness.
						</small>
					</p>
				<div className="image"><img src={imgSrc} className="img" alt="maental health" height="550px" width="700px" /></div>
        </div>
    		<div className="shift">
        	<div className="flextwo cards">
            <div>
							<div className="send-chat">
								<Link to="/"><i className="fa fa-comment" style={{color: "green", fontSize: "50px"}}></i></Link>
							</div>
            </div>
            <div>
							<h4>Private chat an expert</h4>
							<p>You can have Link one-on-one chat with our verified psychological expert</p>
            </div>
        	</div>
        	<div className="flexrest cards">
            <div>
							<div className="send-chat">
								<Link to="/"><i className="fa fa-comment " style={{color: "green", fontSize: "50px"}}></i></Link>
							</div>
							<div>
								<h4>Know your mental health</h4>
								<p>Run Link quick survey and know the state of your mental health . It is absolutely FREE</p>
							</div>
            </div>
        	</div>
        	<div className="flexrest cards">
						<div>
							<div className="send-chat">
								<Link to="/"><i className="fa fa-phone" style={{color: "green", fontSize: "50px"}}></i></Link> 
							</div>
							<div>
								<h4>Emergency?  Call Us Now</h4>
								<p>Speak with a mental health social worker</p>
							</div>
						</div>
          </div>
				</div>
    </div>
		</>
	);
}

export default LandingPage;
