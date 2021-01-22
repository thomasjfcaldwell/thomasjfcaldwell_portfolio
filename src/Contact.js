import React, { Component } from 'react';
import {
	Jumbotron,
	Container,
	Form,
	
} from 'react-bootstrap';
import background from './images/sunset.jpg';


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
						<h1
							className='text-center'
							style={{
								color: 'white',
							}}>
							REACH OUT TO THOMAS HERE
						</h1>

						<Form
							action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYWaw0WkN_qpVogvapyKaZqx9A_hqGmmMWrWsYIPSziWcBRg/formResponse'
							method='POST'
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}>
							<div>
								<label for='name'>First Name</label>
								<input
									name='entry.1673834915'
									required
									placeholder='Name'
									style={{
										width: '50%',
									}}
								/>
							</div>
							<div>
								<label for='email'>Email</label>
								<input name='entry.218700094' placeholder='Email' />
							</div>
							<div>
								<label for='message'>Message</label>
								<textarea name='entry.1359360774' placeholder=' send a message here' />
							</div>
							 <input type="submit" value="Submit"></input>
						</Form>
					</Container>
				</Jumbotron>
			</div>
		);
	}
}

export default Contact;
