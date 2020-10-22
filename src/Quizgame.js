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
import carousel3 from './quizimage.png';

class QuizGame extends Component {
	render() {
		return (
			<div>
				<h1 className='text-center bg-light p-3'>Capital Cities Quiz App</h1>
				<Container fluid>
					<Row className='mt-5 p-3'>
						<Col>
							<Card className='border-0'>
								<Card.Body>
									<Image src={carousel3}></Image>
								</Card.Body>
							</Card>
							<Card.Footer className='mt-2 bg-white border-0 text-center'>
								<Row>
									<Col sm={6} md={12} lg={12}>
										<Card.Link className='border border-primary p-2 text-center'>
											{' '}
											<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
												Link to GitHub Repo
											</a>
										</Card.Link>
									</Col>
									<Col sm={6} md={12} lg={12} className='mt-4'>
										<Card.Link
											className='border border-primary p-2 text-center'
											href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
											Link to Deployed app
										</Card.Link>
									</Col>
								</Row>
							</Card.Footer>
						</Col>
						<Col className='text-left'>
							<Card className='border-0 '></Card>
							<Card.Title className='text-center'>
								Introduction to the App
							</Card.Title>
							<Card.Text>
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
							<Card.Text>
								The requirements for this app were quite basic as it was early
								in my career. The app had to render in the browser and have
								separate HTML, CSS and JavaScript files. I had to use JavaScript
								for DOM manipulation and use semantic markup for HTML and CSS.
							</Card.Text>
							<Card.Title className='text-center'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text>
								I used vanilla JavaScript, HTML and CSS to develop this App.
							</Card.Text>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default QuizGame;
