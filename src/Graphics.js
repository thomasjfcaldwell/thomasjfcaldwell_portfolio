import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style/graphics.css';
import printGraphic1 from './images/GraphicsImage/printdesign1.png';
import printGraphic2 from './images/GraphicsImage/printmockup2.png';
import printGraphic3 from './images/GraphicsImage/printgraphic3.png';

class Graphics extends Component {
	render() {
		return (
			<div>
				<Container fluid className='graphics-container'>
					<Row className='graphics-row'>
						<Col className='graphics-col'>
							<p>
								Along with Web Design and Development Thomas is also skilled
								print design. Below are few examples of previous print designs
							</p>
						</Col>
						<Col className='graphics-col'>
							<Row className='print-graphics-row'>
								<Col  className='print-graphics-col'>
									<Image className='print-graphics-image' src={printGraphic1} />
								</Col>
								<Col  className='print-graphics-col'>
									<Image className='print-graphics-image' src={printGraphic2} />
								</Col>
								<Col className='print-graphics-col'>
									<Image className='print-graphics-image' src={printGraphic3} />
								</Col>
							</Row>
						</Col>
						<Col className='graphics-col'>
							<p>
								Thomas uses Photoshop, Illustrator and Indesign to produce print content. Having years of experience all files will be sent to the printer PRINT Ready 
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default Graphics;
