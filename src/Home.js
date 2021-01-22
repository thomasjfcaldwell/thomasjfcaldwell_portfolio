import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Jumbotron,
	Container,
	Image,
} from 'react-bootstrap';
import portrait from './images/thomasportfolioimage.jpg';
import quizImage from './images/gameheadef.png';
import wizardImage from './images/wizard copy.png';
import fleetImage from './images/fleet.png';
import HTML from './icons/HTML.png';
import CSS from './icons/CSS.png';
import JAVASCRIPT from './icons/Javascript.png';

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

				<Row className='mt-5'>
					<Col lg={6} sm={12} className='text-center'>
						<div>
							<h1
								style={{
									color: 'black',
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
										lineHeight: '1.9em',
									}}>
									Thomas is a web developer and designer currently residing in
									Huntington Beach, CA. Originally from The United Kingdom he
									lives with his wife and pets. When he's not designing websites
									he like long walks on the beach and surfing.
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
										lineHeight: '1.9em',
									}}>
									Forward thinking and mature UI developer who can deal with all
									tasks without fuss. Able to synthesize information and achieve
									a solution to a problem and take the lead on that task. A
									skilled designer with experience in front-end and back end web
									applications. Looking to further skills and bring expertise,
									leadership and creativity to the right role
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} lg={6} className='text-center'>
						<div>
							<h1
								style={{
									color: 'black',
									fontSize: '2em',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
								}}>
								SKILLS
							</h1>
						</div>
						<Row
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
							}}>
							<div className='skills'>
								<p>HTML</p>
								<Image className='skillsImage' src={HTML} alt='htmllogo' />
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
						<Row
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
							}}>
							<div className='skills'>
								<p>React</p>
								<Image className='skillsImage' src={Reactlogo} alt='htmllogo' />
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
						<Row
							style={{
								width: '100%',
								display: 'flex',
								flexDirection: 'row',
							}}>
							<div className='skills'>
								<p>Wordpress</p>
								<Image className='skillsImage' src={Wordpress} alt='htmllogo' />
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
					</Col>
				</Row>

				<Container fluid className='text-center border-0 mt-4'>
					<Card className='text-center border-0 mt-4'>
						<Card.Title
							style={{
								color: 'black',
								fontSize: '2em',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
							}}>
							Projects
						</Card.Title>
					</Card>
					<CardGroup
						className='mt-1 border-0'
						style={{
							fontFamily: 'Montserrat',
						}}>
						<Card className='m-3 border-0'>
							<Card.Title className='mt-5 text-center'>
								Capital Cities Quiz Game
							</Card.Title>
							<Card.Img variant='top' src={quizImage} className='p-2' />
							<Card.Body>
								<Card.Text>
									An app made vanilla Javascript, HTML and CSS - My first ever
									frontend Application
								</Card.Text>
							</Card.Body>
							<Card.Footer className='mt-2 bg-white border-0 text-center'>
								<Row>
									<Col sm={6} md={12} lg={12}>
										<Card.Link className='border border-primary p-2 text-center'>
											{' '}
											<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} lg={12} className='mt-4'>
										<Card.Link
											className='border border-primary p-2 text-center'
											href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
											Link to Deployed app
										</Card.Link>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
						<Card className='m-3 border-0'>
							<Card.Title className='mt-5 text-center'>
								Know Your Wizard
							</Card.Title>
							<Card.Img variant='top' src={wizardImage} className='p-2' />
							<Card.Body>
								<Card.Text>
									App made in React using 3rd party api for data. For all Harry
									potter fans to learn about different characters in the books.
								</Card.Text>
							</Card.Body>
							<Card.Footer className='mt-2 bg-white border-0 text-center w-100'>
								<Row
									style={{
										fontSize: '0.1',
									}}>
									<Col sm={12} md={12}>
										<Card.Link className='border border-primary p-2 text-center'>
											{' '}
											<a href='https://github.com/thomasjfcaldwell/know-your-wizard'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} className='mt-4 w-100'>
										<Card.Link
											className='border border-primary p-2 text-center'
											href='https://knowyourwizard.herokuapp.com/wizards'>
											Link to Deployed app
										</Card.Link>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
						<Card className='m-3 border-0'>
							<Card.Title className='mt-5 text-center'>Fleet</Card.Title>
							<Card.Img variant='top' src={fleetImage} className='p-2' />
							<Card.Body>
								<Card.Text>
									A group app developed with 3 other developers.
								</Card.Text>
							</Card.Body>
							<Card.Footer className='mt-2 bg-white border-0 text-center'>
								<Row>
									<Col sm={6} md={12} lg={12}>
										<Card.Link className='border border-primary p-2 text-center'>
											{' '}
											<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} lg={12} className='mt-4'>
										<Card.Link
											className='border border-primary p-2 text-center'
											href='https://warm-brook-93750.herokuapp.com'>
											Link to Deployed app
										</Card.Link>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Container>
			</>
		);
	}
}

export default Home;
