import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
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
							// alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Col sm={12} lg={6}>
							<Image
								src={coffee}
								style={{
									display: 'block',
									margin: '0 auto',
									maxWidth: '50%',
								}}
							/>
						</Col>

						<Col className='text-left' lg={6} sm={12}>
							<h5 className='title'>Introduction to the App</h5>
							<p>
								This is a personal project. The idea is to set up a website for
								dropshipping coffee.
							</p>

							<h5 className='title'>Requirements for the App</h5>
							<p>
								To be able to sell coffee online and to ship product to
								customers
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
					React and React Bootstrap
					</p>
				</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Coffee;
