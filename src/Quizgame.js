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
			<div>
				<h3 fluid className='text-center bg-info p-4 mt-3'>
					Capital Cities Quiz App
				</h3>
				<Container fluid>
					<Row>
						<Col>
							<Card className='border-0'>
								<Card.Body className='text-center'>
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
						</Col>
					</Row>
					<Row>
						<Col className='text-left'>
							<Card className='border-0'></Card>
							<Card.Title className='text-center'>
								Introduction to the App
							</Card.Title>
							<Card.Text className='m-5'>
								This was my first ever frontend app - Its a quiz game based on
								the capital cities of the world. I brought in all the data from
								a third party API. The app features every capital city in the
								world and the player has a choice of 4 answers with one being
								correct for each question. Each correct answer receives 10
								points and the user must get to 100 points before getting 5
								questions wrong.
							</Card.Text>
							<Card.Title className='text-center'>
								Requirements for the App
							</Card.Title>
							<Card.Text className='m-5'>
								The requirements for this app were quite basic as it was early
								in my career. The app had to render in the browser and have
								separate HTML, CSS and JavaScript files. I had to use JavaScript
								for DOM manipulation and use semantic markup for HTML and CSS.
							</Card.Text>
							<Card.Title className='text-center'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text className='m-5'>
								I used vanilla JavaScript, HTML and CSS to develop this App.
							</Card.Text>
							<Card.Footer className='bg-white border-0 text-center'>
								<Card.Link className='border border-primary p-2 text-center'>
									{' '}
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to GitHub Repo
									</a>
								</Card.Link>
								<Card.Link
									className='border border-primary p-2 text-center'
									href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
									Link to Deployed app
								</Card.Link>
							</Card.Footer>
						</Col>
					</Row>
				</Container>
				<p className='text-center bg-info p-3 mt-3'>
					App built with JavaScript, HTML and CSS
				</p>
			</div>
		);
	}
}

export default QuizGame;
