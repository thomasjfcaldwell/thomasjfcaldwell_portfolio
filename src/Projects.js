import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import quizImage from './images/gameheadef.png';
import wizardImage from './images/wizard copy.png';
import fleetImage from './images/fleet.png';
import fetchgoal from './images/fetchGoal.jpg';
import picnic from './images/popuppicnics.jpg';
import coffee from './images/needcoffee.jpg';

import { FaGithubSquare, FaRegCheckCircle } from 'react-icons/fa';

import { IoMdInformationCircleOutline } from 'react-icons/io';

const Projects = () => {
	return (
		<div>
			<Container>
				<div>
					<h4
						style={{
							color: '#727272',
							fontFamily: 'Montserrat',
							textTransform: 'uppercase',
							textAlign: 'center',
						}}>
						Projects
					</h4>
				</div>

				<Row
					style={{
						alignItems: 'center',
						textAlign: 'center',
						justifyContent: 'center',
					}}>
					<Col lg={3} sm={6} className='projects'>
						<p>Capital Cities Quiz Game</p>
						<img
							src={quizImage}
							alt='imageofquizapp'
							className='projectimage'
						/>
						<p className='projectsText'>
							An app made vanilla Javascript, HTML and CSS
						</p>

						<div className='links'>
							<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								<FaGithubSquare size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to GitHub Repo
								</span>
							</a>

							<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								<FaRegCheckCircle size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to Deployed app
								</span>
							</a>
							<a href='/quizgame'>
								<IoMdInformationCircleOutline size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									More In Depth Information On App
								</span>
							</a>
						</div>
					</Col>

					<Col lg={3} sm={6} className='projects'>
						<p>Know Your Wizard</p>
						<img
							variant='top'
							src={wizardImage}
							alt='imageofwizardapp'
							className='projectimage'
						/>

						<p className='projectsText'>
							App made in React using 3rd party api for data.
						</p>

						<div className='links'>
							<a href='https://github.com/thomasjfcaldwell/know-your-wizard'>
								<FaGithubSquare size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to GitHub Repo
								</span>
							</a>

							<a href='https://knowyourwizard.herokuapp.com/wizards'>
								<FaRegCheckCircle size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to Deployed app
								</span>
							</a>
							<a href='/knowyourwizard'>
								<IoMdInformationCircleOutline size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									More In Depth Information On App
								</span>
							</a>
						</div>
					</Col>
					<Col lg={3} sm={6} className='projects'>
						<p>Fleet</p>
						<img
							variant='top'
							src={fleetImage}
							alt='imageoffleetapp'
							className='projectimage'
						/>

						<p className='projectsText'>
							A Group Developed App
						</p>
						<div className='links'>
							<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								<FaGithubSquare size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to GitHub Repo
								</span>
							</a>

							<a href='https://warm-brook-93750.herokuapp.com'>
								<FaRegCheckCircle size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to Deployed app
								</span>
							</a>
							<a href='/fleet'>
								<IoMdInformationCircleOutline size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									More In Depth Information On App
								</span>
							</a>
						</div>
					</Col>
					<Col lg={3} sm={6} className='projects'>
						<p>FetchGoal</p>
						<img
							variant='top'
							src={fetchgoal}
							alt='imageoffetchgoalapp'
							className='projectimage'
						/>

						<p className='projectsText'>
							An App for Soccer lovers full of facts and stats
						</p>
						<div className='links'>
							<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								<FaGithubSquare size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to GitHub Repo
								</span>
							</a>

							<a href='https://warm-brook-93750.herokuapp.com'>
								<FaRegCheckCircle size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to Deployed app
								</span>
							</a>
							<a href='/fetchgoal'>
								<IoMdInformationCircleOutline size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									More In Depth Information On App
								</span>
							</a>
						</div>
					</Col>
					<Col lg={3} sm={6} className='projects'>
						<p>Pop Up Picnics</p>
						<img
							variant='top'
							src={picnic}
							alt='imageofpicnicapp'
							className='projectimage'
						/>

						<p className='projectsText'>
							An Event booking site.
						</p>
						<div className='links'>
							<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								<FaGithubSquare size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to GitHub Repo
								</span>
							</a>

							<a href='http://www.pop-uppicnics.com/'>
								{' '}
								<FaRegCheckCircle size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to Deployed app
								</span>
							</a>
							<a href='/picnics'>
								<IoMdInformationCircleOutline size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									More In Depth Information On App
								</span>
							</a>
						</div>
					</Col>
					<Col lg={3} sm={6} className='projects'>
						<p>Need Coffee??</p>
						<img
							variant='top'
							src={coffee}
							alt='imageofcoffeeapp'
							className='projectimage'
						/>

						<p className='projectsText'>
							A project made through the love of coffee.
						</p>
						<div className='links'>
							<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
								<FaGithubSquare size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to GitHub Repo
								</span>
							</a>

							<a href='https://warm-brook-93750.herokuapp.com'>
								<FaRegCheckCircle size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									Link to Deployed app
								</span>
							</a>
							<a href='/picnics'>
								<IoMdInformationCircleOutline size={15} />
								<span
									style={{
										margin: '0 5px',
									}}>
									More In Depth Information On App
								</span>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Projects;
