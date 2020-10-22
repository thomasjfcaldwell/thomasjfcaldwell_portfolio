import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Carousel,
	Jumbotron,
	Container,
	ListGroup,
	Image,
} from 'react-bootstrap';
import Header from './Header';
import carousel1 from './fetchgoalcara.png';
import carousel3 from './quizimage.png';
import portrait from './thomasportfolioimage.jpg';
import carousel2 from './fleetcara.png';
import quizImage from './gameheadef.png';
import wizardImage from './wizard copy.png';
import fleetImage from './fleet.png';
import HTML from './icons/HTML.png';
import CSS from './icons/CSS.png';
import JAVASCRIPT from './icons/Javascript.png';
import Python from './icons/python.png';
import Nodejs from './icons/node.js.png';
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
						height: '100vh',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						margin: '0 auto',
					}}></Jumbotron>

				<Row>
					<Col>
						<Card className='border-0 bg-transparent text-center '>
							<Card.Body className=' bg-transparent'>
								<Card.Text
									style={{
										fontSize: '1.1em',
										color: 'black',
										lineHeight: '1.3em',
										margin: '2em',
									}}>
									Thomas is a web developer and designer currently residing in
									Huntington Beach, CA. Originally from The United Kingdom he
									lives with his wife and pets. When he's not designing websites
									he like long walks on the beach and surfing.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card className='bg-transparent border-0 '>
							<Card.Body className=' text-center text-black '>
								<Card.Text
									style={{
										fontSize: '1.1em',
										lineHeight: '1.3em',
										margin: '2em',
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
						fontSize: '1.2em',
					}}>
					<ListGroup className=' bg-transparent border-0 text-center'>
						<Row>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center '>
									<p>HTML</p>
									<Image
										src={HTML}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
											padding: '0.2em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>CSS</p>
									<Image
										src={CSS}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>JavaScript</p>
									<Image
										src={JAVASCRIPT}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>Python</p>
									<Image
										src={Python}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
						</Row>

						<Row>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>Node JS</p>
									<Image
										src={Nodejs}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>React</p>
									<Image
										src={Reactlogo}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>Django</p>
									<Image
										src={Django}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>Bootstrap</p>
									<Image
										src={Bootstrap}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
						</Row>

						<Row>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>Adobe Suite</p>
									<Image
										src={Adobe}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border border-0 align-center '>
									<p>Wordpress</p>
									<Image
										src={Wordpress}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center  '>
									<p>BigCommerce</p>
									<Image
										src={BigCommerce}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
							</Col>
							<Col>
								<ListGroup.Item className=' bg-transparent border-0 text-center '>
									<p>Github</p>
									<Image
										src={Github}
										style={{
											maxHeight: '5em',
											maxWidth: '5em',
										}}
									/>
								</ListGroup.Item>
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

				<Carousel fluid className='m-5 p-5' sm={12}>
					<Carousel.Item>
						<img className='w-100' src={carousel1} alt='First slide' />
						<Card className='border-0 text-center'>
							<Card.Body>
								<Card.Text>
									Fetch Goal App Displayed in Various Screen sizes
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel2} alt='Third slide' />

						<Card className='border-0 text-center'>
							<Card.Body>
								<Card.Text>
									Fleet App Displayed in Various Screen sizes
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel3} alt='Third slide' />

						<Card className='border-0 text-center'>
							<Card.Body>
								<Card.Text>
									Capitalsoftheworld quiz app as it would appear on a iPhone X
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
