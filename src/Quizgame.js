import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import carousel3 from './images/quizimage.png';
import '../src/KnowYourWizard.scss';

class QuizGame extends Component {
	render() {
		return (
			<>
				<div>
					<div>
						<h5
							style={{
								color: '#14A76C',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
								textAlign: 'center',
								margin: '1em 0',
							}}>
							Capitals Of The World App
						</h5>
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
								<Image
									src={carousel3}
									style={{
										display: 'block',
										margin: '0 auto',
										maxWidth: '95%',
									}}
								/>
							</Col>

							<Col lg={6}>
								<h5 className='title'>Introduction to the App</h5>
								<p>
									This was my first ever frontend app - Its a quiz game based on
									the capital cities of the world. I brought in all the data
									from a third party API. The app features every capital city in
									the world and the player has a choice of 4 answers with one
									being correct for each question. Each correct answer receives
									10 points and the user must get to 100 points before getting 5
									questions wrong.
								</p>

								<h5 className='title'>Requirements for the App</h5>
								<p>
									The requirements for this app were quite basic as it was early
									in my career. The app had to render in the browser and have
									separate HTML, CSS and JavaScript files. I had to use
									JavaScript for DOM manipulation and use semantic markup for
									HTML and CSS.
								</p>

								<h5 className='title'>Technologies used to develop App</h5>
								<p>
									I used vanilla JavaScript, HTML and CSS to develop this App.
								</p>
								<div>
									<p
										style={{
											color: '#727272',
											fontFamily: 'Montserrat',

											textAlign: 'center',
										}}>
										App Built Using JavaScript, HTML and CSS
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

export default QuizGame;
