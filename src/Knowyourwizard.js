import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardGroup,
	Carousel,
	Jumbotron,
	Container,
	ListGroup,
	Image,
} from 'react-bootstrap';
import ReactPlayer from 'react-player';

class Knowyourwizard extends Component {
	render() {
		return (
			<div>
				<h1 className='text-center bg-light p-3'>Know your Wizard app</h1>
				<Container fluid className='p-3'>
					<Row>
						<Col md={6} sm={6}>
							<Card className='border-0'>
								<ReactPlayer
									url='https://www.youtube.com/watch?v=QPN3fSQ7Myk'
									className='align-center'
								/>
							</Card>
						</Col>
						<Col className='text-left' md={6} sm={6}>
							<Card className='border-0 '></Card>
							<Card.Title className='text-center'>
								Introduction to the App
							</Card.Title>
							<Card.Text>
								This app was developed while I was attending a immersive
								software developer bootcamp by General Assembly. Initially I had
								planned to do an app where the user would be able to search
								local breweries but after getting in touch with the developer
								who had put together the API for the data and was informed that
								the API was suffering from issues - developer had reason to
								believe that someone had an infinite loop running. I had always
								been a fan of the Harry Potter world and after research I found
								the API was very stable I decided to develop 'Know Your Wizard'
								- an app for fans of Harry Potter or non fans to learn about
								each character of the Harry Potter World
							</Card.Text>
							<Card.Title className='text-center'>
								Requirements for the App
							</Card.Title>
							<Card.Text>
								I was tasked to develop a working interactive React application
								and to include data from a third-party API. Have 4 separate
								components and be deployed to the web.
							</Card.Text>
							<Card.Title className='text-center'>
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
			</div>
		);
	}
}

export default Knowyourwizard;
