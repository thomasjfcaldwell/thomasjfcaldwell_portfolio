import React, { Component } from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import ProjectsData from './data/data.json';
import '../src/KnowYourWizard.scss';

class QuizGame extends Component {
	render() {
		return (
			<>
				<div>
					{ProjectsData.map((ProjectsInfo, id) => {
						return (
							<>
								<Container>
									<Row>
										<Col>
											<Card.Title>{ProjectsInfo.title}</Card.Title>
											<Image src={ProjectsInfo.title} />
										</Col>
										<Col>
											<Card.Text>{ProjectsInfo.intro}</Card.Text>
											<Card.Text>{ProjectsInfo.technologies}</Card.Text>
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
