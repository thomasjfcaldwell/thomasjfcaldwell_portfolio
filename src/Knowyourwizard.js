import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../src/KnowYourWizard.scss';
class Knowyourwizard extends Component {
	render() {
		return (
			<>
				<div>
					<div>
						<h5
							style={{
								color: '#727272',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
								textAlign: 'center',
								margin: '0.5em 0',
							}}>
							Know Your Wizard App
						</h5>
					</div>
					<Container
						fluid
						style={{
							fontFamily: 'Montserrat',
						}}>
						<Row
							style={{
								alignItems: 'center',
							}}>
							<Col
								lg={6}
								xs={12}
								style={{
									padding: '50px',
								}}>
								<div className='embed-container'>
									<iframe
										title='Know Your Wizard Video'
										src='https://www.youtube.com/embed/QPN3fSQ7Myk'
										frameborder='0'
										allowfullscreen='true'></iframe>
								</div>
							</Col>

							<Col lg={6}>
								<h5 className='title'>Introduction to the App</h5>
								<p>
									This app was developed while I was attending a immersive
									software developer bootcamp by General Assembly. Initially I
									had planned to do an app where the user would be able to
									search local breweries but after getting in touch with the
									developer who had put together the API for the data and was
									informed that the API was suffering from issues - developer
									had reason to believe that someone had an infinite loop
									running. I had always been a fan of the Harry Potter world and
									after research I found the API was very stable I decided to
									develop 'Know Your Wizard' - an app for fans of Harry Potter
									or non fans to learn about each character of the Harry Potter
									World
								</p>

								<h5 className='title'>Requirements for the App</h5>
								<p>
									I was tasked to develop a working interactive React
									application and to include data from a third-party API. Have 4
									separate components and be deployed to the web.
								</p>

								<h5 className='title'>Technologies used to develop App</h5>
								<p>
									I used React for the framework to develop this App and React
									Bootstrap for the styling. I also used Axios to bring in the
									data from the third party API and React Router for rendering
									multiple pages.
								</p>
								<div>
									<p
										style={{
											color: '#727272',
											fontFamily: 'Montserrat',
											textAlign: 'center',
										}}>
										App Built Using React and React Bootstrap
									</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default Knowyourwizard;
