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
						<Col lg={6} sm={12} className='graphics-col'>
							<Row className='print-graphics-row'>
								<Col sm={12} className='print-graphics-col'>
									<Row className='print-graphics-col-row'>
										<Image
											className='print-graphics-image'
											src={printGraphic1}
										/>

										<h5 className='print-graphics-text'>Brochures</h5>
									</Row>
								</Col>
								<Col sm={12} className='print-graphics-col'>
									<Row className='print-graphics-col-row'>
										<Image
											className='print-graphics-image'
											src={printGraphic2}
										/>

										<h5 className='print-graphics-text'>Menu's</h5>
									</Row>
								</Col>
								<Col sm={12} className='print-graphics-col'>
									<Row className='print-graphics-col-row'>
										<Image
											className='print-graphics-image'
											src={printGraphic3}
										/>

										<h5 className='print-graphics-text'>Flyers</h5>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default Graphics;
