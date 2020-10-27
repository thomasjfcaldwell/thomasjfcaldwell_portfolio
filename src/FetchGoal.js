import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	Container,
} from 'react-bootstrap';
import ReactPlayer from 'react-player';

class FetchGoal extends Component {
	render() {
		return (
			<div>
				<h3 className='text-center bg-info p-4 mt-3'>FetchGoal</h3>
				<Container fluid>
					<Row>
						<Col>
							<Card className='border-0'>
								<Card.Body>
									<ReactPlayer
										url='https://www.youtube.com/watch?v=cJvsoaKnkIs'
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
							<Card className='border-0'>
								<Card.Title className='text-center'>
									Introduction to the App
								</Card.Title>
								<Card.Text className='m-5'>
									This app was made as a passion of made...'football' it was
									also my capstone project for my software immersive bootcamp.
									It was originally a paired developed app with another
									developer from my bootcamp. We split into frontend and backend
									with myself in charge of the frontend. I have since completed
									the backend myself to add experince and knowledge to my
									backend portfolio.
								</Card.Text>
								<Card.Title className='text-center'>
									Requirements for the App
								</Card.Title>
								<Card.Text className='m-5'>
									Simply the requirements were to be a complete product, have
									implemented thoughtful user stories, use something I didnt get
									taught in class and be deployed online.
								</Card.Text>
								<Card.Title className='text-center'>
									Technologies used to develop App
								</Card.Title>
								<Card.Text className='m-5'>
									The backend was built using Django and Python. The frontend I
									used React , React Bootstrap and SASS.
								</Card.Text>
							</Card>
						</Col>
					</Row>
				</Container>
				<p className='text-center bg-info p-3 mt-3'>
					Backend - Django and Python Frontend - React and React Bootstrap
				</p>
			</div>
		);
	}
}

export default FetchGoal;
