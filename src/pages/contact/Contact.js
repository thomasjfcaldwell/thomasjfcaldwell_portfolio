import React, { Component } from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import '../../style/home.css';

class Contact extends Component {
	render() {
		return (
			<div>
				<Container fluid className='content-container'>
					<div className='headline-container'>
						<h1 className='headline'>Contact Thomas Here</h1>
					</div>

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
				</Container>
			</div>
		);
	}
}

export default Contact;
