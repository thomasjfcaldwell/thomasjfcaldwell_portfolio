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
					}}>
					<Row>
						<Col lg={6} sm={12}>
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
						<Col lg={6} sm={12}>
							<div>
								<h1
									style={{
										color: '#14A76C',
										fontSize: '2em',
										fontFamily: 'Montserrat',
										textTransform: 'uppercase',
										textAlign: 'center',
									}}>
									MORE INformation
								</h1>
							</div>
							<Container>
								<Row
									style={{
										width: '100%',
										alignItems: 'center',
										textAlign: 'center',
										justifyContent: 'center',
										marginTop: '50px',
									}}>
									<Col
										lg={6}
										sm={12}
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											textAlign: 'center',
											justifyContent: 'center',
										}}>
										<h5>Resume</h5>
										<img
											src={resume}
											alt='thomasResume'
											style={{
												width: '75%',
											}}
										/>
										<a
											href='https://drive.google.com/file/d/1vwa_ukC3V472FisHWRCGSvCnz8X6PrFt/view?usp=sharing'
											style={{
												color: '#14A76C',
											}}>
											See Resume Here
										</a>
									</Col>
									<Col
										style={{
											width: '50%',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											textAlign: 'center',
											justifyContent: 'center',
										}}>
										<h3>Contact Information</h3>
										<p>Email</p>
										<a
											href='mailto:thomasjfcaldwell@gmail.com'
											className='contactLinks'>
											thomasjfcaldwell@gmail.com
										</a>
										<p>Phone</p>
										<a href='tel:714-595-6633' className='contactLinks'>
											714-595-6633
										</a>
										<p>Linkedin</p>
										<a
											href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
											className='contactLinks'>
											thomas-caldwell-huntingtonbeach
										</a>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Contact;
