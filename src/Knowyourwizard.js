import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

class Knowyourwizard extends Component {
	render() {
		return (
			<>
				<div>
					<div>
						<h1
							style={{
								color: '#14A76C',
								fontSize: '2em',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
								textAlign: 'center',
							}}>
							Know Your Wizard App
						</h1>
					</div>
					<Container
						fluid
						style={{
							fontFamily: 'Montserrat',
						}}>
						<Row
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Card className='border-0' sm={12}>
								<Card.Body>
									<ReactPlayer
										url='https://www.youtube.com/watch?v=QPN3fSQ7Myk'
										style={{
											display: 'block',
											margin: '0 auto',
											maxWidth: '95%',
										}}
									/>
								</Card.Body>
							</Card>
						</Row>
						<Row>
							<Col className='text-left' lg={4}>
								<Card.Title className='title'>
									Introduction to the App
								</Card.Title>
								<Card.Text>
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
								</Card.Text>
							</Col>
							<Col lg={4}>
								<Card.Title className='title'>
									Requirements for the App
								</Card.Title>
								<Card.Text>
									I was tasked to develop a working interactive React
									application and to include data from a third-party API. Have 4
									separate components and be deployed to the web.
								</Card.Text>
							</Col>
							<Col lg={4}>
								<Card.Title className='title'>
									Technologies used to develop App
								</Card.Title>
								<Card.Text>
									I used React for the framework to develop this App and React
									Bootstrap for the styling. I also used Axios to bring in the
									data from the third party API and React Router for rendering
									multiple pages.
								</Card.Text>
							</Col>
						</Row>
					</Container>
					<div>
						<h4
							style={{
								color: '#14A76C',
								fontFamily: 'Montserrat',
								textTransform: 'uppercase',
								textAlign: 'center',
								margin: '1em',
							}}>
							App Built Using React and React Bootstrap
						</h4>
					</div>
				</div>
			</>
		);
	}
}

export default Knowyourwizard;
