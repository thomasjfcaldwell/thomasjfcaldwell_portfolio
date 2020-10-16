import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Carousel,
	Jumbotron,
	Container,
} from 'react-bootstrap';
import Header from './Header';
import carousel1 from './fetchgoalcara.png';
import portrait from './thomasportfolioimage.jpg';
import carousel2 from './fleetcara.png';
import quizImage from './gameheadef.png';
import wizardImage from './wizard copy.png';
import fleetImage from './fleet.png';

class Home extends Component {
	render() {
		return (
			<>
				<Jumbotron
					fluid
					style={{
						backgroundImage: `url(${portrait})`,
						height: '100vh',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						margin: '0 auto',
					}}></Jumbotron>
				<Container
					fluid
					style={{
						fontSize: '1.2em',
						backgroundColor: 'white',
						lineHeight: '1.2em',
					}}
					className=' d-flex flex-column'>
					<Card className=' m-1 border-0 bg-transparent p-1 text-center '>
						<Card.Body sm={12} md={6} lg={6} className=' bg-transparent'>
							<Card.Text
								style={{
									fontSize: '0.9em',
									color: 'black',
								}}>
								Thomas is a web developer and designer currently residing in
								Huntington Beach, CA. Originally from The United Kingdom he
								lives with his wife and pets. When he's not designing websites
								he like long walks on the beach and surfing.
							</Card.Text>
						</Card.Body>
					</Card>
					<Row>
						<Col sm={6} lg={3}>
							<Card className='bg-transparent border-0 mt-2'>
								<Card.Body className=' text-left text-black mt-4'>
									<Card.Text
										style={{
											fontSize: '1.2em',
											lineHeight: '1.2em',
										}}>
										Forward thinking and mature UI developer who can deal with
										all tasks without fuss. Able to synthesize information and
										achieve a solution to a problem and take the lead on that
										task. A skilled designer with experience in front-end and
										back end web applications. Looking to further skills and
										bring expertise, leadership and creativity to the right role
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card className=' bg-transparent border-0 text-center'>
								<Card.Body>
									<Card.Title className='border-2'>
										Some of his skills
									</Card.Title>
									<Card.Text className='text-black text-center'>
										<Col>
											<Row>HTML</Row>
											<Row>CSS</Row>
											<Row>JavaScript</Row>
											<Row>Python</Row>
											<Row>Node JS</Row>
											<Row>React</Row>
											<Row>Django</Row>
											<Row>Bootstrap</Row>
											<Row>Adobe Creative Cloud</Row>
											<Row>Wordpress</Row>
											<Row>eCommerce</Row>
										</Col>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Card className='text-center border-0 '>
						<Card.Title
							style={{
								color: 'blue',
								fontSize: '4em',
							}}>
							Projects
						</Card.Title>
					</Card>
					<CardGroup
						className='mt-1 border-0'
						style={{
							fontFamily: 'Montserrat',
						}}>
						<Card className='border-0'>
							<Card.Title className='mt-5 p-2 text-center'>
								Quiz Game
							</Card.Title>
							<Card.Img variant='top' src={quizImage} className='p-2' />
							<Card.Body>
								<Card.Text className='mt-2'>
									Project made using vanilla JavaScript, html and Css. Get to
									Travel the world and learn about capital cities.
								</Card.Text>
							</Card.Body>

							<Card.Footer className='mt-2 bg-white border-0 text-center w-100 '>
								<Row
									style={{
										fontSize: '0.1',
									}}>
									<Col sm={12} md={12}>
										<Card.Link className='border border-dark p-2 text-center text-dark'>
											{' '}
											<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} className='mt-4 w-100'>
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
											<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} className='mt-4 w-100'>
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
							<Card.Title className='mt-5 text-center'>Fleet</Card.Title>
							<Card.Img variant='top' src={fleetImage} className='p-2' />
							<Card.Body>
								<Card.Text>
									A group app developed with 3 other developers.
								</Card.Text>
							</Card.Body>
							<Card.Footer className='mt-2 bg-white border-0 text-center'>
								<Row>
									<Col sm={6} md={12}>
										<Card.Link className='border border-primary p-2 text-center'>
											{' '}
											<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} className='mt-4'>
										<Card.Link
											className='border border-primary p-2 text-center'
											href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
											Link to Deployed app
										</Card.Link>
									</Col>
								</Row>
							</Card.Footer>
						</Card>
					</CardGroup>
				</Container>
				<Carousel fluid className='m-5 p-5' sm={1}>
					<Carousel.Item>
						<img className='w-100' src={carousel1} alt='First slide' />
						<Card>
							<Card.Body>
								<Card.Text>
									Fetch Goal App Displayed in Various Screen sizes
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel2} alt='Third slide' />

						<Card>
							<Card.Body>
								<Card.Text>
									Fetch Goal App Displayed in Various Screen sizes
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel1} alt='Third slide' />

						<Card>
							<Card.Body>
								<Card.Text>
									Fetch Goal App Displayed in Various Screen sizes
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
				</Carousel>
			</>
		);
	}
}

export default Home;
