import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Carousel,
	Jumbotron,
	Container,
	ListGroup,
	Image,
} from 'react-bootstrap';
import ReactPlayer from 'react-player';

class FetchGoal extends Component {
	render() {
		return (
			<div>
				<h1 className='text-center bg-light p-3'>FetchGoal</h1>
				<Container fluid>
					<Row className='mt-5 p-3'>
						<Col lg={6} md={6} sm={4}>
							<Card className='border-0'>
								<Card.Body>
									<ReactPlayer url='https://www.youtube.com/watch?v=cJvsoaKnkIs' />
								</Card.Body>
							</Card>
						</Col>
						<Col className='text-left'>
							<Card className='border-0 '></Card>
							<Card.Title className='text-center'>
								Introduction to the App
							</Card.Title>
							<Card.Text>
								This app was made as a passion of made...'football' it was also my capstone project for my software immersive bootcamp. It was originally a paired developed app with another developer from my bootcamp. We split into frontend and backend with myself in charge of the frontend. I have since completed the backend myself to add experince and knowledge to my backend portfolio.
							</Card.Text>
							<Card.Title className='text-center'>
								Requirements for the App
							</Card.Title>
							<Card.Text>
                                Simply the requirements were to be a complete product, have implemented thoughtful user stories, use something I didnt get taught in class and be deployed online.
							</Card.Text>
							<Card.Title className='text-center'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text>
                               The backend was built using Django and Python. The frontend I used React , React Bootstrap and SASS. 
							</Card.Text>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default FetchGoal;
