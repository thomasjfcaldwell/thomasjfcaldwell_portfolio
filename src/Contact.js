import React, { Component } from 'react';
import {
	Jumbotron,
	Container,
	
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
					</Container>
				</Jumbotron>
			</div>
		);
	}
}

export default Contact;
