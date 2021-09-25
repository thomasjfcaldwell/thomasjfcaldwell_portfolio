import React, { Component } from 'react';

import Typical from 'react-typical';

import './App.scss';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Playaround from './Playingaround';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import './style/home.css';

import thomasCaldwellImage from './images/thomasportfolioimage.jpg'

class Home extends Component {
	render() {
		return (
			<>
				<div className='body'>
					<Container fluid className='header-container'>
						<Row className='header-row'>
							<Col sm={12} md={6} lg={6} className='header-col'>
								<h5 className='header'>Get To Know Thomas Better</h5>
								<p className='aboutText'>
									Thomas is a web developer and designer currently residing in
									Huntington Beach, CA. Originally from The United Kingdom he
									lives with his wife and pets. When he's not designing websites
									he like long walks on the beach and surfing.
								</p>
								<p className='aboutText'>
									Below is listed all of the software, programming langugages
									and technologies Thomas has experience in.
								</p>
							</Col>
							<Col sm={12} md={6} lg={6} className='header-col'>
								<Container className='header-col-image-container'>
									<Image
										className='header-col-image'
										src={thomasCaldwellImage}
										alt='photo-of-thomas'
									/>
								</Container>
							</Col>
						</Row>
					</Container>
					<div>
						<Playaround />
					</div>
					<div>
						<Resume />
					</div>
					<div
						style={{
							margin: '50px 0',
						}}>
						<Projects />
					</div>
					<div>
						<Contact />
					</div>{' '}
					*/}
				</div>
			</>
		);
	}
}

export default Home;
