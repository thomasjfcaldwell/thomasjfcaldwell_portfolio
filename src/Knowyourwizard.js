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

class Knowyourwizard extends Component {
	render() {
		return (
			<div>
				<h1 className='text-center bg-primary p-3'>Know your Wizard app</h1>
				<Container fluid className='m-5'>
					<Row>
						<Col>
							<Card></Card>
						</Col>
						<Col>
							<Card></Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Knowyourwizard;
