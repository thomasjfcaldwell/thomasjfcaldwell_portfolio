import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './App.scss';
import '../src/KnowYourWizard.scss';

class FetchGoal extends Component {
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
						FetchGoal App
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
						<Col lg={6}>
							<div class='embed-container'>
								<iframe
									title='fetchGoal Video Presentation'
									src='https://www.youtube.com/embed/cJvsoaKnkIs'
									frameborder='0'
									allowfullscreen></iframe>
							</div>
						</Col>

						<Col>
							<h5 className='title'>Introduction to the App</h5>
							<p>
								This app was made as a passion of made...'football' it was also
								my capstone project for my software immersive bootcamp. It was
								originally a paired developed app with another developer from my
								bootcamp. We split into frontend and backend with myself in
								charge of the frontend. I have since completed the backend
								myself to add experince and knowledge to my backend portfolio.
							</p>

							<h5 className='title'>Requirements for the App</h5>
							<p>
								Simply the requirements were to be a complete product, have
								implemented thoughtful user stories, use something I didnt get
								taught in class and be deployed online.
							</p>

							<h5 className='title'>Technologies used to develop App</h5>
							<p>
								The backend was built using Django and Python. The frontend I
								used React , React Bootstrap and SASS.
							</p>
							<div>
								<p
									style={{
										color: '#727272',
										fontFamily: 'Montserrat',

										textAlign: 'center',
									}}>
									Backend - Django and Python Frontend - React and React
									Bootstrap
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default FetchGoal;
