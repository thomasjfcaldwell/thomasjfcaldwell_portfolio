import React, { Component } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import coffee from './images/needcoffee.jpg'
import './App.scss';

class Coffee extends Component {
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
						Need Coffee??
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
									src={coffee}
									style={{
										display: 'block',
										margin: '0 auto',
										maxWidth: '50%',
									}}
								/>
							</Card.Body>
						</Card>
					</Row>
					<Row>
						
						<Col className='text-left' lg={4}>
							<Card.Title className='title'>Introduction to the App</Card.Title>
							<Card.Text>
								This is a personal project. The idea is to set up a website for
								dropshipping coffee.
							</Card.Text>
						</Col>
						<Col lg={4}>
							<Card.Title className='title'>
								Requirements for the App
							</Card.Title>
							<Card.Text>
								To be able to sell coffee online and to ship product to
								customers
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

export default Coffee;
