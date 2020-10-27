import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	Container,
	
} from 'react-bootstrap';
import ReactPlayer from 'react-player';

class Fleet extends Component {
	render() {
		return (
			<div>
				<h3 className='text-center bg-info p-4 mt-3'>Fleet App</h3>
				<Container fluid>
					<Row>
						<Col>
							<Card className='border-0'>
								<Card.Body>
									<ReactPlayer
										url='https://www.youtube.com/watch?v=QPN3fSQ7Myk'
										style={{
											display: 'block',
											margin: '0 auto',
										}}
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col className='text-left'>
							<Card className='border-0 '></Card>
							<Card.Title className='text-center'>
								Introduction to the App
							</Card.Title>
							<Card.Text className='m-5'>
								This was a group developed app with myself and 3 other
								developers. The app is for business owners or members of the
								public with multiple vehicles, by using the app they will be
								able to keep track of such things as mileage, if the vehicles
								needs maintenance etc. The app has authentication built into it
								so each account has different data.
							</Card.Text>
							<Card.Title className='text-center'>
								Requirements for the App
							</Card.Title>
							<Card.Text className='m-5'>
								This was required to be a full stack MERN App. We built our own
								API using Node, Express and Mongoose that served Json data. The
								frontend was to be a React application that makes full CRUD
								requests to the API. We were to work as a team with equal
								amounts of commits per team member. We split the team up into
								backend and frontend teams. I worked on the frontend.
							</Card.Text>
							<Card.Title className='text-center'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text className='m-5'>
								We used many technologies including Node, Express, Mongoose,
								React, React-Bootstrap
							</Card.Text>
						</Col>
					</Row>
				</Container>
				<p className='text-center bg-info p-3 mt-3'>
					Backend - Node.js and Express Frontend - React and React Bootstrap
				</p>
			</div>
		);
	}
}

export default Fleet;
