import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Graphics from './Graphics';
import OnlineGraphics from './OnlineGraphics';
import './style/home.css';
import './style/graphicskills.css'
import emailBlast1 from './images/GraphicsImage/65968 copy.png';

class GraphicSkills extends Component {
	render() {
		return (
			<div>
				<Container fluid className='more-projects-container'>
					<div className='headline-container'>
						<h1 className='headline'>Examples of Graphic Skills</h1>
					</div> 
					 <Row className='more-projects-row'>
						<Col lg={6} sm={12}>
							<Graphics />
						</Col> 
						<Col lg={6} sm={12}>
							<OnlineGraphics />
						</Col> 
					</Row>  
				</Container>
			</div>
		);
	}
}

export default GraphicSkills;
