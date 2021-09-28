import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style/onlinegraphics.css';
import photoEdit from './images/GraphicsImage/forpersonalsite.png';
import emailBlast1 from './images/GraphicsImage/65968 copy.png';

export class OnlineGraphics extends Component {
	render() {
		return (
			<div>
				<Container fluid className='online-graphics-container'>
					<Row className='online-graphics-row'>
						<Col className='online-graphics-col'>

							<h5 className='online-graphics-col-header'>Photo Editing</h5>
						</Col>
						<Col className='online-graphics-col'>
							<Image src={photoEdit} className='online-graphics-image' />
						</Col>

						<Col className='online-graphics-col'>
							<h5 className='online-graphics-col-header'>Email Blasts, Web Banners</h5>
						</Col>
						<Col className='online-graphics-col'>
							<div className='graphic-skills-col-image-container'>
								<Image className='graphic-skills-image' src={emailBlast1} />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default OnlineGraphics;
