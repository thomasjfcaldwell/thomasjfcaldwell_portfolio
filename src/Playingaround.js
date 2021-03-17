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

import './App.scss';

const Playingaround = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos='flip-left'>
			<Container fluid>
				<Row>
					<Col lg={6} sm={12}>
						<div>
							<h4
								style={{
									color: '#14A76C',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
									textAlign: 'center',
								}}>
								About THOMAS
							</h4>
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
							<div
								style={{
									width: '50%',
									height: '2px',
									backgroundColor: '#000',
									margin: 'auto',
								}}></div>
							<Image
								src={portrait}
								style={{
									width: '80%',
									margin: '20px 0',
								}}
							/>
							<div
								style={{
									width: '50%',
									height: '2px',
									backgroundColor: '#000',
									margin: 'auto',
								}}></div>
							<p
								className='aboutText'
								style={{
									marginTop: '20px',
								}}>
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
							alignItems: 'center',
							textAlign: 'center',
							justifyContent: 'center',
						}}>
						<div>
							<h4
								style={{
									color: '#14A76C',
									textAlign: 'center',
									fontFamily: 'Montserrat',
									textTransform: 'uppercase',
								}}>
								SKILLS & Resume
							</h4>
						</div>
						<Row
							style={{
								alignItems: 'center',
								textAlign: 'center',
								justifyContent: 'center',
								marginTop: '20px',
							}}
							lg={12}
							sm={12}>
							<Col lg={4}>
								<p>HTML</p>
								<Image className='skillsImage' src={HTML} />
							</Col>
							<Col lg={4}>
								<p>CSS</p>
								<Image src={CSS} className='skillsImage' />
							</Col>
							<Col lg={4}>
								<p>JavaScript</p>
								<Image src={JAVASCRIPT} className='skillsImage' />
							</Col>
						</Row>
						<Row
							style={{
								alignItems: 'center',
								textAlign: 'center',
								justifyContent: 'center',
								marginTop: '20px',
							}}
							lg={12}
							sm={12}>
							<Col lg={4}>
								<p>React</p>
								<Image className='skillsImage' src={Reactlogo} />
							</Col>
							<Col lg={4}>
								<p>Bootstrap</p>
								<Image src={Bootstrap} className='skillsImage' />
							</Col>
							<Col lg={4}>
								<p>Adobe Creative Suite</p>
								<Image src={Adobe} className='skillsImage' />
							</Col>
						</Row>
						<Row
							style={{
								alignItems: 'center',
								textAlign: 'center',
								justifyContent: 'center',
								marginTop: '20px',
								marginBottom: '20px',
							}}
							lg={12}>
							<Col lg={4}>
								<p>Wordpress</p>
								<Image className='skillsImage' src={Wordpress} />
							</Col>
							<Col lg={4}>
								<p>Big Commerce</p>
								<Image src={BigCommerce} className='skillsImage' />
							</Col>
							<Col lg={4}>
								<p>Github</p>
								<Image src={Github} className='skillsImage' />
							</Col>
						</Row>
						<div
							style={{
								width: '50%',
								height: '2px',
								backgroundColor: '#000',
								margin: 'auto',
							}}></div>
						<Container
							style={{
								marginTop: '20px',
							}}>
							<div>
								<Row
									style={{
										textAlign: 'center',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<Col
										lg={6}
										sm={12}
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											textAlign: 'center',
											justifyContent: 'center',
										}}>
										<img
											src={resume}
											alt='thomasResume'
											style={{
												width: '60%',
											}}
										/>
										<a
											href='https://drive.google.com/file/d/1vwa_ukC3V472FisHWRCGSvCnz8X6PrFt/view?usp=sharing'
											style={{
												color: '#14A76C',
											}}>
											See Resume Here
										</a>
									</Col>
									<Col
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											textAlign: 'center',
											justifyContent: 'center',
										}}>
										<div className='contactWrapper'>
											<p>Email</p>
											<a href='mailto:thomasjfcaldwell@gmail.com'>
												thomasjfcaldwell@gmail.com
											</a>
										</div>
										<div className='contactWrapper'>
											<p>Phone</p>
											<a href='tel:714-595-6633'>714-595-6633</a>
										</div>
										<div className='contactWrapper'>
											<p>Linkedin</p>
											<a href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'>
												thomas-caldwell-huntingtonbeach
											</a>
										</div>
									</Col>
								</Row>
							</div>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Playingaround;
