import React, { Component } from 'react';
import { Row, Col, Card, Jumbotron, Container, Image } from 'react-bootstrap';
import Contact from './Contact';
import quizImage from './images/gameheadef.png';
import wizardImage from './images/wizard copy.png';
import fleetImage from './images/fleet.png';
import fetchgoal from './images/fetchGoal.jpg';
import picnic from './images/popuppicnics.jpg';
import coffee from './images/needcoffee.jpg';


import Typical from 'react-typical';

import './App.scss';
import Playingaround from './Playingaround';

class Home extends Component {
	render() {
		return (
			<>
				<div className='body'>
					<Jumbotron
						sm={12}
						className='header'
						fluid
						style={{
							background: 'white',
							height: '20vh',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							margin: '0 auto',
						}}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								justifyContent: 'center',
							}}>
							<h1>Welcome To Thomas' Portfolio</h1>
							<p>
								Thomas is{' '}
								<Typical
									loop={Infinity}
									wrapper='b'
									steps={[
										'a Developer',
										1000,
										'a Creator',
										1000,
										'an Imaginer',
										1000,
										'Changing the world one line of code at a time',
										1000,
									]}
								/>
							</p>
						</div>
					</Jumbotron>

					<Playingaround />

					<Container fluid>
						<div>
							<h1
								style={{
									color: '#14A76C',
									fontSize: '2em',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
									margin: '1em',
									textAlign: 'center',
								}}>
								Projects
							</h1>
						</div>

						<Row
							style={{
								alignItems: 'center',
								textAlign: 'center',
								justifyContent: 'center',
							}}>
							<Col lg={4} sm={6} className='projects'>
								<p>Capital Cities Quiz Game</p>
								<img
									src={quizImage}
									alt='imageofquizapp'
									className='projectimage'
								/>
								<p className='projectsText'>
									An app made vanilla Javascript, HTML and CSS
								</p>

								<div className='links'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to GitHub Repo
									</a>

									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to Deployed app
									</a>
									<a href='/quizgame'>More In Depth Information</a>
								</div>
							</Col>

							<Col lg={4} sm={6} className='projects'>
								<p>Know Your Wizard</p>
								<img
									variant='top'
									src={wizardImage}
									alt='imageofwizardapp'
									className='projectimage'
								/>

								<p className='projectsText'>
									App made in React using 3rd party api for data.
								</p>

								<div className='links'>
									<a href='https://github.com/thomasjfcaldwell/know-your-wizard'>
										Link to GitHub Repo
									</a>

									<a href='https://knowyourwizard.herokuapp.com/wizards'>
										Link to Deployed app
									</a>
									<a href='/knowyourwizard'>More In Depth Information</a>
								</div>
							</Col>
							<Col lg={4} sm={6} className='projects'>
								<p>Fleet</p>
								<img
									variant='top'
									src={fleetImage}
									alt='imageoffleetapp'
									className='projectimage'
								/>

								<p className='projectsText'>
									A group app developed with 3 other developers.
								</p>
								<div className='links'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to GitHub Repo
									</a>

									<a href='https://warm-brook-93750.herokuapp.com'>
										Link to Deployed app
									</a>
									<a href='/fleet'>More In Depth Information</a>
								</div>
							</Col>
							<Col lg={4} sm={6} className='projects'>
								<p>FetchGoal</p>
								<img
									variant='top'
									src={fetchgoal}
									alt='imageoffetchgoalapp'
									className='projectimage'
								/>

								<p className='projectsText'>
									An App for Soccer lovers full of facts and stats
								</p>
								<div className='links'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to GitHub Repo
									</a>

									<a href='https://warm-brook-93750.herokuapp.com'>
										Link to Deployed app
									</a>
									<a href='/fetchgoal'>More In Depth Information</a>
								</div>
							</Col>
							<Col lg={4} sm={6} className='projects'>
								<p>Pop Up Picnics</p>
								<img
									variant='top'
									src={picnic}
									alt='imageofpicnicapp'
									className='projectimage'
								/>

								<p className='projectsText'>
									A site for members of the public to book picnics
								</p>
								<div className='links'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to GitHub Repo
									</a>

									<a href='https://warm-brook-93750.herokuapp.com'>
										Link to Deployed app
									</a>
									<a href='/picnics'>More In Depth Information</a>
								</div>
							</Col>
							<Col lg={4} sm={6} className='projects'>
								<p>Need Coffee??</p>
								<img
									variant='top'
									src={coffee}
									alt='imageofcoffeeapp'
									className='projectimage'
								/>

								<p className='projectsText'>
									A sideline project made through the love of coffee.
								</p>
								<div className='links'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to GitHub Repo
									</a>

									<a href='https://warm-brook-93750.herokuapp.com'>
										Link to Deployed app
									</a>
									<a href='/picnics'>More In Depth Information</a>
								</div>
							</Col>
						</Row>
					</Container>
					<Contact />
				</div>
			</>
		);
	}
}

export default Home;
