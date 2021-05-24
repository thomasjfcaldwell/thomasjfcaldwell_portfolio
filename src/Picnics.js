import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import './App.scss';

import picnics from './images/popuppicnics.jpg';

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
						<Col sm={12} lg={6}>
							<Image
								src={picnics}
								style={{
									display: 'block',
									margin: '0 auto',
									maxWidth: '75%',
								}}
							/>
						</Col>
						<Col className='text-left' lg={6} sm={12}>
							<h5 className='title'>Introduction to the App</h5>
							<p>
								This Website was built for a local Events company who had to
								change the way they did business due to COVID-19. Its a branch
								off from their main site and is promoting a new business that
								offers social distancing picnics. I planned the site from start
								to finish and produced all contents myself, including
								photography.
							</p>

							<h5 className='title'>
								Requirements for the App
							</h5>
							<p>
								The business owner wanted it to look simple but professional.
								Also they wanted potential customers to be able view prices and
								send a request to book an event.
							</p>

							<h5 className='title'>
								Technologies used to develop App
							</h5>
							<p>
								I used React for the whole site. For the booking and contact
								forms I used customized google forms. The site is styled with
								React-Bootstrap
							</p>
							<div>
								<p
									style={{
										color: '#727272',
										fontFamily: 'Montserrat',
										textAlign: 'center',
									}}>
									React and React Bootstrap
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Picnics;
