import React, { Component } from 'react';
import { Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap';
import carousel1 from './fetchgoalcara.png';
import portrait from './profile.image4.png';
import carousel2 from './fleetcara.png';
import quizImage from './gameheadef.png';
import wizardImage from './wizard copy.png';
import fleetImage from './fleet.png';

class Home extends Component {
	render() {
		return (
			<>
				<Row className='mt-5'>
					<Col md={6}>
						<h1 className='p-2 bg-primary text-center text-light'>
							About Thomas
						</h1>
						<Card>
							<Card.Img variant='top' src={portrait} />
							<Card.Body
								style={{
									backgroundColor: '#000555',
								}}>
								<Card.Text className='p-2 bg-primary text-center text-light'>
									Thomas is a Web Developer from Huntington Beach CA.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} className='text-center'>
						<Card className='mt-5 mb-5 border-0'>
							<Card.Body className='mt-2 mb-5 border-0'>
								<Card.Text className='mt-2'>
									<p>
										Forward thinking and mature UI developer who can deal with
										all tasks without fuss. Able to synthesize information and
										achieve a solution to a problem and take the lead on that
										task. A skilled designer with experience in front-end and
										back end web applications. Looking to further skills and
										bring expertise, leadership and creativity to the right role
									</p>
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
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<CardGroup>
					<Card>
						<Card.Title className='mt-5'>Quiz Game</Card.Title>
						<Card.Img variant='top' src={quizImage} className='p-2' />
						<Card.Body>
							<Card.Text className='mt-2'>
								Project made using vanilla JavaScript, html and Css. Get to
								Travel the world and learn about capital cities.
							</Card.Text>
						</Card.Body>

						<Card.Footer>See More Information Here</Card.Footer>
					</Card>
					<Card>
						<Card.Title className='mt-3'>Know Your Wizard</Card.Title>
						<Card.Img variant='top' src={wizardImage} className='p-2' />
						<Card.Body>
							<Card.Text>
								App made in React using 3rd party api for data. For all Harry
								potter fans to learn about different characters in the books.
							</Card.Text>
						</Card.Body>
						<Card.Footer>See More Information Here</Card.Footer>
					</Card>
					<Card>
						<Card.Title className='mt-3'>Fleet</Card.Title>
						<Card.Img variant='top' src={fleetImage} className='p-2' />
						<Card.Body>
							<Card.Text>
								A group app developed with 3 other developers.
							</Card.Text>
						</Card.Body>
						<Card.Footer>See More Information Here</Card.Footer>
					</Card>
				</CardGroup>
				<Carousel className='mt-5'>
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
				<div className='container contact-form'>
					<form method='post'>
						<h3 className='text-center'>Drop Thomas a Message</h3>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input
										type='text'
										name='txtName'
										className='form-control'
										placeholder='Your Name *'
										value=''
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										name='txtEmail'
										className='form-control'
										placeholder='Your Email *'
										value=''
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										name='txtPhone'
										className='form-control'
										placeholder='Your Phone Number *'
										value=''
									/>
								</div>
								<div className='form-group'>
									<input
										type='submit'
										name='btnSubmit'
										className='btnContact'
										value='Send Message'
									/>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<textarea
										name='txtMsg'
										class='form-control'
										placeholder='Your Message *'
										style={{
											backgroundImage: `url(${''})`,
											backgroundSize: 'cover',
											width: '100%',
											fluid: 'yes',
										}}></textarea>
								</div>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}

export default Home;
