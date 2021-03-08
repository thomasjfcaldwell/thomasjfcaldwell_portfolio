import React, { Component } from 'react';
import { Row, Col, Card, Jumbotron, Container, Image } from 'react-bootstrap';
import Contact from './Contact';
import portrait from './images/thomasportfolioimage.jpg';
import quizImage from './images/gameheadef.png';
import wizardImage from './images/wizard copy.png';
import fleetImage from './images/fleet.png';
import HTML from './icons/HTML.png';
import CSS from './icons/CSS.png';
import JAVASCRIPT from './icons/Javascript.png';
import fetchgoal from './images/fetchGoal.jpg';
import picnic from './images/popuppicnics.jpg';
import coffee from './images/needcoffee.jpg';

import Reactlogo from './icons/react.png';
import Bootstrap from './icons/bootstrap.png';
import Adobe from './icons/adobe.png';
import Wordpress from './icons/woodpress.png';
import BigCommerce from './icons/BigCommerce.png';
import Github from './icons/github.png';
import Typical from 'react-typical';

import './App.scss';

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
					<Container fluid>
						<Row className='m-5'>
							<Col
								lg={6}
								sm={12}
								className='text-center'
								style={{
									backgroundColor: '#272727',
								}}>
								<div>
									<h1
										style={{
											color: '#14A76C',
											fontSize: '2em',
											fontFamily: 'Montserrat',
											textTransform: 'uppercase',
										}}>
										About THOMAS
									</h1>
								</div>
								<Card className='border-0 bg-transparent text-center '>
									<Card.Body className=' bg-transparent'>
										<Card.Text
											style={{
												fontSize: '0.9em',
												lineHeight: '1.2em',
												color: 'white',
											}}>
											Thomas is a web developer and designer currently residing
											in Huntington Beach, CA. Originally from The United
											Kingdom he lives with his wife and pets. When he's not
											designing websites he like long walks on the beach and
											surfing.
										</Card.Text>
										<Image
											src={portrait}
											style={{
												width: '75%',
												padding: '0.5em',
											}}
										/>
										<Card.Text
											style={{
												fontSize: '0.9em',
												lineHeight: '1.2em',
												color: 'white',
											}}>
											Forward thinking and mature UI developer who can deal with
											all tasks without fuss. Able to synthesize information and
											achieve a solution to a problem and take the lead on that
											task. A skilled designer with experience in front-end and
											back end web applications. Looking to further skills and
											bring expertise, leadership and creativity to the right
											role
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col
								sm={12}
								lg={6}
								style={{
									backgroundColor: 'white',
								}}>
								<div>
									<h1
										style={{
											color: '#14A76C',
											fontSize: '2em',
											textAlign: 'center',
											fontFamily: 'Montserrat',
											textTransform: 'uppercase',
										}}>
										SKILLS
									</h1>
								</div>
								<Container>
									<Row>
										<div className='skills'>
											<p>HTML</p>
											<Image
												className='skillsImage'
												src={HTML}
												alt='htmllogo'
											/>
										</div>
										<div className='skills'>
											<p>CSS</p>
											<Image className='skillsImage' src={CSS} alt='CSSlogo' />
										</div>
										<div className='skills'>
											<p>JavaScript</p>
											<Image
												className='skillsImage'
												src={JAVASCRIPT}
												alt='javascriptLogo'
											/>
										</div>
									</Row>
								</Container>
								<Container>
									<Row>
										<div className='skills'>
											<p>React</p>
											<Image
												className='skillsImage'
												src={Reactlogo}
												alt='htmllogo'
											/>
										</div>
										<div className='skills'>
											<p>Bootstrap</p>
											<Image
												className='skillsImage'
												src={Bootstrap}
												alt='bootstraplogo'
											/>
										</div>
										<div className='skills'>
											<p>Adobe Suite</p>
											<Image
												className='skillsImage'
												src={Adobe}
												alt='javascriptLogo'
											/>
										</div>
									</Row>
								</Container>
								<Container>
									<Row>
										<div className='skills'>
											<p>Wordpress</p>
											<Image
												className='skillsImage'
												src={Wordpress}
												alt='htmllogo'
											/>
										</div>
										<div className='skills'>
											<p>BigCommerce</p>
											<Image
												className='skillsImage'
												src={BigCommerce}
												alt='CSSlogo'
											/>
										</div>
										<div className='skills'>
											<p>Github</p>
											<Image
												className='skillsImage'
												src={Github}
												alt='javascriptLogo'
											/>
										</div>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>

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

						<Row>
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
