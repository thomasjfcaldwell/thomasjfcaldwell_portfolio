import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

class Knowyourwizard extends Component {
	render() {
		return (
			<div>
				<h3 fluid className='text-center bg-info p-4 mt-3'>
					Know your Wizard app
				</h3>
				<Container fluid>
					<Row>
						<Col>
							<Card className='border-0'>
								<Card.Body className='text-center'>
									<ReactPlayer
										style={{
											display: 'block',
											margin: '0 auto',
										}}
										url='https://www.youtube.com/watch?v=QPN3fSQ7Myk'
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col className='text-left'>
							<Card className='border-0 p-4'>
								<Card.Title className='text-center'>
									Introduction to the App
								</Card.Title>
								<Card.Text className='m-5'>
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
								<Card.Title className='text-center'>
									Requirements for the App
								</Card.Title>
								<Card.Text className='m-5'>
									I was tasked to develop a working interactive React
									application and to include data from a third-party API. Have 4
									separate components and be deployed to the web.
								</Card.Text>
								<Card.Title className='text-center'>
									Technologies used to develop App
								</Card.Title>
								<Card.Text className='m-5'>
									I used React for the framework to develop this App and React
									Bootstrap for the styling. I also used Axios to bring in the
									data from the third party API and React Router for rendering
									multiple pages.
								</Card.Text>
								<Card.Footer className='bg-white border-0 text-center'>
									<Card.Link className='border border-primary p-2 text-center'>
										{' '}
										<a href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
											Link to GitHub Repo
										</a>
									</Card.Link>
									<Card.Link
										className='border border-primary p-2 text-center'
										href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'>
										Link to Deployed app
									</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
				<p className='text-center bg-info p-3 mt-3'>
					App built with React and React BootStrap
				</p>
			</div>
		);
	}
}

export default Knowyourwizard;
