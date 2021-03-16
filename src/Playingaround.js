import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

import './App.scss';

const Playingaround = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<Container fluid>
				<Row
					style={{
						alignItems: 'center',
						textAlign: 'center',
						justifyContent: 'center',
					}}>
					<Col lg={6} sm={12}>
						<div>
							<h1
								style={{
									color: '#14A76C',
									fontSize: '2em',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
									textAlign: 'center',
									margin: '1em',
								}}>
								About THOMAS
							</h1>
						</div>

						<div
							style={{
								alignItems: 'center',
								textAlign: 'center',
								justifyContent: 'center',
							}}>
							<p className='aboutText'>
								Thomas is a web developer and designer currently residing in
								Huntington Beach, CA. Originally from The United Kingdom he
								lives with his wife and pets. When he's not designing websites
								he like long walks on the beach and surfing.
							</p>
							<Image
								src={portrait}
								style={{
									width: '80%',
									margin: '50px',
								}}
							/>
							<p className='aboutText'>
								Forward thinking and mature UI developer who can deal with all
								tasks without fuss. Able to synthesize information and achieve a
								solution to a problem and take the lead on that task. A skilled
								designer with experience in front-end and back end web
								applications. Looking to further skills and bring expertise,
								leadership and creativity to the right role
							</p>
						</div>
					</Col>
					<Col
						sm={12}
						lg={6}
						style={{
							backgroundColor: 'white',
						}}>
						<div>
							<h1
								style={{
									color: '#14A76C',
									fontSize: '2em',
									textAlign: 'center',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
								}}>
								SKILLS
							</h1>
						</div>
						<Container>
							<Row>
								<div className='skills'>
									<p>HTML</p>
									<Image className='skillsImage' src={HTML} alt='htmllogo' />
								</div>
								<div className='skills'>
									<p>CSS</p>
									<Image className='skillsImage' src={CSS} alt='CSSlogo' />
								</div>
								<div className='skills'>
									<p>JavaScript</p>
									<Image
										className='skillsImage'
										src={JAVASCRIPT}
										alt='javascriptLogo'
									/>
								</div>
							</Row>
						</Container>
						<Container>
							<Row>
								<div className='skills'>
									<p>React</p>
									<Image
										className='skillsImage'
										src={Reactlogo}
										alt='htmllogo'
									/>
								</div>
								<div className='skills'>
									<p>Bootstrap</p>
									<Image
										className='skillsImage'
										src={Bootstrap}
										alt='bootstraplogo'
									/>
								</div>
								<div className='skills'>
									<p>Adobe Suite</p>
									<Image
										className='skillsImage'
										src={Adobe}
										alt='javascriptLogo'
									/>
								</div>
							</Row>
						</Container>
						<Container>
							<Row>
								<div className='skills'>
									<p>Wordpress</p>
									<Image
										className='skillsImage'
										src={Wordpress}
										alt='htmllogo'
									/>
								</div>
								<div className='skills'>
									<p>BigCommerce</p>
									<Image
										className='skillsImage'
										src={BigCommerce}
										alt='CSSlogo'
									/>
								</div>
								<div className='skills'>
									<p>Github</p>
									<Image
										className='skillsImage'
										src={Github}
										alt='javascriptLogo'
									/>
								</div>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Playingaround;
