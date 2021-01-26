import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './App.scss';

class Picnics extends Component {
	render() {
		return (
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
								<ReactPlayer
									url='https://www.youtube.com/watch?v=cJvsoaKnkIs'
									style={{
										display: 'block',
										margin: '0 auto',
										maxWidth: '95%',
									}}
								/>
							</Card.Body>
						</Card>
					</Row>
					<Row>
						<Col className='text-left' lg={4}>
							<Card.Title className='title'>Introduction to the App</Card.Title>
							<Card.Text>
								This app was made as a passion of made...'football' it was also
								my capstone project for my software immersive bootcamp. It was
								originally a paired developed app with another developer from my
								bootcamp. We split into frontend and backend with myself in
								charge of the frontend. I have since completed the backend
								myself to add experince and knowledge to my backend portfolio.
							</Card.Text>
						</Col>
						<Col lg={4}>
							<Card.Title className='title'>
								Requirements for the App
							</Card.Title>
							<Card.Text>
								Simply the requirements were to be a complete product, have
								implemented thoughtful user stories, use something I didnt get
								taught in class and be deployed online.
							</Card.Text>
						</Col>
						<Col lg={4}>
							<Card.Title className='title'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text>
								The backend was built using Django and Python. The frontend I
								used React , React Bootstrap and SASS.
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
						Backend - Django and Python Frontend - React and React Bootstrap
					</h4>
				</div>
			</div>
		);
	}
}

export default Picnics;
