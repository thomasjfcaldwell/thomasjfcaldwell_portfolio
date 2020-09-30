import React, { Component } from 'react';
import { Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap';
import carousel1 from './portfolio.image.jpg';
import portrait from './portraitphoto.png';
import carousel2 from './portfolio.image.1.png';
import quizImage from './gameheadef.png';
import wizardImage from './wizard copy.png';
import fleetImage from './fleet.png';

class Home extends Component {
	render() {
		return (
			<>
				<Row className='mt-5'>
					<Col md={6}>
						<h1>About Thomas</h1>
						<Card>
							<Card.Img
								variant='top'
								src={portrait}
								style={{
									maxHeight: '27em',
								}}
							/>
							<Card.Body>
								<Card.Text>
									Thomas is a Web Developer from Huntington Beach CA.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} className='text-center'>
						<h1>Projects</h1>
						<CardGroup>
							<Card>
								<Card.Title className='mt-3'>Quiz Game</Card.Title>
								<Card.Img variant='top' src={quizImage} className='p-2' />
								<Card.Body>
									<Card.Text>
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
										App made in React using 3rd party api for data. For all
										Harry potter fans to learn about different characters in the
										books.
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
					</Col>
				</Row>
				<Carousel className='mt-5'>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel1} alt='First slide' />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={carousel2} alt='Third slide' />

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
