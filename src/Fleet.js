import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import carousel3 from './images/fleetcara.png';

class Fleet extends Component {
	render() {
		return (
			<>
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
							<Col sm={12} lg={6}>
								<Image
									fluid
									src={carousel3}
									style={{
										display: 'block',
										margin: '0 auto',
										maxWidth: '80%',
									}}
								/>
							</Col>

							<Col className='text-left' lg={6}>
								<h5 className='title'>Introduction to the App</h5>
								<p>
									This was a group developed app with myself and 3 other
									developers. The app is for business owners or members of the
									public with multiple vehicles, by using the app they will be
									able to keep track of such things as mileage, if the vehicles
									needs maintenance etc. The app has authentication built into
									it so each account has different data.
								</p>

								<h5 className='title'>Requirements for the App</h5>
								<p>
									This was required to be a full stack MERN App. We built our
									own API using Node, Express and Mongoose that served Json
									data. The frontend was to be a React application that makes
									full CRUD requests to the API. We were to work as a team with
									equal amounts of commits per team member. We split the team up
									into backend and frontend teams. I worked on the frontend.
								</p>
								<h5 className='title'>Technologies used to develop App</h5>
								<p>
									We used many technologies including Node, Express, Mongoose,
									React, React-Bootstrap
								</p>
					<div>
						<p
							style={{
								color: '#727272',
								fontFamily: 'Montserrat',
								textAlign: 'center',
							}}>
							Backend - Node.js and Express Frontend - React and React Bootstrap
						</p>
					</div>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default Fleet;
