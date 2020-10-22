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
								
							</Card.Text>
							<Card.Title className='text-center'>
								Requirements for the App
							</Card.Title>
							<Card.Text>
								
							</Card.Text>
							<Card.Title className='text-center'>
								Technologies used to develop App
							</Card.Title>
							<Card.Text>
							
							</Card.Text>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default FetchGoal;
