import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import './App.scss';

import picnics from './images/popuppicnics.jpg'

class Picnics extends Component {
	render() {
		return (
			<div>
				<div>
					<h1
						style={{
							color: '#727272',
							fontSize: '2em',
							fontFamily: 'Montserrat',
							textTransform: 'uppercase',
							textAlign: 'center',
						}}>
						Pop Up Picnics Site
					</h1>
				</div>
				<Container
					fluid
					style={{
						fontFamily: 'Montserrat',
					}}>
					<Row
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Card className='border-0' sm={12}>
							<Card.Body>
								<Image
									src={picnics}
									style={{
										display: 'block',
										margin: '0 auto',
										maxWidth: '50%',
									}}
								/>
							</Card.Body>
						</Card>
					</Row>
					<Row>
						<Col className='text-left' lg={4}>
							<Card.Title className='title'>Introduction to the App</Card.Title>
							<Card.Text>
								This Website was built for a local Events company who had to
								change the way they did business due to COVID-19. Its a branch
								off from their main site and is promoting a new business that
								offers social distancing picnics. I planned the site from start
								to finish and produced all contents myself, including
								photography.
							</Card.Text>
						</Col>
						<Col lg={4}>
							<Card.Title className='title'>
								Requirements for the App
							</Card.Title>
							<Card.Text>
								The business owner wanted it to look simple but professional.
								Also they wanted potential customers to be able view prices and
								send a request to book an event.
							</Card.Text>
						</Col>
						<Col lg={4}>
							<Card.Title className='title'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text>
								I used React for the whole site. For the booking and contact
								forms I used customized google forms. The site is styled with
								React-Bootstrap
							</Card.Text>
						</Col>
					</Row>
				</Container>
				<div>
					<h4
						style={{
							color: '#14A76C',
							fontFamily: 'Montserrat',
							textTransform: 'uppercase',
							textAlign: 'center',
							margin: '1em',
						}}>
						React and React Bootstrap
					</h4>
				</div>
			</div>
		);
	}
}

export default Picnics;
