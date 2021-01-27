import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	Container,
	Image,
} from 'react-bootstrap';
import carousel3 from './images/quizimage.png';

class QuizGame extends Component {
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
							Capitals Of The World Quiz Game
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
										src={carousel3}
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
								<Card.Title className='title'>
									Introduction to the App
								</Card.Title>
								<Card.Text>
									This was my first ever frontend app - Its a quiz game based on
									the capital cities of the world. I brought in all the data
									from a third party API. The app features every capital city in
									the world and the player has a choice of 4 answers with one
									being correct for each question. Each correct answer receives
									10 points and the user must get to 100 points before getting 5
									questions wrong.
								</Card.Text>
							</Col>
							<Col lg={4}>
								<Card.Title className='title'>
									Requirements for the App
								</Card.Title>
								<Card.Text>
									The requirements for this app were quite basic as it was early
									in my career. The app had to render in the browser and have
									separate HTML, CSS and JavaScript files. I had to use
									JavaScript for DOM manipulation and use semantic markup for
									HTML and CSS.
								</Card.Text>
							</Col>
							<Col lg={4}>
								<Card.Title className='title'>
									Technologies used to develop App
								</Card.Title>
								<Card.Text>
									I used vanilla JavaScript, HTML and CSS to develop this App.
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
							App Built Using JavaScript, HTML and CSS
						</h4>
					</div>
				</div>
			</>
		);
	}
}

export default QuizGame;
