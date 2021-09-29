import React, { Component } from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import ProjectsData from './data/data.json';
import './style/projectinfo.css';

class QuizGame extends Component {
	render() {
		return (
			<>
				<div>
					<Container fluid className='project-info-container'>
						<h1 className='project-info-title'>
							Web Design/Development Projects
						</h1>
					</Container>
					{ProjectsData.map((ProjectsInfo, id) => {
						return (
							<>
								<Container fluid className='project-info-container'>
									<Row className='project-info-row'>
										<Col className='project-info-col' lg={6}>
											<div className='project-info-title-container'>
												<Card.Title className='project-info-title'>
													{ProjectsInfo.title}
												</Card.Title>
											</div>
											<div className='project-info-image-container'>
												<Image
													className='project-info-image'
													src={ProjectsInfo.image}
												/>
											</div>
										</Col>
										<Col className='project-info-col' lg={6}>
											<h5 className='project-info-headline'>
												Intro To Project
											</h5>
											<Card.Text className='project-info-text'>
												{ProjectsInfo.intro}
											</Card.Text>
											<h5 className='project-info-headline'>
												Technologies Used
											</h5>
											<Card.Text className='project-info-text'>
												{ProjectsInfo.technologies}
											</Card.Text>
										</Col>
									</Row>
								</Container>
							</>
						);
					})}
				</div>
			</>
		);
	}
}

export default QuizGame;
