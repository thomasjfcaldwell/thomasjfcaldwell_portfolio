import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import carousel3 from './images/fleetcara.png';

class Fleet extends Component {
	render() {
		return (
			<>
				<div>
					<div>
						<h1
							style={{
								color: '#14A76C',
								fontSize: '2em',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
								textAlign: 'center',
							}}>
							Fleet App
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
									<Image fluid
										src={carousel3}
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
								<Card.Title className='title'>
									Introduction to the App
								</Card.Title>
								<Card.Text>
									This was a group developed app with myself and 3 other
									developers. The app is for business owners or members of the
									public with multiple vehicles, by using the app they will be
									able to keep track of such things as mileage, if the vehicles
									needs maintenance etc. The app has authentication built into
									it so each account has different data.
								</Card.Text>
							</Col>
							<Col lg={4}>
								<Card.Title className='title'>
									Requirements for the App
								</Card.Title>
								<Card.Text>
									This was required to be a full stack MERN App. We built our
									own API using Node, Express and Mongoose that served Json
									data. The frontend was to be a React application that makes
									full CRUD requests to the API. We were to work as a team with
									equal amounts of commits per team member. We split the team up
									into backend and frontend teams. I worked on the frontend.
								</Card.Text>
							</Col>
							<Col lg={4}>
								<Card.Title className='title'>
									Technologies used to develop App
								</Card.Title>
								<Card.Text>
									We used many technologies including Node, Express, Mongoose,
									React, React-Bootstrap
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
							Backend - Node.js and Express Frontend - React and React Bootstrap
						</h4>
					</div>
				</div>
			</>
		);
	}
}

export default Fleet;
