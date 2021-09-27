import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style/onlinegraphics.css';
import photoEdit from './images/GraphicsImage/forpersonalsite.png';
import emailBlast1 from './images/GraphicsImage/65968 copy.png'

export class OnlineGraphics extends Component {
	render() {
		return (
			<div>
				<Container fluid className='online-graphics-container'>
					<Row className='online-graphics-row'>
						<Col className='online-graphics-col'>
							<p style={{textAlign:"center"}}>
								Below are a few examples of work that Thomas has completed for
								online graphics
							</p>
						</Col>
						<Col className='online-graphics-col'>
							<Image src={photoEdit} className='online-graphics-image' />
						</Col>
						<Col className='online-graphics-col'>
							<Row className=' online-graphics-images-row'>
								<Col className='online-graphics-images-col'>
									<Image
										className='online-graphics-images-image'
										src={emailBlast1}
									/>
								</Col>
								<Col className=' online-graphics-images-col'>
									<Image
										className='online-graphics-images-image'
										src={emailBlast1}
									/>
								</Col>
								<Col className=' online-graphics-images-col'>
									<Image
										className='online-graphics-images-image'
										src={emailBlast1}
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default OnlineGraphics;
