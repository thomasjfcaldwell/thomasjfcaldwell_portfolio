import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Carousel,
	Jumbotron,
	Container,
	Form,
	ListGroup,
	Button
} from 'react-bootstrap';
import background from './sunset.jpg';


class Contact extends Component {
	render() {
		return (
			<div>
				<Jumbotron
					fluid
					style={{
						backgroundImage: `url(${background})`,
						height: '100vh',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						margin: '0 auto',
					}}>
					<Container>
						<Row>
							<Col>
								<h1>Contact</h1>
							</Col>
							<Col>
								<Form>
									<Form.Group controlId='formBasicEmail'>
										<Form.Label>Email address</Form.Label>
										<Form.Control type='email' placeholder='Enter email' />
										<Form.Text className='text-muted'>
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='formBasicPassword'>
										<Form.Label>Password</Form.Label>
										<Form.Control type='password' placeholder='Password' />
									</Form.Group>
									<Form.Group controlId='formBasicCheckbox'>
										<Form.Check type='checkbox' label='Check me out' />
									</Form.Group>
									<Button variant='primary' type='submit'>
										Submit
									</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}

export default Contact;
