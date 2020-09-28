import React, { Component } from 'react';
import { Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<div>
				<Row className='mt-5'>
					<Col xs={6}>
						<h1>About Thomas</h1>
						<Card>
							<Card.Img variant='top' src='holder.js/100px180' />
							<Card.Body>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6}>
						<h1>Projects</h1>
						<CardGroup>
							<Card>
								<Card.Img variant='top' src='holder.js/100px160' />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
							<Card>
								<Card.Img variant='top' src='holder.js/100px160' />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This card has supporting text below as a natural lead-in to
										additional content.{' '}
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
							<Card>
								<Card.Img variant='top' src='holder.js/100px160' />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer
										content than the first to show that equal height action.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
						</CardGroup>
					</Col>
				</Row>
				<Carousel>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='holder.js/800x400?text=First slide&bg=373940'
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='holder.js/800x400?text=Second slide&bg=282c34'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='holder.js/800x400?text=Third slide&bg=20232a'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div className='container contact-form'>
					<div className='contact-image'>
						<img
							src='https://image.ibb.co/kUagtU/rocket_contact.png'
							alt='rocket_contact'
						/>
					</div>
					<form method='post'>
						<h3>Drop Us a Message</h3>
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
			</div>
		);
	}
}

export default Home;
