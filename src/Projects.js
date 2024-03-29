import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import quizImage from './images/ProjectImages/quizgameforsite.png';
import wizardImage from './images/ProjectImages/knowyourwizardforsite.png';
import fleetImage from './images/ProjectImages/fleetforsite.png';
import fetchgoal from './images/ProjectImages/fetchgoalforsite.png';
import picnic from './images/ProjectImages/picnicforsite.png';
import coffee from './images/needcoffee.jpg';
import './style/projects.css';

import { FaGithubSquare, FaRegCheckCircle } from 'react-icons/fa';

import { IoMdInformationCircleOutline } from 'react-icons/io';

const Projects = () => {
	return (
		<div>
			<Container fluid className='projects-container'>
				<div className='headline-container'>
					<h1 className='headline'>Projects</h1>
				</div>
				<Row className='projects-row'>
					<Col lg={3} sm={6} className='projects-col'>
						<div className='project-title-container'>
							<p className='project-title'>Capital Cities Quiz Game</p>
						</div>
						<div className='project-image-container'>
							<img
								src={quizImage}
								alt='imageofquizapp'
								className='project-image'
							/>
						</div>
						<p className='projectsText'>
							An app made vanilla Javascript, HTML and CSS
						</p>

						<Container fluid>
							<Row className='links-row'>
								<Col className='links-col'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										<FaGithubSquare className='link-icon' size={15} />
										<span className='links-col-text'>GitHub Repo</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										<FaRegCheckCircle className='link-icon' size={15} />
										<span className='links-col-text'>Deployed app</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='/quizgame'>
										<IoMdInformationCircleOutline
											className='link-icon'
											size={15}
										/>
										<span className='links-col-text'>More Info</span>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>

					<Col lg={3} sm={6} className='projects-col'>
						<div className='project-title-container'>
							<p className='project-title'>Know Your Wizard</p>
						</div>
						<div className='project-image-container'>
							<img
								variant='top'
								src={wizardImage}
								alt='imageofwizardapp'
								className='project-image'
							/>
						</div>

						<p className='projectsText'>
							App made in React using 3rd party api for data.
						</p>

						<Container fluid>
							<Row className='links-row'>
								<Col className='links-col'>
									<a href='https://github.com/thomasjfcaldwell/know-your-wizard'>
										<FaGithubSquare className='link-icon' size={15} />
										<span className='links-col-text'>GitHub Repo</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='https://knowyourwizard.herokuapp.com/wizards'>
										<FaRegCheckCircle className='link-icon' size={15} />
										<span className='links-col-text'>Deployed app</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='/knowyourwizard'>
										<IoMdInformationCircleOutline
											className='link-icon'
											size={15}
										/>
										<span className='links-col-text'>More Info</span>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col lg={3} sm={6} className='projects-col'>
						<div className='project-title-container'>
							<p className='project-title'>Fleet</p>
						</div>
						<div className='project-image-container'>
							<img
								variant='top'
								src={fleetImage}
								alt='imageoffleetapp'
								className='project-image'
							/>
						</div>
						<p className='projectsText'>A Group Developed App</p>
						<Container>
							<Row className='links-row'>
								<Col className='links-col'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										<FaGithubSquare className='link-icon' size={15} />
										<span className='links-col-text'>GitHub Repo</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='https://warm-brook-93750.herokuapp.com'>
										<FaRegCheckCircle className='link-icon' size={15} />
										<span className='links-col-text'>Deployed app</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='/fleet'>
										<IoMdInformationCircleOutline
											className='link-icon'
											size={15}
										/>
										<span className='links-col-text'>More Info</span>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
				<Row className='projects-row'>
					<Col lg={3} sm={6} className='projects-col'>
						<div className='project-title-container'>
							<p className='project-title'>FetchGoal</p>
						</div>
						<div className='project-image-container'>
							<img
								variant='top'
								src={fetchgoal}
								alt='imageoffetchgoalapp'
								className='project-image'
							/>
						</div>
						<p className='projectsText'>
							An App for Soccer lovers full of facts and stats
						</p>
						<Container>
							<Row className='links-row'>
								<Col className='links-col'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										<FaGithubSquare className='link-icon' size={15} />
										<span className='links-col-text'>GitHub Repo</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='https://mysterious-refuge-41535.herokuapp.com/'>
										<FaRegCheckCircle className='link-icon' size={15} />
										<span className='links-col-text'>Deployed app</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='/fetchgoal'>
										<IoMdInformationCircleOutline
											className='link-icon'
											size={15}
										/>
										<span className='links-col-text'>More Info</span>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col lg={3} sm={6} className='projects-col'>
						<div className='project-title-container'>
							<p className='project-title'>Pop Up Picnics</p>
						</div>
						<div className='project-image-container'>
							<img
								variant='top'
								src={picnic}
								alt='imageofpicnicapp'
								className='project-image'
							/>
						</div>
						<p className='projectsText'>An Event booking site.</p>

						<Container>
							<Row>
								<Col className='links-col'>
									<a href='https://github.com/thomasjfcaldwell/popuppicnicsbywow'>
										<FaGithubSquare className='link-icon' size={15} />
										<span className='links-col-text'>GitHub Repo</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='http://www.pop-uppicnics.com/'>
										{' '}
										<FaRegCheckCircle className='link-icon' size={15} />
										<span className='links-col-text'>Deployed app</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='/picnics'>
										<IoMdInformationCircleOutline
											className='link-icon'
											size={15}
										/>
										<span className='links-col-text'>More Info</span>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>

					<Col lg={3} sm={6} className='projects-col'>
						<div className='project-title-container'>
							<p className='project-title'>Need Coffee??</p>
						</div>
						<div className='project-image-container'>
							<img
								variant='top'
								src={coffee}
								alt='imageofcoffeeapp'
								className='project-image'
							/>
						</div>

						<p className='projectsText'>
							A project made through the love of coffee.
						</p>
						<Container>
							<Row>
								<Col className='links-col'>
									<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										<FaGithubSquare className='link-icon' size={15} />
										<span className='links-col-text'>GitHub Repo</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='https://warm-brook-93750.herokuapp.com'>
										<FaRegCheckCircle className='link-icon' size={15} />
										<span className='links-col-text'>Deployed app</span>
									</a>
								</Col>
								<Col className='links-col'>
									<a href='/picnics'>
										<IoMdInformationCircleOutline
											className='link-icon'
											size={15}
										/>
										<span className='links-col-text'>More Info</span>
									</a>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Projects;
