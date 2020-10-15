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
					}}>
					<Container className='d-flex flex-column'>
						<Card className='w-25 bg-transparent border-0'>
							<Card.Body className='p-2 bg-transparent text-left text-black '>
								Forward thinking and mature UI developer who can deal with all
								tasks without fuss. Able to synthesize information and achieve a
								solution to a problem and take the lead on that task. A skilled
								designer with experience in front-end and back end web
								applications. Looking to further skills and bring expertise,
								leadership and creativity to the right role
							</Card.Body>
						</Card>
						<Card className='w-25 bg-transparent border-0'>
							<Card.Body className='p-2 bg-transparent text-center text-black align-left'>
								<h1>Technologies</h1>
								<ul className='text-center list-unstyled'>
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
									<li>Python</li>
									<li>Node JS</li>
									<li>React</li>
									<li>Django</li>
									<li>Bootstrap</li>
									<li>Adobe Creative Cloud</li>
									<li>Wordpress</li>
									<li>eCommerce</li>
								</ul>
							</Card.Body>
						</Card>
					</Container>
				</Jumbotron>
				<CardGroup
					className='mt-5 border-0'
					style={{
						fontFamily: 'Montserrat',
					}}>
					>
					<Card className='m-3 border-0'>
						<Card.Title className='mt-5 p-2 text-center'>Quiz Game</Card.Title>
						<Card.Img variant='top' src={quizImage} className='p-2' />
						<Card.Body>
							<Card.Text className='mt-2'>
								Project made using vanilla JavaScript, html and Css. Get to
								Travel the world and learn about capital cities.
							</Card.Text>
						</Card.Body>

						<Card.Footer className='mt-2 bg-white border-0 text-center'>
							<Card.Link className='border border-primary p-2 text-center'>
								{' '}
								<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
									Link to GitHub Repo
								</a>
							</Card.Link>

							<Card.Link
								className='border border-primary p-2 text-center'
								href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								Link to Deployed app
							</Card.Link>
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
						<Card.Footer className='mt-2 bg-white border-0 text-center'>
							<Card.Link className='border border-primary p-2 text-center'>
								{' '}
								<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
									Link to GitHub Repo
								</a>
							</Card.Link>
							<Card.Link className='border border-primary p-2 text-center'>
								{' '}
								<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
									Link to Deployed app
								</a>
							</Card.Link>
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
							<Card.Link className='border border-primary p-2 text-center'>
								{' '}
								<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
									Link to GitHub Repo
								</a>
							</Card.Link>
							<Card.Link className='border border-primary p-2 text-center'>
								{' '}
								<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
									Link to Deployed app
								</a>
							</Card.Link>
						</Card.Footer>
					</Card>
				</CardGroup>
				<Carousel className='m-5 p-5'>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel1} alt='First slide' />
						<Carousel.Caption className='text-dark'>
							<h3>FetchGoal</h3>
							<p className='text-dark'>Displayed on different devices</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel2} alt='Third slide' />

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p className='text-dark'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel1} alt='Third slide' />

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</>
		);
	}
}

export default Home;
