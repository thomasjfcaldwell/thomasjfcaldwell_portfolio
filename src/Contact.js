import React, { Component } from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import resume from './images/thomasCaldwellResume.jpg';
import './App.scss';

class Contact extends Component {
	render() {
		return (
			<div>
				<Container
					fluid
					style={{
						width: '100%',
						marginTop: '50px',
					}}>
					<Row>
						<Col lg={12}>
							<h1
								style={{
									color: '#14A76C',
									fontSize: '2em',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
									textAlign: 'center',
								}}>
								CONTACT THOMAS
							</h1>

							<Form
								action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYWaw0WkN_qpVogvapyKaZqx9A_hqGmmMWrWsYIPSziWcBRg/formResponse'
								method='POST'>
								<div>
									<input
										name='entry.1673834915'
										type='text'
										className='feedback-input'
										required
										placeholder='Name'
									/>
								</div>
								<div>
									<input
										name='entry.218700094'
										type='text'
										className='feedback-input'
										required
										placeholder='Email'
									/>
								</div>
								<div>
									<textarea
										name='entry.1359360774'
										className='feedback-input'
										placeholder=' send a message here'
										style={{
											color: 'black',
										}}
									/>
								</div>
								<input type='submit' value='Submit'></input>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Contact;
