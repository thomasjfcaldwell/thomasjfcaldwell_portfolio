import React, { useEffect, Component } from 'react';
import resume from './images/thomasCaldwellResume.jpg';
import placeholder from './images/350x150.png';

import { Row, Col, Container, Image } from 'react-bootstrap';
import './style/Resume.css';
import './style/home.css'

class Resume extends Component {
	render() {
		return (
			<>
				<Container fluid className='content-container'>
					<div className='headline-container'>
						<h1 className='headline'>SKILLS</h1>
					</div>
					<Row className='content-row'>
						<Col lg={4} sm={12} className='content-col'>
							<div className='resume-image-container'>
								<Image
									src={resume}
									alt='thomasResume'
									className='resume-image'
								/>
								<a
									href='https://drive.google.com/file/d/1JIIeJoTGE0gR0P7yAG-NX5L98Erxj6QP/view?usp=sharing'
									style={{
										color: 'black',
										fontWeight: '700',
									}}>
									View and Download Resume Here
								</a>
							</div>
						</Col>
						<Col lg={4} sm={12}>
							<Container className='project-opinion-container'>
								<Row className='project-opinion-row'>
									<Col className='project-opinion-col'>
										<Image
											className='project-opinion-image'
											src={placeholder}
										/>
									</Col>
									<Col className='project-opinion-col'>
										<Image
											className='project-opinion-image'
											src={placeholder}
										/>
									</Col>
									<Col className='project-opinion-col'>
										<Image
											className='project-opinion-image'
											src={placeholder}
										/>
									</Col>
								</Row>
							</Container>
						</Col>
						<Col lg={4} sm={12}>
							<Container fluid className='contact-container'>
								<Row className='contact-row'>
									<Col className='contact-col'>
										<p>Email</p>
										<a href='mailto:thomasjfcaldwell@gmail.com'>
											thomasjfcaldwell@gmail.com
										</a>
									</Col>
									<Col className='contact-col'>
										<p>Phone</p>
										<a href='tel:714-595-6633'>714-595-6633</a>
									</Col>
									<Col className='contact-col'>
										<p>Linkedin</p>
										<a href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'>
											thomas-caldwell-huntingtonbeach
										</a>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Resume;
