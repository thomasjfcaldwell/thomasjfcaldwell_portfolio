import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import resume from './images/thomasCaldwellResume.jpg';

import { Row, Col, Container, Image } from 'react-bootstrap';
import portrait from './images/thomasportfolioimage.jpg';
import HTML from './icons/HTML.png';
import CSS from './icons/CSS.png';
import JAVASCRIPT from './icons/Javascript.png';

import Reactlogo from './icons/react.png';
import Bootstrap from './icons/bootstrap.png';
import Adobe from './icons/adobe.png';
import Wordpress from './icons/woodpress.png';
import BigCommerce from './icons/BigCommerce.png';
import Github from './icons/github.png';

import './style/Playingaround.css';
import './style/home.css';

const Playingaround = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos='flip-left'>
			<Container fluid className='skills-container'>
				<div className='headline-container'>
					<h1 className='headline'>SKILLS</h1>
				</div>
				<Row className='skills-row'>
					<Col lg={2} md={4} sm={12} className='skills-col'>
						<div className='skills-info-container'>
							<p>HTML</p>
							<Image className='skillsImage' src={HTML} />
						</div>
					</Col>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>CSS</p>
							<Image src={CSS} className='skillsImage' />
						</div>
					</Col>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>JavaScript</p>

							<Image src={JAVASCRIPT} className='skillsImage' />
						</div>
					</Col>
				</Row>
				<Row className='skills-row'>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>React</p>
							<Image className='skillsImage' src={Reactlogo} />
						</div>
					</Col>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>Bootstrap</p>
							<Image src={Bootstrap} className='skillsImage' />
						</div>
					</Col>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>Adobe Creative Suite</p>
							<Image src={Adobe} className='skillsImage' />
						</div>
					</Col>
				</Row>
				<Row className='skills-row'>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>Wordpress</p>
							<Image className='skillsImage' src={Wordpress} />
						</div>
					</Col>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>Big Commerce</p>
							<Image src={BigCommerce} className='skillsImage' />
						</div>
					</Col>
					<Col lg={2} md={4} className='skills-col'>
						<div className='skills-info-container'>
							<p>Github</p>
							<Image src={Github} className='skillsImage' />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Playingaround;
