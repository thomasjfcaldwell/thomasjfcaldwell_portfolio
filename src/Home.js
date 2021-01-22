import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Jumbotron,
	Container,
	ListGroup,
	Image,
} from 'react-bootstrap';
import portrait from './images/thomasportfolioimage.jpg';
import quizImage from './images/gameheadef.png';
import wizardImage from './images/wizard copy.png';
import fleetImage from './images/fleet.png';
import HTML from './icons/HTML.png';
import CSS from './icons/CSS.png';
import JAVASCRIPT from './icons/Javascript.png';
import Python from './icons/python.png';
import Nodejs from './icons/node.png'
import Reactlogo from './icons/react.png';
import Django from './icons/Django.png';
import Bootstrap from './icons/bootstrap.png';
import Adobe from './icons/adobe.png';
import Wordpress from './icons/woodpress.png';
import BigCommerce from './icons/BigCommerce.png';
import Github from './icons/github.png';

class Home extends Component {
	render() {
		return (
			<>
				<Jumbotron
					fluid
					style={{
						backgroundImage: `url(${portrait})`,
						height: '70vh',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						margin: '0 auto',
					}}></Jumbotron>

				<Row>
					<Col sm={6}>
						<Card className='border-0 bg-transparent text-center '>
							<Card.Body className=' bg-transparent'>
								<Card.Text
									style={{
										fontSize: '1.1em',
										color: 'black',
										lineHeight: '1.3em',
									}}>
									Thomas is a web developer and designer currently residing in
									Huntington Beach, CA. Originally from The United Kingdom he
									lives with his wife and pets. When he's not designing websites
									he like long walks on the beach and surfing.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col sm={6}>
						<Card className='bg-transparent border-0 '>
							<Card.Body className=' text-center text-black '>
								<Card.Text
									style={{
										fontSize: '1.1em',
										lineHeight: '1.3em',
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
				</Row>
				<Container
					fluid
					style={{
						fontFamily: 'Montserrat',
						fontSize: '0.6em',
					}}>
					<ListGroup className=' bg-transparent border-0 text-center'>
						<Row className='mt-1'>
							<Col>
								<p>HTML</p>
								<Image
									src={HTML}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
										padding: '0.3em',
									}}
								/>
							</Col>
							<Col>
								<p>CSS</p>
								<Image
									src={CSS}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>JavaScript</p>
								<Image
									src={JAVASCRIPT}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>Python</p>
								<Image
									src={Python}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
						</Row>

						<Row className='mt-3'>
							<Col>
								<p>Node JS</p>
								<Image
									src={Nodejs}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>React</p>
								<Image
									src={Reactlogo}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>Django</p>
								<Image
									src={Django}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>Bootstrap</p>
								<Image
									src={Bootstrap}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
						</Row>

						<Row className='mt-3'>
							<Col>
								<p>Adobe Suite</p>
								<Image
									src={Adobe}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>Wordpress</p>
								<Image
									src={Wordpress}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>BigCommerce</p>
								<Image
									src={BigCommerce}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
							<Col>
								<p>Github</p>
								<Image
									src={Github}
									style={{
										maxHeight: '5em',
										maxWidth: '5em',
									}}
								/>
							</Col>
						</Row>
					</ListGroup>
				</Container>
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
